---
title: "Statementها در JavaScript"
description: "این صفحه خواندن هر دستور اجرایی و گروه‌بندی statementها در یک برنامه را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Statementها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Statementها در JavaScript (statements): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Statementها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Statements, Statements tutorial, statements"
order: 5
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Statementها در JavaScript

Statementها در JavaScript درباره خواندن هر دستور اجرایی و گروه‌بندی statementها در یک برنامه است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Statementها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `statement`: یک گام اجرایی در برنامه است.
- `block`: statementها را با brace گروه می‌کند.
- `;`: می‌تواند statement را explicit پایان دهد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Statements</h2>
  <p id="statements-text">reading one executable instruction at a time and grouping statements into programs.</p>
  <output id="statements-out"></output>
</section>
<script>
  const text = document.querySelector('#statements-text').textContent;
  document.querySelector('#statements-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Statements`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Statements quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>statement</code></td><td>an executable step in a program</td></tr>
    <tr><td><code>block</code></td><td>groups statements with braces</td></tr>
    <tr><td><code>;</code></td><td>can terminate a statement explicitly</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('statements terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Statements practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Statements</h2>
      <p id="statements-text">reading one executable instruction at a time and grouping statements into programs.</p>
      <output id="statements-out"></output>
    </section>
    <script>
      const text = document.querySelector('#statements-text').textContent;
      document.querySelector('#statements-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Statements`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `statement` | یک گام اجرایی در برنامه است | در Statementها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `block` | statementها را با brace گروه می‌کند | در Statementها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `;` | می‌تواند statement را explicit پایان دهد | در Statementها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Statementها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `statement` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `statements.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `statement` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Syntax در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
