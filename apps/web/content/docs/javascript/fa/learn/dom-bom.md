---
title: "DOM و BOM"
description: "این صفحه خواندن و تغییر document، مدیریت window، location، history، navigator و storage مرورگر را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش DOM و BOM در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش DOM و BOM (dom bom): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime همراه تمرین کاربردی."
keywords: "JavaScript, DOM و BOM, آموزش JavaScript, مرجع JavaScript, JavaScript dom-bom, DOM and BOM tutorial"
order: 76
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# DOM و BOM

DOM و BOM درباره خواندن و تغییر document، مدیریت window، location، history، navigator و storage مرورگر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی DOM و BOM را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `document.querySelector()`: یک element از DOM انتخاب می‌کند.
- `addEventListener()`: به eventهای مرورگر subscribe می‌کند.
- `window`: object global مرورگر است.
- برای این موضوع، DOM update قابل پیش‌بینی، listener تمیز و feedback قابل دسترس نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="dom-bom-toggle" type="button">Toggle state</button>
<p id="dom-bom-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#dom-bom-toggle');
  const status = document.querySelector('#dom-bom-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>DOM and BOM quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>document.querySelector()</code></td><td>selects one DOM element</td></tr>
    <tr><td><code>addEventListener()</code></td><td>subscribes to browser events</td></tr>
    <tr><td><code>window</code></td><td>the browser global object</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('dom-bom terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM and BOM practice</title>
  </head>
  <body>
    <button id="dom-bom-toggle" type="button">Toggle state</button>
    <p id="dom-bom-status">Waiting for an event.</p>
    <script>
      const button = document.querySelector('#dom-bom-toggle');
      const status = document.querySelector('#dom-bom-status');
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
| `document.querySelector()` | یک element از DOM انتخاب می‌کند | در DOM و BOM آن را با runtime واقعی، DOM و error handling تست کنید. |
| `addEventListener()` | به eventهای مرورگر subscribe می‌کند | در DOM و BOM آن را با runtime واقعی، DOM و error handling تست کنید. |
| `window` | object global مرورگر است | در DOM و BOM آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن DOM و BOM بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `document.querySelector()` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `dom-bom.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `document.querySelector()` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **مقدمه DOM** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
