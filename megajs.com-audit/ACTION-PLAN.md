# MEGA JS — Prioritized SEO + GEO Action Plan

**Source:** claude-seo full audit 2026-07-25  
Each item includes first principle, dependency, falsifiability check, and leading indicator.

---

## Phase 1 — Critical (this week)

### 1.1 Restore or replace the live HTML shell
- **Observation:** Homepage returns 200 with 0-byte body → zero indexability  
- **Depends on:** Hosting/WP access or Next cutover  
- **Do:** Either fix WP theme/cache (WP Rocket) so HTML renders, or put Next behind megajs.com with a proper 503/maintenance during switch  
- **Falsify:** `curl -sL https://megajs.com/ | wc -c` > 10000 and contains `<title>`  
- **Leading indicator:** GSC “Crawled – currently not indexed” / Soft 404 count drops within 7–14 days

### 1.2 Purge casino spam + lock publishing
- **Observation:** 19/20 latest posts are casino spam; 63 in `business-small-business`  
- **Depends on:** WP admin + DB access  
- **Do:** Trash/delete spam; remove category; rotate all WP/admin/API keys; scan for rogue users/plugins; block XML-RPC if unused; set posts to review-only  
- **Falsify:** Last 50 posts contain zero gambling keywords; no unknown admins  
- **Leading indicator:** New indexed URLs with “casino” in GSC → 0

### 1.3 Restore valid XML sitemaps
- **Observation:** Declared sitemaps return empty bodies  
- **Depends on:** 1.1  
- **Do:** Regenerate Rank Math / WP sitemaps OR point robots to Next `sitemap_index.xml` after cutover  
- **Falsify:** Sitemap validates; sample URLs return 200 with content  
- **Leading indicator:** GSC sitemap “Discovered” pages > 0

---

## Phase 2 — High impact (weeks 2–3)

### 2.1 Cut over to Next.js SSR platform
- Ship `apps/web` with existing metadata/sitemap/robots work  
- Preserve URL map from Rank Math where possible; 301 spam URLs → gone (410) or hub

### 2.2 Ship raster default OG (1200×630)
- Replace `DEFAULT_OG_IMAGE` SVG with PNG/JPG  
- **Falsify:** Facebook Sharing Debugger / opengraph.xyz shows image

### 2.3 Conditional hreflang
- Emit `fa`/`en` alternates only when a real translation exists  
- Align sitemap hreflang with the same rule  
- **Falsify:** Spot-check 20 EN URLs; none serve FA-only body with EN hreflang claim

### 2.4 Article E-E-A-T UI
- Visible `<time datetime>` + author byline on article detail  
- Localize breadcrumb labels  
- **Falsify:** View-source contains date + author text nodes

### 2.5 Image alts
- `alt={title}` (or CMS alt) on article/course/tunnel cards and banners  
- **Falsify:** Random sample of 20 content images have non-empty alt

### 2.6 Organization entity packaging
- Fill `ORGANIZATION_SAME_AS` with YouTube, Aparat, Instagram, GitHub  
- **Falsify:** Rich Results / schema validator shows sameAs URLs

---

## Phase 3 — Content & GEO (month 2)

### 3.1 Passage citability pass on top docs + pillar articles
- Front-load 134–167 word self-contained answers under question H2s  
- Prefer unique data, definitions, comparison tables  
- **Falsify:** Manual extract of first answer block stands alone without page context

### 3.2 Docs SEO backfill
- Add `seoTitle` to ~154 missing pages; thicken 78 short bodies or noindex  
- Add `dateModified` to docs schema from git/fs mtime

### 3.3 Preferred Sources / community GEO
- Ask students to add megajs.com as Google Preferred Source  
- Seed Reddit/YouTube/Aparat discussions that canonical-link back to lessons  
- **Falsify:** Brand mention queries in ChatGPT/Perplexity return megajs.com

### 3.4 Course rich results completeness
- Ensure offers + CourseInstance live in production HTML  
- Add instructor Person schema when authors exist

---

## Phase 4 — Monitoring (ongoing)

| Cadence | Action |
|---------|--------|
| Weekly | `/seo drift compare https://megajs.com` after baseline |
| Weekly | GSC: coverage, spam URLs, CWV |
| Monthly | `/seo geo` on top 10 money pages |
| Monthly | Common Crawl + brand mention spot-checks |
| On deploy | Confirm `/robots.txt`, `/llms.txt`, `/sitemap_index.xml` non-empty |

### Baseline command (after HTML restored)

```bash
~/.claude/skills/seo/bin/claude-seo run drift_baseline.py https://megajs.com
```

---

## Already applied in this PR (platform)

- [x] Installed AgriciDaniel/claude-seo (25 skills + agents + skills-lock)  
- [x] `public/llms.txt`  
- [x] AI crawler policy in `robots.ts`  
- [x] Home title includes tagline  
- [x] Learn search `?q=` → noindex  
- [x] Podcasts placeholder → noindex  
- [x] Course JSON-LD offers + CourseInstance  
- [x] Category ItemList absolute URLs  
- [x] `ORGANIZATION_SAME_AS` hook for entity URLs  
