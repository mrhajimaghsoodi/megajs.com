---
title: "شناسه id در HTML"
description: "در این درس هدف‌گیری label، fragment، CSS و script با یک شناسه یکتا را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش شناسه id در HTML | مستندات MEGA JS"
seoDescription: "آموزش شناسه id در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, شناسه id در HTML, آموزش HTML id, id attribute, fragment links"
order: 23
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# شناسه id در HTML

شناسه id در HTML روی هدف‌گیری label، fragment، CSS و script با یک شناسه یکتا تمرکز دارد. در این درس درباره شناسه id در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی دقیقاً یک element در صفحه باید نام‌گذاری شود. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی شناسه id در HTML

- این بخش به شناسه id در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `id`, `for` و `#fragment` است.
- وقتی وقتی دقیقاً یک element در صفحه باید نام‌گذاری شود، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
<a href="#email">Jump to the email field</a>
```

### مثال 2: گزینه‌ها در context

```html
<section class="id-notes" aria-labelledby="id-title">
  <h2 id="id-title">HTML id Attribute options</h2>
  <table>
    <caption>Key syntax for HTML id attribute</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>id</code></td>
      <td>must be unique in the document</td>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td>connects a label to an input id</td>
    </tr>
    <tr>
      <td><code>#fragment</code></td>
      <td>links directly to an element id</td>
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
    <title>HTML id Attribute practice</title>
  </head>
  <body>
    <label for="email">Email</label>
    <input id="email" name="email" type="email">
    <a href="#email">Jump to the email field</a>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی شناسه id در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `id` دقت کنید: در سند باید یکتا باشد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `id` | در سند باید یکتا باشد | هنگام تمرین شناسه id در HTML از آن استفاده کنید. |
| `for` | label را به id یک input وصل می‌کند | هنگام تمرین شناسه id در HTML از آن استفاده کنید. |
| `#fragment` | مستقیم به id یک element لینک می‌دهد | هنگام تمرین شناسه id در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای شناسه id در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از شناسه id در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `id` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `id.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `id` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **آی‌فریم‌ها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
