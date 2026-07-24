---
title: "Promiseها در JavaScript"
description: "این صفحه نمایش نتیجه آینده با fulfillment، rejection، chaining و propagation خطا را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Promiseها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Promiseها در JavaScript (promises): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Promiseها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Promises, Promises tutorial, promises"
order: 73
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Promiseها در JavaScript

Promiseها در JavaScript درباره نمایش نتیجه آینده با fulfillment، rejection، chaining و propagation خطا است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Promiseها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Promise`: کار pending، fulfilled یا rejected را نمایش می‌دهد.
- `.then()`: پس از fulfillment ادامه می‌دهد.
- `.catch()`: rejection را مدیریت می‌کند.
- برای این موضوع، loading state روشن، error handling قابل اعتماد و ترتیب microtask قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="promises-load" type="button">Load async data</button>
<output id="promises-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#promises-load').addEventListener('click', async () => {
    document.querySelector('#promises-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#promises-out').value = result;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Promises quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Promise</code></td><td>represents pending, fulfilled, or rejected work</td></tr>
    <tr><td><code>.then()</code></td><td>continues after fulfillment</td></tr>
    <tr><td><code>.catch()</code></td><td>handles rejection</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('promises terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Promises practice</title>
  </head>
  <body>
    <button id="promises-load" type="button">Load async data</button>
    <output id="promises-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#promises-load').addEventListener('click', async () => {
        document.querySelector('#promises-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#promises-out').value = result;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Promise` | کار pending، fulfilled یا rejected را نمایش می‌دهد | در Promiseها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `.then()` | پس از fulfillment ادامه می‌دهد | در Promiseها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `.catch()` | rejection را مدیریت می‌کند | در Promiseها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Promiseها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Promise` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `promises.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Promise` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **async/await در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
