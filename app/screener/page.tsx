import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Nav } from "@/components/Nav";
import { ScreenerClient } from "./ScreenerClient";

export default async function ScreenerPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const suggestions = await prisma.screenerSuggestion.findMany({
    orderBy: { scanDate: "desc" },
    include: {
      trade: { select: { id: true, status: true } },
      snapshots: { orderBy: { date: "asc" } },
    },
  });

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ScreenerClient suggestions={suggestions as any} />
      </main>
    </div>
  );
}
