"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function deleteExpiredSuggestion(id: string) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  const suggestion = await prisma.screenerSuggestion.findUnique({
    where: { id },
    include: { trade: true },
  });

  if (!suggestion) throw new Error("Not found");
  if (suggestion.status !== "EXPIRED") throw new Error("Only expired suggestions can be deleted");
  if (suggestion.trade) throw new Error("Cannot delete — has a linked trade");

  // Snapshots cascade delete automatically (onDelete: Cascade in schema)
  await prisma.screenerSuggestion.delete({ where: { id } });
  revalidatePath("/screener");
}