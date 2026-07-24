---
title: "مرجع eventهای HTML"
description: "در این درس وصل کردن eventهای کاربر و مرورگر به handlerهای JavaScript را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش مرجع eventهای HTML | مستندات MEGA JS"
seoDescription: "آموزش مرجع eventهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, مرجع eventهای HTML, آموزش HTML events reference, onclick input submit, JavaScript events HTML"
order: 65
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع eventهای HTML

مرجع eventهای HTML روی وصل کردن eventهای کاربر و مرورگر به handlerهای JavaScript تمرکز دارد. در این درس درباره مرجع eventهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی interaction به واکنش به click، input، submit، load یا drag نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی مرجع eventهای HTML

- این بخش به مرجع eventهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `click`, `input` و `submit` است.
- وقتی وقتی interaction به واکنش به click، input، submit، load یا drag نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<button id="save" type="button">Save</button>
<input id="search" aria-label="Live search">
<script>
  document.querySelector('#save').addEventListener('click', () => alert('Saved'));
  document.querySelector('#search').addEventListener('input', (event) => console.log(event.target.value));
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="events-ref-notes" aria-labelledby="events-ref-title">
  <h2 id="events-ref-title">HTML Event Reference options</h2>
  <table>
    <caption>Key syntax for HTML event reference</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>click</code></td>
      <td>fires when a user activates an element</td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>fires as form values change</td>
    </tr>
    <tr>
      <td><code>submit</code></td>
      <td>fires when a form is submitted</td>
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
    <title>HTML Event Reference practice</title>
  </head>
  <body>
    <button id="save" type="button">Save</button>
    <input id="search" aria-label="Live search">
    <script>
      document.querySelector('#save').addEventListener('click', () => alert('Saved'));
      document.querySelector('#search').addEventListener('input', (event) => console.log(event.target.value));
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی مرجع eventهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `click` دقت کنید: وقتی کاربر element را فعال کند رخ می‌دهد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار syntax دقیق، کاربرد و محدودیت‌های هر مورد قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `click` | وقتی کاربر element را فعال کند رخ می‌دهد | هنگام تمرین مرجع eventهای HTML از آن استفاده کنید. |
| `input` | هنگام تغییر مقدار form رخ می‌دهد | هنگام تمرین مرجع eventهای HTML از آن استفاده کنید. |
| `submit` | هنگام submit شدن form رخ می‌دهد | هنگام تمرین مرجع eventهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای مرجع eventهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از مرجع eventهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `click` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `events-ref.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `click` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: به صفحه‌های reference برگردید و یک صفحه واقعی را از نظر semantics، accessibility و validation بهتر کنید.
