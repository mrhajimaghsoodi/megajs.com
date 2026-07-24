---
title: "چیدمان HTML"
description: "در این درس تقسیم صفحه با landmarkهایی مثل header، nav، main، aside و footer را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش چیدمان HTML | مستندات MEGA JS"
seoDescription: "آموزش چیدمان HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, چیدمان HTML, آموزش HTML layout, header nav main footer, semantic layout"
order: 28
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# چیدمان HTML

چیدمان HTML روی تقسیم صفحه با landmarkهایی مثل header، nav، main، aside و footer تمرکز دارد. در این درس درباره چیدمان HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی صفحه قبل از CSS grid یا flexbox به regionهای روشن نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی چیدمان HTML

- این بخش به چیدمان HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<header>`, `<nav>` و `<main>` است.
- وقتی وقتی صفحه قبل از CSS grid یا flexbox به regionهای روشن نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<header>Site header</header>
<nav aria-label="Primary navigation">...</nav>
<main>
  <article>
    <h1>Page content</h1>
  </article>
</main>
<footer>Copyright notice</footer>
```

### مثال 2: گزینه‌ها در context

```html
<section class="layout-notes" aria-labelledby="layout-title">
  <h2 id="layout-title">HTML Layout options</h2>
  <table>
    <caption>Key syntax for HTML layout</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;header&gt;</code></td>
      <td>contains introductory page or section content</td>
    </tr>
    <tr>
      <td><code>&lt;nav&gt;</code></td>
      <td>groups major navigation links</td>
    </tr>
    <tr>
      <td><code>&lt;main&gt;</code></td>
      <td>contains the unique main page content</td>
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
    <title>HTML Layout practice</title>
  </head>
  <body>
    <header>Site header</header>
    <nav aria-label="Primary navigation">...</nav>
    <main>
      <article>
        <h1>Page content</h1>
      </article>
    </main>
    <footer>Copyright notice</footer>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی چیدمان HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<header>` دقت کنید: محتوای معرفی صفحه یا بخش را نگه می‌دارد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<header>` | محتوای معرفی صفحه یا بخش را نگه می‌دارد | هنگام تمرین چیدمان HTML از آن استفاده کنید. |
| `<nav>` | linkهای navigation اصلی را گروه می‌کند | هنگام تمرین چیدمان HTML از آن استفاده کنید. |
| `<main>` | محتوای اصلی یکتای صفحه را نگه می‌دارد | هنگام تمرین چیدمان HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای چیدمان HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از چیدمان HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<header>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `layout.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<header>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **طراحی واکنش‌گرا در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
