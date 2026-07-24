---
title: "async/await در JavaScript"
description: "این صفحه نوشتن code مبتنی بر Promise با جریان شبیه sync و blockهای try/catch روشن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش async/await در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش async/await در JavaScript (async await): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, async/await در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript async await, async await tutorial, async await"
order: 74
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# async/await در JavaScript

async/await در JavaScript درباره نوشتن code مبتنی بر Promise با جریان شبیه sync و blockهای try/catch روشن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی async/await در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `async function`: همیشه Promise برمی‌گرداند.
- `await`: داخل code async تا settled شدن Promise مکث می‌کند.
- `try/catch`: failureهای await شده را مدیریت می‌کند.
- برای این موضوع، loading state روشن، error handling قابل اعتماد و ترتیب microtask قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="async-await-load" type="button">Load async data</button>
<output id="async-await-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#async-await-load').addEventListener('click', async () => {
    document.querySelector('#async-await-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#async-await-out').value = result;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript async await quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>async function</code></td><td>always returns a Promise</td></tr>
    <tr><td><code>await</code></td><td>pauses within async code until a Promise settles</td></tr>
    <tr><td><code>try/catch</code></td><td>handles awaited failures</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('async-await terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript async await practice</title>
  </head>
  <body>
    <button id="async-await-load" type="button">Load async data</button>
    <output id="async-await-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#async-await-load').addEventListener('click', async () => {
        document.querySelector('#async-await-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#async-await-out').value = result;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `async function` | همیشه Promise برمی‌گرداند | در async/await در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `await` | داخل code async تا settled شدن Promise مکث می‌کند | در async/await در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `try/catch` | failureهای await شده را مدیریت می‌کند | در async/await در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن async/await در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `async function` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `async-await.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `async function` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Timerها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
