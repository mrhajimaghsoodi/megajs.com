# Roadmap

## Curriculum publish plan

| Year | Tracks | Courses |
|------|--------|---------|
| 1 | Fundamentals, Language Core, React Ecosystem | HTML, CSS, Tailwind, JS, TS, React, Next, popular libs |
| 2 | Frameworks Landscape | Vue, Angular |
| 3 | App Platforms | React Native, Electron |
| 4 | Backend JS | Node, NestJS |

## Delivery waves (platform)

| Wave | Ship |
|------|------|
| M1 (foundation) | Monorepo, design system, web SEO shell, API catalog+OTP, admin shell, docs |
| M2 | Billing stub, wallet redeem, judge runner, richer user panel, CI/CD + VPS deploy |
| M3 | Live API + register + admin Live Ops + web live detail/player shell |
| M4 | Expo mobile + Electron desktop clients (shared SDK/tokens) |

## Panel completeness (current)

- **Admin:** dashboard, catalog, SEO hub, users/roles, billing orders, practice, live ops, **support tickets**, audit, OTP staff login
- **User:** overview, learning, wallet, orders, practice history, live regs, **support tickets**, settings

## M2.1 / later follow-ups

- Real payment gateway (Zarinpal / Stripe)
- Production SMS OTP provider
- Hardened judge sandbox (isolated-vm / container per run)
- Real RTMP ingest + restream connectors
- Ticket attachments / email notifications
- Make GitHub repo private + wire deploy secrets (see `docs/guides/DEPLOYMENT.md`)
- Native Electron UI beyond web shell (optional)
