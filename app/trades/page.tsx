import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Nav } from "@/components/Nav";
import { TradesClient } from "./TradesClient";

export default async function TradesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const trades = await prisma.trade.findMany({
    orderBy: { entryDate: "desc" },
    include: {
      suggestion: { select: { scanDate: true, setupType: true, score: true } },
      snapshots: { orderBy: { date: "asc" } },
    },
  });

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <TradesClient trades={trades as any} />
      </main>
    </div>
  );
}
