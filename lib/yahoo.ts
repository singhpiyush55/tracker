export interface PriceResult {
  ticker: string;
  tickerNs: string;
  price: number | null;
  change: number | null;     // absolute change
  changePct: number | null;  // % change
  error?: string;
}

/**
 * Fetch latest price for a single NSE ticker.
 * Appends .NS automatically if not present.
 * Uses Yahoo Finance v8 unofficial API — no key required.
 */
export async function fetchPrice(ticker: string): Promise<PriceResult> {
  const tickerNs = ticker.endsWith(".NS") ? ticker : `${ticker}.NS`;

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${tickerNs}?interval=1d&range=1d`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      next: { revalidate: 300 }, // cache 5 min in Next.js
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    const meta = json?.chart?.result?.[0]?.meta;

    if (!meta) throw new Error("No meta in response");

    const price: number = meta.regularMarketPrice ?? meta.previousClose;
    const prevClose: number = meta.previousClose ?? meta.chartPreviousClose;
    const change = price - prevClose;
    const changePct = (change / prevClose) * 100;

    return {
      ticker: ticker.replace(".NS", ""),
      tickerNs,
      price: Math.round(price * 100) / 100,
      change: Math.round(change * 100) / 100,
      changePct: Math.round(changePct * 100) / 100,
    };
  } catch (err) {
    return {
      ticker: ticker.replace(".NS", ""),
      tickerNs,
      price: null,
      change: null,
      changePct: null,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Fetch prices for multiple tickers in parallel.
 * Returns a map of ticker (without .NS) → PriceResult.
 */
export async function fetchPrices(
  tickers: string[]
): Promise<Record<string, PriceResult>> {
  const results = await Promise.allSettled(tickers.map(fetchPrice));
  const map: Record<string, PriceResult> = {};

  results.forEach((result, i) => {
    const ticker = tickers[i].replace(".NS", "");
    if (result.status === "fulfilled") {
      map[ticker] = result.value;
    } else {
      map[ticker] = {
        ticker,
        tickerNs: `${ticker}.NS`,
        price: null,
        change: null,
        changePct: null,
        error: "Fetch failed",
      };
    }
  });

  return map;
}

/**
 * Calculate P&L given entry price, current price, quantity.
 */
export function calcPnl(
  entryPrice: number,
  currentPrice: number,
  quantity: number
) {
  const abs = (currentPrice - entryPrice) * quantity;
  const pct = ((currentPrice - entryPrice) / entryPrice) * 100;
  return {
    abs: Math.round(abs * 100) / 100,
    pct: Math.round(pct * 100) / 100,
  };
}

/**
 * Calculate hypothetical P&L from screener suggestion midpoint.
 */
export function calcHypoPnl(entryLow: number, entryHigh: number, currentPrice: number) {
  const hypoEntry = (entryLow + entryHigh) / 2;
  const abs = currentPrice - hypoEntry;
  const pct = (abs / hypoEntry) * 100;
  return {
    hypoEntry: Math.round(hypoEntry * 100) / 100,
    abs: Math.round(abs * 100) / 100,
    pct: Math.round(pct * 100) / 100,
  };
}
