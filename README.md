# Swing Tracker

Personal NSE swing trade journal. Logs screener suggestions, tracks real trades, fetches live prices from Yahoo Finance, and manages your capital — all in one place.

**Stack:** Next.js 14 · Neon PostgreSQL · Prisma · NextAuth (GitHub) · Tailwind · Vercel

---

## Features

- **Screener Log** — import Claude screener JSON, track hypothetical P&L per suggestion, screener accuracy over time
- **Trade Journal** — open/close trades, live P&L on open positions, historical P&L chart per trade
- **Dashboard** — capital overview, deployed vs free cash, unrealized P&L, recent closed trades
- **Fund Management** — deposit/withdraw capital, running total
- **Live Prices** — Yahoo Finance (no API key), on-demand when you load a page
- **Daily Snapshots** — Vercel cron at 4 PM IST, stores EOD price for every active suggestion and open trade
- **Auto-expiry** — suggestions older than 7 trading days auto-expire

---

## Setup

### 1. Clone and install

```bash
git clone https://github.com/your-username/swing-tracker.git
cd swing-tracker
npm install
```

### 2. Neon database

1. Go to [neon.tech](https://neon.tech) → create a free project
2. In your project dashboard → **Connection Details**
3. Copy the **pooled** connection string → `DATABASE_URL`
4. Copy the **direct** connection string → `DIRECT_URL`

### 3. GitHub OAuth app

1. Go to [github.com/settings/developers](https://github.com/settings/developers) → **New OAuth App**
2. Fill in:
   - **Homepage URL:** `http://localhost:3000` (update to Vercel URL after deploy)
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
3. Copy **Client ID** → `GITHUB_ID`
4. Generate a **Client Secret** → `GITHUB_SECRET`

### 4. Environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
DATABASE_URL="postgresql://..."      # pooled Neon URL
DIRECT_URL="postgresql://..."        # direct Neon URL
NEXTAUTH_SECRET="..."                # openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"
GITHUB_ID="..."
GITHUB_SECRET="..."
CRON_SECRET="..."                    # openssl rand -base64 32
```

### 5. Push schema to Neon

```bash
npm run db:push
```

### 6. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), sign in with GitHub.

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial"
git remote add origin https://github.com/your-username/swing-tracker.git
git push -u origin main
```

### 2. Import in Vercel

1. [vercel.com/new](https://vercel.com/new) → Import your GitHub repo
2. Add all env vars from `.env.local` in the Vercel dashboard
3. Update `NEXTAUTH_URL` to your Vercel production URL (e.g. `https://swing-tracker.vercel.app`)
4. Update your GitHub OAuth app callback URL to `https://your-app.vercel.app/api/auth/callback/github`
5. Deploy

The `vercel.json` cron runs `/api/cron` at 10:30 UTC (4:00 PM IST) Mon–Fri automatically.

---

## Importing screener data

At the end of every `/swing-screener` run in Claude, you'll get a JSON block like this:

```json
{
  "scan_date": "2026-06-11",
  "suggestions": [
    {
      "ticker": "AXISBANK",
      "name": "Axis Bank",
      "sector": "Banking",
      "setup": "Pullback",
      "entry_low": 1295,
      "entry_high": 1315,
      "sl": 1268,
      "t1": 1380,
      "t2": 1418,
      "score": 8.0,
      "notes": "₹1300 put wall, above 200DMA"
    }
  ]
}
```

1. Copy that JSON
2. In the app → **Screener Log** → **Import from Claude**
3. Paste and hit Import

One click, done.

---

## Screener JSON format reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `scan_date` | string | ✓ | ISO date `"2026-06-11"` |
| `ticker` | string | ✓ | NSE symbol, `.NS` handled automatically |
| `name` | string | ✓ | Full stock name |
| `sector` | string | ✓ | e.g. `"Banking"` |
| `setup` | string | ✓ | e.g. `"Pullback"`, `"Breakout"`, `"Bounce"` |
| `entry_low` | number | ✓ | Lower bound of entry range |
| `entry_high` | number | ✓ | Upper bound of entry range |
| `sl` | number | ✓ | Stop loss |
| `t1` | number | ✓ | Target 1 |
| `t2` | number | — | Target 2 (optional) |
| `score` | number | ✓ | Out of 10 |
| `notes` | string | — | Setup rationale |

---

## Project structure

```
swing-tracker/
├── app/
│   ├── page.tsx              → root redirect
│   ├── login/page.tsx        → GitHub sign-in
│   ├── dashboard/            → capital overview + open positions
│   │   ├── page.tsx
│   │   ├── DashboardClient.tsx
│   │   └── actions.ts        → fund management server actions
│   ├── screener/             → suggestion log + import
│   │   ├── page.tsx
│   │   └── ScreenerClient.tsx
│   ├── trades/               → trade journal
│   │   ├── page.tsx
│   │   ├── TradesClient.tsx
│   │   └── actions.ts        → trade CRUD server actions
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── import/route.ts   → POST: accept screener JSON
│       ├── prices/route.ts   → GET: live Yahoo Finance prices
│       └── cron/route.ts     → daily EOD snapshot job
├── lib/
│   ├── prisma.ts             → Neon + Prisma client singleton
│   ├── yahoo.ts              → price fetch + P&L helpers
│   ├── auth.ts               → NextAuth config
│   └── utils.ts              → formatting, trading day helpers
├── components/
│   └── Nav.tsx
├── prisma/schema.prisma      → all DB models
├── middleware.ts             → route protection
├── vercel.json               → cron schedule
└── .env.example
```
