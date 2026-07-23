# Local Development

## Requirements

- Node 22+
- pnpm 10+
- Python 3 (for UI/UX Pro Max skill scripts only)

## Install

```bash
pnpm install
pnpm --filter @megajs/design-tokens build
pnpm --filter @megajs/domain build
pnpm --filter @megajs/sdk build
```

## Database

```bash
cd apps/api
echo 'DATABASE_URL="file:./dev.db"' > .env
pnpm prisma:push
pnpm prisma:seed
```

## Run

```bash
pnpm --filter @megajs/api dev     # :4000/api
pnpm --filter @megajs/web dev     # :3000
pnpm --filter @megajs/admin dev   # :3001
```

## OTP in development

`POST /api/auth/otp/request` returns `devCode` when not in production.

## Useful URLs

- https://localhost replaced by:
  - http://localhost:3000/fa
  - http://localhost:3000/en
  - http://localhost:3001
  - http://localhost:4000/api/health
  - http://localhost:4000/api/catalog/tracks?locale=fa
