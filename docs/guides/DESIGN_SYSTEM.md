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

`packages/design-tokens` exports:

- Brand yellow `#ffd400` / ink `#1a1a1a`
- Light + dark CSS variables (`src/tokens.css`)
- Fonts: Space Grotesk · DM Sans · Vazirmatn · JetBrains Mono
- Motion + radii + breakpoints

Apps import CSS via:

```css
@import "@megajs/design-tokens/css";
```

## Rules for new UI

1. Use tokens — do not hardcode random colors
2. Lucide icons only (no emoji icons)
3. Clickable elements need `cursor-pointer` + hover 150–300ms
4. Support FA RTL and EN LTR
5. Support light + dark
6. Follow page overrides under `design/.../pages/` when present
7. Keep first viewport brand-first on marketing pages
