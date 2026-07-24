---
title: "کامنت‌ها در JavaScript"
description: "این صفحه مستند کردن intent با line comment و block comment بدون تغییر رفتار runtime را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش کامنت‌ها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کامنت‌ها در JavaScript (comments): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, کامنت‌ها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Comments, Comments tutorial, comments"
order: 7
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# کامنت‌ها در JavaScript

کامنت‌ها در JavaScript درباره مستند کردن intent با line comment و block comment بدون تغییر رفتار runtime است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی کامنت‌ها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `//`: comment تک‌خطی را شروع می‌کند.
- `/* ... */`: block comment می‌سازد.
- `JSDoc`: type و intent را در comment مستند می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Comments</h2>
  <p id="comments-text">documenting intent with line and block comments without changing runtime behavior.</p>
  <output id="comments-out"></output>
</section>
<script>
  const text = document.querySelector('#comments-text').textContent;
  document.querySelector('#comments-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Comments`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Comments quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>//</code></td><td>starts a single-line comment</td></tr>
    <tr><td><code>/* ... */</code></td><td>wraps a block comment</td></tr>
    <tr><td><code>JSDoc</code></td><td>documents types and intent in comments</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('comments terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Comments practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Comments</h2>
      <p id="comments-text">documenting intent with line and block comments without changing runtime behavior.</p>
      <output id="comments-out"></output>
    </section>
    <script>
      const text = document.querySelector('#comments-text').textContent;
      document.querySelector('#comments-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Comments`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `//` | comment تک‌خطی را شروع می‌کند | در کامنت‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `/* ... */` | block comment می‌سازد | در کامنت‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `JSDoc` | type و intent را در comment مستند می‌کند | در کامنت‌ها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن کامنت‌ها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `//` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `comments.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `//` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **متغیرها و عملگرها** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
