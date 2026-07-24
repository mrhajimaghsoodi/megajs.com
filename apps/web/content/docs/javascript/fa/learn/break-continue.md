---
title: "Break و Continue در JavaScript"
description: "این صفحه خروج زود از loop یا رد کردن یک iteration بدون پنهان کردن جریان کنترل را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Break و Continue در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Break و Continue در JavaScript (break continue): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM."
keywords: "JavaScript, Break و Continue در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Break and Continue, Break and Continue tutorial, break continue"
order: 52
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Break و Continue در JavaScript

Break و Continue در JavaScript درباره خروج زود از loop یا رد کردن یک iteration بدون پنهان کردن جریان کنترل است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Break و Continue در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `if`: وقتی condition درست است branch می‌کند.
- `for...of`: روی valueهای iterable iteration می‌کند.
- `break`: از loop یا switch زود خارج می‌شود.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<ol id="break-continue-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#break-continue-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Break and Continue quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>if</code></td><td>branches when a condition is true</td></tr>
    <tr><td><code>for...of</code></td><td>iterates iterable values</td></tr>
    <tr><td><code>break</code></td><td>exits a loop or switch early</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('break-continue terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Break and Continue practice</title>
  </head>
  <body>
    <ol id="break-continue-list"></ol>
    <script>
      const scores = [92, 71, 88, 64];
      const passed = [];
      for (const score of scores) {
        if (score < 70) continue;
        passed.push(score >= 90 ? 'excellent' : 'passed');
      }
      document.querySelector('#break-continue-list').innerHTML =
        passed.map((status) => `<li>${status}</li>`).join('');
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `if` | وقتی condition درست است branch می‌کند | در Break و Continue در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `for...of` | روی valueهای iterable iteration می‌کند | در Break و Continue در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `break` | از loop یا switch زود خارج می‌شود | در Break و Continue در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Break و Continue در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `if` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `break-continue.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `if` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **typeof و Type Conversion** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
