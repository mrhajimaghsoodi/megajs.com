---
title: "توابع و objectها"
description: "این صفحه سازمان‌دهی رفتار با function، object، property، method و eventهای مرورگر را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش توابع و objectها در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش توابع و objectها (functions objects basics): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, توابع و objectها, آموزش JavaScript, مرجع JavaScript, JavaScript functions-objects-basics, Functions and Object Basics tutorial"
order: 16
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# توابع و objectها

توابع و objectها درباره سازمان‌دهی رفتار با function، object، property، method و eventهای مرورگر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی توابع و objectها را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `value`: یک value در JavaScript برای توابع و objectها.
- `expression`: codeی که value تولید می‌کند.
- `runtime`: مرورگر یا engine اجراکننده code.
- برای این موضوع، ورودی و خروجی روشن، side effect محدود و scope قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="functions-objects-basics-button" type="button">Count clicks</button>
<output id="functions-objects-basics-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#functions-objects-basics-button').addEventListener('click', () => {
    document.querySelector('#functions-objects-basics-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Functions and Object Basics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Functions and Object Basics</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('functions-objects-basics terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions and Object Basics practice</title>
  </head>
  <body>
    <button id="functions-objects-basics-button" type="button">Count clicks</button>
    <output id="functions-objects-basics-out"></output>
    <script>
      function createCounter() {
        let count = 0;
        return () => {
          count += 1;
          return count;
        };
      }
      const nextCount = createCounter();
      document.querySelector('#functions-objects-basics-button').addEventListener('click', () => {
        document.querySelector('#functions-objects-basics-out').value = `Clicked ${nextCount()} time(s)`;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `value` | یک value در JavaScript برای توابع و objectها | در توابع و objectها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `expression` | codeی که value تولید می‌کند | در توابع و objectها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | مرورگر یا engine اجراکننده code | در توابع و objectها آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن توابع و objectها بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `value` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `functions-objects-basics.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `value` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **تابع‌ها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
