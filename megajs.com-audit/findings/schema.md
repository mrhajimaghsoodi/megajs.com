# Schema.org

## Present (Next)
- Organization + WebSite (+ SearchAction) on home
- Course + BreadcrumbList on course pages
- Article / breadcrumbs via CMS `schemaSuggestion`
- Docs: TechArticle / LearningResource + breadcrumbs
- Live/Event schema on live routes

## Issues
- Course lacked `hasCourseInstance` + `offers` → enriched in `courseJsonLd`
- Organization `sameAs` empty → `ORGANIZATION_SAME_AS` hook added
- Category ItemList URLs were relative → absolute locale URLs
- Organization/logo still SVG (pair with raster OG work)
- API breadcrumb names hardcoded English

## Validation
After deploy, test with Rich Results Test on:
- `/fa/` (Org + WebSite)
- `/fa/learn/course/{slug}` (Course + Offer)
- `/fa/articles/{slug}` (Article)
- `/fa/docs/{tech}/...` (TechArticle)
