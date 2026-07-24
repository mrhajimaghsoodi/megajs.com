---
title: "Canvas در HTML"
description: "در این درس رسم pixel، chart، game یا effect بصری با JavaScript روی سطح bitmap را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Canvas در HTML | مستندات MEGA JS"
seoDescription: "آموزش Canvas در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, Canvas در HTML, آموزش HTML canvas, canvas getContext 2d, JavaScript drawing"
order: 47
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Canvas در HTML

Canvas در HTML روی رسم pixel، chart، game یا effect بصری با JavaScript روی سطح bitmap تمرکز دارد. در این درس درباره Canvas در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی به drawing پویا نیاز دارید نه shape ثابت در markup. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Canvas در HTML

- این بخش به Canvas در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<canvas>`, `getContext("2d")` و `fallback text` است.
- وقتی وقتی به drawing پویا نیاز دارید نه shape ثابت در markup، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: مستطیل ساده

```html
<canvas id="chart" width="300" height="150">Canvas is not supported.</canvas>
<script>
  const canvas = document.querySelector('#chart');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'royalblue';
  ctx.fillRect(20, 20, 120, 80);
</script>
```

### مثال 2: نوار پیشرفت

```html
<canvas id="progress" width="320" height="120">Progress chart fallback</canvas>
<script>
  const progress = document.querySelector('#progress');
  const ctx = progress.getContext('2d');
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(20, 45, 280, 30);
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(20, 45, 190, 30);
</script>
```

### مثال 3: رسم badge

```html
<canvas id="badge" width="200" height="200" aria-label="Canvas badge"></canvas>
<script>
  const badge = document.querySelector('#badge');
  const ctx = badge.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 100, 70, 0, Math.PI * 2);
  ctx.fillStyle = 'gold';
  ctx.fill();
  ctx.strokeText('HTML', 76, 105);
</script>
```

## توضیح مثال

- مثال اول pattern اصلی Canvas در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<canvas>` دقت کنید: سطح drawing را می‌سازد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار fallback، title، اندازه canvas یا viewBox قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<canvas>` | سطح drawing را می‌سازد | هنگام تمرین Canvas در HTML از آن استفاده کنید. |
| `getContext("2d")` | API دوبعدی drawing را برمی‌گرداند | هنگام تمرین Canvas در HTML از آن استفاده کنید. |
| `fallback text` | وقتی canvas پشتیبانی نشود نمایش داده می‌شود | هنگام تمرین Canvas در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Canvas در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای graphics، محتوای جایگزین یا title مناسب فراهم کنید؛ canvas بدون fallback برای screen reader کافی نیست.

## اشتباه‌های رایج

- استفاده از Canvas در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<canvas>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `canvas.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<canvas>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **SVG در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
