# راهنمای کامل انتقال MEGA JS به دامنه و سرور اصلی

این سند از صفر توضیح می‌دهد:

1. چطور سایت را روی دامنه و سرور اصلی ببرید  
2. چطور فضای Development بسازید  
3. چطور از Cursor به پروژه دسترسی داشته باشید  
4. کجا توکن‌های Google / OTP / پرداخت / … را بگذارید تا همه چیز آماده اجرا باشد  

مخاطب: صاحب دامنه `megajs.com` که می‌خواهد پلتفرم جدید را جایگزین وردپرس کند.

**اولین بار است و WHM + وردپرس دارید؟** مستقیم بروید به:

→ [`ZERO_TO_SERVER_FA.md`](./ZERO_TO_SERVER_FA.md) — قدم‌به‌قدم مبتدی از صفر تا سرور

---

## نقشه ذهنی (سه محیط)

| محیط | دامنه پیشنهادی | هدف |
|------|----------------|-----|
| **Local** | `localhost:3000` | توسعه روی لپ‌تاپ |
| **Development / Staging** | `dev.megajs.com` یا `staging.megajs.com` | تست واقعی قبل از انتشار |
| **Production** | `megajs.com` + `www` + `api` + `admin` | کاربران واقعی |

هر محیط **دیتابیس و secret جدا** دارد. هرگز `.env` پروداکشن را در Git نگذارید.

---

## بخش ۱ — دسترسی به کد در Cursor

### ۱.۱ کلون روی سیستم خودتان

```bash
git clone https://github.com/mrhajimaghsoodi/megajs.com.git
cd megajs.com
git checkout cursor/megajs-platform-redesign-52c6   # شاخه فعلی پلتفرم
# یا بعد از merge: git checkout master
```

در Cursor: **File → Open Folder** → همین پوشه.

### ۱.۲ Cloud Agent / ادامه کار از راه دور

- ریپو را در GitHub باز کنید.  
- از Cursor Cloud Agent یا Cursor Desktop به همین ریپو وصل شوید.  
- شاخه کاری: `cursor/...-52c6` یا شاخه feature جدید.  
- PR فعلی: `https://github.com/mrhajimaghsoodi/megajs.com/pull/1`

**مهم:** ریپو را در GitHub → Settings → **Make private** کنید تا کد و آینده‌ی secretها عمومی نماند.

### ۱.۳ اجرای لوکال داخل Cursor (ترمینال داخلی)

```bash
pnpm install
pnpm --filter @megajs/design-tokens build
pnpm --filter @megajs/domain build
pnpm --filter @megajs/sdk build
cp apps/api/.env.example apps/api/.env
pnpm --filter @megajs/api prisma:push
pnpm --filter @megajs/api prisma:seed
pnpm --filter @megajs/api dev      # :4000
pnpm --filter @megajs/web dev      # :3000
pnpm --filter @megajs/admin dev    # :3001
```

جزئیات بیشتر: [`LOCAL_DEV.md`](./LOCAL_DEV.md)

---

## بخش ۲ — ساخت فضای Development (Staging)

هدف: نسخه‌ای شبیه پروداکشن روی ساب‌دامین، بدون آسیب به سایت فعلی وردپرس روی `megajs.com`.

### ۲.۱ پیشنهاد دامنه Staging

روی DNS دامنه (مثلاً Cloudflare / ایرنیک / ارائه‌دهنده DNS):

| رکورد | نوع | مقدار |
|-------|-----|--------|
| `dev` | A | IP سرور Staging |
| `api.dev` | A | همان IP (یا جدا) |
| `admin.dev` | A | همان IP |

یا فقط یک دامنه و پورت‌های داخلی پشت Nginx:

- `https://dev.megajs.com` → web  
- `https://api.dev.megajs.com` → api  
- `https://admin.dev.megajs.com` → admin  

### ۲.۲ سرور Staging (VPS)

حداقل پیشنهادی: ۲ vCPU، ۴GB RAM، ۲۰GB SSD، Ubuntu 22.04+

نصب پایه:

```bash
sudo apt update && sudo apt install -y docker.io docker-compose-v2 git nginx certbot
sudo usermod -aG docker $USER   # سپس logout/login
```

کلون:

```bash
git clone https://github.com/mrhajimaghsoodi/megajs.com.git /opt/megajs-dev
cd /opt/megajs-dev
git checkout cursor/megajs-platform-redesign-52c6
```

فایل env:

```bash
cp .env.production.example .env
nano .env
```

مقادیر Staging نمونه (فایل را `.env.production` یا `.env` بگذارید؛ با compose هماهنگ کنید):

