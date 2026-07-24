# MEGA JS Desktop (Electron)

Wave **M4** desktop shell. v1 loads the web learning app (same UX/API).

```bash
# terminal 1 — web
pnpm --filter @megajs/web dev

# terminal 2 — desktop
pnpm --filter @megajs/desktop dev
```

Override URL:

```bash
MEGAJS_DESKTOP_URL=https://megajs.com/fa pnpm --filter @megajs/desktop start
```
