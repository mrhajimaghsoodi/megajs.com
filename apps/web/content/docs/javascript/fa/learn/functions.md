---
title: "تابع‌ها در JavaScript"
description: "این صفحه تعریف رفتار قابل استفاده مجدد، ارسال argument، برگشت دادن value و روشن نگه داشتن side effect را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش تابع‌ها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش تابع‌ها در JavaScript (functions): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, تابع‌ها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Functions, Functions tutorial, functions"
order: 17
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# تابع‌ها در JavaScript

تابع‌ها در JavaScript درباره تعریف رفتار قابل استفاده مجدد، ارسال argument، برگشت دادن value و روشن نگه داشتن side effect است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی تابع‌ها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `function`: رفتار قابل استفاده مجدد تعریف می‌کند.
- `return`: value را به caller برمی‌گرداند.
- `parameter`: input داخل function را نام‌گذاری می‌کند.
- برای این موضوع، ورودی و خروجی روشن، side effect محدود و scope قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="functions-button" type="button">Count clicks</button>
<output id="functions-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#functions-button').addEventListener('click', () => {
    document.querySelector('#functions-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Functions quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>function</code></td><td>declares reusable behavior</td></tr>
    <tr><td><code>return</code></td><td>sends a value back to the caller</td></tr>
    <tr><td><code>parameter</code></td><td>names an input inside the function</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('functions terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Functions practice</title>
  </head>
  <body>
    <button id="functions-button" type="button">Count clicks</button>
    <output id="functions-out"></output>
    <script>
      function createCounter() {
        let count = 0;
        return () => {
          count += 1;
          return count;
        };
      }
      const nextCount = createCounter();
      document.querySelector('#functions-button').addEventListener('click', () => {
        document.querySelector('#functions-out').value = `Clicked ${nextCount()} time(s)`;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `function` | رفتار قابل استفاده مجدد تعریف می‌کند | در تابع‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `return` | value را به caller برمی‌گرداند | در تابع‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `parameter` | input داخل function را نام‌گذاری می‌کند | در تابع‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن تابع‌ها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `function` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `functions.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `function` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Objectها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
