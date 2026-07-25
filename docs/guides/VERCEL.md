# Deploy web + admin on Vercel

GitHub Pages cannot run this stack (NestJS API + Prisma + Next.js SSR).  
Use **Vercel for `web` + `admin`**, and host the **API** separately (current VPS/Docker path, or Railway/Fly/Render + Postgres).

## Prerequisites

1. Vercel account linked to the GitHub repo  
2. Authenticate in Cursor Desktop: Vercel MCP → Sign in  
   (or export `VERCEL_TOKEN` for CLI)  
3. A public API base URL, e.g. `https://api.megajs.com/api` or your VPS `/api`

## Create two Vercel projects

### Project A — Site (`@megajs/web`)

| Setting | Value |
|---------|-------|
| Root Directory | `apps/web` |
| Framework | Next.js |
| Install Command | `cd ../.. && pnpm install --frozen-lockfile` |
| Build Command | `cd ../.. && pnpm --filter @megajs/design-tokens build && pnpm --filter @megajs/domain build && pnpm --filter @megajs/sdk build && pnpm --filter @megajs/web build` |
| Node | 22.x |

**Env vars**

```
NEXT_PUBLIC_API_BASE_URL=https://YOUR_API_HOST/api
NEXT_PUBLIC_SITE_URL=https://YOUR_WEB_HOST
REVALIDATE_SECRET=long-random
```

### Project B — Admin (`@megajs/admin`)

| Setting | Value |
|---------|-------|
| Root Directory | `apps/admin` |
| Framework | Next.js |
| Install Command | `cd ../.. && pnpm install --frozen-lockfile` |
| Build Command | `cd ../.. && pnpm --filter @megajs/design-tokens build && pnpm --filter @megajs/domain build && pnpm --filter @megajs/admin build` |
| Node | 22.x |

**Env vars**

```
NEXT_PUBLIC_API_BASE_URL=https://YOUR_API_HOST/api
NEXT_PUBLIC_SITE_URL=https://YOUR_WEB_HOST
```

## API CORS

On the Nest API set:

```
WEB_ORIGIN=https://YOUR_WEB_HOST
ADMIN_ORIGIN=https://YOUR_ADMIN_HOST
```

`apps/api` also allows `*.vercel.app` and `*.trycloudflare.com` origins for previews.

## CLI (after `vercel login`)

```bash
# From repo root — link web
cd apps/web && npx vercel link --yes
npx vercel env add NEXT_PUBLIC_API_BASE_URL
npx vercel env add NEXT_PUBLIC_SITE_URL
npx vercel --prod

# Admin
cd ../admin && npx vercel link --yes
npx vercel env add NEXT_PUBLIC_API_BASE_URL
npx vercel env add NEXT_PUBLIC_SITE_URL
npx vercel --prod
```

## Production alternative (already in repo)

WHM/VPS Docker stack: [`DEPLOYMENT.md`](./DEPLOYMENT.md) + `.github/workflows/deploy.yml`  
brings up **web + admin + api + postgres** together on your server.
