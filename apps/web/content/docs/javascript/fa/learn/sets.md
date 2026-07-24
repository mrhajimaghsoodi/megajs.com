---
title: "Setها در JavaScript"
description: "این صفحه نگه‌داری valueهای یکتا و استفاده از operationهای شبیه set در state برنامه را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Setها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Setها در JavaScript (sets): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime همراه تمرین."
keywords: "JavaScript, Setها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Sets, Sets tutorial, sets"
order: 42
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Setها در JavaScript

Setها در JavaScript درباره نگه‌داری valueهای یکتا و استفاده از operationهای شبیه set در state برنامه است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Setها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Map`: entryهای key-value با key دلخواه نگه می‌دارد.
- `Set`: valueهای یکتا نگه می‌دارد.
- `WeakMap`: keyهای object را بدون جلوگیری از garbage collection نگه می‌دارد.
- برای این موضوع، data flow خوانا، mutation کنترل‌شده و خروجی قابل تست نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Sets</h2>
  <ul id="sets-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#sets-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Sets quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Map</code></td><td>stores key-value entries with arbitrary keys</td></tr>
    <tr><td><code>Set</code></td><td>stores unique values</td></tr>
    <tr><td><code>WeakMap</code></td><td>allows object keys without preventing garbage collection</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('sets terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Sets practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Sets</h2>
      <ul id="sets-list"></ul>
    </section>
    <script>
      const lessons = ['variables', 'arrays', 'promises', 'DOM'];
      const uniqueLessons = new Set(lessons);
      document.querySelector('#sets-list').innerHTML =
        [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Map` | entryهای key-value با key دلخواه نگه می‌دارد | در Setها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Set` | valueهای یکتا نگه می‌دارد | در Setها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `WeakMap` | keyهای object را بدون جلوگیری از garbage collection نگه می‌دارد | در Setها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Setها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Map` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `sets.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Map` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Mapها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
