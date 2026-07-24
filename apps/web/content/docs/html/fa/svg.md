---
title: "SVG در HTML"
description: "در این درس نوشتن shapeهای vector مستقیم در HTML و scale شدن تمیز را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش SVG در HTML | مستندات MEGA JS"
seoDescription: "آموزش SVG در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, SVG در HTML, آموزش HTML SVG, svg viewBox circle rect, accessible SVG"
order: 48
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# SVG در HTML

SVG در HTML روی نوشتن shapeهای vector مستقیم در HTML و scale شدن تمیز تمرکز دارد. در این درس درباره SVG در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی icon، diagram یا chart ساده به گرافیک sharp و scalable نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی SVG در HTML

- این بخش به SVG در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<svg viewBox>`, `<circle> / <rect>` و `<title>` است.
- وقتی وقتی icon، diagram یا chart ساده به گرافیک sharp و scalable نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<svg viewBox="0 0 100 100" role="img" aria-labelledby="circle-title">
  <title id="circle-title">Blue circle</title>
  <circle cx="50" cy="50" r="40" fill="royalblue"></circle>
</svg>
```

### مثال 2: گزینه‌ها در context

```html
<section class="svg-notes" aria-labelledby="svg-title">
  <h2 id="svg-title">HTML SVG options</h2>
  <table>
    <caption>Key syntax for HTML SVG</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;svg viewBox&gt;</code></td>
      <td>sets the internal coordinate system</td>
    </tr>
    <tr>
      <td><code>&lt;circle&gt; / &lt;rect&gt;</code></td>
      <td>draw basic vector shapes</td>
    </tr>
    <tr>
      <td><code>&lt;title&gt;</code></td>
      <td>labels the graphic accessibly</td>
    </tr>
    </tbody>
  </table>
</section>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML SVG practice</title>
  </head>
  <body>
    <svg viewBox="0 0 100 100" role="img" aria-labelledby="circle-title">
      <title id="circle-title">Blue circle</title>
      <circle cx="50" cy="50" r="40" fill="royalblue"></circle>
    </svg>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی SVG در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<svg viewBox>` دقت کنید: سیستم مختصات داخلی را تعیین می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار fallback، title، اندازه canvas یا viewBox قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<svg viewBox>` | سیستم مختصات داخلی را تعیین می‌کند | هنگام تمرین SVG در HTML از آن استفاده کنید. |
| `<circle> / <rect>` | shapeهای vector پایه رسم می‌کند | هنگام تمرین SVG در HTML از آن استفاده کنید. |
| `<title>` | graphic را accessible نام‌گذاری می‌کند | هنگام تمرین SVG در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای SVG در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای graphics، محتوای جایگزین یا title مناسب فراهم کنید؛ canvas بدون fallback برای screen reader کافی نیست.

## اشتباه‌های رایج

- استفاده از SVG در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<svg viewBox>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `svg.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<svg viewBox>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **رسانه در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
