---
title: "فرم‌های HTML"
description: "این صفحه جمع‌آوری input کاربر با کنترل، label، validation و تنظیمات ارسال دسترس‌پذیر را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش فرم‌های HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش فرم‌های HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, فرم‌های HTML, آموزش HTML, مرجع HTML, HTML forms, HTML Forms tutorial"
order: 40
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# فرم‌های HTML

فرم‌های HTML درباره جمع‌آوری input کاربر با کنترل، label، validation و تنظیمات ارسال دسترس‌پذیر است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با فرم‌های HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<form>`: کنترل‌هایی را می‌پوشاند که داده ارسال می‌کنند.
- `<label>`: برای هر کاربر control را نام‌گذاری می‌کند.
- `<button type="submit">`: فرم را به شکل عمدی submit می‌کند.
- برای این موضوع، label روشن، validation قابل فهم و submit قابل پیش‌بینی معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<form action="/subscribe" method="post">
  <label for="forms-email">Email</label>
  <input id="forms-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Forms quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;form&gt;</code></td><td>wraps controls that submit data</td></tr>
    <tr><td><code>&lt;label&gt;</code></td><td>names a control for every user</td></tr>
    <tr><td><code>&lt;button type=&quot;submit&quot;&gt;</code></td><td>submits the form intentionally</td></tr>
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
    <title>HTML Forms practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="forms-email">Email</label>
      <input id="forms-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<form>` | کنترل‌هایی را می‌پوشاند که داده ارسال می‌کنند | در فرم‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<label>` | برای هر کاربر control را نام‌گذاری می‌کند | در فرم‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<button type="submit">` | فرم را به شکل عمدی submit می‌کند | در فرم‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از فرم‌های HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<form>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `forms.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<form>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویژگی‌های form در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
