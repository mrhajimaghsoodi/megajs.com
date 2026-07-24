---
title: "جریان کنترل"
description: "این صفحه تصمیم‌گیری، loop، مقایسه valueها، تبدیل type، match الگو و مدیریت error را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش جریان کنترل در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش جریان کنترل (control flow): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime همراه تمرین."
keywords: "JavaScript, جریان کنترل, آموزش JavaScript, مرجع JavaScript, JavaScript control-flow, Control Flow tutorial"
order: 44
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# جریان کنترل

جریان کنترل درباره تصمیم‌گیری، loop، مقایسه valueها، تبدیل type، match الگو و مدیریت error است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی جریان کنترل را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `value`: یک value در JavaScript برای جریان کنترل.
- `expression`: codeی که value تولید می‌کند.
- `runtime`: مرورگر یا engine اجراکننده code.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>Control Flow</h2>
  <p id="control-flow-text">making decisions, looping, comparing values, converting types, matching patterns, and handling errors.</p>
  <output id="control-flow-out"></output>
</section>
<script>
  const text = document.querySelector('#control-flow-text').textContent;
  document.querySelector('#control-flow-out').value =
    `JavaScript handled ${text.length} characters for Control Flow`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Control Flow quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Control Flow</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('control-flow terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control Flow practice</title>
  </head>
  <body>
    <section>
      <h2>Control Flow</h2>
      <p id="control-flow-text">making decisions, looping, comparing values, converting types, matching patterns, and handling errors.</p>
      <output id="control-flow-out"></output>
    </section>
    <script>
      const text = document.querySelector('#control-flow-text').textContent;
      document.querySelector('#control-flow-out').value =
        `JavaScript handled ${text.length} characters for Control Flow`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `value` | یک value در JavaScript برای جریان کنترل | در جریان کنترل آن را با runtime واقعی، DOM و error handling تست کنید. |
| `expression` | codeی که value تولید می‌کند | در جریان کنترل آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | مرورگر یا engine اجراکننده code | در جریان کنترل آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن جریان کنترل بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `value` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `control-flow.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `value` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **مقایسه‌ها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
