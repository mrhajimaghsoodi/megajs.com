---
title: "Loop با for در JavaScript"
description: "این صفحه اجرای loop شمارشی همراه کنترل initialization، condition و update را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Loop با for در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Loop با for در JavaScript (loop for): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Loop با for در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript for Loop, for Loop tutorial, loop for"
order: 48
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Loop با for در JavaScript

Loop با for در JavaScript درباره اجرای loop شمارشی همراه کنترل initialization، condition و update است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Loop با for در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `if`: وقتی condition درست است branch می‌کند.
- `for...of`: روی valueهای iterable iteration می‌کند.
- `break`: از loop یا switch زود خارج می‌شود.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<ol id="loop-for-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#loop-for-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript for Loop quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>if</code></td><td>branches when a condition is true</td></tr>
    <tr><td><code>for...of</code></td><td>iterates iterable values</td></tr>
    <tr><td><code>break</code></td><td>exits a loop or switch early</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('loop-for terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript for Loop practice</title>
  </head>
  <body>
    <ol id="loop-for-list"></ol>
    <script>
      const scores = [92, 71, 88, 64];
      const passed = [];
      for (const score of scores) {
        if (score < 70) continue;
        passed.push(score >= 90 ? 'excellent' : 'passed');
      }
      document.querySelector('#loop-for-list').innerHTML =
        passed.map((status) => `<li>${status}</li>`).join('');
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `if` | وقتی condition درست است branch می‌کند | در Loop با for در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `for...of` | روی valueهای iterable iteration می‌کند | در Loop با for در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `break` | از loop یا switch زود خارج می‌شود | در Loop با for در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Loop با for در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `if` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `loop-for.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `if` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Loop با while در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
