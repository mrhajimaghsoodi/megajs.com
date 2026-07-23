# Agent Skills

Project skills live in `.agents/skills/` and are synced to Cursor under `.cursor/skills/`.

Manage with:

```bash
npx skills list
npx skills find "<query>"
npx skills add <owner/repo> --skill <name> -a cursor -y
npx skills update -y
```

## Installed for MEGA JS

| Skill | Why |
|-------|-----|
| `shadcn` | UI component system for web/admin |
| `migrate-radix-to-base` | Radix → Base UI migration helpers (from shadcn/ui) |
| `find-skills` | Discover more skills when needed |
| `vercel-react-best-practices` | Next.js/React performance patterns |
| `vercel-composition-patterns` | Scalable React component APIs |
| `vercel-react-native-skills` | Future Expo/RN client |
| `web-design-guidelines` | UI/UX + a11y review checklist |
| `writing-guidelines` | Docs/prose quality |
| `prisma-postgres` | Official Prisma guidance (prod DB target) |
| `nestjs-patterns` | NestJS module/API patterns |
| `seo-audit` | SEO is acquisition priority #1 |
| `programmatic-seo` | Track/course/lesson landing scale |
| `playwright-best-practices` | E2E testing standards |
| `tailwind-design-system` | Tokenized Tailwind workflows |
| `accessibility` | WCAG-oriented quality |
| `dotenv` / `dotenvx` | Env loading patterns (synced from deps) |

Also present from earlier bootstrap (UI/UX Pro Max installer):

- `.cursor/skills/ui-ux-pro-max`
- `.cursor/skills/ui-styling`
- `.cursor/skills/design-system`
- `.cursor/skills/brand`

## Rule

Prefer **official / high-install** skills (`vercel-labs`, `prisma`, `shadcn`, `microsoft`-adjacent reputable sources). Before adding obscure skills, check installs on https://skills.sh/
