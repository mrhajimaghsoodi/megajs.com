# MEGA JS Platform

Greenfield JavaScript learning OS for [megajs.com](https://megajs.com).

**Stack:** Next.js (web + admin) · NestJS API · PostgreSQL-ready Prisma (SQLite for local) · shared TypeScript packages · UI/UX Pro Max design system.

## Quick start

```bash
pnpm install
pnpm --filter @megajs/design-tokens build
pnpm --filter @megajs/domain build
pnpm --filter @megajs/sdk build

# API
pnpm --filter @megajs/api prisma:push
pnpm --filter @megajs/api prisma:seed
pnpm --filter @megajs/api dev   # http://localhost:4000/api

# Web
pnpm --filter @megajs/web dev   # http://localhost:3000/fa

# Admin
pnpm --filter @megajs/admin dev # http://localhost:3001
```

Or from root: `pnpm dev` (turbo parallel).

## Monorepo map

```text
apps/
  web/      Public SEO site + learning web app (fa/en, light/dark)
  admin/   SEO-first operations console
  api/     NestJS source of truth (auth, catalog, billing domain)
packages/
  design-tokens/  Brand colors, themes, fonts, motion
  domain/         Shared Zod + entitlement/token rules + curriculum plan
  sdk/            API client for web/mobile/desktop
  tsconfig/       Shared TS configs
design/
  brand/          Official logo + tokens.json
  docs/design-system/mega-js/  MASTER design system (UI/UX Pro Max)
docs/             Architecture & onboarding for hired engineers
.cursor/skills/   ui-ux-pro-max + related design skills
```

## Brand

- Yellow `#ffd400`
- Ink `#1a1a1a`
- Logo: `design/brand/logo.svg` (copied to app `public/`)

## Product pillars

1. Daily learning app (SoloLearn-like habit loop)
2. Free + Subscription + Paid courses
3. Practice → score → tokens → checkout credit
4. Phone OTP as universal login (+ Google/GitHub link)
5. Live webinars simulcast (site / YouTube / Aparat / Instagram)
6. SEO first acquisition; Instagram/YouTube/Aparat second
7. Multi-client: Web now · React Native · Electron (shared API/SDK)

## Documentation

Start here: [`docs/README.md`](docs/README.md)

Production deploy (private repo + VPS + domain): [`docs/guides/DEPLOYMENT.md`](docs/guides/DEPLOYMENT.md)

## License

Private — MEGA JS
