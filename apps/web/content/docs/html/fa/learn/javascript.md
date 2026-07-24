---
title: "JavaScript در HTML"
description: "این صفحه افزودن scriptهایی که پس از load شدن markup با DOM کار می‌کنند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش JavaScript در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش JavaScript در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, JavaScript در HTML, آموزش HTML, مرجع HTML, HTML JavaScript, script tag defer, DOM events"
order: 25
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# JavaScript در HTML

JavaScript در HTML درباره افزودن scriptهایی که پس از load شدن markup با DOM کار می‌کنند است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با JavaScript در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<script>`: JavaScript را اجرا یا load می‌کند.
- `defer`: script را بدون blocking parsing load می‌کند.
- `DOM selector`: element را با id، class یا tag پیدا می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<button id="javascript-button" type="button">Run example</button>
<script defer>
  document.querySelector('#javascript-button').addEventListener('click', () => {
    document.body.dataset.example = 'javascript';
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script&gt;</code></td><td>runs or loads JavaScript</td></tr>
    <tr><td><code>defer</code></td><td>loads scripts without blocking parsing</td></tr>
    <tr><td><code>DOM selector</code></td><td>finds elements by id, class, or tag</td></tr>
  </tbody>
</table>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML JavaScript practice</title>
  </head>
  <body>
    <button id="javascript-button" type="button">Run example</button>
    <script defer>
      document.querySelector('#javascript-button').addEventListener('click', () => {
        document.body.dataset.example = 'javascript';
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<script>` | JavaScript را اجرا یا load می‌کند | در JavaScript در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `defer` | script را بدون blocking parsing load می‌کند | در JavaScript در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `DOM selector` | element را با id، class یا tag پیدا می‌کند | در JavaScript در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از JavaScript در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<script>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `javascript.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<script>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **مسیر فایل‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
