---
title: "عنصرهای فرم در HTML"
description: "این صفحه انتخاب label، input، select، textarea، button، fieldset و legend را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش عنصرهای فرم در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش عنصرهای فرم در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, عنصرهای فرم در HTML, آموزش HTML, مرجع HTML, HTML form elements, input select textarea, fieldset legend"
order: 42
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای فرم در HTML

عنصرهای فرم در HTML درباره انتخاب label، input، select، textarea، button، fieldset و legend است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با عنصرهای فرم در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<input>`: انواع ورودی کوتاه را می‌گیرد.
- `<select>`: لیست انتخاب کنترل‌شده ارائه می‌کند.
- `<fieldset> / <legend>`: controlهای مرتبط را گروه می‌کند.
- برای این موضوع، label روشن، validation قابل فهم و submit قابل پیش‌بینی معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<form action="/subscribe" method="post">
  <label for="form-elements-email">Email</label>
  <input id="form-elements-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Form Elements quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;input&gt;</code></td><td>captures many short input types</td></tr>
    <tr><td><code>&lt;select&gt;</code></td><td>offers a controlled choice list</td></tr>
    <tr><td><code>&lt;fieldset&gt; / &lt;legend&gt;</code></td><td>groups related controls</td></tr>
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
    <title>HTML Form Elements practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="form-elements-email">Email</label>
      <input id="form-elements-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<input>` | انواع ورودی کوتاه را می‌گیرد | در عنصرهای فرم در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<select>` | لیست انتخاب کنترل‌شده ارائه می‌کند | در عنصرهای فرم در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<fieldset> / <legend>` | controlهای مرتبط را گروه می‌کند | در عنصرهای فرم در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از عنصرهای فرم در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<input>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `form-elements.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<input>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **نوع‌های input در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
