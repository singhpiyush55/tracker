"use client";

import { useState, useMemo } from "react";
import { formatINR, formatPct, pnlClass, formatDate, statusColors } from "@/lib/utils";

interface ClosedTrade {
  id: string;
  ticker: string;
  name: string;
  sector: string | null;
  entryPrice: number;
  exitPrice: number;
  exitDate: string;
  entryDate: string;
  quantity: number;
  capitalDeployed: number;
  status: string;
  realizedPnl: number | null;
  realizedPnlPct: number | null;
  buyCharges: number | null;
  sellCharges: number | null;
  suggestion: { setupType: string } | null;
}

export function PnlClient({ trades }: { trades: ClosedTrade[] }) {
  const [monthFilter, setMonthFilter] = useState("ALL");

  // Build month options from available exit dates
  const monthOptions = useMemo(() => {
    const seen = new Set<string>();
    trades.forEach((t) => {
      const d = new Date(t.exitDate);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      seen.add(key);
    });
    return Array.from(seen).sort().reverse();
  }, [trades]);

  const filtered = useMemo(() => {
    if (monthFilter === "ALL") return trades;
    return trades.filter((t) => {
      const d = new Date(t.exitDate);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      return key === monthFilter;
    });
  }, [trades, monthFilter]);

  // Cumulative P&L — running total in exit date order
  let running = 0;
  const withCumulative = filtered.map((t) => {
    const net = t.realizedPnl ?? 0;
    running += net;
    return { ...t, cumulativePnl: running };
  });

  // Summary stats
  const totalNet = filtered.reduce((s, t) => s + (t.realizedPnl ?? 0), 0);
  const totalGross = filtered.reduce((s, t) => {
    const charges = (t.buyCharges ?? 0) + (t.sellCharges ?? 0);
    return s + (t.realizedPnl ?? 0) + charges;
  }, 0);
  const totalCharges = filtered.reduce((s, t) => s + (t.buyCharges ?? 0) + (t.sellCharges ?? 0), 0);
  const winners = filtered.filter((t) => (t.realizedPnl ?? 0) > 0);
  const losers = filtered.filter((t) => (t.realizedPnl ?? 0) <= 0);
  const winRate = filtered.length > 0 ? Math.round((winners.length / filtered.length) * 100) : 0;
  const best = filtered.reduce((a, b) => ((a.realizedPnl ?? 0) > (b.realizedPnl ?? 0) ? a : b), filtered[0]);
  const worst = filtered.reduce((a, b) => ((a.realizedPnl ?? 0) < (b.realizedPnl ?? 0) ? a : b), filtered[0]);

  const formatMonth = (key: string) => {
    const [y, m] = key.split("-");
    return new Date(parseInt(y), parseInt(m) - 1).toLocaleString("en-IN", { month: "long", year: "numeric" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl font-semibold text-zinc-100">P&L Transactions</h1>
          <p className="text-sm text-zinc-500 mt-0.5">{filtered.length} closed trades</p>
        </div>

        {/* Month filter */}
        <select
          className="input w-48"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
        >
          <option value="ALL">All time</option>
          {monthOptions.map((m) => (
            <option key={m} value={m}>{formatMonth(m)}</option>
          ))}
        </select>
      </div>

      {/* Summary cards */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <SummaryCard label="Net P&L" value={formatINR(totalNet, 0)} pnl={totalNet} />
          <SummaryCard label="Gross P&L" value={formatINR(totalGross, 0)} pnl={totalGross} />
          <SummaryCard label="Total Charges" value={`−${formatINR(totalCharges, 0)}`} pnl={-1} />
          <SummaryCard label="Win Rate" value={`${winRate}% (${winners.length}W / ${losers.length}L)`} />
          <SummaryCard
            label="Best / Worst"
            value={`${formatINR(best?.realizedPnl ?? 0, 0)} / ${formatINR(worst?.realizedPnl ?? 0, 0)}`}
            pnl={best?.realizedPnl ?? 0}
          />
        </div>
      )}

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-3xl mb-2">📊</div>
          <div className="text-zinc-400 font-medium mb-1">No closed trades yet</div>
          <div className="text-sm text-zinc-600">Close a trade to see it here.</div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                {["Exit Date", "Stock", "Setup", "Entry", "Exit", "Qty", "Gross P&L", "Charges", "Net P&L", "Cumulative"].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-zinc-500 py-3 px-3 first:pl-0 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {withCumulative.map((t) => {
                const charges = (t.buyCharges ?? 0) + (t.sellCharges ?? 0);
                const gross = (t.realizedPnl ?? 0) + charges;
                const net = t.realizedPnl ?? 0;

                return (
                  <tr key={t.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3 px-3 pl-0 text-zinc-400 whitespace-nowrap">
                      {formatDate(t.exitDate)}
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-medium text-zinc-100">{t.ticker}</div>
                      <div className="text-xs text-zinc-500">{t.name}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`badge text-[10px] ${statusColors[t.status]}`}>
                        {t.status.replace("_", " ")}
                      </span>
                      {t.suggestion && (
                        <div className="text-xs text-zinc-600 mt-0.5">{t.suggestion.setupType}</div>
                      )}
                    </td>
                    <td className="py-3 px-3 text-zinc-300 whitespace-nowrap">
                      {formatINR(t.entryPrice, 0)}
                    </td>
                    <td className="py-3 px-3 text-zinc-300 whitespace-nowrap">
                      {formatINR(t.exitPrice, 0)}
                    </td>
                    <td className="py-3 px-3 text-zinc-400">{t.quantity}</td>
                    <td className={`py-3 px-3 whitespace-nowrap ${pnlClass(gross)}`}>
                      {formatINR(gross, 0)}
                    </td>
                    <td className="py-3 px-3 text-red-400/70 whitespace-nowrap">
                      {charges > 0 ? `−${formatINR(charges, 0)}` : "—"}
                    </td>
                    <td className={`py-3 px-3 font-medium whitespace-nowrap ${pnlClass(net)}`}>
                      {formatINR(net, 0)}
                      <div className={`text-xs ${pnlClass(t.realizedPnlPct ?? 0)}`}>
                        {formatPct(t.realizedPnlPct ?? 0)}
                      </div>
                    </td>
                    <td className={`py-3 px-3 font-medium whitespace-nowrap ${pnlClass(t.cumulativePnl)}`}>
                      {formatINR(t.cumulativePnl, 0)}
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Footer totals row */}
            <tfoot>
              <tr className="border-t border-zinc-700">
                <td colSpan={6} className="py-3 px-3 pl-0 text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Total ({filtered.length} trades)
                </td>
                <td className={`py-3 px-3 font-medium ${pnlClass(totalGross)}`}>
                  {formatINR(totalGross, 0)}
                </td>
                <td className="py-3 px-3 text-red-400/70 font-medium">
                  −{formatINR(totalCharges, 0)}
                </td>
                <td className={`py-3 px-3 font-semibold ${pnlClass(totalNet)}`}>
                  {formatINR(totalNet, 0)}
                </td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

function SummaryCard({ label, value, pnl }: { label: string; value: string; pnl?: number }) {
  return (
    <div className="card">
      <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">{label}</div>
      <div className={`text-base font-semibold ${pnl !== undefined ? pnlClass(pnl) : "text-zinc-100"}`}>
        {value}
      </div>
    </div>
  );
}