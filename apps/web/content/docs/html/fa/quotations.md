---
title: "نقل‌قول‌ها در HTML"
description: "در این درس نمایش منبع نقل‌قول، abbreviation، address و citation را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش نقل‌قول در HTML | مستندات MEGA JS"
seoDescription: "آموزش نقل‌قول در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, نقل‌قول در HTML, آموزش HTML quotations, blockquote q abbr cite, آموزش HTML citation"
order: 11
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نقل‌قول‌ها در HTML

نقل‌قول‌ها در HTML روی نمایش منبع نقل‌قول، abbreviation، address و citation تمرکز دارد. در این درس درباره نقل‌قول در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی از منبعی نقل می‌کنید یا کوتاه‌شده‌ای را روشن می‌سازید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی نقل‌قول در HTML

- این بخش به نقل‌قول‌ها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<blockquote>`, `<q>` و `<abbr title>` است.
- وقتی وقتی از منبعی نقل می‌کنید یا کوتاه‌شده‌ای را روشن می‌سازید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<blockquote cite="https://developer.mozilla.org/">
  <p>Use blockquote for longer quoted passages.</p>
</blockquote>
<p><abbr title="HyperText Markup Language">HTML</abbr> structures web pages.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="quotations-notes" aria-labelledby="quotations-title">
  <h2 id="quotations-title">HTML Quotations options</h2>
  <table>
    <caption>Key syntax for HTML quotations</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;blockquote&gt;</code></td>
      <td>wraps a longer quoted passage</td>
    </tr>
    <tr>
      <td><code>&lt;q&gt;</code></td>
      <td>marks a short inline quote</td>
    </tr>
    <tr>
      <td><code>&lt;abbr title&gt;</code></td>
      <td>expands abbreviations for users</td>
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
    <title>HTML Quotations practice</title>
  </head>
  <body>
    <blockquote cite="https://developer.mozilla.org/">
      <p>Use blockquote for longer quoted passages.</p>
    </blockquote>
    <p><abbr title="HyperText Markup Language">HTML</abbr> structures web pages.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی نقل‌قول در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<blockquote>` دقت کنید: نقل‌قول طولانی‌تر را می‌پوشاند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<blockquote>` | نقل‌قول طولانی‌تر را می‌پوشاند | هنگام تمرین نقل‌قول در HTML از آن استفاده کنید. |
| `<q>` | نقل‌قول کوتاه inline را مشخص می‌کند | هنگام تمرین نقل‌قول در HTML از آن استفاده کنید. |
| `<abbr title>` | abbreviation را برای کاربر باز می‌کند | هنگام تمرین نقل‌قول در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای نقل‌قول در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از نقل‌قول در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<blockquote>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `quotations.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<blockquote>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **کامنت‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
