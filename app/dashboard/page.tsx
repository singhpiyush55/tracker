import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getCapitalStats } from "./actions";
import { prisma } from "@/lib/prisma";
import { Nav } from "@/components/Nav";
import { DashboardClient } from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const stats = await getCapitalStats();

  const openTrades = await prisma.trade.findMany({
    where: { status: "OPEN" },
    orderBy: { entryDate: "desc" },
  });

  const activeSuggestions = await prisma.screenerSuggestion.findMany({
    where: { status: "ACTIVE" },
    orderBy: { scanDate: "desc" },
  });

  const recentClosed = await prisma.trade.findMany({
    where: { status: { not: "OPEN" } },
    orderBy: { exitDate: "desc" },
    take: 5,
  });

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <DashboardClient
          stats={stats}
          openTrades={openTrades}
          activeSuggestions={activeSuggestions}
          recentClosed={recentClosed}
        />
      </main>
    </div>
  );
}
