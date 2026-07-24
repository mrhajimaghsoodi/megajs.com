---
title: "مرجع‌های HTML"
description: "در این درس جست‌وجوی دقیق element، attribute و event در صفحه‌های reference را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش مرجع‌های HTML | مستندات MEGA JS"
seoDescription: "آموزش مرجع‌های HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, مرجع‌های HTML, آموزش HTML references, آموزش HTML tag reference, آموزش HTML attributes reference"
order: 61
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع‌های HTML

مرجع‌های HTML روی جست‌وجوی دقیق element، attribute و event در صفحه‌های reference تمرکز دارد. در این درس درباره مرجع‌های HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی مفهوم را می‌دانید و syntax یا جزئیات مرورگر را می‌خواهید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی مرجع‌های HTML

- این بخش به مرجع‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `tag reference`, `attribute reference` و `event reference` است.
- وقتی وقتی مفهوم را می‌دانید و syntax یا جزئیات مرورگر را می‌خواهید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<p>Use references when you need exact element, attribute, or event details.</p>
<a href="/docs/html/tag-list">Open the tag list</a>
```

### مثال 2: گزینه‌ها در context

```html
<section class="references-notes" aria-labelledby="references-title">
  <h2 id="references-title">HTML References options</h2>
  <table>
    <caption>Key syntax for HTML references</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>tag reference</code></td>
      <td>lists elements and their purpose</td>
    </tr>
    <tr>
      <td><code>attribute reference</code></td>
      <td>shows where attributes are valid</td>
    </tr>
    <tr>
      <td><code>event reference</code></td>
      <td>lists browser and user events</td>
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
    <title>HTML References practice</title>
  </head>
  <body>
    <p>Use references when you need exact element, attribute, or event details.</p>
    <a href="/docs/html/tag-list">Open the tag list</a>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی مرجع‌های HTML را بدون کد layout اضافی نشان می‌دهد.
- به `tag reference` دقت کنید: elementها و کاربردشان را فهرست می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار syntax دقیق، کاربرد و محدودیت‌های هر مورد قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `tag reference` | elementها و کاربردشان را فهرست می‌کند | هنگام تمرین مرجع‌های HTML از آن استفاده کنید. |
| `attribute reference` | نشان می‌دهد attribute کجا معتبر است | هنگام تمرین مرجع‌های HTML از آن استفاده کنید. |
| `event reference` | eventهای مرورگر و کاربر را فهرست می‌کند | هنگام تمرین مرجع‌های HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای مرجع‌های HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از مرجع‌های HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `tag reference` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `references.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `tag reference` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **فهرست tagهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
