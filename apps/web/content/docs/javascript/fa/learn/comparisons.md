---
title: "مقایسه‌ها در JavaScript"
description: "این صفحه مقایسه valueها با strict equality، operatorهای relational و انتخاب coercion قابل پیش‌بینی را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش مقایسه‌ها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش مقایسه‌ها در JavaScript (comparisons): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, مقایسه‌ها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Comparisons, Comparisons tutorial, comparisons"
order: 45
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# مقایسه‌ها در JavaScript

مقایسه‌ها در JavaScript درباره مقایسه valueها با strict equality، operatorهای relational و انتخاب coercion قابل پیش‌بینی است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی مقایسه‌ها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `===`: بدون coercion نوع مقایسه می‌کند.
- `Object.is()`: از semantics نوع SameValue استفاده می‌کند.
- `truthy/falsy`: رفتار conversion به Boolean را توضیح می‌دهد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<ol id="comparisons-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#comparisons-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Comparisons quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>===</code></td><td>compares without type coercion</td></tr>
    <tr><td><code>Object.is()</code></td><td>uses SameValue semantics</td></tr>
    <tr><td><code>truthy/falsy</code></td><td>describes boolean conversion behavior</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('comparisons terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Comparisons practice</title>
  </head>
  <body>
    <ol id="comparisons-list"></ol>
    <script>
      const scores = [92, 71, 88, 64];
      const passed = [];
      for (const score of scores) {
        if (score < 70) continue;
        passed.push(score >= 90 ? 'excellent' : 'passed');
      }
      document.querySelector('#comparisons-list').innerHTML =
        passed.map((status) => `<li>${status}</li>`).join('');
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `===` | بدون coercion نوع مقایسه می‌کند | در مقایسه‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Object.is()` | از semantics نوع SameValue استفاده می‌کند | در مقایسه‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `truthy/falsy` | رفتار conversion به Boolean را توضیح می‌دهد | در مقایسه‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن مقایسه‌ها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `===` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `comparisons.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `===` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **if else در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
