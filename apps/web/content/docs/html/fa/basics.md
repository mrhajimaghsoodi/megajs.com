---
title: "مبانی HTML"
description: "در این درس حداقل ساختاری که هر صفحه قابل اعتماد نیاز دارد را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش مبانی سند HTML | مستندات MEGA JS"
seoDescription: "آموزش مبانی سند HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, مبانی سند HTML, آموزش HTML basics, آموزش HTML document, doctype HTML"
order: 2
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مبانی HTML

مبانی HTML روی حداقل ساختاری که هر صفحه قابل اعتماد نیاز دارد تمرکز دارد. در این درس درباره مبانی سند HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی فایل تازه می‌سازید یا اعتبار صفحه را بررسی می‌کنید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی مبانی سند HTML

- این بخش به مبانی HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<!doctype html>`, `<meta charset="UTF-8">` و `<meta name="viewport">` است.
- وقتی وقتی فایل تازه می‌سازید یا اعتبار صفحه را بررسی می‌کنید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Hello HTML</h1>
    <p>This page has a clear document structure.</p>
  </body>
</html>
```

### مثال 2: گزینه‌ها در context

```html
<section class="basics-notes" aria-labelledby="basics-title">
  <h2 id="basics-title">HTML Basics options</h2>
  <table>
    <caption>Key syntax for HTML document basics</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;!doctype html&gt;</code></td>
      <td>prevents old browser rendering quirks</td>
    </tr>
    <tr>
      <td><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></td>
      <td>keeps text and symbols readable</td>
    </tr>
    <tr>
      <td><code>&lt;meta name=&quot;viewport&quot;&gt;</code></td>
      <td>sets mobile layout expectations</td>
    </tr>
    </tbody>
  </table>
</section>
```

### مثال 3: صفحه تمرینی کامل

```html
<main>
  <h1>HTML Basics checklist</h1>
  <p>Open DevTools and verify that HTML document basics is represented in the DOM.</p>
  <ul>
    <li><code>&lt;!doctype html&gt;</code> - prevents old browser rendering quirks</li>
    <li><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> - keeps text and symbols readable</li>
    <li><code>&lt;meta name=&quot;viewport&quot;&gt;</code> - sets mobile layout expectations</li>
  </ul>
</main>
```

## توضیح مثال

- مثال اول pattern اصلی مبانی سند HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<!doctype html>` دقت کنید: از حالت‌های قدیمی rendering جلوگیری می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<!doctype html>` | از حالت‌های قدیمی rendering جلوگیری می‌کند | هنگام تمرین مبانی سند HTML از آن استفاده کنید. |
| `<meta charset="UTF-8">` | متن و نمادها را خوانا نگه می‌دارد | هنگام تمرین مبانی سند HTML از آن استفاده کنید. |
| `<meta name="viewport">` | انتظار layout در موبایل را تعیین می‌کند | هنگام تمرین مبانی سند HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای مبانی سند HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از مبانی سند HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<!doctype html>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `basics.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<!doctype html>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویرایشگرهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
