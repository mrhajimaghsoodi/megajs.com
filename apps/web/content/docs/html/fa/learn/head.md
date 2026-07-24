---
title: "بخش head در HTML"
description: "این صفحه قرار دادن metadata، title، viewport، style و resource link در head را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش بخش head در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش بخش head در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, بخش head در HTML, آموزش HTML, مرجع HTML, HTML head, meta title link, HTML metadata"
order: 27
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# بخش head در HTML

بخش head در HTML درباره قرار دادن metadata، title، viewport، style و resource link در head است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با بخش head در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<meta charset>`: encoding کاراکتر را زود اعلام می‌کند.
- `<title>`: عنوان سند را تعیین می‌کند.
- `<link>`: style، icon و preload را وصل می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="head" aria-labelledby="head-title">
  <h2 id="head-title">HTML Head</h2>
  <p>placing metadata, titles, viewport settings, styles, and resource links in the head.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Head quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;meta charset&gt;</code></td><td>declares character encoding early</td></tr>
    <tr><td><code>&lt;title&gt;</code></td><td>sets the document title</td></tr>
    <tr><td><code>&lt;link&gt;</code></td><td>connects styles, icons, and preloads</td></tr>
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
    <title>HTML Head practice</title>
  </head>
  <body>
    <section class="head" aria-labelledby="head-title">
      <h2 id="head-title">HTML Head</h2>
      <p>placing metadata, titles, viewport settings, styles, and resource links in the head.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<meta charset>` | encoding کاراکتر را زود اعلام می‌کند | در بخش head در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<title>` | عنوان سند را تعیین می‌کند | در بخش head در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<link>` | style، icon و preload را وصل می‌کند | در بخش head در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از بخش head در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<meta charset>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `head.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<meta charset>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **چیدمان HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
