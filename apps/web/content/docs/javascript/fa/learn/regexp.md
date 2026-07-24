---
title: "RegExp در JavaScript"
description: "این صفحه match کردن الگوی text با literal، flag، group و مرز validation امن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش RegExp در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش RegExp در JavaScript (regexp): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, RegExp در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript RegExp, RegExp tutorial, regexp"
order: 55
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# RegExp در JavaScript

RegExp در JavaScript درباره match کردن الگوی text با literal، flag، group و مرز validation امن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی RegExp در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `/pattern/u`: regular expression literal می‌سازد.
- `flags`: رفتار matching را تغییر می‌دهد.
- `match()`: matchهای الگو را از text برمی‌گرداند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<label>Username <input id="regexp-name" value="mega_js"></label>
<output id="regexp-out"></output>
<script>
  const username = document.querySelector('#regexp-name').value;
  const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
  document.querySelector('#regexp-out').value = `Valid username: ${isValid}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript RegExp quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>/pattern/u</code></td><td>creates a regular expression literal</td></tr>
    <tr><td><code>flags</code></td><td>change matching behavior</td></tr>
    <tr><td><code>match()</code></td><td>returns pattern matches from text</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('regexp terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript RegExp practice</title>
  </head>
  <body>
    <label>Username <input id="regexp-name" value="mega_js"></label>
    <output id="regexp-out"></output>
    <script>
      const username = document.querySelector('#regexp-name').value;
      const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
      document.querySelector('#regexp-out').value = `Valid username: ${isValid}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `/pattern/u` | regular expression literal می‌سازد | در RegExp در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `flags` | رفتار matching را تغییر می‌دهد | در RegExp در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `match()` | matchهای الگو را از text برمی‌گرداند | در RegExp در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن RegExp در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `/pattern/u` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `regexp.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `/pattern/u` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Errorها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
