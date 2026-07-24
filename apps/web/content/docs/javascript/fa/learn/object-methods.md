---
title: "Methodهای object"
description: "این صفحه قرار دادن function روی object و درک method call و this را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Methodهای object در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Methodهای object (object methods): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Methodهای object, آموزش JavaScript, مرجع JavaScript, JavaScript Object Methods, Object Methods tutorial, object methods"
order: 20
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Methodهای object

Methodهای object درباره قرار دادن function روی object و درک method call و this است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Methodهای object را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای Methodهای object.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<article>
  <h2 id="object-methods-title">Object Methods</h2>
  <output id="object-methods-out"></output>
</article>
<script>
  class Lesson {
    constructor(title) {
      this.title = title;
    }
    label() {
      return `Lesson: ${this.title}`;
    }
  }
  const lesson = new Lesson(document.querySelector('#object-methods-title').textContent);
  document.querySelector('#object-methods-out').value = lesson.label();
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Object Methods quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in Object Methods</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('object-methods terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Methods practice</title>
  </head>
  <body>
    <article>
      <h2 id="object-methods-title">Object Methods</h2>
      <output id="object-methods-out"></output>
    </article>
    <script>
      class Lesson {
        constructor(title) {
          this.title = title;
        }
        label() {
          return `Lesson: ${this.title}`;
        }
      }
      const lesson = new Lesson(document.querySelector('#object-methods-title').textContent);
      document.querySelector('#object-methods-out').value = lesson.label();
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای Methodهای object | در Methodهای object آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در Methodهای object آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در Methodهای object آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Methodهای object بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `object-methods.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Eventها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
