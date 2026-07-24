---
title: "Data Typeها در JavaScript"
description: "این صفحه کار با primitive valueها، object، typeof، null، undefined و مرزهای conversion را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Data Typeها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Data Typeها در JavaScript (data types): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Data Typeها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Data Types, Data Types tutorial, data types"
order: 15
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Data Typeها در JavaScript

Data Typeها در JavaScript درباره کار با primitive valueها، object، typeof، null، undefined و مرزهای conversion است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Data Typeها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `typeof`: stringی درباره دسته value برمی‌گرداند.
- `null / undefined`: value خالی یا missing را متفاوت نشان می‌دهند.
- `object`: reference و behavior کلیددار نگه می‌دارد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Data Types</h2>
  <output id="data-types-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#data-types-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Data Types quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>typeof</code></td><td>returns a string describing a value category</td></tr>
    <tr><td><code>null / undefined</code></td><td>represent empty or missing values differently</td></tr>
    <tr><td><code>object</code></td><td>stores keyed references and behavior</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('data-types terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Data Types practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Data Types</h2>
      <output id="data-types-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#data-types-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `typeof` | stringی درباره دسته value برمی‌گرداند | در Data Typeها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `null / undefined` | value خالی یا missing را متفاوت نشان می‌دهند | در Data Typeها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `object` | reference و behavior کلیددار نگه می‌دارد | در Data Typeها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Data Typeها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `typeof` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `data-types.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `typeof` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **توابع و objectها** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
