---
title: "Timerها در JavaScript"
description: "این صفحه استفاده مسئولانه از setTimeout، setInterval، animation frame و cleanup را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Timerها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Timerها در JavaScript (timers): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Timerها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Timers, Timers tutorial, timers"
order: 75
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Timerها در JavaScript

Timerها در JavaScript درباره استفاده مسئولانه از setTimeout، setInterval، animation frame و cleanup است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Timerها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Promise`: completion یا failure آینده را نمایش می‌دهد.
- `microtask`: بعد از task فعلی و پیش از فرصت rendering اجرا می‌شود.
- `async/await`: جریان Promise را با ساختار کنترل روشن‌تر بیان می‌کند.
- برای این موضوع، loading state روشن، error handling قابل اعتماد و ترتیب microtask قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="timers-load" type="button">Load async data</button>
<output id="timers-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#timers-load').addEventListener('click', async () => {
    document.querySelector('#timers-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#timers-out').value = result;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Timers quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Promise</code></td><td>represents future completion or failure</td></tr>
    <tr><td><code>microtask</code></td><td>runs after the current task before rendering opportunities</td></tr>
    <tr><td><code>async/await</code></td><td>expresses Promise flow with clearer control structure</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('timers terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Timers practice</title>
  </head>
  <body>
    <button id="timers-load" type="button">Load async data</button>
    <output id="timers-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#timers-load').addEventListener('click', async () => {
        document.querySelector('#timers-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#timers-out').value = result;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Promise` | completion یا failure آینده را نمایش می‌دهد | در Timerها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `microtask` | بعد از task فعلی و پیش از فرصت rendering اجرا می‌شود | در Timerها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `async/await` | جریان Promise را با ساختار کنترل روشن‌تر بیان می‌کند | در Timerها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Timerها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Promise` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `timers.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Promise` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **DOM و BOM** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
