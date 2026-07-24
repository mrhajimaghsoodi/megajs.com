---
title: "Eventها در JavaScript"
description: "این صفحه واکنش به click، input، submit، keyboard و eventهای مرورگر با listener را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Eventها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Eventها در JavaScript (events): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Eventها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Events, Events tutorial, events"
order: 21
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Eventها در JavaScript

Eventها در JavaScript درباره واکنش به click، input، submit، keyboard و eventهای مرورگر با listener است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Eventها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `event`: رخدادی در مرورگر را توصیف می‌کند.
- `addEventListener()`: callback event ثبت می‌کند.
- `event.target`: به target رخداد اشاره می‌کند.
- برای این موضوع، DOM update قابل پیش‌بینی، listener تمیز و feedback قابل دسترس نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="events-toggle" type="button">Toggle state</button>
<p id="events-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#events-toggle');
  const status = document.querySelector('#events-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Events quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>event</code></td><td>describes something that happened in the browser</td></tr>
    <tr><td><code>addEventListener()</code></td><td>registers an event callback</td></tr>
    <tr><td><code>event.target</code></td><td>points at the dispatch target</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('events terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Events practice</title>
  </head>
  <body>
    <button id="events-toggle" type="button">Toggle state</button>
    <p id="events-status">Waiting for an event.</p>
    <script>
      const button = document.querySelector('#events-toggle');
      const status = document.querySelector('#events-status');
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
| `event` | رخدادی در مرورگر را توصیف می‌کند | در Eventها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `addEventListener()` | callback event ثبت می‌کند | در Eventها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `event.target` | به target رخداد اشاره می‌کند | در Eventها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Eventها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `event` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `events.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `event` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **رشته و عدد** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
