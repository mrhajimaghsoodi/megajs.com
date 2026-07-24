---
title: "Strict Mode در JavaScript"
description: "این صفحه فعال کردن ruleهای runtime سخت‌گیرانه‌تر و error امن‌تر برای رفتارهای قدیمی پرریسک را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Strict Mode در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Strict Mode در JavaScript (strict mode): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Strict Mode در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Strict Mode, Strict Mode tutorial, strict mode"
order: 60
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Strict Mode در JavaScript

Strict Mode در JavaScript درباره فعال کردن ruleهای runtime سخت‌گیرانه‌تر و error امن‌تر برای رفتارهای قدیمی پرریسک است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Strict Mode در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای Strict Mode در JavaScript.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Strict Mode</h2>
  <p id="strict-mode-text">opting into stricter runtime rules and safer errors for older risky behavior.</p>
  <output id="strict-mode-out"></output>
</section>
<script>
  const text = document.querySelector('#strict-mode-text').textContent;
  document.querySelector('#strict-mode-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Strict Mode`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Strict Mode quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in JavaScript Strict Mode</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('strict-mode terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Strict Mode practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Strict Mode</h2>
      <p id="strict-mode-text">opting into stricter runtime rules and safer errors for older risky behavior.</p>
      <output id="strict-mode-out"></output>
    </section>
    <script>
      const text = document.querySelector('#strict-mode-text').textContent;
      document.querySelector('#strict-mode-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Strict Mode`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای Strict Mode در JavaScript | در Strict Mode در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در Strict Mode در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در Strict Mode در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Strict Mode در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `strict-mode.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کلمه this در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
