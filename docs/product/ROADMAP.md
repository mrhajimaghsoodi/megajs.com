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
| M2 (in progress) | Billing stub, wallet redeem, judge runner, richer user panel, **CI/CD + VPS deploy** |
| M3 | Live ingest + multi-destination restream |
| M4 | Expo mobile + Electron desktop clients |

## Non-goals for M1

- Migrating old WordPress content
- Full Google/GitHub OAuth production credentials
- Production SMS provider
- Microservice split

## M2.1 follow-ups

- Real payment gateway (Zarinpal / Stripe)
- Production SMS OTP provider
- Hardened judge sandbox (isolated-vm / container per run)
- Make GitHub repo private + wire deploy secrets (see `docs/guides/DEPLOYMENT.md`)
