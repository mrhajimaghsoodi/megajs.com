# از صفر تا سرور — راهنمای مبتدی MEGA JS

این راهنما برای کسی نوشته شده که **اولین بار** می‌خواهد پروژه را روی VPS ببرد.

فرض‌ها:

- سرور شما **WHM / cPanel** دارد و چند سایت وردپرس روی آن است
- به سرور **SSH** دارید
- دامنه **`megajs.com`** الان به وردپرس روی همین سرور وصل است
- می‌خواهید همه‌چیز را قدم‌به‌قدم بفهمید

---

## اول بخوانید: چی روی سرور می‌آید، چی نمی‌آید؟

| بخش | روی VPS شما؟ | توضیح ساده |
|-----|--------------|------------|
| **فرانت کاربر** (`apps/web`) | بله | سایت Next.js — روی ساب‌دامین مثل `app.megajs.com` |
| **پنل ادمین** (`apps/admin`) | بله | روی `admin.megajs.com` |
| **بک‌اند API** (`apps/api`) | بله | NestJS — معمولاً فقط داخل سرور؛ بیرون از طریق پروکسی |
| **دیتابیس Postgres** | بله | داخل Docker روی همان VPS |
| **Redis** | بله | داخل Docker |
| **PWA** | فعلاً خیر (هنوز در کد کامل نشده) | بعداً روی همان وب‌سایت فعال می‌شود؛ سرور جدا نمی‌خواهد |
| **اپ موبایل** (Expo) | نه روی VPS | روی گوشی / TestFlight / Play Store نصب می‌شود؛ فقط به API سرور وصل می‌شود |
| **اپ دسکتاپ** (Electron) | نه روی VPS | فایل نصب روی ویندوز/مک؛ داخلش همان آدرس سایت را باز می‌کند |

**نتیجه:** روی VPS فقط این‌ها را بالا می‌آورید:

```
وب کاربر + ادمین + API + Postgres + Redis
```

موبایل و دسکتاپ **بعد از آنلاین شدن API/وب** تنظیم می‌شوند، نه همزمان با نصب Docker.

---

## استراتژی امن برای شما (چون وردپرس دارید)

الان `megajs.com` وردپرس است. **اول وردپرس را قطع نکنید.**

پیشنهاد:

| آدرس | چه چیزی |
|------|---------|
| `megajs.com` | فعلاً همان وردپرس (دست‌نخورده) |
| `app.megajs.com` | پلتفرم جدید (کاربر) |
| `admin.megajs.com` | پنل ادمین جدید |

وقتی همه‌چیز درست کار کرد، بعداً وردپرس را کنار می‌گذارید و دامنه اصلی را به پلتفرم جدید می‌دهید.

> روی سرور WHM **هرگز** Nginx جدا روی پورت ۸۰/۴۴۳ با Docker بالا نیاورید. با Apache تداخل می‌کند.

---

# مرحله ۰ — روی لپ‌تاپ خودتان (۵ دقیقه درک)

لازم نیست الان کل پروژه را لوکال اجرا کنید؛ فقط بدانید کد کجاست:

