---
title: "Location در BOM"
description: "این صفحه خواندن و تغییر URL با location، query string، hash و redirect را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Location در BOM در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Location در BOM (bom location): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Location در BOM, آموزش JavaScript, مرجع JavaScript, JavaScript BOM Location, BOM Location tutorial, bom location"
order: 87
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Location در BOM

Location در BOM درباره خواندن و تغییر URL با location، query string، hash و redirect است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Location در BOM را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Web API`: قابلیتی از مرورگر که از JavaScript استفاده می‌شود.
- `DOM`: document object model که JavaScript update می‌کند.
- `event loop`: کار user، network، timer و rendering را schedule می‌کند.
- برای این موضوع، DOM update قابل پیش‌بینی، listener تمیز و feedback قابل دسترس نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="bom-location-toggle" type="button">Toggle state</button>
<p id="bom-location-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#bom-location-toggle');
  const status = document.querySelector('#bom-location-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>BOM Location quick reference</caption>
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
  console.log('bom-location terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOM Location practice</title>
  </head>
  <body>
    <button id="bom-location-toggle" type="button">Toggle state</button>
    <p id="bom-location-status">Waiting for an event.</p>
    <script>
      const button = document.querySelector('#bom-location-toggle');
      const status = document.querySelector('#bom-location-status');
      button.addEventListener('click', (event) => {
        status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
        status.classList.toggle('is-active');
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Web API` | قابلیتی از مرورگر که از JavaScript استفاده می‌شود | در Location در BOM آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DOM` | document object model که JavaScript update می‌کند | در Location در BOM آن را با runtime واقعی، DOM و error handling تست کنید. |
| `event loop` | کار user، network، timer و rendering را schedule می‌کند | در Location در BOM آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Location در BOM بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Web API` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `bom-location.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Web API` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **History در BOM** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
