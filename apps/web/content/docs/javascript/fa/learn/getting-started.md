---
title: "شروع کار با JavaScript"
description: "این صفحه قرار دادن script، دیدن output، خواندن statementها و نوشتن syntax معتبر برای شروع را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش شروع کار با JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش شروع کار با JavaScript (getting started): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, شروع کار با JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript getting-started, JavaScript Getting Started tutorial"
order: 2
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# شروع کار با JavaScript

شروع کار با JavaScript درباره قرار دادن script، دیدن output، خواندن statementها و نوشتن syntax معتبر برای شروع است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی شروع کار با JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `<script>`: JavaScript را به HTML وصل می‌کند.
- `DevTools Console`: output و errorهای runtime را نشان می‌دهد.
- `statement`: یک دستور اجرایی است.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Getting Started</h2>
  <p id="getting-started-text">placing scripts, seeing output, reading statements, and writing valid beginner syntax.</p>
  <output id="getting-started-out"></output>
</section>
<script>
  const text = document.querySelector('#getting-started-text').textContent;
  document.querySelector('#getting-started-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Getting Started`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Getting Started quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script&gt;</code></td><td>connects JavaScript to HTML</td></tr>
    <tr><td><code>DevTools Console</code></td><td>shows runtime output and errors</td></tr>
    <tr><td><code>statement</code></td><td>one executable instruction</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('getting-started terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Getting Started practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Getting Started</h2>
      <p id="getting-started-text">placing scripts, seeing output, reading statements, and writing valid beginner syntax.</p>
      <output id="getting-started-out"></output>
    </section>
    <script>
      const text = document.querySelector('#getting-started-text').textContent;
      document.querySelector('#getting-started-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Getting Started`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<script>` | JavaScript را به HTML وصل می‌کند | در شروع کار با JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | output و errorهای runtime را نشان می‌دهد | در شروع کار با JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `statement` | یک دستور اجرایی است | در شروع کار با JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن شروع کار با JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `<script>` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `getting-started.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `<script>` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کجا JavaScript بنویسیم** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
