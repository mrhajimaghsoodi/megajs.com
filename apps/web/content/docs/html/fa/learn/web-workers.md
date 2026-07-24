---
title: "Web Workerها در HTML"
description: "این صفحه اجرای کار سنگین JavaScript جدا از thread رابط کاربری را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش Web Workerها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Web Workerها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, Web Workerها در HTML, آموزش HTML, مرجع HTML, HTML Web Workers, Worker postMessage, background JavaScript"
order: 59
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Web Workerها در HTML

Web Workerها در HTML درباره اجرای کار سنگین JavaScript جدا از thread رابط کاربری است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با Web Workerها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `new Worker()`: یک فایل JavaScript پس‌زمینه شروع می‌کند.
- `postMessage()`: داده را بین page و worker می‌فرستد.
- `onmessage`: پاسخ worker را دریافت می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<button id="calculate" type="button">Calculate</button>
<script>
  const worker = new Worker('/workers/calculate.js');
  document.querySelector('#calculate').addEventListener('click', () => worker.postMessage({ limit: 100000 }));
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Web Workers API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>new Worker()</code></td><td>starts a background JavaScript file</td></tr>
    <tr><td><code>postMessage()</code></td><td>sends data between page and worker</td></tr>
    <tr><td><code>onmessage</code></td><td>receives worker replies</td></tr>
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
    <title>HTML Web Workers API practice</title>
  </head>
  <body>
    <button id="calculate" type="button">Calculate</button>
    <script>
      const worker = new Worker('/workers/calculate.js');
      document.querySelector('#calculate').addEventListener('click', () => worker.postMessage({ limit: 100000 }));
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `new Worker()` | یک فایل JavaScript پس‌زمینه شروع می‌کند | در Web Workerها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `postMessage()` | داده را بین page و worker می‌فرستد | در Web Workerها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `onmessage` | پاسخ worker را دریافت می‌کند | در Web Workerها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از Web Workerها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `new Worker()` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `web-workers.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `new Worker()` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **رویدادهای Server-Sent در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
