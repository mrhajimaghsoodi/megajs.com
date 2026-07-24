---
title: "Methodهای Array"
description: "این صفحه استفاده از map، filter، reduce، find، some، every و methodهای copy مدرن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Methodهای Array در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Methodهای Array (array methods): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Methodهای Array, آموزش JavaScript, مرجع JavaScript, JavaScript Array Methods, Array Methods tutorial, array methods"
order: 33
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Methodهای Array

Methodهای Array درباره استفاده از map، filter، reduce، find، some، every و methodهای copy مدرن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Methodهای Array را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Array`: valueهای مرتب را با index نگه می‌دارد.
- `map()`: Array تبدیل‌شده می‌سازد.
- `for...of`: روی valueهای Array iteration می‌کند.
- برای این موضوع، data flow خوانا، mutation کنترل‌شده و خروجی قابل تست نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>Array Methods</h2>
  <ul id="array-methods-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#array-methods-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Array Methods quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Array</code></td><td>stores ordered values by index</td></tr>
    <tr><td><code>map()</code></td><td>creates a transformed array</td></tr>
    <tr><td><code>for...of</code></td><td>iterates array values</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('array-methods terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array Methods practice</title>
  </head>
  <body>
    <section>
      <h2>Array Methods</h2>
      <ul id="array-methods-list"></ul>
    </section>
    <script>
      const lessons = ['variables', 'arrays', 'promises', 'DOM'];
      const uniqueLessons = new Set(lessons);
      document.querySelector('#array-methods-list').innerHTML =
        [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Array` | valueهای مرتب را با index نگه می‌دارد | در Methodهای Array آن را با runtime واقعی، DOM و error handling تست کنید. |
| `map()` | Array تبدیل‌شده می‌سازد | در Methodهای Array آن را با runtime واقعی، DOM و error handling تست کنید. |
| `for...of` | روی valueهای Array iteration می‌کند | در Methodهای Array آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Methodهای Array بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Array` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `array-methods.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Array` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Sort کردن Array** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
