---
title: "Async در JavaScript"
description: "این صفحه هماهنگ کردن callback، Promise، async/await، timer، microtask و feedback کاربر را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Async در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Async در JavaScript (async js): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Async در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript async-js, Asynchronous JavaScript tutorial"
order: 71
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Async در JavaScript

Async در JavaScript درباره هماهنگ کردن callback، Promise، async/await، timer، microtask و feedback کاربر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Async در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Promise`: نتیجه آینده را نمایش می‌دهد.
- `async/await`: جریان Promise را خواناتر می‌نویسد.
- `event loop`: task و microtask را هماهنگ می‌کند.
- برای این موضوع، loading state روشن، error handling قابل اعتماد و ترتیب microtask قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="async-js-load" type="button">Load async data</button>
<output id="async-js-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#async-js-load').addEventListener('click', async () => {
    document.querySelector('#async-js-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#async-js-out').value = result;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Asynchronous JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Promise</code></td><td>represents a future result</td></tr>
    <tr><td><code>async/await</code></td><td>writes promise flow readably</td></tr>
    <tr><td><code>event loop</code></td><td>coordinates tasks and microtasks</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('async-js terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asynchronous JavaScript practice</title>
  </head>
  <body>
    <button id="async-js-load" type="button">Load async data</button>
    <output id="async-js-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#async-js-load').addEventListener('click', async () => {
        document.querySelector('#async-js-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#async-js-out').value = result;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Promise` | نتیجه آینده را نمایش می‌دهد | در Async در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `async/await` | جریان Promise را خواناتر می‌نویسد | در Async در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `event loop` | task و microtask را هماهنگ می‌کند | در Async در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Async در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Promise` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `async-js.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Promise` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Callbackها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
