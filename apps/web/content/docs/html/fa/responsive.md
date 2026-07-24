---
title: "طراحی واکنش‌گرا در HTML"
description: "در این درس پشتیبانی markup از عرض‌های مختلف صفحه قبل از ورود CSS را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش طراحی واکنش‌گرا در HTML | مستندات MEGA JS"
seoDescription: "آموزش طراحی واکنش‌گرا در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی."
keywords: "آموزش HTML, طراحی واکنش‌گرا در HTML, آموزش HTML responsive, viewport meta, srcset picture"
order: 29
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# طراحی واکنش‌گرا در HTML

طراحی واکنش‌گرا در HTML روی پشتیبانی markup از عرض‌های مختلف صفحه قبل از ورود CSS تمرکز دارد. در این درس درباره طراحی واکنش‌گرا در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی همان محتوا باید روی موبایل، تبلت و desktop کار کند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی طراحی واکنش‌گرا در HTML

- این بخش به طراحی واکنش‌گرا در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `viewport meta`, `srcset` و `picture` است.
- وقتی وقتی همان محتوا باید روی موبایل، تبلت و desktop کار کند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<img src="hero-small.jpg" srcset="hero-small.jpg 600w, hero-large.jpg 1200w" alt="Responsive hero">
```

### مثال 2: گزینه‌ها در context

```html
<section class="responsive-notes" aria-labelledby="responsive-title">
  <h2 id="responsive-title">HTML Responsive Web Design options</h2>
  <table>
    <caption>Key syntax for responsive HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>viewport meta</code></td>
      <td>sets CSS pixels to device width</td>
    </tr>
    <tr>
      <td><code>srcset</code></td>
      <td>offers image candidates for different widths</td>
    </tr>
    <tr>
      <td><code>picture</code></td>
      <td>allows art direction by media query</td>
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
    <title>HTML Responsive Web Design practice</title>
  </head>
  <body>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <img src="hero-small.jpg" srcset="hero-small.jpg 600w, hero-large.jpg 1200w" alt="Responsive hero">
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی طراحی واکنش‌گرا در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `viewport meta` دقت کنید: CSS pixel را با عرض دستگاه هماهنگ می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `viewport meta` | CSS pixel را با عرض دستگاه هماهنگ می‌کند | هنگام تمرین طراحی واکنش‌گرا در HTML از آن استفاده کنید. |
| `srcset` | کاندید image برای عرض‌های مختلف می‌دهد | هنگام تمرین طراحی واکنش‌گرا در HTML از آن استفاده کنید. |
| `picture` | art direction را با media query ممکن می‌کند | هنگام تمرین طراحی واکنش‌گرا در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای طراحی واکنش‌گرا در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از طراحی واکنش‌گرا در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `viewport meta` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `responsive.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `viewport meta` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **عنصرهای کدنویسی در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