```env
POSTGRES_USER=megajs
POSTGRES_PASSWORD=یک_پسورد_قوی_staging
POSTGRES_DB=megajs
JWT_SECRET=یک_رشته_بلند_تصادفی_staging
WEB_ORIGIN=https://dev.megajs.com
ADMIN_ORIGIN=https://admin.dev.megajs.com
NEXT_PUBLIC_SITE_URL=https://dev.megajs.com
NEXT_PUBLIC_API_BASE_URL=https://api.dev.megajs.com/api
# SMS_PROVIDER=kavenegar
# SMS_API_KEY=
# GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=
# GITHUB_CLIENT_ID=
# GITHUB_CLIENT_SECRET=
# ZARINPAL_MERCHANT_ID=
```

اجرا:

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

Nginx + SSL برای Staging: از الگوی [`DEPLOYMENT.md`](./DEPLOYMENT.md) و `docker/nginx/megajs.conf` استفاده کنید؛ فقط نام دامنه را `dev.*` بگذارید.

### ۲.۳ Staging با GitHub Actions (اختیاری)

در GitHub → Settings → Secrets and variables → Actions (Environment: `production` طبق [`DEPLOYMENT.md`](./DEPLOYMENT.md)):

| Secret | توضیح |
|--------|--------|
| `DEPLOY_HOST` | IP یا hostname سرور |
| `DEPLOY_USER` | مثلاً `deploy` |
| `DEPLOY_SSH_KEY` | کلید خصوصی SSH |
| `DEPLOY_PATH` | مثلاً `/var/www/megajs` یا `/opt/megajs-dev` |
| `SITE_URL` | برای health check بعد از deploy |

برای Staging می‌توانید Environment جدا به نام `staging` با همان کلیدها بسازید و workflow را به آن وصل کنید.

شاخه پیشنهادی Git:

- `master` / `main` → Production  
- `develop` یا همین شاخه feature → Staging  

---

## بخش ۳ — انتقال به دامنه و سرور اصلی (Production)

### اگر VPS شما همین الان WHM + وردپرس دارد

**این مسیر را بروید:** [`WHM_DEPLOY_FA.md`](./WHM_DEPLOY_FA.md)

خلاصه: Docker فقط روی `127.0.0.1:13000/14000/13001`؛ Apache همان ۸۰/۴۴۳ را نگه می‌دارد و با Reverse Proxy دامنه را وصل می‌کند. اول `app.megajs.com`، بعد سوییچ `megajs.com`.

### ۳.۱ استراتژی بدون قطعی طولانی

سایت فعلی وردپرس روی `megajs.com` است. پیشنهاد:

1. اول روی همان VPS با ساب‌دامین `app.megajs.com` تست کنید (وردپرس apex دست‌نخورده).  
2. Docker را **بدون** گرفتن پورت ۸۰/۴۴۳ بالا بیاورید.  
3. وقتی آماده بودید apex را سوییچ کنید (TTL کوتاه، مثلاً ۳۰۰ ثانیه).  
4. وردپرس megajs.com را آرشیو/بک‌آپ بگیرید؛ مهاجرت محتوا لازم نیست (از صفر ساخته‌اید). سایر سایت‌های WP روی WHM می‌مانند.

### ۳.۲ DNS پروداکشن

| رکورد | نوع | هدف |
|-------|-----|------|
| `@` (apex) | A | IP سرور Production |
| `www` | CNAME یا A | همان سایت |
| `api` | A | API |
| `admin` | A | پنل ادمین |

نمونه نهایی:

- `https://megajs.com` → Web  
- `https://www.megajs.com` → redirect به apex  
- `https://api.megajs.com` → Nest API  
- `https://admin.megajs.com` → Admin  

### ۳.۳ استقرار Production روی VPS

```bash
git clone https://github.com/mrhajimaghsoodi/megajs.com.git /opt/megajs
cd /opt/megajs
git checkout master   # بعد از merge PR
cp .env.production.example .env.production
# پر کردن تمام secretها — بخش ۴
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

سپس Nginx از `docker/nginx/megajs.conf` و Certbot:

```bash
sudo certbot --nginx -d megajs.com -d www.megajs.com -d api.megajs.com -d admin.megajs.com
```

جزئیات کامل Docker/CI: [`DEPLOYMENT.md`](./DEPLOYMENT.md)

### ۳.۴ چک‌لیست Go-Live

- [ ] `GET https://api.megajs.com/api/health` → ok  
- [ ] وب `https://megajs.com/fa` باز می‌شود  
- [ ] ادمین `https://admin.megajs.com` با OTP ادمین  
- [ ] HTTPS روی همه ساب‌دامین‌ها  
- [ ] CORS فقط دامنه‌های خودتان  
- [ ] بک‌آپ Postgres زمان‌بندی شده  
- [ ] ریپو Private  
- [ ] Monitoring ساده (UptimeRobot / healthcheck)

---

