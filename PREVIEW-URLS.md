# Live preview (Cloudflare tunnel)

Ephemeral preview while the cloud agent is running. Not a production deploy.

| Surface | URL |
|---------|-----|
| **Site (web)** | https://downloadable-ultimately-script-advice.trycloudflare.com/fa |
| **Admin** | https://agenda-task-holmes-corpus.trycloudflare.com |
| **API health** | https://avatar-nursing-beef-optimum.trycloudflare.com/api/health |

## Admin login (seed)

1. Open Admin → login
2. Phone: `+989120000000`
3. Request OTP — in non-production the API returns `devCode` in the JSON body (Network tab on `/api/auth/otp/request`)

Demo user: `+989121111111`

## Why not GitHub Pages / Vercel (yet)

- **GitHub Pages** is static-only — cannot host NestJS API, Prisma DB, or Next.js SSR apps.
- **Vercel** is the right host for `web` + `admin`, but this cloud environment has no Vercel auth token. Authenticate the Vercel MCP in Cursor Desktop (or set `VERCEL_TOKEN`) and we can wire production projects.
- Existing production path in repo remains **VPS + Docker** via `.github/workflows/deploy.yml`.
