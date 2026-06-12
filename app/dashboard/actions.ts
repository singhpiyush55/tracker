"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// ── Get or create the single fund account ────────────────────────────────────

export async function getFundAccount() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  let account = await prisma.fundAccount.findFirst();
  if (!account) {
    account = await prisma.fundAccount.create({
      data: { totalCapital: 0 },
    });
  }
  return account;
}

// ── Deposit or withdraw ───────────────────────────────────────────────────────

export async function addFundTransaction(data: {
  type: "DEPOSIT" | "WITHDRAW";
  amount: number;
  date: string;
  notes?: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  let account = await prisma.fundAccount.findFirst();
  if (!account) {
    account = await prisma.fundAccount.create({ data: { totalCapital: 0 } });
  }

  const delta = data.type === "DEPOSIT" ? data.amount : -data.amount;
  const newTotal = account.totalCapital + delta;

  if (newTotal < 0) throw new Error("Insufficient funds");

  const [tx] = await prisma.$transaction([
    prisma.fundTransaction.create({
      data: {
        accountId: account.id,
        type: data.type,
        amount: data.amount,
        date: new Date(data.date),
        notes: data.notes ?? null,
      },
    }),
    prisma.fundAccount.update({
      where: { id: account.id },
      data: { totalCapital: newTotal },
    }),
  ]);

  revalidatePath("/dashboard");
  return tx;
}

// ── Get fund transactions ─────────────────────────────────────────────────────

export async function getFundTransactions() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  return prisma.fundTransaction.findMany({
    orderBy: { date: "desc" },
    take: 50,
  });
}

// ── Compute deployed capital from open trades ────────────────────────────────

export async function getCapitalStats() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  const account = await getFundAccount();

  const openTrades = await prisma.trade.findMany({
    where: { status: "OPEN" },
    select: { capitalDeployed: true },
  });

  const closedTrades = await prisma.trade.findMany({
    where: { status: { not: "OPEN" } },
    select: { realizedPnl: true },
  });

  const deployed = openTrades.reduce((sum, t) => sum + t.capitalDeployed, 0);
  const realizedPnl = closedTrades.reduce((sum, t) => sum + (t.realizedPnl ?? 0), 0);
  const free = account.totalCapital - deployed;
  const totalValue = account.totalCapital + realizedPnl;

  return {
    totalCapital: account.totalCapital,
    deployed: Math.round(deployed * 100) / 100,
    free: Math.round(free * 100) / 100,
    realizedPnl: Math.round(realizedPnl * 100) / 100,
    realizedPnlPct:
      account.totalCapital > 0
        ? Math.round((realizedPnl / account.totalCapital) * 10000) / 100
        : 0,
    totalValue: Math.round(totalValue * 100) / 100,
    openTradesCount: openTrades.length,
    closedTradesCount: closedTrades.length,
  };
}
