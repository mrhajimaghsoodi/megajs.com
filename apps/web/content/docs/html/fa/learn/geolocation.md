---
title: "API موقعیت جغرافیایی در HTML"
description: "این صفحه درخواست موقعیت کاربر فقط با permission، مدیریت خطا و هدف روشن را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش API موقعیت جغرافیایی در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش API موقعیت جغرافیایی در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. با تمرین."
keywords: "HTML, API موقعیت جغرافیایی در HTML, آموزش HTML, مرجع HTML, HTML geolocation, navigator geolocation, location permission"
order: 56
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# API موقعیت جغرافیایی در HTML

API موقعیت جغرافیایی در HTML درباره درخواست موقعیت کاربر فقط با permission، مدیریت خطا و هدف روشن است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با API موقعیت جغرافیایی در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `navigator.geolocation`: به Geolocation API دسترسی می‌دهد.
- `getCurrentPosition()`: یک نتیجه موقعیت درخواست می‌کند.
- `permission prompt`: قبل از اشتراک location از کاربر می‌پرسد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<button id="locate" type="button">Find location</button>
<output id="location-result"></output>
<script>
  document.querySelector('#locate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
      document.querySelector('#location-result').value = position.coords.latitude;
    });
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Geolocation API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>navigator.geolocation</code></td><td>accesses the Geolocation API</td></tr>
    <tr><td><code>getCurrentPosition()</code></td><td>requests one location result</td></tr>
    <tr><td><code>permission prompt</code></td><td>asks the user before sharing location</td></tr>
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
    <title>HTML Geolocation API practice</title>
  </head>
  <body>
    <button id="locate" type="button">Find location</button>
    <output id="location-result"></output>
    <script>
      document.querySelector('#locate').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((position) => {
          document.querySelector('#location-result').value = position.coords.latitude;
        });
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `navigator.geolocation` | به Geolocation API دسترسی می‌دهد | در API موقعیت جغرافیایی در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `getCurrentPosition()` | یک نتیجه موقعیت درخواست می‌کند | در API موقعیت جغرافیایی در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `permission prompt` | قبل از اشتراک location از کاربر می‌پرسد | در API موقعیت جغرافیایی در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از API موقعیت جغرافیایی در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `navigator.geolocation` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `geolocation.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `navigator.geolocation` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Drag and Drop در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
