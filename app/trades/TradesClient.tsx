"use client";

import { useEffect, useState } from "react";
import { formatINR, formatPct, pnlClass, formatDate, statusColors } from "@/lib/utils";
import { openTrade, closeTrade, deleteTrade } from "./actions";

interface TradeWithSnaps {
  id: string; ticker: string; tickerNs: string; name: string; sector: string | null;
  entryPrice: number; entryDate: string; quantity: number; capitalDeployed: number;
  exitPrice: number | null; exitDate: string | null; status: string;
  realizedPnl: number | null; realizedPnlPct: number | null;
  sl: number | null; t1: number | null; t2: number | null;
  notes: string | null;
  suggestion: { scanDate: string; setupType: string; score: number } | null;
  snapshots: { date: string; closePrice: number; unrealizedPnl: number; unrealizedPnlPct: number }[];
}

const EMPTY_TRADE_FORM = {
  ticker: "", name: "", sector: "", entryPrice: "", quantity: "",
  sl: "", t1: "", t2: "", notes: "", entryDate: new Date().toISOString().split("T")[0],
};

export function TradesClient({ trades }: { trades: TradeWithSnaps[] }) {
  const [prices, setPrices] = useState<Record<string, { price: number | null; changePct: number | null }>>({});
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState(EMPTY_TRADE_FORM);
  const [savingAdd, setSavingAdd] = useState(false);
  const [closeTarget, setCloseTarget] = useState<TradeWithSnaps | null>(null);
  const [closeForm, setCloseForm] = useState({ exitPrice: "", exitDate: new Date().toISOString().split("T")[0], status: "CLOSED" as const, notes: "" });
  const [savingClose, setSavingClose] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState("ALL");

  const openTrades = trades.filter((t) => t.status === "OPEN");

  useEffect(() => {
    if (openTrades.length === 0) return;
    const tickers = openTrades.map((t) => t.ticker).filter((v, i, a) => a.indexOf(v) === i);
    setLoadingPrices(true);
    fetch(`/api/prices?tickers=${tickers.join(",")}`)
      .then((r) => r.json())
      .then((d) => setPrices(d.prices ?? {}))
      .finally(() => setLoadingPrices(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLivePnl = (t: TradeWithSnaps) => {
    const lp = prices[t.ticker]?.price;
    if (!lp) return null;
    return { lp, abs: (lp - t.entryPrice) * t.quantity, pct: ((lp - t.entryPrice) / t.entryPrice) * 100 };
  };

  const filtered = trades.filter((t) => filterStatus === "ALL" || t.status === filterStatus);

  // Stats
  const closed = trades.filter((t) => t.status !== "OPEN");
  const winners = closed.filter((t) => (t.realizedPnl ?? 0) > 0);
  const winRate = closed.length > 0 ? Math.round((winners.length / closed.length) * 100) : null;
  const totalRealizedPnl = closed.reduce((s, t) => s + (t.realizedPnl ?? 0), 0);
  const avgWin = winners.length > 0 ? winners.reduce((s, t) => s + (t.realizedPnlPct ?? 0), 0) / winners.length : 0;
  const losers = closed.filter((t) => (t.realizedPnl ?? 0) <= 0);
  const avgLoss = losers.length > 0 ? losers.reduce((s, t) => s + (t.realizedPnlPct ?? 0), 0) / losers.length : 0;

  const handleAdd = async () => {
    setSavingAdd(true);
    try {
      await openTrade({
        ticker: addForm.ticker,
        name: addForm.name,
        sector: addForm.sector || undefined,
        entryPrice: parseFloat(addForm.entryPrice),
        entryDate: addForm.entryDate,
        quantity: parseInt(addForm.quantity),
        sl: addForm.sl ? parseFloat(addForm.sl) : undefined,
        t1: addForm.t1 ? parseFloat(addForm.t1) : undefined,
        t2: addForm.t2 ? parseFloat(addForm.t2) : undefined,
        notes: addForm.notes || undefined,
      });
      setShowAddModal(false);
      setAddForm(EMPTY_TRADE_FORM);
      window.location.reload();
    } finally {
      setSavingAdd(false);
    }
  };

  const handleClose = async () => {
    if (!closeTarget) return;
    setSavingClose(true);
    try {
      await closeTrade({
        tradeId: closeTarget.id,
        exitPrice: parseFloat(closeForm.exitPrice),
        exitDate: closeForm.exitDate,
        status: closeForm.status as any,
        notes: closeForm.notes || undefined,
      });
      setCloseTarget(null);
      window.location.reload();
    } finally {
      setSavingClose(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this trade permanently?")) return;
    await deleteTrade(id);
    window.location.reload();
  };

  const statuses = ["ALL", "OPEN", "CLOSED", "T1_HIT", "T2_HIT", "SL_HIT"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-zinc-100">Trade Journal</h1>
          {winRate !== null && (
            <p className="text-sm text-zinc-500 mt-1">
              Win rate <span className="text-emerald-400 font-medium">{winRate}%</span>
              &nbsp;· Avg win <span className="text-emerald-400">{formatPct(avgWin)}</span>
              &nbsp;· Avg loss <span className="text-red-400">{formatPct(avgLoss)}</span>
              &nbsp;· Total P&L <span className={pnlClass(totalRealizedPnl)}>{formatINR(totalRealizedPnl, 0)}</span>
            </p>
          )}
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary">+ Add Trade</button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {statuses.map((s) => (
          <button key={s} onClick={() => setFilterStatus(s)}
            className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
              filterStatus === s
                ? "bg-violet-600 border-violet-500 text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {s === "ALL" ? `All (${trades.length})` : `${s.replace("_", " ")} (${trades.filter((t) => t.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Trade list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-600">
          <div className="text-3xl mb-2">📓</div>
          <div className="text-zinc-400 font-medium mb-1">No trades yet</div>
          <div className="text-sm">Add a standalone trade or enter one from the Screener Log.</div>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((t) => {
            const pnl = t.status === "OPEN" ? getLivePnl(t) : null;
            const isExpanded = expandedId === t.id;

            return (
              <div key={t.id} className="card">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-semibold text-zinc-100">{t.ticker}</span>
                      <span className="text-zinc-400 text-sm">{t.name}</span>
                      <span className={`badge text-[10px] ${statusColors[t.status] ?? ""}`}>
                        {t.status.replace("_", " ")}
                      </span>
                      {t.suggestion && (
                        <span className="badge text-[10px] bg-violet-500/10 text-violet-400 border-violet-500/20">
                          {t.suggestion.setupType}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-1 text-xs mt-1">
                      <LevelRow label="Entry" value={`${formatINR(t.entryPrice, 0)} × ${t.quantity}`} />
                      <LevelRow label="Capital" value={formatINR(t.capitalDeployed, 0)} />
                      {t.sl && <LevelRow label="SL" value={formatINR(t.sl, 0)} color="text-red-400" />}
                      {t.t1 && <LevelRow label="T1" value={formatINR(t.t1, 0)} color="text-emerald-400" />}
                    </div>
                    <div className="text-xs text-zinc-600 mt-1">
                      {formatDate(t.entryDate)}
                      {t.exitDate && ` → ${formatDate(t.exitDate)}`}
                      {t.sector && ` · ${t.sector}`}
                    </div>
                    {t.notes && <p className="text-xs text-zinc-500 mt-1 italic">{t.notes}</p>}
                  </div>

                  {/* Right — P&L */}
                  <div className="text-right shrink-0 space-y-1">
                    {t.status === "OPEN" ? (
                      <>
                        {loadingPrices ? (
                          <div className="text-zinc-600 text-sm">…</div>
                        ) : pnl ? (
                          <>
                            <div className="text-sm text-zinc-300">{formatINR(pnl.lp, 0)}</div>
                            <div className={`font-semibold ${pnlClass(pnl.pct)}`}>{formatINR(pnl.abs, 0)}</div>
                            <div className={`text-xs ${pnlClass(pnl.pct)}`}>{formatPct(pnl.pct)}</div>
                          </>
                        ) : <div className="text-zinc-600 text-xs">no price</div>}
                        <button
                          onClick={() => { setCloseTarget(t); setCloseForm({ exitPrice: prices[t.ticker]?.price?.toFixed(0) ?? "", exitDate: new Date().toISOString().split("T")[0], status: "CLOSED", notes: "" }); }}
                          className="btn-ghost text-xs px-2 py-1"
                        >
                          Close
                        </button>
                      </>
                    ) : (
                      <>
                        <div className={`font-semibold ${pnlClass(t.realizedPnl ?? 0)}`}>{formatINR(t.realizedPnl ?? 0, 0)}</div>
                        <div className={`text-xs ${pnlClass(t.realizedPnlPct ?? 0)}`}>{formatPct(t.realizedPnlPct ?? 0)}</div>
                        {t.exitPrice && <div className="text-xs text-zinc-600">Exit {formatINR(t.exitPrice, 0)}</div>}
                      </>
                    )}
                  </div>
                </div>

                {/* Expand/chart toggle */}
                {t.snapshots.length > 1 && (
                  <div className="mt-3 pt-3 border-t border-zinc-800">
                    <button onClick={() => setExpandedId(isExpanded ? null : t.id)}
                      className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                      {isExpanded ? "Hide chart ▲" : `Show ${t.snapshots.length}-day P&L chart ▼`}
                    </button>
                    {isExpanded && <TradeChart snapshots={t.snapshots} />}
                  </div>
                )}

                {/* Delete */}
                <button onClick={() => handleDelete(t.id)}
                  className="mt-3 text-xs text-zinc-700 hover:text-red-400 transition-colors">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Add trade modal ──────────────────────────────────────────────────── */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="card w-full max-w-md space-y-4 my-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-100">Add Standalone Trade</h3>
              <button onClick={() => setShowAddModal(false)} className="text-zinc-500 hover:text-zinc-300 text-xl leading-none">×</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 sm:col-span-1">
                <label className="label">Ticker *</label>
                <input className="input" placeholder="AXISBANK" value={addForm.ticker}
                  onChange={(e) => setAddForm((f) => ({ ...f, ticker: e.target.value.toUpperCase() }))} />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label">Stock Name *</label>
                <input className="input" placeholder="Axis Bank" value={addForm.name}
                  onChange={(e) => setAddForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label">Entry Price *</label>
                <input type="number" className="input" value={addForm.entryPrice}
                  onChange={(e) => setAddForm((f) => ({ ...f, entryPrice: e.target.value }))} />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label">Quantity *</label>
                <input type="number" className="input" value={addForm.quantity}
                  onChange={(e) => setAddForm((f) => ({ ...f, quantity: e.target.value }))} />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label">Entry Date *</label>
                <input type="date" className="input" value={addForm.entryDate}
                  onChange={(e) => setAddForm((f) => ({ ...f, entryDate: e.target.value }))} />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="label">Sector</label>
                <input className="input" placeholder="Banking" value={addForm.sector}
                  onChange={(e) => setAddForm((f) => ({ ...f, sector: e.target.value }))} />
              </div>
              <div>
                <label className="label">Stop Loss</label>
                <input type="number" className="input" value={addForm.sl}
                  onChange={(e) => setAddForm((f) => ({ ...f, sl: e.target.value }))} />
              </div>
              <div>
                <label className="label">Target 1</label>
                <input type="number" className="input" value={addForm.t1}
                  onChange={(e) => setAddForm((f) => ({ ...f, t1: e.target.value }))} />
              </div>
              <div className="col-span-2">
                <label className="label">Notes</label>
                <input className="input" value={addForm.notes}
                  onChange={(e) => setAddForm((f) => ({ ...f, notes: e.target.value }))} />
              </div>
            </div>
            {addForm.entryPrice && addForm.quantity && (
              <div className="text-xs text-zinc-500">
                Capital deployed: {formatINR(parseFloat(addForm.entryPrice) * parseInt(addForm.quantity || "0"), 0)}
              </div>
            )}
            <div className="flex gap-2 pt-1">
              <button onClick={() => setShowAddModal(false)} className="btn-ghost flex-1">Cancel</button>
              <button onClick={handleAdd} disabled={savingAdd || !addForm.ticker || !addForm.entryPrice || !addForm.quantity}
                className="btn-primary flex-1">
                {savingAdd ? "Opening…" : "Open Trade"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Close trade modal ────────────────────────────────────────────────── */}
      {closeTarget && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="card w-full max-w-sm space-y-4">
            <h3 className="font-semibold text-zinc-100">Close Trade — {closeTarget.ticker}</h3>
            <div className="text-xs text-zinc-500">
              Entry: {formatINR(closeTarget.entryPrice, 0)} × {closeTarget.quantity}
            </div>
            <div>
              <label className="label">Exit Price *</label>
              <input type="number" className="input" value={closeForm.exitPrice}
                onChange={(e) => setCloseForm((f) => ({ ...f, exitPrice: e.target.value }))} />
              {closeForm.exitPrice && (
                <div className={`text-xs mt-1 font-medium ${pnlClass((parseFloat(closeForm.exitPrice) - closeTarget.entryPrice) * closeTarget.quantity)}`}>
                  P&L: {formatINR((parseFloat(closeForm.exitPrice) - closeTarget.entryPrice) * closeTarget.quantity, 0)}
                  {" "}({formatPct(((parseFloat(closeForm.exitPrice) - closeTarget.entryPrice) / closeTarget.entryPrice) * 100)})
                </div>
              )}
            </div>
            <div>
              <label className="label">Exit Date</label>
              <input type="date" className="input" value={closeForm.exitDate}
                onChange={(e) => setCloseForm((f) => ({ ...f, exitDate: e.target.value }))} />
            </div>
            <div>
              <label className="label">Close Reason</label>
              <select className="input" value={closeForm.status}
                onChange={(e) => setCloseForm((f) => ({ ...f, status: e.target.value as any }))}>
                <option value="CLOSED">Manual close</option>
                <option value="T1_HIT">T1 Hit</option>
                <option value="T2_HIT">T2 Hit</option>
                <option value="SL_HIT">SL Hit</option>
              </select>
            </div>
            <div>
              <label className="label">Notes</label>
              <input className="input" value={closeForm.notes}
                onChange={(e) => setCloseForm((f) => ({ ...f, notes: e.target.value }))} />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setCloseTarget(null)} className="btn-ghost flex-1">Cancel</button>
              <button onClick={handleClose} disabled={savingClose || !closeForm.exitPrice} className="btn-primary flex-1">
                {savingClose ? "Closing…" : "Close Trade"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LevelRow({ label, value, color = "text-zinc-300" }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-zinc-600">{label}</span>
      <span className={color}>{value}</span>
    </div>
  );
}

function TradeChart({ snapshots }: { snapshots: { date: string; unrealizedPnlPct: number }[] }) {
  const pcts = snapshots.map((s) => s.unrealizedPnlPct);
  const min = Math.min(...pcts, 0);
  const max = Math.max(...pcts, 0);
  const range = max - min || 1;
  const w = 300; const h = 60;
  const pts = pcts.map((p, i) => {
    const x = (i / Math.max(pcts.length - 1, 1)) * w;
    const y = h - ((p - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");
  const zeroY = h - ((0 - min) / range) * h;
  const last = pcts[pcts.length - 1];

  return (
    <div className="mt-3">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
        <line x1="0" y1={zeroY} x2={w} y2={zeroY} stroke="#3f3f46" strokeWidth="0.5" strokeDasharray="3,3" />
        <polyline points={pts} fill="none"
          stroke={last >= 0 ? "#34d399" : "#f87171"}
          strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={(pcts.length - 1) / Math.max(pcts.length - 1, 1) * w} cy={h - ((last - min) / range) * h}
          r="3" fill={last >= 0 ? "#34d399" : "#f87171"} />
      </svg>
      <div className="flex justify-between text-xs text-zinc-600 mt-1">
        <span>{new Date(snapshots[0].date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</span>
        <span>{new Date(snapshots[snapshots.length - 1].date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</span>
      </div>
    </div>
  );
}
