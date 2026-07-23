# Private repo + production deploy (VPS + domain)

This guide covers:
1. Making `megajs.com` GitHub repo **private** (only you)
2. Configuring GitHub Actions secrets for auto-deploy on merge to `master`
3. Preparing the VPS, Docker, Nginx, SSL, and DNS for `megajs.com`

> Cloud agents / `gh` in this environment are read-only for repo settings.
> You must flip visibility and add secrets yourself in GitHub UI.

---

Persian zero-to-production walkthrough (domain, staging, Cursor, tokens):
[`GO_LIVE_FA.md`](./GO_LIVE_FA.md)

**Already have WHM/cPanel + WordPress on the same VPS?**  
Do **not** bind Docker to ports 80/443. Follow:
[`WHM_DEPLOY_FA.md`](./WHM_DEPLOY_FA.md) + [`docker/whm/README.md`](../../docker/whm/README.md)

Default `docker-compose.prod.yml` publishes only `127.0.0.1:13000/14000/13001`.  
Enable Docker Nginx on 80/443 **only** with `--profile standalone` on a bare VPS (no WHM).

---

## 1) Make the GitHub repository private

1. Open https://github.com/mrhajimaghsoodi/megajs.com/settings
2. Scroll to **Danger Zone** → **Change repository visibility** → **Make private**
3. Confirm

Optional hardening:
- Settings → Collaborators: keep empty (only you)
- Settings → Actions → General → allow Actions for this private repo
- Settings → Branches → protect `master` (require PR + CI green)

Private repos still support Actions on your paid/free plan (private Actions minutes apply on some plans).

---

## 2) GitHub Actions pipeline (already in repo)

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `.github/workflows/ci.yml` | PR + push | Install, Prisma, build api/web/admin |
| `.github/workflows/deploy.yml` | push/`workflow_dispatch` on `master` | rsync → Docker Compose restart → health check |
| `.github/workflows/preview.yml` | PR | Reminder note (preview hosting optional later) |

### Create Environment + Secrets

1. GitHub → **Settings → Environments → New environment** → name: `production`
2. Add secrets:

| Secret | Example | Meaning |
|--------|---------|---------|
| `DEPLOY_HOST` | `203.0.113.10` | VPS public IP or hostname |
| `DEPLOY_USER` | `deploy` | Linux user with Docker permission |
| `DEPLOY_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----...` | Private key (full PEM) |
| `DEPLOY_PATH` | `/opt/megajs` | Absolute path on server |
| `SITE_URL` | `https://app.megajs.com` or `https://megajs.com` | Optional public health check after WHM proxy |

Also add the public key to the server:

```bash
# on your laptop
ssh-keygen -t ed25519 -C "megajs-deploy" -f ~/.ssh/megajs_deploy
# put private key content into DEPLOY_SSH_KEY secret
# put public key on server:
ssh-copy-id -i ~/.ssh/megajs_deploy.pub deploy@YOUR_SERVER_IP
```

Flow after this:
1. Open PR → CI runs
2. Merge to `master` → Deploy workflow publishes to the VPS
3. Visit `https://megajs.com`

---

## 3) DNS for domain

At your DNS provider for `megajs.com`:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `YOUR_SERVER_IP` |
| A | `www` | `YOUR_SERVER_IP` |
| A | `admin` | `YOUR_SERVER_IP` |

Wait for propagation (`dig megajs.com +short`).

If WordPress is still on the same domain, plan a cutover window: point DNS only when Docker stack is healthy.

---

## 4) Server bootstrap (Ubuntu 22.04/24.04)

```bash
# as root
apt update && apt upgrade -y
apt install -y ca-certificates curl git rsync ufw

# Docker
curl -fsSL https://get.docker.com | sh
usermod -aG docker deploy   # create deploy user first if needed

# Firewall — on WHM servers, CSF/firewall already manages 80/443; do not break it.
# On bare VPS only:
# ufw allow OpenSSH && ufw allow 80/tcp && ufw allow 443/tcp && ufw enable

# App directory (prefer /opt/megajs so it stays outside cPanel home dirs)
mkdir -p /opt/megajs
chown -R deploy:deploy /opt/megajs
```

Create `/opt/megajs/.env.production` (never commit) from `.env.production.example`.

First manual bring-up (before Actions takes over):

```bash
# as deploy
cd /opt/megajs
# populate via first Actions rsync, or:
# git clone git@github.com:mrhajimaghsoodi/megajs.com.git .
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
curl -fsS http://127.0.0.1:14000/api/health
bash scripts/smoke-deploy.sh
```

Then attach WHM Apache proxy includes from `docker/whm/` (required on cPanel VPS).

Because the repo will be private, the server either:
- uses deploy key (read-only) for `git clone`, **or**
- relies only on Actions `rsync` (recommended with this workflow)

---

## 5) TLS

### WHM / cPanel VPS (your case)

Use **AutoSSL** / cPanel SSL for `app.megajs.com`, `admin.megajs.com`, and later `megajs.com`.  
Do not run the Docker Certbot/Nginx flow below on this server.

### Bare VPS only (`--profile standalone`)

With Docker Nginx on port 80:

```bash
# on server
docker run --rm -it \
  -v /opt/megajs/docker/certbot/www:/var/www/certbot \
  -v /opt/megajs/docker/certbot/conf:/etc/letsencrypt \
  certbot/certbot certonly --webroot \
  -w /var/www/certbot \
  -d megajs.com -d www.megajs.com -d admin.megajs.com \
  --email YOUR_EMAIL --agree-tos --no-eff-email
```

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production --profile standalone up -d
```

---

## 6) Verify production

```bash
# always (on VPS)
curl -fsS http://127.0.0.1:14000/api/health
bash /opt/megajs/scripts/smoke-deploy.sh

# after WHM proxy + DNS
curl -fsS https://app.megajs.com/api/health   # soft launch
# or
curl -fsS https://megajs.com/api/health
curl -fsS https://admin.megajs.com
```

GitHub → Actions → **Deploy Production** should show green after each merge to `master`.

---

## 7) Rollback

```bash
cd /opt/megajs
# re-run a previous successful Actions deploy / restore rsynced release backup
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

Keep daily DB backups:

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production exec -T postgres \
  pg_dump -U megajs megajs > backup-$(date +%F).sql
```
