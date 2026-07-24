---
title: "ویژگی‌های form برای input در HTML"
description: "این صفحه بازنویسی action، method، target و validation فرم از سطح یک control را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش ویژگی‌های form برای input در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش ویژگی‌های form برای input در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible."
keywords: "HTML, ویژگی‌های form برای input در HTML, آموزش HTML, مرجع HTML, HTML input form attributes, formaction formmethod, submit button"
order: 45
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های form برای input در HTML

ویژگی‌های form برای input در HTML درباره بازنویسی action، method، target و validation فرم از سطح یک control است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با ویژگی‌های form برای input در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `formaction`: action فرم parent را override می‌کند.
- `formmethod`: get یا post را برای یک button override می‌کند.
- `formnovalidate`: validation را برای یک submit action رد می‌کند.
- برای این موضوع، label روشن، validation قابل فهم و submit قابل پیش‌بینی معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<form action="/subscribe" method="post">
  <label for="input-form-attributes-email">Email</label>
  <input id="input-form-attributes-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Input Form Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>formaction</code></td><td>overrides the parent form action</td></tr>
    <tr><td><code>formmethod</code></td><td>overrides get or post for one button</td></tr>
    <tr><td><code>formnovalidate</code></td><td>skips validation for one submit action</td></tr>
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
    <title>HTML Input Form Attributes practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="input-form-attributes-email">Email</label>
      <input id="input-form-attributes-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `formaction` | action فرم parent را override می‌کند | در ویژگی‌های form برای input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `formmethod` | get یا post را برای یک button override می‌کند | در ویژگی‌های form برای input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `formnovalidate` | validation را برای یک submit action رد می‌کند | در ویژگی‌های form برای input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از ویژگی‌های form برای input در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `formaction` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `input-form-attributes.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `formaction` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **گرافیک در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
