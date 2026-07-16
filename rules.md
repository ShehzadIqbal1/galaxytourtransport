# Engineering rules — Galaxy Tour & Transport

Read this before changing code. These rules keep SEO, content, and components from drifting apart.

## Single source of truth

| Surface | Owner |
| --- | --- |
| Site name, phone, WhatsApp, email, social, nav, page→keyword maps | `src/content/siteConfig.ts` (reads env vars) |
| Visible copy, fleet, routes, FAQ, formats, blog | `src/content/*.ts` |
| Titles, descriptions, canonical, Open Graph, Twitter | `src/lib/metadata.ts` |
| JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting) | `src/lib/schema.ts` |
| WhatsApp click-to-chat URLs | `src/lib/whatsapp.ts` → `buildWhatsAppLink()` |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` (consume `siteConfig` + content) |

Never hand-duplicate titles, descriptions, or JSON-LD inside page components. If a route name changes in `content/routes.ts`, metadata, schema, sitemap, and UI must update without editing other files beyond consumers of that data.

## No hardcoded values

- Phone, WhatsApp number, site URL, GA ID → env vars, exposed via `siteConfig.ts`
- Route names, FAQ answers, fleet specs, CTAs → `content/*.ts`
- Components accept props only — no copy strings, prices, or route names inside JSX files

## Typed data models

Every content shape lives once in `src/lib/types.ts` (`RouteDetail`, `FleetVehicle`, `FAQItem`, `ServiceFormat`, `BlogPost`, `BreadcrumbItem`, `StatItem`, etc.). Content files, metadata helpers, schema helpers, and components all import those types. Shape changes are a one-file edit in `types.ts` plus updates to data.

## Component reusability

- `ui/*` primitives know nothing about pages — generic props only
- `FeatureGrid` is shared by explainer and trust sections
- `FormatCard`, `RouteDetailCard`, `FleetCard` work standalone without their parent section
- Every WhatsApp CTA uses `buildWhatsAppLink()` — never inline `wa.me` URLs
- Interactive controls need visible `:focus-visible` styles and mobile-usable hit targets

## Clean build (required)

All must pass with zero errors before work is done:

```bash
npm run build
npm run lint
npm run typecheck
npm test
```

- No `any`
- No lint-suppression comments to silence real issues
- Prefer local `.d.ts` for missing third-party types

## Performance budget

| Metric | Target |
| --- | --- |
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | = 100 |
| CLS | < 0.1 |
| LCP | < 2.5s |
| INP | < 200ms |

Use `next/image`, `next/font`, and content-sourced `alt` text. Design tokens come from the Tailwind `@theme` palette in `src/app/globals.css` — do not invent new brand colors outside that scale.

## Copyright / content

Write original copy. Structural inspiration from industry patterns is fine; do not copy or closely paraphrase competitor sites (including rktraveltransport.com).
