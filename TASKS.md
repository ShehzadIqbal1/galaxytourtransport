# TASKS.md — Phase 1 checklist

## Scaffold & tooling

- [x] Next.js App Router + React + TypeScript + Tailwind 4
- [x] Strict TS flags (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`)
- [x] Scripts: `build`, `lint`, `typecheck`, `test`
- [x] `.env.example` + local env loading via `siteConfig`
- [x] Vitest unit tests for `whatsapp`, `metadata`, `schema`

## Design system

- [x] Brand tokens in `@theme` (onyx, charcoal, gold, sand, ivory)
- [x] Fraunces + Manrope via `next/font`
- [x] Spacing / radius / shadow / transition utilities
- [x] Local placeholder images under `public/images/`

## Types & content

- [x] `lib/types.ts` models
- [x] `content/siteConfig.ts`, fleet (6 vehicles), routes (6+), FAQ (8), formats (3+3)
- [x] Homepage content + 2 blog posts

## UI / layout / sections

- [x] `ui/` primitives (Button, Badge, Chip, Card, Eyebrow, SectionHeading, Accordion, Tabs, Breadcrumbs, JsonLd)
- [x] Header, MobileMenu, Footer, TopBar
- [x] Homepage sections 1–13 wired to content props

## Pages & SEO

- [x] Homepage composition
- [x] `/tours`, `/transport`, `/transport/airport-transfers`
- [x] `/routes/[slug]`, `/blog`, `/blog/[slug]`
- [x] `lib/metadata.ts` keyword mapping
- [x] `lib/schema.ts` JSON-LD
- [x] `sitemap.ts` + `robots.ts`

## Quality gates

- [x] `npm run lint` — clean
- [x] `npm run typecheck` — clean
- [x] `npm test` — clean (8 tests)
- [x] `npm run build` — clean (18 static routes)
- [x] Lighthouse homepage — recorded below
- [x] Lighthouse route detail (`/routes/dubai-to-abu-dhabi`) — recorded below

### Lighthouse scores (lab, 2026-07-16)

Mobile (default Lighthouse throttling):

| Page | Perf | A11y | BP | SEO | CLS | LCP |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 91 | 100 | 100 | 100 | 0 | ~3.0s |
| `/routes/dubai-to-abu-dhabi` | 91–96 | 100 | 100 | 100 | 0 | ~2.7–3.0s |

Desktop (`--preset=desktop`):

| Page | Perf | A11y | BP | SEO | CLS | LCP |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 100 | 100 | 100 | 100 | 0 | 0.7s |

Notes: Mobile lab LCP is above the 2.5s budget under CPU/network throttling; desktop meets the full budget. Follow-ups: real photography (not SVG placeholders), CDN edge caching on Vercel, and field INP via CrUX after launch.

## Governance

- [x] `rules.md`
- [x] `AGENTS.md`
- [x] `ROADMAP.md`
- [x] `TASKS.md`

## Phase 2+ (deferred)

- [ ] Expand per-route landing copy + route-specific FAQs
- [ ] ~10 blog posts per content strategy
- [ ] `/routes` index page
- [ ] Arabic i18n (Phase 3)
- [ ] CMS-backed content layer (Phase 4)
- [x] Replace placeholder phone/email with live business details
- [ ] Swap SVG placeholders for real photography
