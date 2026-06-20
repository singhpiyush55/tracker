"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getJournalEntries() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  return prisma.journalEntry.findMany({
    orderBy: { createdAt: "desc" },
    include: { trade: { select: { ticker: true, name: true } } },
  });
}

export async function createJournalEntry(data: {
  type: "LEARNING" | "TRADE_NOTE";
  title: string;
  body: string;
  tradeId?: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  await prisma.journalEntry.create({ data });
  revalidatePath("/journal");
}

export async function deleteJournalEntry(id: string) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  await prisma.journalEntry.delete({ where: { id } });
  revalidatePath("/journal");
}

export async function getTradesForDropdown() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  const open = await prisma.trade.findMany({
    where: { status: "OPEN" },
    select: { id: true, ticker: true, name: true, status: true },
    orderBy: { entryDate: "desc" },
  });
  const closed = await prisma.trade.findMany({
    where: { status: { not: "OPEN" } },
    select: { id: true, ticker: true, name: true, status: true },
    orderBy: { exitDate: "desc" },
    take: 5,
  });
  return [...open, ...closed];
}