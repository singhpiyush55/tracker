"use client";

import { useEffect, useState } from "react";
import { formatINR, formatPct, pnlClass, formatDate, statusColors } from "@/lib/utils";
import { addFundTransaction } from "./actions";
import type { Trade, ScreenerSuggestion } from "@prisma/client";

interface Stats {
  totalCapital: number;
  deployed: number;
  free: number;
  realizedPnl: number;
  realizedPnlPct: number;
  totalValue: number;
  openTradesCount: number;
  closedTradesCount: number;
}

interface Props {
  stats: Stats;
  openTrades: Trade[];
  activeSuggestions: ScreenerSuggestion[];
  recentClosed: Trade[];
}

interface LivePrice {
  price: number | null;
  changePct: number | null;
}

export function DashboardClient({ stats, openTrades, activeSuggestions, recentClosed }: Props) {
  const [prices, setPrices] = useState<Record<string, LivePrice>>({});
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [showFundModal, setShowFundModal] = useState(false);
  const [fundType, setFundType] = useState<"DEPOSIT" | "WITHDRAW">("DEPOSIT");
  const [fundAmount, setFundAmount] = useState("");
  const [fundNotes, setFundNotes] = useState("");
  const [fundLoading, setFundLoading] = useState(false);

  // Collect all unique tickers to fetch
  const allTickers = [
    ...openTrades.map((t) => t.ticker),
    ...activeSuggestions.map((s) => s.ticker),
  ].filter((v, i, a) => a.indexOf(v) === i);

  useEffect(() => {
    if (allTickers.length === 0) return;
    setLoadingPrices(true);
    fetch(`/api/prices?tickers=${allTickers.join(",")}`)
      .then((r) => r.json())
      .then((data) => {
        const map: Record<string, LivePrice> = {};
        for (const [ticker, result] of Object.entries(data.prices as any)) {
          map[ticker] = { price: (result as any).price, changePct: (result as any).changePct };
        }
        setPrices(map);
      })
      .finally(() => setLoadingPrices(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLivePnl = (trade: Trade) => {
    const lp = prices[trade.ticker]?.price;
    if (!lp) return null;
    const abs = (lp - trade.entryPrice) * trade.quantity;
    const pct = ((lp - trade.entryPrice) / trade.entryPrice) * 100;
    return { abs, pct, lp };
  };

  const getHypoPnl = (s: ScreenerSuggestion) => {
    const lp = prices[s.ticker]?.price;
    if (!lp) return null;
    const hypoEntry = (s.entryLow + s.entryHigh) / 2;
    const pct = ((lp - hypoEntry) / hypoEntry) * 100;
    return { pct, lp };
  };

  const totalUnrealizedPnl = openTrades.reduce((sum, t) => {
    const pnl = getLivePnl(t);
    return sum + (pnl?.abs ?? 0);
  }, 0);

  const handleFundSubmit = async () => {
    const amount = parseFloat(fundAmount);
    if (!amount || amount <= 0) return;
    setFundLoading(true);
    try {
      await addFundTransaction({
        type: fundType,
        amount,
        date: new Date().toISOString(),
        notes: fundNotes || undefined,
      });
      setShowFundModal(false);
      setFundAmount("");
      setFundNotes("");
      window.location.reload();
    } finally {
      setFundLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* ── Capital overview ─────────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-zinc-100">Overview</h1>
          <button onClick={() => setShowFundModal(true)} className="btn-primary text-xs px-3 py-1.5">
            + Deposit / Withdraw
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total Capital" value={formatINR(stats.totalCapital)} />
          <StatCard label="Deployed" value={formatINR(stats.deployed)}
            sub={stats.totalCapital > 0 ? `${((stats.deployed / stats.totalCapital) * 100).toFixed(0)}% allocated` : undefined}
          />
          <StatCard label="Free Cash" value={formatINR(stats.free)} highlight />
          <StatCard
            label="Realized P&L"
            value={formatINR(stats.realizedPnl)}
            sub={formatPct(stats.realizedPnlPct)}
            pnl={stats.realizedPnl}
          />
        </div>

        {openTrades.length > 0 && (
          <div className="mt-3 card flex items-center justify-between">
            <span className="text-sm text-zinc-400">Unrealized P&L (live)</span>
            <span className={`text-sm font-medium ${pnlClass(totalUnrealizedPnl)}`}>
              {loadingPrices ? "—" : `${formatINR(totalUnrealizedPnl)} (${formatPct((totalUnrealizedPnl / stats.deployed) * 100)})`}
            </span>
          </div>
        )}
      </div>

      {/* ── Open positions ────────────────────────────────────────────────────── */}
      {openTrades.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">
            Open Positions ({openTrades.length})
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  {["Stock", "Entry", "Qty", "Deployed", "CMP", "P&L", "SL", "T1"].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-zinc-500 py-2 px-3 first:pl-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {openTrades.map((t) => {
                  const pnl = getLivePnl(t);
                  return (
                    <tr key={t.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/50">
                      <td className="py-3 px-3 pl-0">
                        <div className="font-medium text-zinc-100">{t.ticker}</div>
                        <div className="text-xs text-zinc-500">{t.name}</div>
                      </td>
                      <td className="py-3 px-3">
                        <div>{formatINR(t.entryPrice, 0)}</div>
                        <div className="text-xs text-zinc-500">{formatDate(t.entryDate)}</div>
                      </td>
                      <td className="py-3 px-3 text-zinc-300">{t.quantity}</td>
                      <td className="py-3 px-3 text-zinc-300">{formatINR(t.capitalDeployed, 0)}</td>
                      <td className="py-3 px-3">
                        {loadingPrices ? (
                          <span className="text-zinc-600">…</span>
                        ) : pnl ? (
                          <div>
                            <div className="text-zinc-100">{formatINR(pnl.lp, 0)}</div>
                            <div className={`text-xs ${pnlClass(prices[t.ticker]?.changePct ?? 0)}`}>
                              {formatPct(prices[t.ticker]?.changePct ?? 0)} today
                            </div>
                          </div>
                        ) : "—"}
                      </td>
                      <td className="py-3 px-3">
                        {pnl ? (
                          <div>
                            <div className={`font-medium ${pnlClass(pnl.pct)}`}>{formatINR(pnl.abs, 0)}</div>
                            <div className={`text-xs ${pnlClass(pnl.pct)}`}>{formatPct(pnl.pct)}</div>
                          </div>
                        ) : "—"}
                      </td>
                      <td className="py-3 px-3 text-zinc-400 text-xs">{t.sl ? formatINR(t.sl, 0) : "—"}</td>
                      <td className="py-3 px-3 text-zinc-400 text-xs">{t.t1 ? formatINR(t.t1, 0) : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── Active screener suggestions ────────────────────────────────────────── */}
      {activeSuggestions.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">
            Active Screener Calls ({activeSuggestions.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {activeSuggestions.map((s) => {
              const hypo = getHypoPnl(s);
              return (
                <div key={s.id} className="card flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-zinc-100">{s.ticker}</span>
                      <span className="badge text-[10px] bg-zinc-800 text-zinc-400 border-zinc-700">{s.setupType}</span>
                    </div>
                    <div className="text-xs text-zinc-500">{s.sector} · {formatDate(s.scanDate)}</div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Entry {formatINR(s.entryLow, 0)}–{formatINR(s.entryHigh, 0)} · SL {formatINR(s.sl, 0)} · T1 {formatINR(s.t1, 0)}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {loadingPrices ? (
                      <span className="text-zinc-600 text-xs">…</span>
                    ) : hypo ? (
                      <>
                        <div className="text-sm font-medium text-zinc-100">{formatINR(hypo.lp, 0)}</div>
                        <div className={`text-xs ${pnlClass(hypo.pct)}`}>{formatPct(hypo.pct)} hypo</div>
                      </>
                    ) : <span className="text-zinc-600 text-xs">no price</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Recent closed trades ─────────────────────────────────────────────── */}
      {recentClosed.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">Recent Closed</h2>
          <div className="space-y-2">
            {recentClosed.map((t) => (
              <div key={t.id} className="card flex items-center justify-between">
                <div>
                  <span className="font-medium text-zinc-100 mr-2">{t.ticker}</span>
                  <span className={`badge text-[10px] ${statusColors[t.status]}`}>{t.status.replace("_", " ")}</span>
                  <div className="text-xs text-zinc-500 mt-0.5">{formatDate(t.exitDate!)} · {t.quantity} shares</div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${pnlClass(t.realizedPnl ?? 0)}`}>{formatINR(t.realizedPnl ?? 0, 0)}</div>
                  <div className={`text-xs ${pnlClass(t.realizedPnlPct ?? 0)}`}>{formatPct(t.realizedPnlPct ?? 0)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {openTrades.length === 0 && activeSuggestions.length === 0 && recentClosed.length === 0 && (
        <div className="text-center py-16 text-zinc-600">
          <div className="text-4xl mb-3">📊</div>
          <div className="font-medium text-zinc-400 mb-1">No data yet</div>
          <div className="text-sm">Import a screener scan or add your first trade to get started.</div>
        </div>
      )}

      {/* ── Fund modal ─────────────────────────────────────────────────────────── */}
      {showFundModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="card w-full max-w-sm space-y-4">
            <h3 className="font-semibold text-zinc-100">Update Capital</h3>
            <div className="flex gap-2">
              {(["DEPOSIT", "WITHDRAW"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFundType(type)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    fundType === type
                      ? "bg-violet-600 border-violet-500 text-white"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {type === "DEPOSIT" ? "Deposit" : "Withdraw"}
                </button>
              ))}
            </div>
            <div>
              <label className="label">Amount (₹)</label>
              <input
                type="number"
                className="input"
                placeholder="30000"
                value={fundAmount}
                onChange={(e) => setFundAmount(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Notes (optional)</label>
              <input
                type="text"
                className="input"
                placeholder="Initial capital"
                value={fundNotes}
                onChange={(e) => setFundNotes(e.target.value)}
              />
            </div>
            <div className="flex gap-2 pt-1">
              <button onClick={() => setShowFundModal(false)} className="btn-ghost flex-1">Cancel</button>
              <button onClick={handleFundSubmit} disabled={fundLoading || !fundAmount} className="btn-primary flex-1">
                {fundLoading ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, sub, pnl, highlight }: {
  label: string; value: string; sub?: string; pnl?: number; highlight?: boolean;
}) {
  return (
    <div className={`card ${highlight ? "border-violet-500/30" : ""}`}>
      <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">{label}</div>
      <div className={`text-xl font-semibold ${pnl !== undefined ? pnlClass(pnl) : "text-zinc-100"}`}>{value}</div>
      {sub && <div className={`text-xs mt-0.5 ${pnl !== undefined ? pnlClass(pnl) : "text-zinc-500"}`}>{sub}</div>}
    </div>
  );
}
