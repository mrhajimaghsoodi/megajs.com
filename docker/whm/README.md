# WHM / cPanel reverse proxy for MEGA JS

WordPress sites keep using WHM on ports **80/443**.  
MEGA JS Docker listens only on **127.0.0.1** ports **13000 / 14000 / 13001**.

## Enable Apache modules (WHM)

WHM → **EasyApache 4** → ensure these are installed:

- `mod_proxy`
- `mod_proxy_http`
- `mod_proxy_wstunnel`
- `mod_rewrite`
- `mod_ssl`

## Soft launch (recommended while WordPress still owns megajs.com)

1. In WHM create subdomain: `app.megajs.com` (and `admin.megajs.com`).
2. Point DNS A records for `app` and `admin` to this VPS IP.
3. AutoSSL for both.
4. Attach `docker/whm/app.megajs.com.conf` and `admin.megajs.com.conf` to those vhosts.
5. Set env:
   - `WEB_ORIGIN=https://app.megajs.com`
   - `ADMIN_ORIGIN=https://admin.megajs.com`
   - `NEXT_PUBLIC_SITE_URL=https://app.megajs.com`
   - `NEXT_PUBLIC_API_BASE_URL=https://app.megajs.com/api`
6. Rebuild web/admin images after env change (`docker compose ... up -d --build`).

## Cutover megajs.com

1. Backup the WordPress account.
2. Stop serving WP for that vhost (empty docroot or suspend WP).
3. Apply `megajs.com.conf` to the `megajs.com` vhost.
4. Rebuild with production URLs (`https://megajs.com`).

## How to attach includes

### Option A — Include Editor (global Pre VirtualHost)

WHM → Apache Configuration → **Include Editor** → Pre VirtualHost Include → `All Versions`

Only use this if you guard with `ServerName` checks; prefer Option B.

### Option B — Per-domain include (preferred)

As root, place files where your Apache vhost includes them, e.g.:

```bash
# paths vary by cPanel version — confirm with:
# grep -R Include /etc/apache2/conf.d/userdata 2>/dev/null | head

mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/USER/megajs.com
cp docker/whm/megajs.com.conf \
  /etc/apache2/conf.d/userdata/ssl/2_4/USER/megajs.com/megajs-proxy.conf

mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/USER/admin.megajs.com
cp docker/whm/admin.megajs.com.conf \
  /etc/apache2/conf.d/userdata/ssl/2_4/USER/admin.megajs.com/megajs-admin-proxy.conf

# rebuild Apache userdata + restart
/scripts/rebuildhttpdconf
/scripts/restartsrv_httpd
```

Replace `USER` with the cPanel username that owns each domain.

## Verify

```bash
curl -fsS http://127.0.0.1:14000/api/health
curl -fsS http://127.0.0.1:13000/fa
curl -fsS http://127.0.0.1:13001/
curl -fsSI https://app.megajs.com/api/health
curl -fsSI https://admin.megajs.com/
```