## بخش ۴ — توکن‌ها و secretها: کجا و چطور

### ۴.۱ فایل‌های env در پروژه

| فایل | محیط | Commit؟ |
|------|--------|---------|
| `apps/api/.env.example` | الگوی API لوکال | بله (بدون secret واقعی) |
| `apps/web/.env.example` | الگوی Web | بله |
| `apps/admin/.env.example` | الگوی Admin | بله |
| `.env.production.example` | الگوی Docker/VPS | بله |
| `apps/api/.env` | لوکال واقعی شما | **هرگز** |
| `.env.production` روی سرور | Staging/Prod | **هرگز** |
| GitHub Actions Secrets | CI/CD | فقط در UI گیت‌هاب |

### ۴.۲ جدول کامل متغیرها

#### هسته API (`apps/api/.env` یا env کانتینر api)

| متغیر | لازم؟ | توضیح |
|--------|--------|--------|
| `DATABASE_URL` | بله | لوکال: `file:./dev.db` — پروداکشن: از `docker-compose.prod.yml` ساخته می‌شود |
| `JWT_SECRET` | بله | رشته تصادفی بلند؛ برای هر محیط جدا |
| `PORT` | خیر | پیش‌فرض `4000` |
| `WEB_ORIGIN` | بله | مثلاً `https://megajs.com` (CORS وب) |
| `ADMIN_ORIGIN` | بله | مثلاً `https://admin.megajs.com` (CORS ادمین) |
| `NODE_ENV` | بله در prod | `production` — در این حالت `devCode` برنمی‌گردد |
| `SMS_PROVIDER` | برای SMS واقعی | مثلاً `kavenegar` |
| `SMS_API_KEY` | برای SMS واقعی | کلید پنل پیامک |
| `SMS_SENDER` | اختیاری | خط ارسال |
| `OTP_TTL_SECONDS` | اختیاری | پیش‌فرض پیشنهادی `300` |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | ورود گوگل | از Google Cloud Console |
| `GOOGLE_CALLBACK_URL` | ورود گوگل | مثلاً `https://megajs.com/api/auth/google/callback` |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | ورود گیت‌هاب | از GitHub OAuth Apps |
| `GITHUB_CALLBACK_URL` | ورود گیت‌هاب | callback API |
| `ZARINPAL_MERCHANT_ID` | پرداخت ایران | مرچنت زرین‌پال |
| `ZARINPAL_CALLBACK_URL` | پرداخت | callback درگاه |
| `STREAM_PROVIDER` | لایو | مثلاً `arvan` |
| `STREAM_API_KEY` | لایو | کلید سرویس استریم |
| `STREAM_INGEST_BASE` / `STREAM_PLAYBACK_BASE` | لایو | آدرس ingest و پخش |

#### Web (`apps/web` و build args Docker)

| متغیر | توضیح |
|--------|--------|
| `NEXT_PUBLIC_API_BASE_URL` | مثلاً `https://megajs.com/api` یا `https://api.megajs.com/api` |
| `NEXT_PUBLIC_SITE_URL` | مثلاً `https://megajs.com` |

#### Admin

| متغیر | توضیح |
|--------|--------|
| `NEXT_PUBLIC_API_BASE_URL` | همان API پروداکشن/استیجینگ |

### ۴.۳ چطور هر سرویس را فعال کنید

#### الف) OTP پیامکی (پروداکشن)

1. از پنل SMS (مثلاً کاوه‌نگار) API Key بگیرید.  
2. در env سرور / API:

```env
SMS_PROVIDER=kavenegar
SMS_API_KEY=...
SMS_SENDER=1000...
OTP_TTL_SECONDS=300
```

3. رفتار فعلی: در غیر از `production`، `POST /api/auth/otp/request` فیلد `devCode` برمی‌گرداند (`apps/api/src/auth/auth.service.ts`). برای SMS واقعی باید adapter پنل پیامک به همان ماژول auth وصل شود. تا آن زمان روی Staging/لوکال از `devCode` استفاده کنید.

ادمین seed پیش‌فرض: تلفن `+989120000000` — در پروداکشن حتماً عوض/حذف شود.

#### ب) Google OAuth

