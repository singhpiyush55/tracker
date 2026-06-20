import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Nav } from "@/components/Nav";
import { getJournalEntries, getTradesForDropdown } from "./actions";
import { JournalClient } from "./JournalClient";

export default async function JournalPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  const entries = await getJournalEntries();
  const trades = await getTradesForDropdown();
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <JournalClient entries={entries as any} trades={trades} />
      </main>
    </div>
  );
}