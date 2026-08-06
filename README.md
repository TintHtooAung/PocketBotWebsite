# PocketBot Website

Landing page for **PocketBot** — a Myanmar-focused micro-SaaS that automates business workflows on Telegram with Google Sheets sync.

**Tagline:** Your business in Telegram, automated.  
**Burmese:** သင့်လုပ်ငန်းကို Telegram ထဲမှာ အလိုအလျောက် စနစ်တကျ စီမံပါ။

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start local dev server   |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Vite** (auto-detected). Build command: `npm run build`. Output: `dist`.
4. Deploy — `vercel.json` is included for SPA-friendly routing.

Or with the Vercel CLI:

```bash
npx vercel
```

## Primary CTA

Until a dedicated bot is live, CTAs point to:  
[https://t.me/PocketBotMyanmar](https://t.me/PocketBotMyanmar)

## Project structure

```
src/
  components/   # Navbar, Hero, Services, HowItWorks, Pricing, Contact, Footer
  lib/          # Shared constants & scroll helper
  App.tsx       # Single-page composition
  index.css     # Tailwind + brand theme
```

## Brand colors

| Token      | Hex     |
| ---------- | ------- |
| Primary    | `#1A56DB` |
| Secondary  | `#0D9488` |
| Accent     | `#F59E0B` |
| Background | `#F8FAFC` |
| Text       | `#1E293B` |
| Muted      | `#64748B` |
