"use client";

import { useEffect, useState } from "react";
import { formatINR, formatPct, pnlClass, formatDate, statusColors } from "@/lib/utils";
import { openTrade } from "../trades/actions";

interface Snapshot { date: string; closePrice: number; hypoPnlPct: number; }
interface SuggestionWithTrade {
  id: string; scanDate: string; ticker: string; tickerNs: string;
  name: string; sector: string; setupType: string; score: number;
  entryLow: number; entryHigh: number; sl: number; t1: number; t2: number | null;
  notes: string | null; status: string;
  trade: { id: string; status: string } | null;
  snapshots: Snapshot[];
}

export function ScreenerClient({ suggestions }: { suggestions: SuggestionWithTrade[] }) {
  const [prices, setPrices] = useState<Record<string, { price: number | null; changePct: number | null }>>({});
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [importJson, setImportJson] = useState("");
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [openTradeFor, setOpenTradeFor] = useState<SuggestionWithTrade | null>(null);
  const [tradeForm, setTradeForm] = useState({ entryPrice: "", quantity: "", notes: "" });
  const [savingTrade, setSavingTrade] = useState(false);

  const activeTickers = suggestions
    .filter((s) => s.status === "ACTIVE")
    .map((s) => s.ticker)
    .filter((v, i, a) => a.indexOf(v) === i);

  useEffect(() => {
    if (activeTickers.length === 0) return;
    setLoadingPrices(true);
    fetch(`/api/prices?tickers=${activeTickers.join(",")}`)
      .then((r) => r.json())
      .then((data) => setPrices(data.prices ?? {}))
      .finally(() => setLoadingPrices(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = suggestions.filter(
    (s) => filterStatus === "ALL" || s.status === filterStatus
  );

  const handleImport = async () => {
    setImporting(true);
    setImportResult(null);
    try {
      const payload = JSON.parse(importJson);
      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Import failed");
      setImportResult(`✓ Imported ${data.imported} suggestion(s)`);
      setTimeout(() => { setShowImport(false); setImportJson(""); setImportResult(null); window.location.reload(); }, 1500);
    } catch (e: any) {
      setImportResult(`✗ ${e.message}`);
    } finally {
      setImporting(false);
    }
  };

  const handleOpenTrade = async () => {
    if (!openTradeFor) return;
    setSavingTrade(true);
    try {
      await openTrade({
        suggestionId: openTradeFor.id,
        ticker: openTradeFor.ticker,
        name: openTradeFor.name,
        sector: openTradeFor.sector,
        entryPrice: parseFloat(tradeForm.entryPrice),
        entryDate: new Date().toISOString(),
        quantity: parseInt(tradeForm.quantity),
        sl: openTradeFor.sl,
        t1: openTradeFor.t1,
        t2: openTradeFor.t2 ?? undefined,
        notes: tradeForm.notes || undefined,
      });
      setOpenTradeFor(null);
      window.location.reload();
    } finally {
      setSavingTrade(false);
    }
  };

  const statuses = ["ALL", "ACTIVE", "TRADED", "T1_HIT", "T2_HIT", "SL_HIT", "EXPIRED"];

  // Screener accuracy stats
  const total = suggestions.length;
  const t1hits = suggestions.filter((s) => s.status === "T1_HIT" || s.status === "T2_HIT").length;
  const slhits = suggestions.filter((s) => s.status === "SL_HIT").length;
  const accuracy = total > 0 ? Math.round((t1hits / (t1hits + slhits || 1)) * 100) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-zinc-100">Screener Log</h1>
          {accuracy !== null && (
            <p className="text-sm text-zinc-500 mt-1">
              Screener accuracy: <span className="text-emerald-400 font-medium">{accuracy}%</span>
              &nbsp;({t1hits} hits / {slhits} SL / {total} total)
            </p>
          )}
        </div>
        <button onClick={() => setShowImport(true)} className="btn-primary">
          Import from Claude
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors border ${
              filterStatus === s
                ? "bg-violet-600 border-violet-500 text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {s === "ALL" ? `All (${suggestions.length})` : `${s.replace("_", " ")} (${suggestions.filter((x) => x.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Suggestions list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-600">
          <div className="text-3xl mb-2">📋</div>
          <div className="text-zinc-400 font-medium mb-1">No suggestions yet</div>
          <div className="text-sm">Click "Import from Claude" after a screener run.</div>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((s) => {
            const lp = prices[s.ticker]?.price ?? null;
            const hypoEntry = (s.entryLow + s.entryHigh) / 2;
            const hypoPct = lp ? ((lp - hypoEntry) / hypoEntry) * 100 : null;
            const inRange = lp ? lp >= s.entryLow && lp <= s.entryHigh : false;

            return (
              <div key={s.id} className="card">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-semibold text-zinc-100">{s.ticker}</span>
                      <span className="text-zinc-400 text-sm">{s.name}</span>
                      <span className={`badge text-[10px] ${statusColors[s.status] ?? ""}`}>
                        {s.status.replace("_", " ")}
                      </span>
                      {inRange && (
                        <span className="badge text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-pulse">
                          IN RANGE
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {s.sector} · {s.setupType} · Score {s.score}/10 · {formatDate(s.scanDate)}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-1 mt-2 text-xs">
                      <LevelRow label="Entry" value={`${formatINR(s.entryLow, 0)} – ${formatINR(s.entryHigh, 0)}`} />
                      <LevelRow label="SL" value={formatINR(s.sl, 0)} color="text-red-400" />
                      <LevelRow label="T1" value={formatINR(s.t1, 0)} color="text-emerald-400" />
                      {s.t2 && <LevelRow label="T2" value={formatINR(s.t2, 0)} color="text-emerald-300" />}
                    </div>
                    {s.notes && <p className="text-xs text-zinc-500 mt-2 italic">{s.notes}</p>}
                  </div>

                  {/* Right — live price + action */}
                  <div className="text-right shrink-0 space-y-2">
                    <div>
                      {loadingPrices ? (
                        <div className="text-zinc-600 text-sm">…</div>
                      ) : lp ? (
                        <>
                          <div className="text-zinc-100 font-medium">{formatINR(lp, 0)}</div>
                          {hypoPct !== null && (
                            <div className={`text-xs ${pnlClass(hypoPct)}`}>
                              {formatPct(hypoPct)} hypo
                            </div>
                          )}
                          <div className={`text-xs ${pnlClass(prices[s.ticker]?.changePct ?? 0)}`}>
                            {formatPct(prices[s.ticker]?.changePct ?? 0)} today
                          </div>
                        </>
                      ) : <div className="text-zinc-600 text-xs">no price</div>}
                    </div>
                    {s.status === "ACTIVE" && !s.trade && (
                      <button
                        onClick={() => {
                          setOpenTradeFor(s);
                          setTradeForm({ entryPrice: lp?.toFixed(0) ?? "", quantity: "", notes: "" });
                        }}
                        className="btn-primary text-xs px-3 py-1.5"
                      >
                        Enter Trade
                      </button>
                    )}
                    {s.trade && (
                      <span className="text-xs text-violet-400">Trade open</span>
                    )}
                  </div>
                </div>

                {/* Mini P&L chart from snapshots */}
                {s.snapshots.length > 1 && (
                  <div className="mt-3 pt-3 border-t border-zinc-800">
                    <MiniChart snapshots={s.snapshots} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Import modal ─────────────────────────────────────────────────────── */}
      {showImport && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="card w-full max-w-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-100">Import Claude Screener JSON</h3>
              <button onClick={() => setShowImport(false)} className="text-zinc-500 hover:text-zinc-300 text-xl leading-none">×</button>
            </div>
            <p className="text-xs text-zinc-500">
              Paste the JSON block from the end of a Claude screener run below.
            </p>
            <div className="bg-zinc-800/50 rounded-lg p-3 text-xs text-zinc-500 font-mono border border-zinc-700">
              {`{ "scan_date": "2026-06-11", "suggestions": [ { "ticker": "AXISBANK", ... } ] }`}
            </div>
            <textarea
              className="input font-mono text-xs h-48 resize-none"
              placeholder="Paste JSON here…"
              value={importJson}
              onChange={(e) => setImportJson(e.target.value)}
            />
            {importResult && (
              <div className={`text-sm font-medium ${importResult.startsWith("✓") ? "text-emerald-400" : "text-red-400"}`}>
                {importResult}
              </div>
            )}
            <div className="flex gap-2">
              <button onClick={() => setShowImport(false)} className="btn-ghost flex-1">Cancel</button>
              <button onClick={handleImport} disabled={importing || !importJson.trim()} className="btn-primary flex-1">
                {importing ? "Importing…" : "Import"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Open trade modal ──────────────────────────────────────────────────── */}
      {openTradeFor && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="card w-full max-w-sm space-y-4">
            <h3 className="font-semibold text-zinc-100">Enter Trade — {openTradeFor.ticker}</h3>
            <div className="text-xs text-zinc-500 space-y-1">
              <div>Suggested entry: {formatINR(openTradeFor.entryLow, 0)} – {formatINR(openTradeFor.entryHigh, 0)}</div>
              <div>SL: {formatINR(openTradeFor.sl, 0)} · T1: {formatINR(openTradeFor.t1, 0)}</div>
            </div>
            <div>
              <label className="label">Entry Price (₹)</label>
              <input type="number" className="input" value={tradeForm.entryPrice}
                onChange={(e) => setTradeForm((f) => ({ ...f, entryPrice: e.target.value }))} />
            </div>
            <div>
              <label className="label">Quantity (shares)</label>
              <input type="number" className="input" placeholder="e.g. 11"
                value={tradeForm.quantity}
                onChange={(e) => setTradeForm((f) => ({ ...f, quantity: e.target.value }))} />
              {tradeForm.entryPrice && tradeForm.quantity && (
                <div className="text-xs text-zinc-500 mt-1">
                  Capital: {formatINR(parseFloat(tradeForm.entryPrice) * parseInt(tradeForm.quantity), 0)}
                </div>
              )}
            </div>
            <div>
              <label className="label">Notes (optional)</label>
              <input type="text" className="input" value={tradeForm.notes}
                onChange={(e) => setTradeForm((f) => ({ ...f, notes: e.target.value }))} />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setOpenTradeFor(null)} className="btn-ghost flex-1">Cancel</button>
              <button
                onClick={handleOpenTrade}
                disabled={savingTrade || !tradeForm.entryPrice || !tradeForm.quantity}
                className="btn-primary flex-1"
              >
                {savingTrade ? "Opening…" : "Open Trade"}
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

function MiniChart({ snapshots }: { snapshots: Snapshot[] }) {
  const pcts = snapshots.map((s) => s.hypoPnlPct);
  const min = Math.min(...pcts, 0);
  const max = Math.max(...pcts, 0);
  const range = max - min || 1;
  const w = 160;
  const h = 36;
  const pts = pcts.map((p, i) => {
    const x = (i / (pcts.length - 1)) * w;
    const y = h - ((p - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");
  const lastPct = pcts[pcts.length - 1];

  return (
    <div className="flex items-center gap-3">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
        <polyline points={pts} fill="none"
          stroke={lastPct >= 0 ? "#34d399" : "#f87171"}
          strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        {/* Zero line */}
        <line x1="0" y1={h - ((0 - min) / range) * h}
          x2={w} y2={h - ((0 - min) / range) * h}
          stroke="#3f3f46" strokeWidth="0.5" strokeDasharray="2,2" />
      </svg>
      <div className={`text-xs font-medium ${pnlClass(lastPct)}`}>
        {formatPct(lastPct)} hypo
      </div>
    </div>
  );
}
