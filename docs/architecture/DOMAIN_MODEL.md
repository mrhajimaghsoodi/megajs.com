# Domain Model

Prisma schema: `apps/api/prisma/schema.prisma`  
Shared rules: `packages/domain`

## Identity

- `User` — canonical person
- `AuthIdentity` — phone | google | github
- `Session` — client sessions
- `OtpCode` — hashed SMS codes

## Catalog

- `Track` (+ `TrackI18n`) — year-plan learning path
- `Course` (+ i18n) — `accessTier`: free | subscription | paid
- `Module` / `Lesson` (+ i18n, assets)
- `Article`, `PodcastEpisode`
- `SeoMeta` — per entity/locale meta, canonical, schema JSON, noindex

## Access

- `Enrollment` — owned course access
- `Plan` / `Subscription` — recurring access
- `Order` — cash + optional `tokenSpent`

Entitlement helper: `canAccessContent()` in `@megajs/domain`.

## Practice economy

- `Challenge` + `TestCase` + `Submission`
- Score → XP → tokens (`pointsToTokens`, default 100 pts = 1 token)
- `Wallet` + append-only `LedgerEntry`
- Tokens redeemable for subscription/course (not cash-out)

## Live

- `LiveEvent` + i18n
- `destinationsJson`: site/youtube/aparat/instagram
- `LiveRegistration`

## Ops

- `Redirect` — SEO migrations / old URL map (even though content is greenfield, useful for domain history)
- `AuditLog` — admin mutations
