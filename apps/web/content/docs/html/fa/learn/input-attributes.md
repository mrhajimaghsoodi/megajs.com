---
title: "ویژگی‌های input در HTML"
description: "این صفحه بهبود controlها با required، placeholder، min، max، pattern و autocomplete را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش ویژگی‌های input در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش ویژگی‌های input در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, ویژگی‌های input در HTML, آموزش HTML, مرجع HTML, HTML input attributes, required placeholder, input validation"
order: 44
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های input در HTML

ویژگی‌های input در HTML درباره بهبود controlها با required، placeholder، min، max، pattern و autocomplete است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با ویژگی‌های input در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `required`: مقدار را اجباری می‌کند.
- `placeholder`: hint کوتاه نشان می‌دهد نه label.
- `min / max`: محدودیت عددی یا date تعیین می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="input-attributes" aria-labelledby="input-attributes-title">
  <h2 id="input-attributes-title">HTML Input Attributes</h2>
  <p>improving controls with required, placeholder, min, max, pattern, and autocomplete.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Input Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>required</code></td><td>marks a value as mandatory</td></tr>
    <tr><td><code>placeholder</code></td><td>shows a short hint, not a label</td></tr>
    <tr><td><code>min / max</code></td><td>sets numeric or date limits</td></tr>
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
    <title>HTML Input Attributes practice</title>
  </head>
  <body>
    <section class="input-attributes" aria-labelledby="input-attributes-title">
      <h2 id="input-attributes-title">HTML Input Attributes</h2>
      <p>improving controls with required, placeholder, min, max, pattern, and autocomplete.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `required` | مقدار را اجباری می‌کند | در ویژگی‌های input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `placeholder` | hint کوتاه نشان می‌دهد نه label | در ویژگی‌های input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `min / max` | محدودیت عددی یا date تعیین می‌کند | در ویژگی‌های input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از ویژگی‌های input در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `required` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `input-attributes.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `required` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویژگی‌های form برای input در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
