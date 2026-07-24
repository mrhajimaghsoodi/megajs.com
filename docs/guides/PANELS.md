# Admin & User panels

## Locales & direction

| Surface | FA | EN |
|---------|----|----|
| Web (`/[locale]/…`) | Full Persian UI, `dir=rtl` | Full English UI, `dir=ltr` |
| Admin | Toggle **فا / EN** (saved in `mj_admin_locale`) | Same panels, `dir` flips with locale |

Code, phone numbers, OTP, monospace / `pre` blocks stay **LTR** in both locales (`direction: ltr` on `.font-mono`, `code`, `pre`, `[data-code]`).

## Admin (`apps/admin` → :3001)

Staff login via OTP. Seed admin phone: `+989120000000` (devCode returned in non-prod).

| Route | Purpose |
|-------|---------|
| `/login` | Staff OTP |
| `/` | Ops dashboard KPIs (incl. open tickets) |
| `/catalog` | Tracks & courses |
| `/seo` | SEO Hub inventory |
| `/users` | Search users, change roles |
| `/billing` | Orders list |
| `/practice` | Challenges |
| `/live` | Create events, set scheduled/live→ended, destinations |
| `/support` | Helpdesk inbox — filter, reply, status/priority |
| `/support/[id]` | Ticket thread + staff controls |
| `/audit` | Audit log |

API: `/api/admin/*`, `/api/admin/live/*`, `/api/admin/support/*` (role-gated).

## User (`apps/web` → `/[locale]/profile`)

| Route | Purpose |
|-------|---------|
| `/profile` | Overview + streak/tokens/subs + support shortcut |
| `/profile/learning` | Enrollments + progress |
| `/profile/wallet` | Balance + ledger |
| `/profile/orders` | Purchase history |
| `/profile/practice` | Submission history |
| `/profile/live` | Live registrations |
| `/profile/support` | Create tickets + list |
| `/profile/support/[id]` | Thread, reply, close |
| `/profile/settings` | Name/theme/locale |

API: `/api/me/*`, `/api/wallet/*`, `/api/live/*`, `/api/support/*`

## Support tickets

- Categories: `billing` | `technical` | `content` | `account` | `live` | `other`
- Priority: `low` | `normal` | `high` | `urgent`
- Status: `open` → `pending` / `answered` → `resolved` / `closed`
- Seed demo learner `+989121111111` has a sample answered ticket
