# MEGA JS — Full SEO + GEO Audit

**Audited:** 2026-07-25  
**Tooling:** [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) v2.2.4 (`/seo audit` + `/seo geo` methodology)  
**Surfaces:** Live WordPress `https://megajs.com` + Next.js platform codebase (`apps/web`)  
**Business type:** Education / Publisher + Course catalog (SaaS-like learning OS)

---

## Executive scores

| Surface | SEO Health | GEO Readiness | Notes |
|---------|------------|---------------|-------|
| **Live WordPress (production)** | **8 / 100** | **5 / 100** | Empty HTML body + casino spam takeover |
| **Next.js platform (pre-cutover)** | **68 / 100** | **62 / 100** | Strong SSR/meta/sitemap foundation; entity + Course + image gaps |
| **Blended (what users/Google see today)** | **8 / 100** | **5 / 100** | Production is the live WP shell |

> GEO here means Generative Engine Optimization for Google AI Overviews / AI Mode, ChatGPT search, Perplexity, Claude — framed as SEO fundamentals applied to AI surfaces (per Google’s AI Optimization Guide).

---

## Critical production findings (live site)

### 1. Homepage returns HTTP 200 with empty body
- `curl` / Playwright / Googlebot UA → `status 200`, `content-length: 0`
- `render_page.py`: SPA flag, 0 extracted text, Agent-UX landmarks = 0
- **Impact:** Classic Search + AI crawlers cannot index or cite anything
- **Falsify:** Fetch homepage; body size must be > 10KB HTML with `<title>` and visible H1

### 2. Casino / gambling spam content injection
- Latest posts via `wp/v2/posts`: **19 / 20** casino affiliate spam (Feb 2026)
- Category `business-small-business`: **63** posts
- Older archive still has legitimate JS content (Aug 2024 lessons/blog)
- **Impact:** Topical authority destroyed; high spam / parasite-SEO risk; AI systems that still have WP API/cache may cite wrong brand
- **Falsify:** Zero casino posts in last 100 published; category removed or emptied

### 3. Sitemap endpoints empty
- `robots.txt` declares `https://megajs.com/sitemap_index.xml`
- `sitemap_discovery.py`: sitemap_index, sitemap.xml, wp-sitemap.xml → **empty response** (invalid)
- **Falsify:** Valid XML urlset/index with real course/article URLs

### 4. No `llms.txt` on live
- `https://megajs.com/llms.txt` → 404
- (Google ignores for ranking; still useful for non-Google AI tools)

### 5. AI crawler policy absent on live
- Live robots is WooCommerce/WP Rocket default; no GPTBot / ClaudeBot / PerplexityBot policy

### Domain signals
| Signal | Value |
|--------|-------|
| Domain age | Created 2019-04-25 (~7.25y) |
| Common Crawl | In crawl + rankings; PageRank rank ~17.1M (weak) |
| WP API | Alive (`wp-json` name “MEGA JS”, FA description) |
| HTML frontend | Effectively offline |

---

## Next.js platform — what already works

| Area | Evidence |
|------|----------|
| Central metadata | `apps/web/src/lib/seo.ts` — canonical, hreflang fa/en/x-default, OG/Twitter, robots |
| Locale routing | Middleware 308 → `/{locale}`, `Content-Language`, private cache bypass |
| Sitemap architecture | `sitemap_index.xml` + typed sitemaps + docs sitemap + hreflang/image extensions |
| SSR | Marketing, learn, articles, docs, courses are Server Components |
| Docs citability | ~1184 MD pages; definition-first, H2 structure, sources; FA/EN parity |
| Private noindex | Login/profile layouts + robots disallow |
| Schema starters | Organization, WebSite+SearchAction, Course, Breadcrumb, Article (CMS), TechArticle/LearningResource (docs) |

---

## Platform findings (by severity)

### Critical
1. **Production empty shell** — cutover/fix WP before any SEO spend matters  
2. **Default OG image is SVG** (`logo-mark.svg`) — many networks drop SVG OG; ship 1200×630 PNG/JPG

