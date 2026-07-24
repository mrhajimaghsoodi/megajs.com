---
title: "چیدمان HTML"
description: "این صفحه ساختاردهی صفحه با header، navigation، main، sidebar و footer را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش چیدمان HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش چیدمان HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, چیدمان HTML, آموزش HTML, مرجع HTML, HTML layout, header nav main footer, semantic layout"
order: 28
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# چیدمان HTML

چیدمان HTML درباره ساختاردهی صفحه با header، navigation، main، sidebar و footer است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با چیدمان HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<header>`: محتوای معرفی صفحه یا بخش را نگه می‌دارد.
- `<nav>`: linkهای navigation اصلی را گروه می‌کند.
- `<main>`: محتوای اصلی یکتای صفحه را نگه می‌دارد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="layout" aria-labelledby="layout-title">
  <h2 id="layout-title">HTML Layout</h2>
  <p>structuring a page with header, navigation, main content, sidebars, and footer.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Layout quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;header&gt;</code></td><td>contains introductory page or section content</td></tr>
    <tr><td><code>&lt;nav&gt;</code></td><td>groups major navigation links</td></tr>
    <tr><td><code>&lt;main&gt;</code></td><td>contains the unique main page content</td></tr>
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
    <title>HTML Layout practice</title>
  </head>
  <body>
    <section class="layout" aria-labelledby="layout-title">
      <h2 id="layout-title">HTML Layout</h2>
      <p>structuring a page with header, navigation, main content, sidebars, and footer.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<header>` | محتوای معرفی صفحه یا بخش را نگه می‌دارد | در چیدمان HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<nav>` | linkهای navigation اصلی را گروه می‌کند | در چیدمان HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<main>` | محتوای اصلی یکتای صفحه را نگه می‌دارد | در چیدمان HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از چیدمان HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<header>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `layout.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<header>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **طراحی واکنش‌گرا در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
