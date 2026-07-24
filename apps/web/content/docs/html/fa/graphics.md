---
title: "گرافیک در HTML"
description: "در این درس پوشش نیازهای مختلف گرافیک با canvas، SVG و image را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش گرافیک در HTML | مستندات MEGA JS"
seoDescription: "آموزش گرافیک در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, گرافیک در HTML, آموزش HTML graphics, canvas SVG img, web graphics"
order: 46
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# گرافیک در HTML

گرافیک در HTML روی پوشش نیازهای مختلف گرافیک با canvas، SVG و image تمرکز دارد. در این درس درباره گرافیک در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی اطلاعات بصری باید در مرورگر رسم، scale یا embed شود. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی گرافیک در HTML

- این بخش به گرافیک در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<canvas>`, `<svg>` و `<img>` است.
- وقتی وقتی اطلاعات بصری باید در مرورگر رسم، scale یا embed شود، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<figure>
  <svg viewBox="0 0 120 80" role="img" aria-labelledby="chart-title">
    <title id="chart-title">Simple bar chart</title>
    <rect width="40" height="70" x="10" y="10"></rect>
  </svg>
</figure>
```

### مثال 2: گزینه‌ها در context

```html
<section class="graphics-notes" aria-labelledby="graphics-title">
  <h2 id="graphics-title">HTML Graphics options</h2>
  <table>
    <caption>Key syntax for HTML graphics</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;canvas&gt;</code></td>
      <td>draws pixels with JavaScript</td>
    </tr>
    <tr>
      <td><code>&lt;svg&gt;</code></td>
      <td>describes scalable vector shapes in markup</td>
    </tr>
    <tr>
      <td><code>&lt;img&gt;</code></td>
      <td>embeds finished bitmap or vector files</td>
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
    <title>HTML Graphics practice</title>
  </head>
  <body>
    <figure>
      <svg viewBox="0 0 120 80" role="img" aria-labelledby="chart-title">
        <title id="chart-title">Simple bar chart</title>
        <rect width="40" height="70" x="10" y="10"></rect>
      </svg>
    </figure>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی گرافیک در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<canvas>` دقت کنید: pixel را با JavaScript رسم می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار fallback، title، اندازه canvas یا viewBox قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<canvas>` | pixel را با JavaScript رسم می‌کند | هنگام تمرین گرافیک در HTML از آن استفاده کنید. |
| `<svg>` | shapeهای vector مقیاس‌پذیر را در markup توصیف می‌کند | هنگام تمرین گرافیک در HTML از آن استفاده کنید. |
| `<img>` | فایل bitmap یا vector آماده را embed می‌کند | هنگام تمرین گرافیک در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای گرافیک در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای graphics، محتوای جایگزین یا title مناسب فراهم کنید؛ canvas بدون fallback برای screen reader کافی نیست.

## اشتباه‌های رایج

- استفاده از گرافیک در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<canvas>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `graphics.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<canvas>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **Canvas در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
