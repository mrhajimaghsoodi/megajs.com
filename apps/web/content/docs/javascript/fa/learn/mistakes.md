---
title: "اشتباه‌های رایج JavaScript"
description: "این صفحه پرهیز از global ضمنی، غافلگیری equality loose، نشت mutation و race در async را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش اشتباه‌های رایج JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش اشتباه‌های رایج JavaScript (mistakes): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, اشتباه‌های رایج JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Common Mistakes, Common Mistakes tutorial, mistakes"
order: 69
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# اشتباه‌های رایج JavaScript

اشتباه‌های رایج JavaScript درباره پرهیز از global ضمنی، غافلگیری equality loose، نشت mutation و race در async است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی اشتباه‌های رایج JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای اشتباه‌های رایج JavaScript.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript Common Mistakes</h2>
  <p id="mistakes-text">avoiding implicit globals, loose equality surprises, mutation leaks, and async races.</p>
  <output id="mistakes-out"></output>
</section>
<script>
  const text = document.querySelector('#mistakes-text').textContent;
  document.querySelector('#mistakes-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Common Mistakes`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Common Mistakes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in JavaScript Common Mistakes</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('mistakes terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Common Mistakes practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Common Mistakes</h2>
      <p id="mistakes-text">avoiding implicit globals, loose equality surprises, mutation leaks, and async races.</p>
      <output id="mistakes-out"></output>
    </section>
    <script>
      const text = document.querySelector('#mistakes-text').textContent;
      document.querySelector('#mistakes-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Common Mistakes`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای اشتباه‌های رایج JavaScript | در اشتباه‌های رایج JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در اشتباه‌های رایج JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در اشتباه‌های رایج JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن اشتباه‌های رایج JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `mistakes.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Performance در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
