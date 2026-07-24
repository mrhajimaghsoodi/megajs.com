---
title: "متغیرهای JavaScript"
description: "این صفحه نام‌گذاری valueها و درک reassignment، initialization و state خوانا را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش متغیرهای JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش متغیرهای JavaScript (variables): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, متغیرهای JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Variables, Variables tutorial, variables"
order: 9
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# متغیرهای JavaScript

متغیرهای JavaScript درباره نام‌گذاری valueها و درک reassignment، initialization و state خوانا است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی متغیرهای JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `let count = 0`: binding قابل تغییر تعریف می‌کند.
- `const name = "Ada"`: binding غیرقابل reassignment تعریف می‌کند.
- `scope`: محدوده دید binding را محدود می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Variables</h2>
  <output id="variables-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#variables-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Variables quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>let count = 0</code></td><td>declares a changeable binding</td></tr>
    <tr><td><code>const name = &quot;Ada&quot;</code></td><td>declares a non-reassignable binding</td></tr>
    <tr><td><code>scope</code></td><td>limits where a binding is visible</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('variables terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Variables practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Variables</h2>
      <output id="variables-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#variables-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `let count = 0` | binding قابل تغییر تعریف می‌کند | در متغیرهای JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `const name = "Ada"` | binding غیرقابل reassignment تعریف می‌کند | در متغیرهای JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `scope` | محدوده دید binding را محدود می‌کند | در متغیرهای JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن متغیرهای JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `let count = 0` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `variables.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `let count = 0` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کلمه let در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
