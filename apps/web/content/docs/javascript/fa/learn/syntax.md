---
title: "Syntax در JavaScript"
description: "این صفحه نوشتن identifier، literal، expression، block و semicolon به شکل قابل پیش‌بینی را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Syntax در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Syntax در JavaScript (syntax): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Syntax در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Syntax, Syntax tutorial, syntax"
order: 6
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Syntax در JavaScript

Syntax در JavaScript درباره نوشتن identifier، literal، expression، block و semicolon به شکل قابل پیش‌بینی است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Syntax در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `identifier`: variable، function و property را نام‌گذاری می‌کند.
- `literal`: یک value را مستقیم در source می‌نویسد.
- `{ ... }`: بسته به context block یا object literal می‌سازد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Syntax</h2>
  <p id="syntax-text">writing identifiers, literals, expressions, blocks, and semicolons predictably.</p>
  <output id="syntax-out"></output>
</section>
<script>
  const text = document.querySelector('#syntax-text').textContent;
  document.querySelector('#syntax-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Syntax`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Syntax quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>identifier</code></td><td>names variables, functions, and properties</td></tr>
    <tr><td><code>literal</code></td><td>writes a value directly in source</td></tr>
    <tr><td><code>{ ... }</code></td><td>creates a block or object literal depending on context</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('syntax terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Syntax practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Syntax</h2>
      <p id="syntax-text">writing identifiers, literals, expressions, blocks, and semicolons predictably.</p>
      <output id="syntax-out"></output>
    </section>
    <script>
      const text = document.querySelector('#syntax-text').textContent;
      document.querySelector('#syntax-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Syntax`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `identifier` | variable، function و property را نام‌گذاری می‌کند | در Syntax در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `literal` | یک value را مستقیم در source می‌نویسد | در Syntax در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `{ ... }` | بسته به context block یا object literal می‌سازد | در Syntax در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Syntax در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `identifier` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `syntax.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `identifier` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کامنت‌ها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
