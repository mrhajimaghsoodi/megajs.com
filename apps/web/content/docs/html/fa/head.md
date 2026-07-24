---
title: "بخش head در HTML"
description: "در این درس قرار گرفتن metadata، title، viewport، style و resource hint بیرون از محتوای visible را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش بخش head در HTML | مستندات MEGA JS"
seoDescription: "آموزش بخش head در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, بخش head در HTML, آموزش HTML head, meta title link, آموزش HTML metadata"
order: 27
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# بخش head در HTML

بخش head در HTML روی قرار گرفتن metadata، title، viewport، style و resource hint بیرون از محتوای visible تمرکز دارد. در این درس درباره بخش head در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی سند را قبل از نمایش body تنظیم می‌کنید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی بخش head در HTML

- این بخش به بخش head در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<meta charset>`, `<title>` و `<link>` است.
- وقتی وقتی سند را قبل از نمایش body تنظیم می‌کنید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Head Example</title>
  <link rel="stylesheet" href="/styles.css">
</head>
```

### مثال 2: گزینه‌ها در context

```html
<section class="head-notes" aria-labelledby="head-title">
  <h2 id="head-title">HTML Head options</h2>
  <table>
    <caption>Key syntax for HTML head element</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;meta charset&gt;</code></td>
      <td>declares character encoding early</td>
    </tr>
    <tr>
      <td><code>&lt;title&gt;</code></td>
      <td>sets the document title</td>
    </tr>
    <tr>
      <td><code>&lt;link&gt;</code></td>
      <td>connects styles, icons, and preloads</td>
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
    <title>HTML Head practice</title>
  </head>
  <body>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HTML Head Example</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی بخش head در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<meta charset>` دقت کنید: encoding کاراکتر را زود اعلام می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<meta charset>` | encoding کاراکتر را زود اعلام می‌کند | هنگام تمرین بخش head در HTML از آن استفاده کنید. |
| `<title>` | عنوان سند را تعیین می‌کند | هنگام تمرین بخش head در HTML از آن استفاده کنید. |
| `<link>` | style، icon و preload را وصل می‌کند | هنگام تمرین بخش head در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای بخش head در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از بخش head در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<meta charset>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `head.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<meta charset>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **چیدمان HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
