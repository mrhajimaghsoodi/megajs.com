---
title: "مقدمه JavaScript"
description: "این صفحه اینکه JavaScript در مرورگر چه می‌کند، چگونه به DOM می‌رسد و این مسیر آموزشی W3Schools-style چگونه چیده شده است را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش مقدمه JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش مقدمه JavaScript (introduction): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, مقدمه JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript introduction, JavaScript tutorial, browser scripting"
order: 1
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# مقدمه JavaScript

مقدمه JavaScript درباره اینکه JavaScript در مرورگر چه می‌کند، چگونه به DOM می‌رسد و این مسیر آموزشی W3Schools-style چگونه چیده شده است است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی مقدمه JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `<script>`: JavaScript را داخل سند HTML اجرا می‌کند.
- `console.log()`: valueها را در DevTools Console چاپ می‌کند.
- `DOM`: درخت زنده سند که JavaScript می‌تواند بخواند و تغییر دهد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>Introduction to JavaScript</h2>
  <p id="introduction-text">what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized.</p>
  <output id="introduction-out"></output>
</section>
<script>
  const text = document.querySelector('#introduction-text').textContent;
  document.querySelector('#introduction-out').value =
    `JavaScript handled ${text.length} characters for Introduction to JavaScript`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Introduction to JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script&gt;</code></td><td>runs JavaScript inside an HTML document</td></tr>
    <tr><td><code>console.log()</code></td><td>prints values in the DevTools Console</td></tr>
    <tr><td><code>DOM</code></td><td>the live document tree JavaScript can read and change</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('introduction terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to JavaScript practice</title>
  </head>
  <body>
    <section>
      <h2>Introduction to JavaScript</h2>
      <p id="introduction-text">what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized.</p>
      <output id="introduction-out"></output>
    </section>
    <script>
      const text = document.querySelector('#introduction-text').textContent;
      document.querySelector('#introduction-out').value =
        `JavaScript handled ${text.length} characters for Introduction to JavaScript`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<script>` | JavaScript را داخل سند HTML اجرا می‌کند | در مقدمه JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `console.log()` | valueها را در DevTools Console چاپ می‌کند | در مقدمه JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DOM` | درخت زنده سند که JavaScript می‌تواند بخواند و تغییر دهد | در مقدمه JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن مقدمه JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `<script>` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `introduction.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `<script>` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **شروع کار با JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
