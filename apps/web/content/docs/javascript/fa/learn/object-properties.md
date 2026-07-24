---
title: "Propertyهای object"
description: "این صفحه خواندن، نوشتن، بررسی و حذف propertyهای object به شکل امن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Propertyهای object در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Propertyهای object (object properties): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Propertyهای object, آموزش JavaScript, مرجع JavaScript, JavaScript Object Properties, Object Properties tutorial, object properties"
order: 19
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Propertyهای object

Propertyهای object درباره خواندن، نوشتن، بررسی و حذف propertyهای object به شکل امن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Propertyهای object را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای Propertyهای object.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<article>
  <h2 id="object-properties-title">Object Properties</h2>
  <output id="object-properties-out"></output>
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
  const lesson = new Lesson(document.querySelector('#object-properties-title').textContent);
  document.querySelector('#object-properties-out').value = lesson.label();
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Object Properties quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in Object Properties</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('object-properties terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Properties practice</title>
  </head>
  <body>
    <article>
      <h2 id="object-properties-title">Object Properties</h2>
      <output id="object-properties-out"></output>
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
      const lesson = new Lesson(document.querySelector('#object-properties-title').textContent);
      document.querySelector('#object-properties-out').value = lesson.label();
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای Propertyهای object | در Propertyهای object آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در Propertyهای object آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در Propertyهای object آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Propertyهای object بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `object-properties.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Methodهای object** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