### High
3. **Course JSON-LD incomplete** (offers / CourseInstance) — addressed in this PR for base fields  
4. **Unconditional fa/en hreflang** even when translation missing → wrong-language duplicates  
5. **Search URLs (`/learn?q=`) indexable** — fixed: `noIndex` when `q` present  
6. **Thin podcasts page indexable + sitemapped** — fixed: `noIndex` on podcasts page  
7. **Category ItemList relative URLs** — fixed: absolute locale URLs  
8. **Organization `sameAs` empty** — GEO entity weakness; placeholder constant added  
9. **Article detail missing visible date/author** — hurts E-E-A-T + AI citation trust  
10. **Content images use empty `alt=""`** — image SEO + multimodal AI selection

### Medium
11. **`llms.txt` missing** — added under `apps/web/public/llms.txt`  
12. **No explicit AI crawler robots rules** — added allow search bots / block training scrapers  
13. **Home title brand-only** — fixed: `MEGA JS — {tagline}`  
14. **Locale layout emits home metadata as parent** — risk if child returns `{}`  
15. **Docs: ~154 missing seoTitle; short bodies** — backfill / thicken / noindex  
16. **API breadcrumbs hardcoded English** (`Home`, `Articles`)  
17. **Sitemap responses send `X-Robots-Tag: noindex`** — unusual; verify GSC ingestion  

### Low
18. No Search Console / Bing verification meta  
19. No `twitter:site`  
20. Org/WebSite JSON-LD only on homepage (acceptable)  

---

## GEO deep dive

### Citability (25%)
| Surface | Score | Notes |
|---------|-------|-------|
| Live HTML | 0 | No text |
| Docs (codebase) | High | Question-ready H2s, definitions, tables, sources |
| Articles (live API) | Contaminated | Spam dominates recent feed |
| Courses | Medium | Summaries exist; need answer-first intros 134–167 words |

### Structural readability (20%)
- Docs: strong  
- Live: none  
- Platform marketing: hero + sections OK; avoid thin placeholders in index

### Multi-modal (15%)
- Tunnel/video + courses exist in product model  
- Live HTML delivers none  
- Image alts empty → weak multimodal selection

### Authority & brand (20%)
- Domain age helps; spam destroys trust  
- `sameAs` empty; no Wikipedia/Wikidata entity packaging  
- Brand mentions on YouTube/Aparat/Instagram referenced in copy but not linked in schema

### Technical AI accessibility (20%)
- Live: empty body = AI crawlers get nothing (they often don’t execute JS well anyway)  
- Platform: SSR ✅ critical for AI crawlers  
- robots AI policy + llms.txt added in Next app  

**GEO verdict:** Do not invest in passage optimization until (1) spam purged or WP retired, (2) Next SSR site is live with real HTML, (3) entity/`sameAs` + Course offers + article bylines ship.

---

## Category scores (platform codebase, assuming healthy content)

| Category | Score | Weight |
|----------|-------|--------|
| Technical SEO | 72 | Crawlability, robots, sitemaps, SSR |
| Content / E-E-A-T | 55 | Docs strong; articles/courses need bylines & dates |
| Schema | 64 | Good coverage; Course/ItemList/Org gaps closing |
| Performance | n/a | PSI rate-limited this run; re-check post-deploy |
| Images | 40 | sizes OK; alts/OG weak |
| GEO / AI search | 62 | SSR+docs; entity/llms/robots improving |
| SXO | 70 | Clear learn/docs/articles IA |
| International | 60 | Locale prefixes good; unconditional hreflang risk |

**Weighted platform score: ~68**

---

## Skill installation (this PR)

Installed via:

```bash
npx skills add AgriciDaniel/claude-seo -y
```

Also provisioned Claude Code runtime:

```bash
bash install.sh && ~/.claude/skills/seo/bin/claude-seo setup
~/.claude/skills/seo/bin/claude-seo doctor  # Runtime: ready, Chromium: ready
```

Project paths:
- `.agents/skills/seo*` — 25 sub-skills  
- `.agents/agents/seo-*.md` — specialist agents  
- `skills-lock.json` — pinned to `AgriciDaniel/claude-seo`

---

## Artifacts

- `ACTION-PLAN.md` — prioritized phases  
- `audit-data.json` — structured envelope  
- `findings/*.md` — technical, content, schema, geo, live-incident  
