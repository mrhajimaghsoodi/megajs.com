---
title: "Template Stringها"
description: "این صفحه استفاده از template literal برای interpolation، متن چندخطی و snippetهای HTML خوانا را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Template Stringها در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Template Stringها (string templates): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Template Stringها, آموزش JavaScript, مرجع JavaScript, JavaScript Template Strings, Template Strings tutorial, string templates"
order: 24
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Template Stringها

Template Stringها درباره استفاده از template literal برای interpolation، متن چندخطی و snippetهای HTML خوانا است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Template Stringها را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `String`: text را به صورت sequence از code unitهای UTF-16 نگه می‌دارد.
- `template literal`: expressionها را داخل text interpolate می‌کند.
- `includes()`: وجود substring را بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<label>
  Search lesson
  <input id="string-templates-query" value="script">
</label>
<output id="string-templates-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#string-templates-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#string-templates-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Template Strings quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>String</code></td><td>stores text as a sequence of UTF-16 code units</td></tr>
    <tr><td><code>template literal</code></td><td>interpolates expressions inside text</td></tr>
    <tr><td><code>includes()</code></td><td>checks for a substring</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('string-templates terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Strings practice</title>
  </head>
  <body>
    <label>
      Search lesson
      <input id="string-templates-query" value="script">
    </label>
    <output id="string-templates-result"></output>
    <script>
      const title = 'JavaScript live editor';
      const query = document.querySelector('#string-templates-query').value.trim();
      const found = title.toLowerCase().includes(query.toLowerCase());
      document.querySelector('#string-templates-result').value =
        `"${query}" found: ${found === true}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `String` | text را به صورت sequence از code unitهای UTF-16 نگه می‌دارد | در Template Stringها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `template literal` | expressionها را داخل text interpolate می‌کند | در Template Stringها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `includes()` | وجود substring را بررسی می‌کند | در Template Stringها آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Template Stringها بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `String` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `string-templates.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `String` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Methodهای String** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
