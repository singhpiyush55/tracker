import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Nav } from "@/components/Nav";
import { PnlClient } from "./PnlClient";

export default async function PnlPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const trades = await prisma.trade.findMany({
    where: { status: { not: "OPEN" } },
    orderBy: { exitDate: "asc" },
    select: {
      id: true,
      ticker: true,
      name: true,
      sector: true,
      entryPrice: true,
      exitPrice: true,
      exitDate: true,
      entryDate: true,
      quantity: true,
      capitalDeployed: true,
      status: true,
      realizedPnl: true,
      realizedPnlPct: true,
      buyCharges: true,
      sellCharges: true,
      suggestion: { select: { setupType: true } },
    },
  });

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <PnlClient trades={trades as any} />
      </main>
    </div>
  );
}