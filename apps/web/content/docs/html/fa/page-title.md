---
title: "عنوان صفحه HTML"
description: "در این درس نام‌گذاری tab، bookmark و نتیجه جست‌وجو با title را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش عنوان صفحه HTML | مستندات MEGA JS"
seoDescription: "آموزش عنوان صفحه HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, عنوان صفحه HTML, آموزش HTML title, page title SEO, title element"
order: 18
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنوان صفحه HTML

عنوان صفحه HTML روی نام‌گذاری tab، bookmark و نتیجه جست‌وجو با title تمرکز دارد. در این درس درباره عنوان صفحه HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی صفحه به label کوتاه بیرون از body نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی عنوان صفحه HTML

- این بخش به عنوان صفحه HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<title>`, `unique title` و `title length` است.
- وقتی وقتی صفحه به label کوتاه بیرون از body نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<head>
  <title>HTML Forms Tutorial | MEGA JS Docs</title>
  <meta name="description" content="Learn how to build accessible HTML forms.">
</head>
```

### مثال 2: گزینه‌ها در context

```html
<section class="page-title-notes" aria-labelledby="page-title-title">
  <h2 id="page-title-title">HTML Page Title options</h2>
  <table>
    <caption>Key syntax for HTML page title</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;title&gt;</code></td>
      <td>sets the browser tab text</td>
    </tr>
    <tr>
      <td><code>unique title</code></td>
      <td>distinguishes similar pages in search and history</td>
    </tr>
    <tr>
      <td><code>title length</code></td>
      <td>keeps important words visible</td>
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
    <title>HTML Page Title practice</title>
  </head>
  <body>
    <head>
      <title>HTML Forms Tutorial | MEGA JS Docs</title>
      <meta name="description" content="Learn how to build accessible HTML forms.">
    </head>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی عنوان صفحه HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<title>` دقت کنید: متن تب مرورگر را تعیین می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<title>` | متن تب مرورگر را تعیین می‌کند | هنگام تمرین عنوان صفحه HTML از آن استفاده کنید. |
| `unique title` | صفحه‌های مشابه را در search و history جدا می‌کند | هنگام تمرین عنوان صفحه HTML از آن استفاده کنید. |
| `title length` | کلمات مهم را قابل مشاهده نگه می‌دارد | هنگام تمرین عنوان صفحه HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای عنوان صفحه HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از عنوان صفحه HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<title>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `page-title.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<title>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **جدول‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
