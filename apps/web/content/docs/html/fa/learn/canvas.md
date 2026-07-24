---
title: "Canvas در HTML"
description: "این صفحه رسم pixel و chart با JavaScript روی سطح canvas را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش Canvas در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Canvas در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, Canvas در HTML, آموزش HTML, مرجع HTML, HTML canvas, canvas getContext, drawing in HTML"
order: 47
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Canvas در HTML

Canvas در HTML درباره رسم pixel و chart با JavaScript روی سطح canvas است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با Canvas در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<canvas>`: محدوده قابل رسم را تعریف می‌کند.
- `getContext("2d")`: API رسم دوبعدی را برمی‌گرداند.
- `width / height`: ابعاد bitmap را تعیین می‌کند.
- برای این موضوع، fallback یا label مناسب برای کاربران غیر visual معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<canvas id="canvas-chart" width="320" height="120">Chart fallback text</canvas>
<script>
  const canvas = document.querySelector('#canvas-chart');
  const context = canvas.getContext('2d');
  context.fillRect(20, 30, 160, 50);
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Canvas quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;canvas&gt;</code></td><td>defines the drawable area</td></tr>
    <tr><td><code>getContext(&quot;2d&quot;)</code></td><td>returns the 2D drawing API</td></tr>
    <tr><td><code>width / height</code></td><td>sets the bitmap dimensions</td></tr>
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
    <title>HTML Canvas practice</title>
  </head>
  <body>
    <canvas id="canvas-chart" width="320" height="120">Chart fallback text</canvas>
    <script>
      const canvas = document.querySelector('#canvas-chart');
      const context = canvas.getContext('2d');
      context.fillRect(20, 30, 160, 50);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<canvas>` | محدوده قابل رسم را تعریف می‌کند | در Canvas در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `getContext("2d")` | API رسم دوبعدی را برمی‌گرداند | در Canvas در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `width / height` | ابعاد bitmap را تعیین می‌کند | در Canvas در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از Canvas در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<canvas>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `canvas.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<canvas>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **SVG در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
