"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// ── Open a new trade ────────────────────────────────────────────────────────

export async function openTrade(data: {
  suggestionId?: string;
  ticker: string;
  name: string;
  sector?: string;
  entryPrice: number;
  entryDate: string;
  quantity: number;
  sl?: number;
  t1?: number;
  t2?: number;
  notes?: string;
  buyCharges?: number; // added for brokrage calc
}) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  const ticker = data.ticker.toUpperCase().replace(".NS", "");
  const tickerNs = `${ticker}.NS`;
  const capitalDeployed = data.entryPrice * data.quantity;

  const trade = await prisma.trade.create({
    data: {
      suggestionId: data.suggestionId ?? null,
      ticker,
      tickerNs,
      name: data.name,
      sector: data.sector ?? null,
      entryPrice: data.entryPrice,
      entryDate: new Date(data.entryDate),
      quantity: data.quantity,
      capitalDeployed,
      sl: data.sl ?? null,
      t1: data.t1 ?? null,
      t2: data.t2 ?? null,
      notes: data.notes ?? null,
      buyCharges: data.buyCharges ?? 0, // added for brokrage calc
    },
  });

  // If linked to a suggestion, mark it as traded
  if (data.suggestionId) {
    await prisma.screenerSuggestion.update({
      where: { id: data.suggestionId },
      data: { status: "TRADED" },
    });
  }

  revalidatePath("/trades");
  revalidatePath("/dashboard");
  return trade;
}

// ── Close a trade ────────────────────────────────────────────────────────────

export async function closeTrade(data: {
  tradeId: string;
  exitPrice: number;
  exitDate: string;
  status: "CLOSED" | "SL_HIT" | "T1_HIT" | "T2_HIT";
  notes?: string;
  sellCharges?: number; // added for brokrage calc
}) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  const trade = await prisma.trade.findUnique({ where: { id: data.tradeId } });
  if (!trade) throw new Error("Trade not found");

  // const realizedPnl =
  //   (data.exitPrice - trade.entryPrice) * trade.quantity;
  // const realizedPnlPct =
  //   ((data.exitPrice - trade.entryPrice) / trade.entryPrice) * 100;

  const totalCharges = (data.sellCharges ?? 0) + (trade.buyCharges ?? 0);
  const realizedPnl = (data.exitPrice - trade.entryPrice) * trade.quantity - totalCharges;
  const realizedPnlPct = (realizedPnl / trade.capitalDeployed) * 100;

  const updated = await prisma.trade.update({
    where: { id: data.tradeId },
    data: {
      exitPrice: data.exitPrice,
      exitDate: new Date(data.exitDate),
      status: data.status,
      realizedPnl: Math.round(realizedPnl * 100) / 100,
      realizedPnlPct: Math.round(realizedPnlPct * 100) / 100,
      notes: data.notes ?? trade.notes,
      sellCharges: data.sellCharges ?? 0, // added for brokrage calc
    },
  });

  revalidatePath("/trades");
  revalidatePath("/dashboard");
  return updated;
}

// ── Delete a trade ────────────────────────────────────────────────────────────

export async function deleteTrade(tradeId: string) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  await prisma.trade.delete({ where: { id: tradeId } });
  revalidatePath("/trades");
  revalidatePath("/dashboard");
}

// ── Get all trades ────────────────────────────────────────────────────────────

export async function getTrades() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  return prisma.trade.findMany({
    orderBy: { entryDate: "desc" },
    include: {
      suggestion: {
        select: { scanDate: true, setupType: true, score: true },
      },
    },
  });
}


// Updated for brokrage calculation. It is used to edit the fields of extrach chages.

export async function updateTradeCharges(data: {
  tradeId: string;
  buyCharges: number;
  sellCharges: number;
}) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  const trade = await prisma.trade.findUnique({ where: { id: data.tradeId } });
  if (!trade) throw new Error("Trade not found");

  const totalCharges = data.buyCharges + data.sellCharges;
  const realizedPnl = trade.exitPrice
    ? (trade.exitPrice - trade.entryPrice) * trade.quantity - totalCharges
    : null;
  const realizedPnlPct = realizedPnl !== null
    ? (realizedPnl / trade.capitalDeployed) * 100
    : null;

  await prisma.trade.update({
    where: { id: data.tradeId },
    data: {
      buyCharges: data.buyCharges,
      sellCharges: data.sellCharges,
      ...(realizedPnl !== null && { realizedPnl, realizedPnlPct }),
    },
  });

  revalidatePath("/trades");
  revalidatePath("/dashboard");
}