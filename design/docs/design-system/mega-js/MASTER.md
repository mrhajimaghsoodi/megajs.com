# MEGA JS Design System — Source of Truth

> UI/UX Pro Max dump prompt (structure kept):
> *“Build a minimal developer tools landing page with dark mode, code snippet previews, feature comparison table, integration logos, and documentation link. Use syntax highlighting colors.”*
>
> Brand lock: **primary accent = yellow `#ffd400`**. Keep **light + dark**.

## Product

**MEGA JS** — daily JavaScript learning OS (web + React Native + Electron)

## Direction

| Layer | Choice |
|-------|--------|
| Archetype | Minimal developer tools landing |
| Accent | Brand yellow `#ffd400` (text on accent: `#0F172A`) |
| Surfaces | Dark `#020617` / Light `#F8FAFC` |
| Type | JetBrains Mono (display+code) · IBM Plex Sans · Vazirmatn |
| Landing | Hero + code previews + comparison table + integrations + docs |
| Code color | Syntax tokens (`.syn-*`) — separate from brand yellow |

## Color tokens

### Syntax highlighting
`--mj-syn-keyword` · `--mj-syn-string` · `--mj-syn-function` · `--mj-syn-number` · `--mj-syn-comment` · `--mj-syn-operator` · `--mj-syn-property`

### Semantic
| Role | Light | Dark |
|------|-------|------|
| Background | `#F8FAFC` | `#020617` |
| Foreground | `#0F172A` | `#F8FAFC` |
| Card | `#FFFFFF` | `#0E1223` |
| Accent / Primary | `#FFD400` | `#FFD400` |
| Accent FG | `#0F172A` | `#0F172A` |
| Success | `#16A34A` | `#22C55E` |
| Border | `#E2E8F0` | `#334155` |

## Stack

`@megajs/design-tokens` → shadcn CSS vars → Tailwind v4 → shadcn/ui

See `docs/guides/UI_STACK.md`.

## Rules

1. Prefer semantic classes (`bg-primary`, `text-muted-foreground`)
2. Code previews use `.syn-*` — brand yellow is for CTAs / focus, not every token
3. Lucide icons only
4. FA RTL / EN LTR
5. Light + dark via `.dark`
6. First viewport: brand + one line + support + CTA/docs + one code preview
