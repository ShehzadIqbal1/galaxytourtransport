# AGENTS.md — Galaxy Tour & Transport

## Project summary

Galaxy Tour & Transport (`galaxytourtransport.com`) is a UAE marketing site for two equally weighted offerings: **tours** (desert safaris, city circuits, mountain days, custom itineraries) and **transport** (shared car lift, private transfers, monthly commuter plans, airport pickups). Primary booking channel is **WhatsApp** via `buildWhatsAppLink()` everywhere.

## Before you change anything

1. Read [`rules.md`](./rules.md) — authoritative engineering rules.
2. Check [`TASKS.md`](./TASKS.md) for open Phase 1 work and [`ROADMAP.md`](./ROADMAP.md) for later phases.

## Stack note (versions)

Scaffolded with the latest stable at creation time:

- **Next.js 16.x** (App Router) — prompt asked for 15.x; 16 is current stable
- **React 19**
- **Tailwind CSS 4.x** — design tokens live in `src/app/globals.css` `@theme` (CSS-first). There is no `tailwind.config.ts`; do not reintroduce a JS config unless migrating off Tailwind 4.
- TypeScript strict mode with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`

## Where things live

| Intent | Location |
| --- | --- |
| Content / copy changes | `src/content/*.ts` |
| New page | Reuse `src/components/sections/*` and `ui/*`; wire metadata via `lib/metadata.ts` + schema via `lib/schema.ts` |
| SEO / OG / Twitter / canonical | `src/lib/metadata.ts` only |
| JSON-LD | `src/lib/schema.ts` only |
| Site constants + env | `src/content/siteConfig.ts` + `.env.example` |
| Shared types | `src/lib/types.ts` |

## Environment

Copy `.env.example` → `.env.local` before `npm run dev` / `npm run build`. Required:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (E.164 digits)

Optional: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

Missing required env vars fail loudly at import of `siteConfig`.

## Constraints

- Design tokens are fixed (onyx / charcoal / gold / sand / ivory) — no new brand colors
- WhatsApp always through `lib/whatsapp.ts`
- Images are local under `public/images/{hero,fleet,routes,tours,icons}/` — no hotlinked stock URLs
- Placeholder phone/email in content are marked for pre-launch swap

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
```
