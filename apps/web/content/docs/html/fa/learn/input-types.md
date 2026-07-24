---
title: "نوع‌های input در HTML"
description: "این صفحه انتخاب type مناسب برای validation، keyboard موبایل و UI مرورگر را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش نوع‌های input در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش نوع‌های input در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, نوع‌های input در HTML, آموزش HTML, مرجع HTML, HTML input types, email number checkbox, form input"
order: 43
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نوع‌های input در HTML

نوع‌های input در HTML درباره انتخاب type مناسب برای validation، keyboard موبایل و UI مرورگر است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با نوع‌های input در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `type="email"`: مقدار شبیه email را validate می‌کند.
- `type="number"`: control و keyboard عددی باز می‌کند.
- `type="checkbox"`: انتخاب روشن/خاموش را می‌گیرد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="input-types" aria-labelledby="input-types-title">
  <h2 id="input-types-title">HTML Input Types</h2>
  <p>selecting the right input type for validation, mobile keyboards, and browser UI.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Input Types quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>type=&quot;email&quot;</code></td><td>validates an email-like value</td></tr>
    <tr><td><code>type=&quot;number&quot;</code></td><td>opens numeric controls and keyboards</td></tr>
    <tr><td><code>type=&quot;checkbox&quot;</code></td><td>captures an on/off choice</td></tr>
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
    <title>HTML Input Types practice</title>
  </head>
  <body>
    <section class="input-types" aria-labelledby="input-types-title">
      <h2 id="input-types-title">HTML Input Types</h2>
      <p>selecting the right input type for validation, mobile keyboards, and browser UI.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `type="email"` | مقدار شبیه email را validate می‌کند | در نوع‌های input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `type="number"` | control و keyboard عددی باز می‌کند | در نوع‌های input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `type="checkbox"` | انتخاب روشن/خاموش را می‌گیرد | در نوع‌های input در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از نوع‌های input در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `type="email"` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `input-types.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `type="email"` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویژگی‌های input در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
