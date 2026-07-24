---
title: "Classها در JavaScript"
description: "این صفحه استفاده از syntax کلاس روی prototype برای constructor، method، field و inheritance را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Classها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Classها در JavaScript (classes): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Classها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Classes, Classes tutorial, classes"
order: 63
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Classها در JavaScript

Classها در JavaScript درباره استفاده از syntax کلاس روی prototype برای constructor، method، field و inheritance است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Classها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `class`: syntax برای constructor و methodهای prototype.
- `prototype`: objectی برای inheritance در lookup property.
- `extends`: رابطه subclass می‌سازد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<article>
  <h2 id="classes-title">JavaScript Classes</h2>
  <output id="classes-out"></output>
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
  const lesson = new Lesson(document.querySelector('#classes-title').textContent);
  document.querySelector('#classes-out').value = lesson.label();
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Classes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>class</code></td><td>syntax for constructor and prototype methods</td></tr>
    <tr><td><code>prototype</code></td><td>object used for property lookup inheritance</td></tr>
    <tr><td><code>extends</code></td><td>creates a subclass relationship</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('classes terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Classes practice</title>
  </head>
  <body>
    <article>
      <h2 id="classes-title">JavaScript Classes</h2>
      <output id="classes-out"></output>
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
      const lesson = new Lesson(document.querySelector('#classes-title').textContent);
      document.querySelector('#classes-out').value = lesson.label();
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `class` | syntax برای constructor و methodهای prototype | در Classها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `prototype` | objectی برای inheritance در lookup property | در Classها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `extends` | رابطه subclass می‌سازد | در Classها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Classها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `class` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `classes.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `class` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Moduleها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
