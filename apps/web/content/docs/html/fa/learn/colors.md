---
title: "رنگ‌ها در HTML"
description: "این صفحه استفاده از رنگ‌های نام‌دار، hex، rgb و hsl در مثال HTML و CSS را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش رنگ‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش رنگ‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, رنگ‌ها در HTML, آموزش HTML, مرجع HTML, HTML colors, hex RGB HSL, CSS color values"
order: 13
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# رنگ‌ها در HTML

رنگ‌ها در HTML درباره استفاده از رنگ‌های نام‌دار، hex، rgb و hsl در مثال HTML و CSS است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با رنگ‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `named colors`: نام‌های خوانا مثل tomato.
- `#2563eb`: notation فشرده RGB در قالب hex.
- `rgb() / hsl()`: فرمت‌های تابعی با کنترل عددی.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="colors" aria-labelledby="colors-title">
  <h2 id="colors-title">HTML Colors</h2>
  <p>using named colors, hex, rgb, and hsl values in HTML examples and CSS.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Colors quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>named colors</code></td><td>quick readable color names such as tomato</td></tr>
    <tr><td><code>#2563eb</code></td><td>compact hexadecimal RGB notation</td></tr>
    <tr><td><code>rgb() / hsl()</code></td><td>functional color formats with numeric control</td></tr>
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
    <title>HTML Colors practice</title>
  </head>
  <body>
    <section class="colors" aria-labelledby="colors-title">
      <h2 id="colors-title">HTML Colors</h2>
      <p>using named colors, hex, rgb, and hsl values in HTML examples and CSS.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `named colors` | نام‌های خوانا مثل tomato | در رنگ‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `#2563eb` | notation فشرده RGB در قالب hex | در رنگ‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `rgb() / hsl()` | فرمت‌های تابعی با کنترل عددی | در رنگ‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از رنگ‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `named colors` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `colors.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `named colors` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **CSS در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
