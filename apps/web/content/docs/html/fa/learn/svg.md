---
title: "SVG در HTML"
description: "این صفحه قراردادن shapeهای vector مقیاس‌پذیر مستقیم در markup با label دسترس‌پذیر را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش SVG در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش SVG در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, SVG در HTML, آموزش HTML, مرجع HTML, HTML SVG, svg viewBox, inline SVG"
order: 48
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# SVG در HTML

SVG در HTML درباره قراردادن shapeهای vector مقیاس‌پذیر مستقیم در markup با label دسترس‌پذیر است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با SVG در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<svg>`: viewport رسم vector می‌سازد.
- `viewBox`: مختصات رسم را به اندازه rendered نگاشت می‌کند.
- `<title>`: graphic را برای accessibility نام‌گذاری می‌کند.
- برای این موضوع، fallback یا label مناسب برای کاربران غیر visual معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<svg viewBox="0 0 120 80" role="img" aria-labelledby="svg-title">
  <title id="svg-title">HTML badge</title>
  <rect width="120" height="80" rx="12"></rect>
  <text x="24" y="48">HTML</text>
</svg>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML SVG quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;svg&gt;</code></td><td>creates a vector drawing viewport</td></tr>
    <tr><td><code>viewBox</code></td><td>maps drawing coordinates to rendered size</td></tr>
    <tr><td><code>&lt;title&gt;</code></td><td>labels the graphic for accessibility</td></tr>
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
    <title>HTML SVG practice</title>
  </head>
  <body>
    <svg viewBox="0 0 120 80" role="img" aria-labelledby="svg-title">
      <title id="svg-title">HTML badge</title>
      <rect width="120" height="80" rx="12"></rect>
      <text x="24" y="48">HTML</text>
    </svg>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<svg>` | viewport رسم vector می‌سازد | در SVG در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `viewBox` | مختصات رسم را به اندازه rendered نگاشت می‌کند | در SVG در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<title>` | graphic را برای accessibility نام‌گذاری می‌کند | در SVG در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از SVG در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<svg>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `svg.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<svg>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **رسانه در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
