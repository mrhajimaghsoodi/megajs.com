---
title: "متغیرها و عملگرها"
description: "این صفحه نگه‌داری valueها، انتخاب declaration درست و ترکیب valueها با operatorها به شکل امن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش متغیرها و عملگرها در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش متغیرها و عملگرها (variables operators): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, متغیرها و عملگرها, آموزش JavaScript, مرجع JavaScript, JavaScript variables-operators, Variables and Operators tutorial"
order: 8
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# متغیرها و عملگرها

متغیرها و عملگرها درباره نگه‌داری valueها، انتخاب declaration درست و ترکیب valueها با operatorها به شکل امن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی متغیرها و عملگرها را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `value`: یک value در JavaScript برای متغیرها و عملگرها.
- `expression`: codeی که value تولید می‌کند.
- `runtime`: مرورگر یا engine اجراکننده code.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>Variables and Operators</h2>
  <output id="variables-operators-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#variables-operators-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Variables and Operators quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Variables and Operators</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('variables-operators terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables and Operators practice</title>
  </head>
  <body>
    <section>
      <h2>Variables and Operators</h2>
      <output id="variables-operators-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#variables-operators-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `value` | یک value در JavaScript برای متغیرها و عملگرها | در متغیرها و عملگرها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `expression` | codeی که value تولید می‌کند | در متغیرها و عملگرها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | مرورگر یا engine اجراکننده code | در متغیرها و عملگرها آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن متغیرها و عملگرها بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `value` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `variables-operators.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `value` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **متغیرهای JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
