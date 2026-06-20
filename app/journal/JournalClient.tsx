"use client";

import { useState } from "react";
import { createJournalEntry, deleteJournalEntry } from "./actions";
import { formatDate } from "@/lib/utils";

function renderBody(text: string) {
  return text
    .replace(/==(.+?)==/g, '<mark class="bg-yellow-400/20 text-yellow-300 px-0.5 rounded">$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-zinc-100 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic text-zinc-300">$1</em>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-zinc-300">$1</li>')
    .replace(/\n/g, "<br/>");
}

interface Trade { id: string; ticker: string; name: string; status: string; }
interface Entry {
  id: string; type: string; title: string; body: string;
  createdAt: string; tradeId: string | null;
  trade: { ticker: string; name: string } | null;
}

export function JournalClient({ entries, trades }: { entries: Entry[]; trades: Trade[] }) {
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState<"LEARNING" | "TRADE_NOTE">("LEARNING");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tradeId, setTradeId] = useState("");
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState("ALL");

  const handleSave = async () => {
    if (!title.trim() || !body.trim()) return;
    setSaving(true);
    try {
      await createJournalEntry({
        type,
        title,
        body,
        tradeId: type === "TRADE_NOTE" && tradeId ? tradeId : undefined,
      });
      setShowForm(false);
      setTitle(""); setBody(""); setTradeId("");
      window.location.reload();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this entry?")) return;
    await deleteJournalEntry(id);
    window.location.reload();
  };

  const filtered = entries.filter(e => filter === "ALL" || e.type === filter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-zinc-100">Journal</h1>
          <p className="text-sm text-zinc-500 mt-0.5">{entries.length} entries</p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary">+ New Entry</button>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {["ALL", "LEARNING", "TRADE_NOTE"].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
              filter === f
                ? "bg-violet-600 border-violet-500 text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}>
            {f === "ALL" ? `All (${entries.length})`
              : f === "LEARNING" ? `Learnings (${entries.filter(e => e.type === "LEARNING").length})`
              : `Trade Notes (${entries.filter(e => e.type === "TRADE_NOTE").length})`}
          </button>
        ))}
      </div>

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-3xl mb-2">📓</div>
          <div className="text-zinc-400 font-medium mb-1">No entries yet</div>
          <div className="text-sm text-zinc-600">Start journaling your trades and learnings.</div>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(e => (
            <div key={e.id} className="card space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`badge text-[10px] ${
                    e.type === "LEARNING"
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      : "bg-violet-500/10 text-violet-400 border-violet-500/20"
                  }`}>
                    {e.type === "LEARNING" ? "Learning" : "Trade Note"}
                  </span>
                  {e.trade && (
                    <span className="badge text-[10px] bg-zinc-800 text-zinc-400 border-zinc-700">
                      {e.trade.ticker}
                    </span>
                  )}
                  <span className="text-xs text-zinc-600">{formatDate(e.createdAt)}</span>
                </div>
                <button onClick={() => handleDelete(e.id)}
                  className="text-xs text-zinc-700 hover:text-red-400 transition-colors shrink-0">
                  Delete
                </button>
              </div>
              <h3 className="font-medium text-zinc-100">{e.title}</h3>
              <div className="text-sm text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderBody(e.body) }} />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="card w-full max-w-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-100">New Entry</h3>
              <button onClick={() => setShowForm(false)} className="text-zinc-500 hover:text-zinc-300 text-xl">×</button>
            </div>

            {/* Type toggle */}
            <div className="flex gap-2">
              {(["LEARNING", "TRADE_NOTE"] as const).map(t => (
                <button key={t} onClick={() => setType(t)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    type === t
                      ? "bg-violet-600 border-violet-500 text-white"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200"
                  }`}>
                  {t === "LEARNING" ? "📚 Learning" : "📌 Trade Note"}
                </button>
              ))}
            </div>

            {/* Trade dropdown */}
            {type === "TRADE_NOTE" && (
              <div>
                <label className="label">Link to Trade</label>
                <select className="input" value={tradeId} onChange={e => setTradeId(e.target.value)}>
                  <option value="">— select a trade —</option>
                  {trades.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.ticker} · {t.name} · {t.status}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="label">Title</label>
              <input className="input" placeholder="e.g. Why I exited early on AXISBANK"
                value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="label mb-0">Body</label>
                <button onClick={() => setPreview(p => !p)}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                  {preview ? "Edit" : "Preview"}
                </button>
              </div>
              {preview ? (
                <div className="input min-h-[160px] text-sm text-zinc-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderBody(body) }} />
              ) : (
                <textarea className="input min-h-[160px] resize-none font-mono text-sm"
                  placeholder={"**bold** *italic* ==highlight==\n- bullet point\n\nWrite your note here..."}
                  value={body} onChange={e => setBody(e.target.value)} />
              )}
              <p className="text-xs text-zinc-600 mt-1">
                **bold** &nbsp;·&nbsp; *italic* &nbsp;·&nbsp; ==highlight== &nbsp;·&nbsp; - bullet
              </p>
            </div>

            <div className="flex gap-2 pt-1">
              <button onClick={() => setShowForm(false)} className="btn-ghost flex-1">Cancel</button>
              <button onClick={handleSave} disabled={saving || !title || !body} className="btn-primary flex-1">
                {saving ? "Saving…" : "Save Entry"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}