---
title: "جدول‌های HTML"
description: "در این درس توصیف داده جدولی با row، cell، header و caption را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش جدول در HTML | مستندات MEGA JS"
seoDescription: "آموزش جدول در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, جدول در HTML, آموزش HTML tables, table th td caption, accessible tables"
order: 19
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# جدول‌های HTML

جدول‌های HTML روی توصیف داده جدولی با row، cell، header و caption تمرکز دارد. در این درس درباره جدول در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی داده رابطه row و column دارد نه فقط grid ظاهری. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی جدول در HTML

- این بخش به جدول‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<table>`, `<th scope>` و `<caption>` است.
- وقتی وقتی داده رابطه row و column دارد نه فقط grid ظاهری، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<table>
  <caption>Course modules</caption>
  <thead>
    <tr><th scope="col">Module</th><th scope="col">Status</th></tr>
  </thead>
  <tbody>
    <tr><td>HTML Basics</td><td>Ready</td></tr>
  </tbody>
</table>
```

### مثال 2: گزینه‌ها در context

```html
<section class="tables-notes" aria-labelledby="tables-title">
  <h2 id="tables-title">HTML Tables options</h2>
  <table>
    <caption>Key syntax for HTML tables</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;table&gt;</code></td>
      <td>wraps tabular data</td>
    </tr>
    <tr>
      <td><code>&lt;th scope&gt;</code></td>
      <td>labels rows or columns for assistive tech</td>
    </tr>
    <tr>
      <td><code>&lt;caption&gt;</code></td>
      <td>names the table for context</td>
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
    <title>HTML Tables practice</title>
  </head>
  <body>
    <table>
      <caption>Course modules</caption>
      <thead>
        <tr><th scope="col">Module</th><th scope="col">Status</th></tr>
      </thead>
      <tbody>
        <tr><td>HTML Basics</td><td>Ready</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی جدول در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<table>` دقت کنید: داده جدولی را می‌پوشاند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<table>` | داده جدولی را می‌پوشاند | هنگام تمرین جدول در HTML از آن استفاده کنید. |
| `<th scope>` | row یا column را برای ابزار کمکی label می‌کند | هنگام تمرین جدول در HTML از آن استفاده کنید. |
| `<caption>` | برای جدول context و نام فراهم می‌کند | هنگام تمرین جدول در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای جدول در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از جدول در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<table>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `tables.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<table>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **لیست‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
