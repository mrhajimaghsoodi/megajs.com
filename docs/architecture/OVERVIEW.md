# Architecture Overview

## Goals

Build a **JavaScript ecosystem learning OS** with:

- SEO-first public web
- Daily learning app experience
- Shared backend for Web, React Native, and Electron
- Free / Subscription / Paid access
- Practice challenges that mint redeemable tokens
- Phone OTP as universal identity (+ Google/GitHub linking)
- Live webinars simulcast to site + YouTube + Aparat + Instagram
- Bilingual FA/EN and light/dark themes

## High-level diagram

```text
Acquisition
  SEO (Next.js public pages)
  Instagram / YouTube / Aparat → canonical site URLs
           │
           ▼
     NestJS API  (/api)
  Auth · Catalog · Billing · Practice · Wallet · Live · SEO meta
           │
     ┌─────┴──────┬────────────┐
     ▼            ▼            ▼
  apps/web     apps/mobile   apps/desktop
  (Next.js)    (Expo RN)     (Electron shell)
     ▲
     │
  apps/admin (Next.js ops console)
```

## Boundaries

| Layer | Owns | Must not own |
|-------|------|--------------|
| `apps/web` | SEO pages, UX, i18n, themes | Payment truth, entitlements |
| `apps/admin` | Editorial + SEO ops UI | Public SEO ranking pages |
| `apps/api` | Auth, catalog, orders, wallet ledger, live ops | Video binary storage |
| CDN / Stream | Video/audio bytes | Business rules |
| `packages/*` | Shared types/rules/tokens/SDK | Environment secrets |

## Content vs Commerce

**Content graph:** Track → Course → Module → Lesson → Assets (text/video/audio) · Article · Podcast · Challenge · LiveEvent  

**Commerce graph:** User → Identities → Enrollment / Subscription / Order → Entitlement → Wallet/Ledger  

Clients ask API: `canAccess(user, lesson)`.

## Auth model

1. Primary universal login: **Phone OTP** (web/mobile/desktop)
2. Optional identities: Google, GitHub
3. Account linking merges into one `User`
4. Soft/hard gate: sync phone before purchase/token redeem/live (product rule)

## Live architecture

```text
OBS → Ingest (Arvan/Cloudflare/Mux)
        ├─ site player
        ├─ restream YouTube
        ├─ restream Aparat
        └─ restream Instagram (best-effort)
Recording → VOD → Lesson/Podcast clips
```

Each live event has an SEO landing page.

## Multi-client strategy

- Ship **web first** (SEO + app shell)
- Mobile/Desktop consume same API + `@megajs/sdk` + domain rules
- Electron v1 can wrap web app; later native shell if needed
- Shared design tokens keep UI synced

## Local vs production data

- Local default: SQLite via Prisma (`apps/api/prisma/dev.db`)
- Production target: PostgreSQL (same schema; swap datasource provider)
