---
title: "Callbackها در JavaScript"
description: "این صفحه ارسال function برای اجرای بعدی همراه قابل فهم نگه داشتن error و ownership را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Callbackها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Callbackها در JavaScript (callbacks): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Callbackها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Callbacks, Callbacks tutorial, callbacks"
order: 72
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Callbackها در JavaScript

Callbackها در JavaScript درباره ارسال function برای اجرای بعدی همراه قابل فهم نگه داشتن error و ownership است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Callbackها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Promise`: completion یا failure آینده را نمایش می‌دهد.
- `microtask`: بعد از task فعلی و پیش از فرصت rendering اجرا می‌شود.
- `async/await`: جریان Promise را با ساختار کنترل روشن‌تر بیان می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="callbacks-load" type="button">Load async data</button>
<output id="callbacks-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#callbacks-load').addEventListener('click', async () => {
    document.querySelector('#callbacks-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#callbacks-out').value = result;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Callbacks quick reference</caption>
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
  console.log('callbacks terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Callbacks practice</title>
  </head>
  <body>
    <button id="callbacks-load" type="button">Load async data</button>
    <output id="callbacks-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#callbacks-load').addEventListener('click', async () => {
        document.querySelector('#callbacks-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#callbacks-out').value = result;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Promise` | completion یا failure آینده را نمایش می‌دهد | در Callbackها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `microtask` | بعد از task فعلی و پیش از فرصت rendering اجرا می‌شود | در Callbackها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `async/await` | جریان Promise را با ساختار کنترل روشن‌تر بیان می‌کند | در Callbackها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Callbackها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Promise` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `callbacks.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Promise` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Promiseها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
