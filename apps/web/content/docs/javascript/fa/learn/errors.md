---
title: "Errorها در JavaScript"
description: "این صفحه throw، catch، طبقه‌بندی و گزارش failureهای runtime به شکل روشن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Errorها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Errorها در JavaScript (errors): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Errorها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Errors, Errors tutorial, errors"
order: 56
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Errorها در JavaScript

Errorها در JavaScript درباره throw، catch، طبقه‌بندی و گزارش failureهای runtime به شکل روشن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Errorها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Error`: object شکست runtime را نمایش می‌دهد.
- `throw`: condition استثنایی را signal می‌کند.
- `try/catch`: errorهای throw یا await شده را مدیریت می‌کند.
- برای این موضوع، error message مفید، stack trace قابل پیگیری و recovery مشخص نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="errors-run" type="button">Run safely</button>
<output id="errors-out"></output>
<script>
  document.querySelector('#errors-run').addEventListener('click', () => {
    try {
      JSON.parse('{ "valid": true }');
      document.querySelector('#errors-out').value = 'No error';
    } catch (error) {
      document.querySelector('#errors-out').value = error.message;
    }
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Errors quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Error</code></td><td>represents a runtime failure object</td></tr>
    <tr><td><code>throw</code></td><td>signals an exceptional condition</td></tr>
    <tr><td><code>try/catch</code></td><td>handles thrown or awaited errors</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('errors terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Errors practice</title>
  </head>
  <body>
    <button id="errors-run" type="button">Run safely</button>
    <output id="errors-out"></output>
    <script>
      document.querySelector('#errors-run').addEventListener('click', () => {
        try {
          JSON.parse('{ "valid": true }');
          document.querySelector('#errors-out').value = 'No error';
        } catch (error) {
          document.querySelector('#errors-out').value = error.message;
        }
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Error` | object شکست runtime را نمایش می‌دهد | در Errorها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `throw` | condition استثنایی را signal می‌کند | در Errorها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `try/catch` | errorهای throw یا await شده را مدیریت می‌کند | در Errorها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Errorها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Error` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `errors.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Error` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **هسته زبان** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
