import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isSuggestionExpired } from "@/lib/utils";

interface SuggestionInput {
  ticker: string;
  name: string;
  sector: string;
  setup: string;
  entry_low: number;
  entry_high: number;
  sl: number;
  t1: number;
  t2?: number;
  score: number;
  notes?: string;
}

interface ImportPayload {
  scan_date: string; // ISO date string e.g. "2026-06-11"
  suggestions: SuggestionInput[];
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: ImportPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.scan_date || !Array.isArray(body.suggestions)) {
    return NextResponse.json(
      { error: "Missing scan_date or suggestions array" },
      { status: 400 }
    );
  }

  const scanDate = new Date(body.scan_date);
  const results = [];

  for (const s of body.suggestions) {
    if (!s.ticker || !s.name || !s.entry_low || !s.entry_high || !s.sl || !s.t1) {
      results.push({ ticker: s.ticker, status: "skipped", reason: "missing required fields" });
      continue;
    }

    const ticker = s.ticker.toUpperCase().replace(".NS", "");
    const tickerNs = `${ticker}.NS`;

    // Upsert — if same ticker + same scan_date exists, update it
    const existing = await prisma.screenerSuggestion.findFirst({
      where: {
        ticker,
        scanDate,
      },
    });

    if (existing) {
      await prisma.screenerSuggestion.update({
        where: { id: existing.id },
        data: {
          name: s.name,
          sector: s.sector,
          setupType: s.setup,
          score: s.score,
          entryLow: s.entry_low,
          entryHigh: s.entry_high,
          sl: s.sl,
          t1: s.t1,
          t2: s.t2 ?? null,
          notes: s.notes ?? null,
        },
      });
      results.push({ ticker, status: "updated" });
    } else {
      const status = isSuggestionExpired(scanDate) ? "EXPIRED" : "ACTIVE";
      await prisma.screenerSuggestion.create({
        data: {
          scanDate,
          ticker,
          tickerNs,
          name: s.name,
          sector: s.sector,
          setupType: s.setup,
          score: s.score,
          entryLow: s.entry_low,
          entryHigh: s.entry_high,
          sl: s.sl,
          t1: s.t1,
          t2: s.t2 ?? null,
          notes: s.notes ?? null,
          status: status as any,
        },
      });
      results.push({ ticker, status: "created" });
    }
  }

  return NextResponse.json({ imported: results.length, results });
}
