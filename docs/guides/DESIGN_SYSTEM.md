# Design System Guide

## Installed skill

UI/UX Pro Max is installed at `.cursor/skills/ui-ux-pro-max`.

Generate / refresh recommendations:

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/design_system.py \
  -p "MEGA JS" -f markdown \
  "developer coding bootcamp learning platform challenges"
```

Persisted project system:

- `design/docs/design-system/mega-js/MASTER.md`
- `design/docs/design-system/mega-js/pages/home.md`

## Code source of truth

Stack wiring (required reading): [`UI_STACK.md`](./UI_STACK.md)

```
@megajs/design-tokens (--mj-*)
  → globals.css maps to shadcn tokens (--primary, --background, …)
  → Tailwind v4 @theme utilities
  → shadcn/ui components
```

`packages/design-tokens` exports:

- Brand yellow `#ffd400` / canvas `#020617` (light `#F8FAFC`)
- Light + dark CSS variables (`src/tokens.css`)
- Fonts: Space Grotesk · IBM Plex Sans · Vazirmatn · JetBrains Mono
- Motion + radii

Apps import CSS via:

```css
@import "@megajs/design-tokens/css";
@import "shadcn/tailwind.css";
```

Add components:

```bash
cd apps/web   # or apps/admin
pnpm dlx shadcn@latest add <component> -y
```

## Rules for new UI

1. Use design tokens / shadcn semantic classes (`bg-primary`, `text-muted-foreground`) — no random hex
2. Prefer shadcn primitives (`Button`, `Input`, `Card`, `Sheet`) before custom markup
3. Lucide icons only (no emoji icons)
4. Support FA RTL and EN LTR
5. Support light + dark via `.dark` (next-themes)
6. Follow page overrides under `design/.../pages/` when present
7. Keep first viewport brand-first on marketing pages
