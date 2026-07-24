---
title: "Numberها در JavaScript"
description: "این صفحه استفاده از numberهای double precision، infinity، NaN، rounding و محدودیت safe integer را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Numberها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Numberها در JavaScript (numbers): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Numberها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Numbers, Numbers tutorial, numbers"
order: 27
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Numberها در JavaScript

Numberها در JavaScript درباره استفاده از numberهای double precision، infinity، NaN، rounding و محدودیت safe integer است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Numberها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Number`: value عددی double precision نگه می‌دارد.
- `BigInt`: integer بسیار بزرگ نگه می‌دارد.
- `Math`: functionهای utility عددی فراهم می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Numbers</h2>
  <output id="numbers-out"></output>
</section>
<script>
  const prices = [19.95, 5.5, 8.25];
  const total = prices.reduce((sum, price) => sum + price, 0);
  const bytes = new Uint8Array([74, 83]);
  document.querySelector('#numbers-out').value =
    `Total: $${total.toFixed(2)}; bytes: ${bytes.join(',')}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Numbers quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Number</code></td><td>stores double-precision numeric values</td></tr>
    <tr><td><code>BigInt</code></td><td>stores very large integers</td></tr>
    <tr><td><code>Math</code></td><td>provides numeric utility functions</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('numbers terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Numbers practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Numbers</h2>
      <output id="numbers-out"></output>
    </section>
    <script>
      const prices = [19.95, 5.5, 8.25];
      const total = prices.reduce((sum, price) => sum + price, 0);
      const bytes = new Uint8Array([74, 83]);
      document.querySelector('#numbers-out').value =
        `Total: $${total.toFixed(2)}; bytes: ${bytes.join(',')}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Number` | value عددی double precision نگه می‌دارد | در Numberها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `BigInt` | integer بسیار بزرگ نگه می‌دارد | در Numberها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Math` | functionهای utility عددی فراهم می‌کند | در Numberها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Numberها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Number` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `numbers.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Number` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **BigInt در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
