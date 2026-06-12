import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fetchPrices } from "@/lib/yahoo";
import { calcPnl, calcHypoPnl } from "@/lib/yahoo";
import { isSuggestionExpired } from "@/lib/utils";

// For deployment, via dynamic route. 
export const dynamic = "force-dynamic"; 

// Called by Vercel Cron at 10:30 UTC = 4:00 PM IST
export async function GET(req: NextRequest) {
  // Simple secret header check so random people can't trigger this
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // ── 1. Snapshot active suggestions ─────────────────────────────────────────
  const activeSuggestions = await prisma.screenerSuggestion.findMany({
    where: { status: "ACTIVE" },
  });

  // Auto-expire old ones
  const toExpire = activeSuggestions.filter((s) => isSuggestionExpired(s.scanDate));
  if (toExpire.length > 0) {
    await prisma.screenerSuggestion.updateMany({
      where: { id: { in: toExpire.map((s) => s.id) } },
      data: { status: "EXPIRED" },
    });
  }

  const stillActive = activeSuggestions.filter((s) => !isSuggestionExpired(s.scanDate));

  if (stillActive.length > 0) {
    const suggTickers = stillActive.map((s) => s.tickerNs);
    const suggPrices = await fetchPrices(suggTickers);

    for (const s of stillActive) {
      const priceData = suggPrices[s.ticker];
      if (!priceData?.price) continue;

      const { hypoEntry, abs, pct } = calcHypoPnl(s.entryLow, s.entryHigh, priceData.price);

      await prisma.suggestionSnapshot.upsert({
        where: { suggestionId_date: { suggestionId: s.id, date: today } },
        create: {
          suggestionId: s.id,
          date: today,
          closePrice: priceData.price,
          hypoEntryPrice: hypoEntry,
          hypoPnlAbs: abs,
          hypoPnlPct: pct,
        },
        update: {
          closePrice: priceData.price,
          hypoPnlAbs: abs,
          hypoPnlPct: pct,
        },
      });

      // Auto-update status if SL or T1 breached hypothetically
      if (priceData.price <= s.sl) {
        await prisma.screenerSuggestion.update({
          where: { id: s.id },
          data: { status: "SL_HIT" },
        });
      } else if (s.t2 && priceData.price >= s.t2) {
        await prisma.screenerSuggestion.update({
          where: { id: s.id },
          data: { status: "T2_HIT" },
        });
      } else if (priceData.price >= s.t1) {
        await prisma.screenerSuggestion.update({
          where: { id: s.id },
          data: { status: "T1_HIT" },
        });
      }
    }
  }

  // ── 2. Snapshot open trades ─────────────────────────────────────────────────
  const openTrades = await prisma.trade.findMany({
    where: { status: "OPEN" },
  });

  if (openTrades.length > 0) {
    const tradeTickers = openTrades.map((t) => t.tickerNs);
    const tradePrices = await fetchPrices(tradeTickers);

    for (const t of openTrades) {
      const priceData = tradePrices[t.ticker];
      if (!priceData?.price) continue;

      const { abs, pct } = calcPnl(t.entryPrice, priceData.price, t.quantity);

      await prisma.tradeSnapshot.upsert({
        where: { tradeId_date: { tradeId: t.id, date: today } },
        create: {
          tradeId: t.id,
          date: today,
          closePrice: priceData.price,
          unrealizedPnl: abs,
          unrealizedPnlPct: pct,
        },
        update: {
          closePrice: priceData.price,
          unrealizedPnl: abs,
          unrealizedPnlPct: pct,
        },
      });
    }
  }

  return NextResponse.json({
    ok: true,
    suggestionsSnapshotted: stillActive.length,
    tradesSnapshotted: openTrades.length,
    expiredSuggestions: toExpire.length,
    timestamp: new Date().toISOString(),
  });
}
