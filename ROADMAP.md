# Roadmap — Galaxy Tour & Transport

Each phase must extend Phase 1 without restructuring components, content shapes, or metadata/schema generators. If a later phase requires rewriting those layers, Phase 1 failed its scalability test.

## Phase 1 — this build

- Homepage with full section stack (hero → FAQ → CTA → footer)
- Core service pages: `/tours`, `/transport`, `/transport/airport-transfers`
- Dynamic route detail pages for every entry in `content/routes.ts`
- Blog index + posts from typed content
- WhatsApp-first booking CTAs
- Full on-page + technical SEO: metadata, Open Graph, Twitter, JSON-LD, sitemap, robots
- Accessibility + Core Web Vitals budget

## Phase 2 — deeper content

- Dedicated landing polish for every corridor (already scaffolded via `[slug]` — expand copy, FAQs per route, internal links)
- Blog expansion to ~10 SEO-aligned posts from the content strategy
- Optional `/routes` index listing page

## Phase 3 — Arabic (i18n)

- Locale routing (`/ar/...`)
- Mirrored typed content shapes for Arabic copy — same interfaces, different data source files
- RTL layout tokens without forking section components

## Phase 4 — CMS swap-in

- Replace `content/*.ts` static imports with CMS fetches that return the **same** TypeScript interfaces
- Zero changes expected in `components/`, `lib/metadata.ts`, or `lib/schema.ts` beyond the data-loading boundary
