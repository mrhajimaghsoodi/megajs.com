---
title: "Objectها در JavaScript"
description: "این صفحه گروه‌بندی data و behavior مرتبط با object literal و reference را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Objectها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Objectها در JavaScript (objects): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Objectها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Objects, Objects tutorial, objects"
order: 18
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Objectها در JavaScript

Objectها در JavaScript درباره گروه‌بندی data و behavior مرتبط با object literal و reference است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Objectها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `{}`: object literal می‌سازد.
- `property`: value را زیر یک key نگه می‌دارد.
- `reference`: به identity همان object اشاره می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<article>
  <h2 id="objects-title">JavaScript Objects</h2>
  <output id="objects-out"></output>
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
  const lesson = new Lesson(document.querySelector('#objects-title').textContent);
  document.querySelector('#objects-out').value = lesson.label();
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Objects quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>{}</code></td><td>creates an object literal</td></tr>
    <tr><td><code>property</code></td><td>stores a value under a key</td></tr>
    <tr><td><code>reference</code></td><td>points to the same object identity</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('objects terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Objects practice</title>
  </head>
  <body>
    <article>
      <h2 id="objects-title">JavaScript Objects</h2>
      <output id="objects-out"></output>
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
      const lesson = new Lesson(document.querySelector('#objects-title').textContent);
      document.querySelector('#objects-out').value = lesson.label();
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `{}` | object literal می‌سازد | در Objectها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `property` | value را زیر یک key نگه می‌دارد | در Objectها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `reference` | به identity همان object اشاره می‌کند | در Objectها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Objectها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `{}` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `objects.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `{}` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Propertyهای object** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
