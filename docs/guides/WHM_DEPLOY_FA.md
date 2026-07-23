# استقرار MEGA JS کنار وردپرس روی همان VPS (WHM / cPanel)

اگر روی سرور **WHM و چند سایت وردپرسی** دارید، این راهنما برای شماست.

## قانون طلایی

| سرویس | پورت‌های ۸۰ و ۴۴۳ | نقش |
|--------|-------------------|-----|
| **WHM / Apache / LiteSpeed** | مال اوست — دست نزنید | وردپرس‌ها + SSL دامنه |
| **Docker MEGA JS** | فقط `127.0.0.1` | اپ روی ۱۳۰۰۰ / ۱۴۰۰۰ / ۱۳۰۰۱ |
| **پروکسی Apache** | — | دامنه را به Docker وصل می‌کند |

**هرگز** `docker compose ... --profile standalone` را روی سرور cPanel نزنید؛ آن پروفایل Nginx را روی ۸۰/۴۴۳ می‌آورد و با WHM جنگ می‌کند.

---

## معماری نهایی

```
اینترنت
   ↓ :443
Apache (WHM)  ──proxy──►  127.0.0.1:13000  web (Next.js)
              ──/api──►  127.0.0.1:14000  api (NestJS)
admin.*       ──proxy──►  127.0.0.1:13001  admin
                              ↓
                         postgres + redis (فقط داخل Docker)
```

وردپرس‌های دیگر روی همان سرور بدون تغییر می‌مانند.

---

## مرحله ۰ — قبل از هر چیز

1. ریپو GitHub را **Private** کنید.  
2. از وردپرس فعلی `megajs.com` (اگر روی همین سرور است) **بک‌آپ کامل** بگیرید.  
3. حداقل **۲GB RAM آزاد** برای Docker بگذارید (۴GB بهتر است).

---

## مرحله ۱ — نصب Docker روی همان VPS (بدون دست زدن به WHM)

با SSH به‌عنوان root:

```bash
curl -fsSL https://get.docker.com | sh

# کاربر deploy (جدا از کاربران cPanel)
useradd -m -s /bin/bash deploy || true
usermod -aG docker deploy
mkdir -p /opt/megajs
chown -R deploy:deploy /opt/megajs
```

چک کنید پورت‌های Docker با سرویس خاصی تداخل ندارند (پیش‌فرض ما فقط localhost است):

```bash
ss -tlnp | grep -E ':80|:443|:13000|:14000|:13001|:5432'
# 80/443 باید مال Apache/LiteSpeed باشد
# 13000/14000/13001 هنوز نباید چیزی باشد
```

---

## مرحله ۲ — فایل env روی سرور

```bash
sudo -u deploy -i
cd /opt/megajs
# بعد از اولین rsync/clone:
cp .env.production.example .env.production
nano .env.production
```

برای **تست بدون قطع وردپرس megajs.com** (پیشنهادی):

```env
WEB_ORIGIN=https://app.megajs.com
ADMIN_ORIGIN=https://admin.megajs.com
NEXT_PUBLIC_SITE_URL=https://app.megajs.com
NEXT_PUBLIC_API_BASE_URL=https://app.megajs.com/api
POSTGRES_PASSWORD=...قوی...
JWT_SECRET=...قوی...
WEB_HOST_PORT=13000
API_HOST_PORT=14000
ADMIN_HOST_PORT=13001
```

وقتی آماده سوییچ apex شدید، این چهار URL را به `https://megajs.com` برگردانید و image وب/ادمین را دوباره build کنید.

---

## مرحله ۳ — بالا آوردن Docker

```bash
cd /opt/megajs
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

تست لوکال (حتی قبل از اتصال دامنه):

```bash
curl -fsS http://127.0.0.1:14000/api/health
curl -fsS -I http://127.0.0.1:13000/fa
curl -fsS -I http://127.0.0.1:13001/
```

اگر این سه OK باشند، اپ روی سرور زنده است؛ فقط هنوز از اینترنت دیده نمی‌شود.

---

## مرحله ۴ — ساب‌دامین در WHM (نرم، بدون قطع WP)

در WHM / cPanel:

1. ساب‌دامین `app.megajs.com` بسازید (یا Addon Domain).  
2. ساب‌دامین `admin.megajs.com` بسازید.  
3. DNS: رکورد A برای `app` و `admin` → IP همین VPS.  
4. AutoSSL را برای هر دو صادر کنید.

ماژول‌های Apache (EasyApache 4):

- `mod_proxy`
- `mod_proxy_http`
- `mod_proxy_wstunnel`
- `mod_rewrite`
- `mod_ssl`

فایل‌های پروکسی داخل ریپو:

- `docker/whm/megajs.com.conf` (برای app یا بعداً apex)
- `docker/whm/admin.megajs.com.conf`
- توضیح مسیر userdata: `docker/whm/README.md`

نمونه (USER = یوزر cPanel مالک دامنه):

```bash
mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/USER/app.megajs.com
cp /opt/megajs/docker/whm/megajs.com.conf \
  /etc/apache2/conf.d/userdata/ssl/2_4/USER/app.megajs.com/megajs-proxy.conf

mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/USER/admin.megajs.com
cp /opt/megajs/docker/whm/admin.megajs.com.conf \
  /etc/apache2/conf.d/userdata/ssl/2_4/USER/admin.megajs.com/megajs-admin-proxy.conf

/scripts/rebuildhttpdconf
/scripts/restartsrv_httpd
```

تست عمومی:

```bash
curl -fsS https://app.megajs.com/api/health
curl -fsSI https://app.megajs.com/fa
curl -fsSI https://admin.megajs.com/
```

---

## مرحله ۵ — اتصال GitHub Actions (دیپلوی خودکار)

روی لپ‌تاپ:

```bash
ssh-keygen -t ed25519 -C "megajs-deploy" -f ~/.ssh/megajs_deploy
ssh-copy-id -i ~/.ssh/megajs_deploy.pub deploy@IP_VPS
```

GitHub → Settings → Environments → **production** → Secrets:

| Secret | مقدار |
|--------|--------|
| `DEPLOY_HOST` | IP سرور |
| `DEPLOY_USER` | `deploy` |
| `DEPLOY_SSH_KEY` | کل کلید خصوصی `megajs_deploy` |
| `DEPLOY_PATH` | `/opt/megajs` |
| `SITE_URL` | `https://app.megajs.com` (فعلاً) |

بعد از merge به `master`، workflow:

1. با rsync کد را به `/opt/megajs` می‌فرستد (`.env.production` را پاک نمی‌کند)  
2. `docker compose up -d --build`  
3. health روی `127.0.0.1:14000` را چک می‌کند  

---

## مرحله ۶ — سوییچ نهایی `megajs.com` (وقتی آماده بودید)

1. بک‌آپ وردپرس megajs.com  
2. DocumentRoot آن اکانت را خالی/غیرفعال کنید یا پروکسی را روی همان vhost بگذارید  
3. `.env.production` را به URLهای `https://megajs.com` عوض کنید  
4. `docker compose ... up -d --build`  
5. AutoSSL برای apex  
6. `SITE_URL` در GitHub Secrets را به `https://megajs.com` تغییر دهید  

سایت‌های وردپرسی **دیگر** روی همان WHM دست‌نخورده می‌مانند.

---

## چک‌لیست لانچ (بدون خطا)

- [ ] Docker نصب؛ کاربر `deploy` در گروه `docker`  
- [ ] `.env.production` روی سرور (commit نشده)  
- [ ] `curl 127.0.0.1:14000/api/health` → ok  
- [ ] پروکسی Apache فقط برای دامنه(های) MEGA JS  
- [ ] **نه** profile `standalone`  
- [ ] پورت Postgres روی اینترنت publish نشده  
- [ ] GitHub Secrets کامل  
- [ ] ریپو Private  
- [ ] بک‌آپ WP قبل از cutover apex  

---

## عیب‌یابی سریع روی سرور WHM

| علامت | علت رایج | کار |
|--------|-----------|-----|
| `bind: address already in use` روی ۸۰ | Nginx Docker با WHM | compose را بدون profile standalone بیاورید |
| 503 از دامنه | پروکسی به پورت اشتباه / Docker خاموش | `docker compose ps` + `curl 127.0.0.1:13000` |
| CORS در مرورگر | `WEB_ORIGIN` با دامنه واقعی یکی نیست | env را درست کنید و api را restart |
| وب API را نمی‌بیند | `NEXT_PUBLIC_API_BASE_URL` موقع build اشتباه | `--build` دوباره بعد از تغییر env |
| Actions fail روی health | فایروال SSH / مسیر اشتباه | `DEPLOY_PATH` و دسترسی `deploy` به docker |

جزئیات فایل‌های پروکسی: [`docker/whm/README.md`](../../docker/whm/README.md)  
راهنمای عمومی: [`DEPLOYMENT.md`](./DEPLOYMENT.md) · [`GO_LIVE_FA.md`](./GO_LIVE_FA.md)