1. بروید: [github.com/mrhajimaghsoodi/megajs.com](https://github.com/mrhajimaghsoodi/megajs.com)
2. شاخه کار: `cursor/megajs-platform-redesign-52c6` (یا بعد از merge: `master`)
3. فایل‌های مهم دیپلوی:
   - `docker-compose.prod.yml`
   - `.env.production.example`
   - `docker/whm/app.megajs.com.conf`
   - `docker/whm/admin.megajs.com.conf`
   - همین سند و `docs/guides/WHM_DEPLOY_FA.md`

---

# مرحله ۱ — ورود SSH به سرور

از لپ‌تاپ / ترمینال:

```bash
ssh root@IP_سرور_شما
```

یا اگر یوزر دیگری دارید:

```bash
ssh USER@IP_سرور_شما
```

اگر اولین بار است و می‌پرسد `Are you sure you want to continue connecting?` بنویسید `yes`.

---

# مرحله ۲ — نصب Docker (یک‌بار برای همیشه)

روی سرور:

```bash
curl -fsSL https://get.docker.com | sh
docker --version
docker compose version
```

اگر دستور دوم خطا داد، Compose جداگانه نصب کنید (معمولاً با Docker رسمی می‌آید).

---

# مرحله ۳ — ساخت کاربر امن برای دیپلوی

به‌عنوان root:

```bash
useradd -m -s /bin/bash deploy
usermod -aG docker deploy
mkdir -p /opt/megajs
chown -R deploy:deploy /opt/megajs
```

از این به بعد ترجیحاً با `deploy` کار کنید:

```bash
su - deploy
```

---

# مرحله ۴ — آوردن کد روی سرور

اگر ریپو **خصوصی** است، یا Deploy Key بسازید یا موقتاً با HTTPS + توکن کلون کنید.

```bash
cd /opt/megajs
git clone https://github.com/mrhajimaghsoodi/megajs.com.git .
git checkout cursor/megajs-platform-redesign-52c6
# بعد از merge به master:
# git checkout master && git pull
```

بررسی:

```bash
ls
# باید ببینید: apps  packages  docker-compose.prod.yml  ...
```

---

# مرحله ۵ — ساخت فایل تنظیمات محرمانه

```bash
cd /opt/megajs
cp .env.production.example .env.production
nano .env.production
```

### حداقل چیزهایی که باید عوض کنید

مقادیر تصادفی و قوی بسازید (روی لپ‌تاپ یا سرور):

```bash
openssl rand -hex 32
```

این دستور را چند بار بزنید و هر خروجی را برای یک فیلد بگذارید.

برای **لانچ نرم** (پیشنهادی شما):

```env
NODE_ENV=production

POSTGRES_USER=megajs
POSTGRES_PASSWORD=یک_رمز_قوی_اینجا
POSTGRES_DB=megajs

REDIS_PASSWORD=یک_رمز_قوی_دیگر

DATABASE_URL=postgresql://megajs:همان_رمز_پستگرس@postgres:5432/megajs?schema=public
REDIS_URL=redis://:همان_رمز_ردیس@redis:6379

JWT_ACCESS_SECRET=خروجی_openssl
JWT_REFRESH_SECRET=خروجی_دیگر_openssl
OTP_PEPPER=خروجی_دیگر

WEB_ORIGIN=https://app.megajs.com
ADMIN_ORIGIN=https://admin.megajs.com

NEXT_PUBLIC_SITE_URL=https://app.megajs.com
NEXT_PUBLIC_API_URL=https://app.megajs.com/api
NEXT_PUBLIC_ADMIN_URL=https://admin.megajs.com

# پورت‌های داخلی — دست نزنید مگر تداخل داشتید
WEB_HOST_PORT=13000
API_HOST_PORT=14000
ADMIN_HOST_PORT=13001
```

ذخیره در nano: `Ctrl+O` Enter سپس `Ctrl+X`.

امنیت فایل:

```bash
chmod 600 .env.production
```

> این فایل را **هرگز** در Git commit نکنید.

---

# مرحله ۶ — بالا آوردن فرانت + بک‌اند + دیتابیس

```bash
cd /opt/megajs
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

اولین بار ممکن است **چند دقیقه** طول بکشد (دانلود و بیلد).

وضعیت:

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production ps
```

باید کانتینرهای تقریباً این‌ها را ببینید:

- `postgres` (دیتابیس)
- `redis`
- `api` (بک‌اند)
- `web` (فرانت کاربر)
- `admin` (فرانت ادمین)

### تست از داخل خود سرور (هنوز دامنه لازم نیست)

```bash
curl -s http://127.0.0.1:14000/api/health
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:13000
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:13001
```

اگر health و کدهای ۲۰۰/۳۰۷ دیدید، **موتور روی سرور زنده است.**

لاگ اگر خراب بود:

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production logs -f api
```

خروج با `Ctrl+C`.

---

# مرحله ۷ — ساب‌دامین در WHM (اتصال دامنه به موتور)

## ۷.۱ ساخت ساب‌دامین

در WHM / cPanel برای اکانت دامنه `megajs.com`:

1. **Subdomains** (یا Domains)
2. بسازید:
   - `app.megajs.com`
   - `admin.megajs.com`
3. Document Root مهم نیست (Apache فقط پروکسی می‌کند)

DNS معمولاً خودکار روی همان سرور ساخته می‌شود. چند دقیقه تا چند ساعت صبر کنید تا پخش شود.

بررسی از لپ‌تاپ:

```bash
ping app.megajs.com
```

باید IP سرور شما را بدهد.

## ۷.۲ SSL (HTTPS)

در WHM:

**SSL/TLS → Manage AutoSSL** → دامنه/ساب‌دامین‌ها را Issue کنید  
یا در cPanel: **SSL/TLS Status** → Run AutoSSL

صبر کنید تا برای `app` و `admin` قفل سبز بیاید.

## ۷.۳ Reverse Proxy (قلب کار)

فایل‌های آماده در ریپو:

- `docker/whm/app.megajs.com.conf`
- `docker/whm/admin.megajs.com.conf`

روی سرور به‌عنوان **root**:

```bash
# یوزر cPanel صاحب دامنه را پیدا کنید — مثال: megajs
# مسیر معمولاً این شکل است:
ls /var/cpanel/userdata/

# فرض کنید USER=megajs
cp /opt/megajs/docker/whm/app.megajs.com.conf \
  /etc/apache2/conf.d/userdata/ssl/2_4/megajs/app.megajs.com/megajs-proxy.conf

cp /opt/megajs/docker/whm/admin.megajs.com.conf \
  /etc/apache2/conf.d/userdata/ssl/2_4/megajs/admin.megajs.com/megajs-proxy.conf
```

اگر پوشه وجود نداشت:

```bash
mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/megajs/app.megajs.com
mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/megajs/admin.megajs.com
```

سپس:

```bash
/scripts/rebuildhttpdconf
/scripts/restartsrv_httpd
```

جزئیات بیشتر: [`WHM_DEPLOY_FA.md`](./WHM_DEPLOY_FA.md)

---

# مرحله ۸ — تست نهایی در مرورگر

1. باز کنید: `https://app.megajs.com`
2. باز کنید: `https://admin.megajs.com`
3. در وب: مسیر ورود / لاگین را امتحان کنید

### نکته مهم OTP در پروداکشن

وقتی `NODE_ENV=production` است، API **کد OTP را در پاسخ JSON برنمی‌گرداند** (`devCode` فقط برای توسعه است).

برای اولین ورود ادمین روی سرور واقعی یکی از این‌ها لازم است:

- اتصال SMS واقعی (Kavenegar و …) در env و کد، **یا**
- موقتاً برای اولین تست با احتیاط محیط غیرپروداکشن (توصیه نمی‌شود بلندمدت)، **یا**
- از تیم توسعه بخواهید مسیر bootstrap ادمین امن اضافه کند

شماره seed لوکال ادمین در دمو: `+989120000000` — روی پروداکشن واقعی بدون SMS به‌تنهایی کافی نیست.

---

# مرحله ۹ — آپدیت بعدی کد (وقتی چیزی عوض شد)

روی سرور با کاربر `deploy`:

```bash
cd /opt/megajs
git pull
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

`.env.production` را دست نزنید مگر عمداً بخواهید تنظیمات عوض شود.

---

# مرحله ۱۰ — PWA (اپ وب قابل نصب)

**وضعیت فعلی کد:** PWA کامل (manifest + service worker) هنوز در پروژه پیاده نشده.

وقتی آماده شد:

1. فقط روی **همان** `apps/web` اضافه می‌شود
2. دوباره بیلد/دیپلوی وب روی سرور کافی است
3. کاربر در موبایل Chrome/Safari: «Add to Home Screen»
4. **سرور جدا یا پورت جدا لازم نیست**

تا آن وقت، سایت معمولی موبایل در مرورگر کار می‌کند.

---

# مرحله ۱۱ — اپ موبایل

موبایل در پوشه `apps/mobile` (Expo) است.

روی VPS شما **نصب نمی‌شود**. کار شما بعد از آنلاین شدن API:

1. روی لپ‌تاپ: `pnpm --filter @megajs/mobile ...` (طبق `LOCAL_DEV.md`)
2. در تنظیمات موبایل، آدرس API را بگذارید روی:
   - `https://app.megajs.com/api`  
   (یا هر آدرسی که در env نهایی برای API عمومی انتخاب کردید)
3. تست با Expo Go روی گوشی
4. انتشار فروشگاهی جداست (Google Play / App Store) — حساب دولوپر، بیلد EAS، بررسی فروشگاه

تا API روی HTTPS پایدار نباشد، اپ موبایل را عمومی نکنید.

---

# مرحله ۱۲ — اپ دسکتاپ

دسکتاپ در `apps/desktop` (Electron) است؛ معمولاً همان وب را داخل پنجره باز می‌کند.

1. در تنظیماتش URL را بگذارید: `https://app.megajs.com`
2. روی لپ‌تاپ بیلد نصب‌کننده بگیرید (Windows/macOS)
3. فایل `.exe` / `.dmg` را برای کاربران بگذارید دانلود (مثلاً صفحه `/apps` سایت)

باز هم **روی VPS اجرا نمی‌شود**؛ فقط فایل نصب توزیع می‌شود.

---

# مرحله ۱۳ — قطع وردپرس و آوردن دامنه اصلی (آخرین قدم؛ عجله نکنید)

فقط وقتی `app` و `admin` پایدار بودند:

1. از وردپرس بکاپ کامل بگیرید (فایل + دیتابیس)
2. در Apache/WHM پروکسی `megajs.com` و `www` را به پورت وب (`13000`) بدهید  
   (مشابه فایل `app`، برای دامنه اصلی)
3. env را به دامنه اصلی عوض کنید و دوباره `up -d --build` کنید:
   - `WEB_ORIGIN=https://megajs.com`
   - `NEXT_PUBLIC_SITE_URL=https://megajs.com`
   - …
4. Redirect از `www` به apex (یا برعکس) تنظیم کنید
5. وردپرس را خاموش/آرشیو کنید، حذف عجله‌ای نکنید تا چند روز مطمئن شوید

---

## چک‌لیست یک‌صفحه‌ای

```
[ ] SSH وارد شدم
[ ] Docker نصب شد
[ ] کاربر deploy ساختم
[ ] کد را در /opt/megajs کلون کردم
[ ] .env.production ساختم و رمزها را قوی گذاشتم
[ ] docker compose up -d --build زدم
[ ] curl به 127.0.0.1:14000/13000/13001 اوکی بود
[ ] ساب‌دامین app و admin ساختم
[ ] AutoSSL گرفتم
[ ] فایل proxy آپاچی را گذاشتم و httpd را ری‌استارت کردم
[ ] https://app.megajs.com در مرورگر باز شد
[ ] https://admin.megajs.com باز شد
[ ] (بعداً) PWA در کد + ردیپلوی وب
[ ] (بعداً) موبایل به API وصل + بیلد فروشگاه
[ ] (بعداً) دسکتاپ URL به سایت + فایل نصب
[ ] (آخر) megajs.com از وردپرس به پلتفرم جدید
```

---

## اگر گیر کردید — کجا نگاه کنید

| مشکل | کار |
|------|-----|
| بیلد Docker خطا | `docker compose ... logs` و فضای دیسک `df -h` |
| سایت از بیرون باز نمی‌شود ولی curl لوکال اوکی است | DNS / SSL / فایل proxy آپاچی |
| ۵۰۲ Bad Gateway | کانتینر وب/ادمین پایین است یا پورت اشتباه |
| تداخل با وردپرس | فقط روی ساب‌دامین کار کنید؛ apex را دست نزنید |
| OTP کار نمی‌کند | در پروداکشن SMS لازم است |

اسناد مکمل:

- [`WHM_DEPLOY_FA.md`](./WHM_DEPLOY_FA.md) — جزئیات WHM
- [`GO_LIVE_FA.md`](./GO_LIVE_FA.md) — نقشه کامل محیط‌ها و secretها
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — انگلیسی / فنی‌تر
- [`LOCAL_DEV.md`](./LOCAL_DEV.md) — اجرای لوکال روی لپ‌تاپ
