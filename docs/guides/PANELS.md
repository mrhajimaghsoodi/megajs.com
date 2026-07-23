# Admin & User panels

## Admin (`apps/admin` → :3001)

Staff login via OTP. Seed admin phone: `+989120000000` (devCode returned in non-prod).

| Route | Purpose |
|-------|---------|
| `/login` | Staff OTP |
| `/` | Ops dashboard KPIs |
| `/catalog` | Tracks & courses |
| `/seo` | SEO Hub inventory |
| `/users` | Search users, change roles |
| `/billing` | Orders list |
| `/practice` | Challenges |
| `/live` | Create events, set scheduled/live/ended, destinations |
| `/audit` | Audit log |

API: `/api/admin/*` and `/api/admin/live/*` (role-gated).

## User (`apps/web` → `/[locale]/profile`)

| Route | Purpose |
|-------|---------|
| `/profile` | Overview + streak/tokens/subs |
| `/profile/learning` | Enrollments + progress |
| `/profile/wallet` | Balance + ledger |
| `/profile/orders` | Purchase history |
| `/profile/practice` | Submission history |
| `/profile/live` | Live registrations |
| `/profile/settings` | Name/theme/locale |

API: `/api/me/*`, `/api/wallet/*`, `/api/live/*`
