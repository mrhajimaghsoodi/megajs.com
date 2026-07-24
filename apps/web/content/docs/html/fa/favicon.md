---
title: "فاوآیکن HTML"
description: "در این درس وصل کردن icon تب مرورگر برای تشخیص برند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش فاوآیکن HTML | مستندات MEGA JS"
seoDescription: "آموزش فاوآیکن HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, فاوآیکن HTML, آموزش HTML favicon, rel icon, browser tab icon"
order: 17
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# فاوآیکن HTML

فاوآیکن HTML روی وصل کردن icon تب مرورگر برای تشخیص برند تمرکز دارد. در این درس درباره فاوآیکن HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی tab، bookmark و shortcut موبایل باید حرفه‌ای دیده شوند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی فاوآیکن HTML

- این بخش به فاوآیکن HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `rel="icon"`, `sizes` و `type` است.
- وقتی وقتی tab، bookmark و shortcut موبایل باید حرفه‌ای دیده شوند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<head>
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
</head>
```

### مثال 2: گزینه‌ها در context

```html
<section class="favicon-notes" aria-labelledby="favicon-title">
  <h2 id="favicon-title">HTML Favicon options</h2>
  <table>
    <caption>Key syntax for HTML favicon</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>rel=&quot;icon&quot;</code></td>
      <td>registers an icon resource</td>
    </tr>
    <tr>
      <td><code>sizes</code></td>
      <td>declares bitmap icon dimensions</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>tells the browser the file MIME type</td>
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
    <title>HTML Favicon practice</title>
  </head>
  <body>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any">
      <link rel="icon" href="/icon.svg" type="image/svg+xml">
    </head>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی فاوآیکن HTML را بدون کد layout اضافی نشان می‌دهد.
- به `rel="icon"` دقت کنید: یک icon resource ثبت می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `rel="icon"` | یک icon resource ثبت می‌کند | هنگام تمرین فاوآیکن HTML از آن استفاده کنید. |
| `sizes` | ابعاد icon bitmap را اعلام می‌کند | هنگام تمرین فاوآیکن HTML از آن استفاده کنید. |
| `type` | نوع MIME فایل را به مرورگر می‌گوید | هنگام تمرین فاوآیکن HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای فاوآیکن HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از فاوآیکن HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `rel="icon"` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `favicon.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `rel="icon"` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **عنوان صفحه HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
