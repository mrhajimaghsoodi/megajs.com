---
title: "معناشناسی HTML"
description: "در این درس توصیف نقش محتوا با element به جای ظاهر صرف را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش معناشناسی HTML | مستندات MEGA JS"
seoDescription: "آموزش معناشناسی HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, معناشناسی HTML, semantic HTML, article section aside, آموزش HTML accessibility SEO"
order: 31
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# معناشناسی HTML

معناشناسی HTML روی توصیف نقش محتوا با element به جای ظاهر صرف تمرکز دارد. در این درس درباره معناشناسی HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی accessibility، SEO و نگه‌داری به ساختار معنادار وابسته است. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی معناشناسی HTML

- این بخش به معناشناسی HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<article>`, `<section>` و `<aside>` است.
- وقتی وقتی accessibility، SEO و نگه‌داری به ساختار معنادار وابسته است، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<main>
  <article>
    <header><h1>Semantic HTML</h1></header>
    <p>Use elements that describe the content.</p>
  </article>
</main>
```

### مثال 2: گزینه‌ها در context

```html
<section class="semantics-notes" aria-labelledby="semantics-title">
  <h2 id="semantics-title">HTML Semantics options</h2>
  <table>
    <caption>Key syntax for semantic HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;article&gt;</code></td>
      <td>stands for independent reusable content</td>
    </tr>
    <tr>
      <td><code>&lt;section&gt;</code></td>
      <td>groups a themed part with a heading</td>
    </tr>
    <tr>
      <td><code>&lt;aside&gt;</code></td>
      <td>contains related but secondary material</td>
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
    <title>HTML Semantics practice</title>
  </head>
  <body>
    <main>
      <article>
        <header><h1>Semantic HTML</h1></header>
        <p>Use elements that describe the content.</p>
      </article>
    </main>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی معناشناسی HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<article>` دقت کنید: محتوای مستقل و قابل استفاده مجدد است.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<article>` | محتوای مستقل و قابل استفاده مجدد است | هنگام تمرین معناشناسی HTML از آن استفاده کنید. |
| `<section>` | بخشی موضوعی با heading را گروه می‌کند | هنگام تمرین معناشناسی HTML از آن استفاده کنید. |
| `<aside>` | محتوای مرتبط اما فرعی را نگه می‌دارد | هنگام تمرین معناشناسی HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای معناشناسی HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از معناشناسی HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<article>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `semantics.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<article>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **راهنمای سبک HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
