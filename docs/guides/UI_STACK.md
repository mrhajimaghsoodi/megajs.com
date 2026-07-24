# UI stack — Tailwind · shadcn/ui · Design System

MEGA JS web and admin share one visual system:

```
@megajs/design-tokens   →  brand CSS vars (--mj-*)
        ↓
apps/*/src/app/globals.css  →  maps --mj-* → shadcn tokens (--primary, --background, …)
        ↓
@theme inline (Tailwind v4)  →  utilities (bg-primary, text-muted-foreground, …)
        ↓
shadcn/ui components     →  Button, Input, Card, Sheet, …
```

## Packages

| Layer | Location |
|-------|----------|
| Design tokens | `packages/design-tokens` |
| Design docs | `design/docs/design-system/mega-js/MASTER.md` |
| Web shadcn | `apps/web/components.json` + `apps/web/src/components/ui/*` |
| Admin shadcn | `apps/admin/components.json` + `apps/admin/src/components/ui/*` |

## Brand lock

- Accent / primary: `#ffd400`
- Ink / canvas: `#1a1a1a`
- Do not introduce purple SaaS gradients or cream editorial defaults

## Adding a component

From the app folder:

```bash
cd apps/web   # or apps/admin
pnpm dlx shadcn@latest add <name> -y
```

Use semantic classes (`bg-primary`, `text-muted-foreground`, `border-border`) — not raw hex — inside components.

## Motion helpers

`components/ui/motion.tsx` keeps page enter / collapse / stagger / skeleton compositions.
Interactive controls (buttons, inputs, sheets) come from **shadcn**, not the old custom Button.
