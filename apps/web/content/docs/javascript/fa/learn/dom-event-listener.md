---
title: "Event Listener در DOM"
description: "این صفحه افزودن، حذف و تنظیم listener با optionهایی مثل once، passive و signal را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Event Listener در DOM در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Event Listener در DOM (dom event listener): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Event Listener در DOM, آموزش JavaScript, مرجع JavaScript, JavaScript DOM Event Listener, DOM Event Listener tutorial, dom event listener"
order: 83
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Event Listener در DOM

Event Listener در DOM درباره افزودن، حذف و تنظیم listener با optionهایی مثل once، passive و signal است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Event Listener در DOM را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Web API`: قابلیتی از مرورگر که از JavaScript استفاده می‌شود.
- `DOM`: document object model که JavaScript update می‌کند.
- `event loop`: کار user، network، timer و rendering را schedule می‌کند.
- برای این موضوع، DOM update قابل پیش‌بینی، listener تمیز و feedback قابل دسترس نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="dom-event-listener-toggle" type="button">Toggle state</button>
<p id="dom-event-listener-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#dom-event-listener-toggle');
  const status = document.querySelector('#dom-event-listener-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>DOM Event Listener quick reference</caption>
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
  console.log('dom-event-listener terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Event Listener practice</title>
  </head>
  <body>
    <button id="dom-event-listener-toggle" type="button">Toggle state</button>
    <p id="dom-event-listener-status">Waiting for an event.</p>
    <script>
      const button = document.querySelector('#dom-event-listener-toggle');
      const status = document.querySelector('#dom-event-listener-status');
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
| `Web API` | قابلیتی از مرورگر که از JavaScript استفاده می‌شود | در Event Listener در DOM آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DOM` | document object model که JavaScript update می‌کند | در Event Listener در DOM آن را با runtime واقعی، DOM و error handling تست کنید. |
| `event loop` | کار user، network، timer و rendering را schedule می‌کند | در Event Listener در DOM آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Event Listener در DOM بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Web API` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `dom-event-listener.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Web API` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Navigation در DOM** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
