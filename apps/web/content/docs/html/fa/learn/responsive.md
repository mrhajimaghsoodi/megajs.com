---
title: "طراحی واکنش‌گرا در HTML"
description: "این صفحه آماده‌سازی markup برای موبایل، تبلت، دسکتاپ و image واکنش‌گرا را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش طراحی واکنش‌گرا در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش طراحی واکنش‌گرا در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, طراحی واکنش‌گرا در HTML, آموزش HTML, مرجع HTML, HTML responsive, viewport meta, srcset picture"
order: 29
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# طراحی واکنش‌گرا در HTML

طراحی واکنش‌گرا در HTML درباره آماده‌سازی markup برای موبایل، تبلت، دسکتاپ و image واکنش‌گرا است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با طراحی واکنش‌گرا در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `viewport meta`: CSS pixel را با عرض دستگاه هماهنگ می‌کند.
- `srcset`: کاندید image برای عرض‌های مختلف می‌دهد.
- `<picture>`: art direction را با media query ممکن می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="responsive" aria-labelledby="responsive-title">
  <h2 id="responsive-title">HTML Responsive Web Design</h2>
  <p>preparing markup for phones, tablets, desktops, and responsive images.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Responsive Web Design quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>viewport meta</code></td><td>sets CSS pixels to device width</td></tr>
    <tr><td><code>srcset</code></td><td>offers image candidates for different widths</td></tr>
    <tr><td><code>&lt;picture&gt;</code></td><td>allows art direction by media query</td></tr>
  </tbody>
</table>
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
    <section class="responsive" aria-labelledby="responsive-title">
      <h2 id="responsive-title">HTML Responsive Web Design</h2>
      <p>preparing markup for phones, tablets, desktops, and responsive images.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `viewport meta` | CSS pixel را با عرض دستگاه هماهنگ می‌کند | در طراحی واکنش‌گرا در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `srcset` | کاندید image برای عرض‌های مختلف می‌دهد | در طراحی واکنش‌گرا در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<picture>` | art direction را با media query ممکن می‌کند | در طراحی واکنش‌گرا در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از طراحی واکنش‌گرا در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `viewport meta` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `responsive.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `viewport meta` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **عنصرهای کدنویسی در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
