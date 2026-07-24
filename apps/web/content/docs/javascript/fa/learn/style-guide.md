---
title: "Style Guide در JavaScript"
description: "این صفحه خوانا نگه داشتن code با naming، formatting، function کوچک و module قابل پیش‌بینی را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Style Guide در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Style Guide در JavaScript (style guide): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Style Guide در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Style Guide, Style Guide tutorial, style guide"
order: 67
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Style Guide در JavaScript

Style Guide در JavaScript درباره خوانا نگه داشتن code با naming، formatting، function کوچک و module قابل پیش‌بینی است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Style Guide در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای Style Guide در JavaScript.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Style Guide</h2>
  <p id="style-guide-text">keeping code readable with naming, formatting, small functions, and predictable modules.</p>
  <output id="style-guide-out"></output>
</section>
<script>
  const text = document.querySelector('#style-guide-text').textContent;
  document.querySelector('#style-guide-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Style Guide`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Style Guide quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in JavaScript Style Guide</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('style-guide terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Style Guide practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Style Guide</h2>
      <p id="style-guide-text">keeping code readable with naming, formatting, small functions, and predictable modules.</p>
      <output id="style-guide-out"></output>
    </section>
    <script>
      const text = document.querySelector('#style-guide-text').textContent;
      document.querySelector('#style-guide-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Style Guide`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای Style Guide در JavaScript | در Style Guide در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در Style Guide در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در Style Guide در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Style Guide در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `style-guide.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Best Practiceهای JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
