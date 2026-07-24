---
title: "استایل‌های HTML"
description: "این صفحه استفاده از attribute به نام style برای demo سریع پیش از انتقال CSS را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش استایل‌های HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش استایل‌های HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, استایل‌های HTML, آموزش HTML, مرجع HTML, HTML styles, style attribute, inline CSS"
order: 9
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# استایل‌های HTML

استایل‌های HTML درباره استفاده از attribute به نام style برای demo سریع پیش از انتقال CSS است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با استایل‌های HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `style`: Declarationهای CSS را روی یک element نگه می‌دارد.
- `color`: رنگ متن را تعیین می‌کند.
- `background-color`: پس‌زمینه element را تعیین می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="styles" aria-labelledby="styles-title">
  <h2 id="styles-title">HTML Styles</h2>
  <p>using the style attribute for quick demos before moving CSS to better places.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Styles quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>style</code></td><td>contains CSS declarations on one element</td></tr>
    <tr><td><code>color</code></td><td>sets text color</td></tr>
    <tr><td><code>background-color</code></td><td>sets an element background</td></tr>
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
    <title>HTML Styles practice</title>
  </head>
  <body>
    <section class="styles" aria-labelledby="styles-title">
      <h2 id="styles-title">HTML Styles</h2>
      <p>using the style attribute for quick demos before moving CSS to better places.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `style` | Declarationهای CSS را روی یک element نگه می‌دارد | در استایل‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `color` | رنگ متن را تعیین می‌کند | در استایل‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `background-color` | پس‌زمینه element را تعیین می‌کند | در استایل‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از استایل‌های HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `style` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `styles.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `style` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **قالب‌بندی متن در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
