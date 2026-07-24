---
title: "مثال‌های پایه HTML"
description: "این صفحه ترکیب heading، paragraph، link و image در اولین صفحه کاربردی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش مثال‌های پایه HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش مثال‌های پایه HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, مثال‌های پایه HTML, آموزش HTML, مرجع HTML, HTML examples, basic HTML tags, HTML h1 p a img"
order: 4
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مثال‌های پایه HTML

مثال‌های پایه HTML درباره ترکیب heading، paragraph، link و image در اولین صفحه کاربردی است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با مثال‌های پایه HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<h1>`: موضوع اصلی صفحه را نام‌گذاری می‌کند.
- `<p>`: یک پاراگراف خوانا را دربرمی‌گیرد.
- `<a> / <img>`: صفحه‌ها را وصل می‌کند و image را نمایش می‌دهد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="basic" aria-labelledby="basic-title">
  <h2 id="basic-title">HTML Basic Examples</h2>
  <p>combining headings, paragraphs, links, and images into a first useful page.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Basic Examples quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;h1&gt;</code></td><td>names the main topic of the page</td></tr>
    <tr><td><code>&lt;p&gt;</code></td><td>wraps a readable text paragraph</td></tr>
    <tr><td><code>&lt;a&gt; / &lt;img&gt;</code></td><td>connects pages and embeds images</td></tr>
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
    <title>HTML Basic Examples practice</title>
  </head>
  <body>
    <section class="basic" aria-labelledby="basic-title">
      <h2 id="basic-title">HTML Basic Examples</h2>
      <p>combining headings, paragraphs, links, and images into a first useful page.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<h1>` | موضوع اصلی صفحه را نام‌گذاری می‌کند | در مثال‌های پایه HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<p>` | یک پاراگراف خوانا را دربرمی‌گیرد | در مثال‌های پایه HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<a> / <img>` | صفحه‌ها را وصل می‌کند و image را نمایش می‌دهد | در مثال‌های پایه HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از مثال‌های پایه HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<h1>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `basic.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<h1>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **عنصرهای HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
