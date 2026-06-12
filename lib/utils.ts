/**
 * Format a number as Indian Rupee.
 * e.g. 12345.67 → "₹12,345.67"
 */
export function formatINR(value: number, decimals = 2): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format a P&L percentage with sign and color class.
 */
export function pnlClass(value: number): string {
  if (value > 0) return "text-emerald-500";
  if (value < 0) return "text-red-500";
  return "text-zinc-400";
}

export function formatPct(value: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

/**
 * Add N trading days to a date (skips Sat/Sun — good enough for NSE).
 * Does not account for Indian holidays.
 */
export function addTradingDays(date: Date, days: number): Date {
  let d = new Date(date);
  let added = 0;
  while (added < days) {
    d.setDate(d.getDate() + 1);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) added++; // skip Sunday=0, Saturday=6
  }
  return d;
}

/**
 * Count trading days between two dates.
 */
export function tradingDaysBetween(start: Date, end: Date): number {
  let count = 0;
  let d = new Date(start);
  while (d < end) {
    d.setDate(d.getDate() + 1);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) count++;
  }
  return count;
}

/**
 * Returns true if a suggestion should be expired (> 7 trading days old).
 */
export function isSuggestionExpired(scanDate: Date): boolean {
  return tradingDaysBetween(scanDate, new Date()) > 7;
}

/**
 * Status badge color classes.
 */
export const statusColors: Record<string, string> = {
  ACTIVE: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  EXPIRED: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  TRADED: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  SL_HIT: "bg-red-500/10 text-red-400 border-red-500/20",
  T1_HIT: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  T2_HIT: "bg-emerald-600/10 text-emerald-300 border-emerald-600/20",
  OPEN: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  CLOSED: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
