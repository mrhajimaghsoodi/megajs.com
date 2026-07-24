---
title: "Web Workerها"
description: "این صفحه انتقال کار سنگین از main thread با message و data مبتنی بر structured clone را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Web Workerها در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Web Workerها (web workers): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime همراه تمرین."
keywords: "JavaScript, Web Workerها, آموزش JavaScript, مرجع JavaScript, JavaScript Web Workers, Web Workers tutorial, web workers"
order: 95
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Web Workerها

Web Workerها درباره انتقال کار سنگین از main thread با message و data مبتنی بر structured clone است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Web Workerها را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Web API`: قابلیتی از مرورگر که از JavaScript استفاده می‌شود.
- `DOM`: document object model که JavaScript update می‌کند.
- `event loop`: کار user، network، timer و rendering را schedule می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="web-workers-run" type="button">Run worker-style task</button>
<output id="web-workers-out"></output>
<script>
  document.querySelector('#web-workers-run').addEventListener('click', () => {
    const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
    const total = numbers.reduce((sum, value) => sum + value, 0);
    document.querySelector('#web-workers-out').value = `Worker message result: ${total}`;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Web Workers quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Web API</code></td><td>browser-provided capability used from JavaScript</td></tr>
    <tr><td><code>DOM</code></td><td>the document object model JavaScript updates</td></tr>
    <tr><td><code>event loop</code></td><td>schedules user, network, timer, and rendering work</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('web-workers terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Workers practice</title>
  </head>
  <body>
    <button id="web-workers-run" type="button">Run worker-style task</button>
    <output id="web-workers-out"></output>
    <script>
      document.querySelector('#web-workers-run').addEventListener('click', () => {
        const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
        const total = numbers.reduce((sum, value) => sum + value, 0);
        document.querySelector('#web-workers-out').value = `Worker message result: ${total}`;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Web API` | قابلیتی از مرورگر که از JavaScript استفاده می‌شود | در Web Workerها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DOM` | document object model که JavaScript update می‌کند | در Web Workerها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `event loop` | کار user، network، timer و rendering را schedule می‌کند | در Web Workerها آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Web Workerها بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Web API` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `web-workers.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Web API` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Validation فرم با JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
