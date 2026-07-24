---
title: "کلمه let در JavaScript"
description: "این صفحه تعریف variable با block scope که بعداً می‌تواند تغییر کند را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش کلمه let در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کلمه let در JavaScript (let): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, کلمه let در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript let, let tutorial, let"
order: 10
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# کلمه let در JavaScript

کلمه let در JavaScript درباره تعریف variable با block scope که بعداً می‌تواند تغییر کند است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی کلمه let در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `let`: binding mutable با block scope تعریف می‌کند.
- `reassignment`: binding را به value تازه اشاره می‌دهد.
- `TDZ`: خواندن پیش از initialization را منع می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript let</h2>
  <output id="let-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#let-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript let quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>let</code></td><td>declares a block-scoped mutable binding</td></tr>
    <tr><td><code>reassignment</code></td><td>points the binding at a new value</td></tr>
    <tr><td><code>TDZ</code></td><td>prevents reads before initialization</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('let terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript let practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript let</h2>
      <output id="let-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#let-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `let` | binding mutable با block scope تعریف می‌کند | در کلمه let در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `reassignment` | binding را به value تازه اشاره می‌دهد | در کلمه let در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `TDZ` | خواندن پیش از initialization را منع می‌کند | در کلمه let در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن کلمه let در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `let` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `let.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `let` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کلمه const در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
