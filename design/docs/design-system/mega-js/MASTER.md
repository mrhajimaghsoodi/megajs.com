# MEGA JS Design System — Source of Truth

> Regenerated from **UI/UX Pro Max** dump prompt:
> *“Build a minimal developer tools landing page with dark mode, code snippet previews, feature comparison table, integration logos, and documentation link. Use syntax highlighting colors.”*
>
> Product override: **remove legacy yellow `#ffd400`**. Keep **light + dark**.

## Product

**MEGA JS** — daily JavaScript learning OS (web + React Native + Electron)

## Direction

| Layer | Choice | Source |
|-------|--------|--------|
| Archetype | API Developer Portal / Developer Tool IDE | UUPM colors.csv |
| Style | Minimal developer tools · OLED dark + light slate | dump prompt |
| Accent | Endpoint green `#22C55E` (light: `#16A34A`) | UUPM |
| Surfaces | Dark `#020617` / Light `#F8FAFC` | UUPM |
| Type | JetBrains Mono (display+code) · IBM Plex Sans · Vazirmatn | Developer Mono |
| Landing | Hero + code previews + comparison table + integrations + docs | dump prompt |

## Color tokens

### Syntax highlighting
`--mj-syn-keyword` · `--mj-syn-string` · `--mj-syn-function` · `--mj-syn-number` · `--mj-syn-comment` · `--mj-syn-operator` · `--mj-syn-property`

### Semantic
| Role | Light | Dark |
|------|-------|------|
| Background | `#F8FAFC` | `#020617` |
| Foreground | `#0F172A` | `#F8FAFC` |
| Card | `#FFFFFF` | `#0E1223` |
| Accent / Primary | `#16A34A` | `#22C55E` |
| Border | `#E2E8F0` | `#334155` |
| Muted FG | `#64748B` | `#94A3B8` |

**Removed:** `#ffd400` yellow brand accent.

## Stack

`@megajs/design-tokens` → shadcn CSS vars → Tailwind v4 → shadcn/ui

See `docs/guides/UI_STACK.md`.

## Rules

1. Prefer semantic classes (`bg-primary`, `text-muted-foreground`)
2. Code previews use `.syn-*` classes only — never paint whole UI purple
3. Lucide icons only
4. FA RTL / EN LTR
5. Light + dark via `.dark`
6. First viewport: brand + one line + support + CTA/docs + one code preview
