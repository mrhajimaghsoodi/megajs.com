# Live production incident

## Empty HTML
- URL: `https://megajs.com/`
- Status: 200
- Body size: 0 bytes (browser UA, Googlebot UA, Playwright Chromium)
- Headers still show WordPress (`wp-json` Link relations), WP Rocket on robots.txt
- Locale paths `/fa/`, `/en/` → 404 with empty body
- Agent-UX score meaningless (no DOM landmarks)

## Spam
- `X-WP-Total: 290` posts
- Latest 20: 19 casino/gambling spam under `/business-small-business/`
- Category count: 63
- Older pages (2024) still contain legitimate JS learning content

## Sitemaps
- Declared: `Sitemap: https://megajs.com/sitemap_index.xml`
- Checked empty/invalid: sitemap_index.xml, sitemap.xml, wp-sitemap.xml

## Recommendation
Treat as security + SEO emergency: quarantine publishing, purge spam, restore HTML or cut over to Next.
