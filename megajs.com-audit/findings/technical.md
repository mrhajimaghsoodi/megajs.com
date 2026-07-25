# Technical SEO

## Live
- robots.txt present (WooCommerce disallows + WP Rocket)
- No HSTS / CSP / X-Frame-Options observed on homepage headers
- HTML delivery broken (see live-incident.md)

## Next.js platform (`apps/web`)
### Strengths
- `robots.ts` + `sitemap_index.xml` architecture
- Locale middleware with 308 + Content-Language
- SSR for crawlable marketing/docs/courses
- API/profile/login disallowed

### Gaps
- Unconditional fa/en hreflang
- Search result URLs previously indexable (fixed: learn `?q=` noindex)
- Sitemap responses include `X-Robots-Tag: noindex` — verify GSC still reads them
- PSI/CrUX not measured this run (API rate limit)

### Applied this PR
- Explicit AI search bot allows + training bot blocks in `robots.ts`