1. [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials → OAuth Client ID (Web).  
2. Authorized redirect URIs نمونه (با مسیر واقعی پروژه هماهنگ کنید):

```
https://megajs.com/api/auth/google/callback
https://dev.megajs.com/api/auth/google/callback
http://localhost:4000/api/auth/google/callback
```

3. در env:

```env
GOOGLE_CLIENT_ID=....apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=....
GOOGLE_CALLBACK_URL=https://megajs.com/api/auth/google/callback
```

4. مدل User فیلد `googleId` دارد؛ wiring کامل OAuth در milestone بعدی است. تا آن زمان ورود با OTP کار می‌کند.

#### ج) GitHub OAuth

1. GitHub → Settings → Developer settings → OAuth Apps.  
2. Homepage: `https://megajs.com`  
3. Callback: `https://megajs.com/api/auth/github/callback`  
4. env:

```env
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
GITHUB_CALLBACK_URL=https://megajs.com/api/auth/github/callback
```

#### د) پرداخت (Zarinpal)

```env
ZARINPAL_MERCHANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
ZARINPAL_CALLBACK_URL=https://megajs.com/api/billing/zarinpal/callback
```

Billing امروز stub است؛ با این envها آماده اتصال درگاه می‌شوید.

#### ه) لایو / استریم

```env
STREAM_PROVIDER=arvan
STREAM_API_KEY=...
STREAM_INGEST_BASE=rtmp://...
STREAM_PLAYBACK_BASE=https://...
```

ادمین از پنل Live می‌تواند session بسازد؛ پخش واقعی به media server جدا نیاز دارد.

### ۴.۴ کجا در کد مصرف می‌شوند

| موضوع | مسیر اصلی |
|--------|-----------|
| Auth / OTP / JWT | `apps/api/src/auth/` |
| CORS origins | `apps/api/src/main.ts` → `WEB_ORIGIN` / `ADMIN_ORIGIN` |
| User model (googleId, githubId) | `apps/api/prisma/schema.prisma` |
| Wallet / redeem | `apps/api/src/wallet/` |
| Billing stubs | `apps/api/src/billing/` |
| Live | `apps/api/src/live/` |
| Admin | `apps/api/src/admin/` |
| Web API base URL | `apps/web/src/lib/utils.ts` → `NEXT_PUBLIC_API_BASE_URL` |
| Admin API base URL | `apps/admin` → `NEXT_PUBLIC_API_BASE_URL` |
| Docker env injection | `docker-compose.prod.yml`, `docker/Dockerfile.*` |

### ۴.۵ GitHub Secrets برای CI

| Secret | استفاده |
|--------|---------|
| `DEPLOY_HOST` / `DEPLOY_USER` / `DEPLOY_SSH_KEY` / `DEPLOY_PATH` / `SITE_URL` | `deploy.yml` |
| secretهای اپ (JWT، SMS، OAuth، …) | ترجیحاً فقط در `.env.production` روی سرور — نه در لاگ Actions |

---

## بخش ۵ — ترتیب پیشنهادی اجرا (از صفر تا آنلاین)

1. ریپو را **Private** کنید.  
2. لوکال در Cursor راه بیندازید و با seed ادمین وارد شوید.  
3. VPS Staging بسازید + DNS `dev.*` + `.env` Staging + Docker.  
4. Google / GitHub / SMS / پرداخت را اول روی Staging تست کنید.  
5. PR را merge به `master` کنید.  
6. VPS Production + DNS `megajs.com` / `api` / `admin` + SSL.  
7. وردپرس را فقط بعد از تأیید کامل قطع یا redirect کنید.  
8. بک‌آپ روزانه Postgres + مانیتورینگ health.  
9. بعداً اپ موبایل (`apps/mobile`) و دسکتاپ (`apps/desktop`) را به همان `NEXT_PUBLIC_API_URL` پروداکشن وصل کنید.

---

## بخش ۶ — عیب‌یابی سریع

| مشکل | کار |
|------|-----|
| CORS error در مرورگر | `WEB_ORIGIN` و `ADMIN_ORIGIN` باید دقیقاً origin وب/ادمین باشند |
| OTP نمی‌آید | در غیر prod به `devCode` در پاسخ API نگاه کنید؛ در prod لاگ SMS و `SMS_API_KEY` |
| 502 از Nginx | کانتینر api/web بالا است؟ `docker compose ps` |
| ادمین وارد نمی‌شود | نقش `ADMIN` روی کاربر؛ تلفن seed را چک کنید |
| صفحه سفید وب / API خطا | `NEXT_PUBLIC_API_BASE_URL` در build اشتباه است — image وب را دوباره build کنید |

---

## لینک‌های مرتبط

- [`LOCAL_DEV.md`](./LOCAL_DEV.md) — توسعه لوکال  
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — Docker و CI انگلیسی/فنی  
- [`PANELS.md`](./PANELS.md) — پنل کاربر و ادمین  
- [`../architecture/OVERVIEW.md`](../architecture/OVERVIEW.md) — معماری  
- [`../product/ROADMAP.md`](../product/ROADMAP.md) — نقشه محصول  

اگر مبتدی هستید و WHM دارید، اول [`ZERO_TO_SERVER_FA.md`](./ZERO_TO_SERVER_FA.md) را باز کنید. برای نقشه کامل محیط‌ها و secretها همین `GO_LIVE_FA.md` است.
