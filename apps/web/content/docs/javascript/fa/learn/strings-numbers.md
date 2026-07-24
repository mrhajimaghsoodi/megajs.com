---
title: "رشته و عدد"
description: "این صفحه فرمت کردن text، جست‌وجوی string، محاسبه number و انتخاب ابزار عددی درست را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش رشته و عدد در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش رشته و عدد (strings numbers): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, رشته و عدد, آموزش JavaScript, مرجع JavaScript, JavaScript strings-numbers, Strings and Numbers tutorial"
order: 22
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# رشته و عدد

رشته و عدد درباره فرمت کردن text، جست‌وجوی string، محاسبه number و انتخاب ابزار عددی درست است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی رشته و عدد را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `value`: یک value در JavaScript برای رشته و عدد.
- `expression`: codeی که value تولید می‌کند.
- `runtime`: مرورگر یا engine اجراکننده code.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<label>
  Search lesson
  <input id="strings-numbers-query" value="script">
</label>
<output id="strings-numbers-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#strings-numbers-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#strings-numbers-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Strings and Numbers quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Strings and Numbers</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('strings-numbers terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings and Numbers practice</title>
  </head>
  <body>
    <label>
      Search lesson
      <input id="strings-numbers-query" value="script">
    </label>
    <output id="strings-numbers-result"></output>
    <script>
      const title = 'JavaScript live editor';
      const query = document.querySelector('#strings-numbers-query').value.trim();
      const found = title.toLowerCase().includes(query.toLowerCase());
      document.querySelector('#strings-numbers-result').value =
        `"${query}" found: ${found === true}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `value` | یک value در JavaScript برای رشته و عدد | در رشته و عدد آن را با runtime واقعی، DOM و error handling تست کنید. |
| `expression` | codeی که value تولید می‌کند | در رشته و عدد آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | مرورگر یا engine اجراکننده code | در رشته و عدد آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن رشته و عدد بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `value` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `strings-numbers.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `value` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Stringها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
