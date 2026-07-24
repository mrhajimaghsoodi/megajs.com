---
title: "Assignment در JavaScript"
description: "این صفحه به‌روزرسانی bindingها با assignment ساده، compound، logical و destructuring را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Assignment در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Assignment در JavaScript (assignment): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Assignment در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Assignment, Assignment tutorial, assignment"
order: 14
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Assignment در JavaScript

Assignment در JavaScript درباره به‌روزرسانی bindingها با assignment ساده، compound، logical و destructuring است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Assignment در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `=`: value را به binding یا property می‌دهد.
- `+=`: می‌خواند، اضافه می‌کند و برمی‌گرداند.
- `destructuring`: از patternهای Array یا object assignment می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Assignment</h2>
  <output id="assignment-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#assignment-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Assignment quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>=</code></td><td>assigns a value to a binding or property</td></tr>
    <tr><td><code>+=</code></td><td>reads, adds, and writes back</td></tr>
    <tr><td><code>destructuring</code></td><td>assigns from array or object patterns</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('assignment terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Assignment practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Assignment</h2>
      <output id="assignment-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#assignment-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `=` | value را به binding یا property می‌دهد | در Assignment در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `+=` | می‌خواند، اضافه می‌کند و برمی‌گرداند | در Assignment در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `destructuring` | از patternهای Array یا object assignment می‌کند | در Assignment در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Assignment در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `=` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `assignment.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `=` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Data Typeها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
