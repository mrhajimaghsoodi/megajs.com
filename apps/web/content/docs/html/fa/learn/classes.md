---
title: "کلاس‌ها در HTML"
description: "این صفحه گروه‌بندی elementها با نام‌های قابل استفاده مجدد برای CSS و JavaScript را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش کلاس‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کلاس‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, کلاس‌ها در HTML, آموزش HTML, مرجع HTML, HTML classes, class attribute, CSS class selector"
order: 22
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کلاس‌ها در HTML

کلاس‌ها در HTML درباره گروه‌بندی elementها با نام‌های قابل استفاده مجدد برای CSS و JavaScript است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با کلاس‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `class`: یک یا چند نام قابل استفاده مجدد می‌دهد.
- `multiple classes`: چند مسئولیت کوچک style را ترکیب می‌کند.
- `.selector`: class را در CSS target می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="classes" aria-labelledby="classes-title">
  <h2 id="classes-title">HTML Classes</h2>
  <p>grouping elements with reusable names for CSS and JavaScript behavior.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Classes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>class</code></td><td>assigns one or more reusable names</td></tr>
    <tr><td><code>multiple classes</code></td><td>combine small styling responsibilities</td></tr>
    <tr><td><code>.selector</code></td><td>targets class names in CSS</td></tr>
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
    <title>HTML Classes practice</title>
  </head>
  <body>
    <section class="classes" aria-labelledby="classes-title">
      <h2 id="classes-title">HTML Classes</h2>
      <p>grouping elements with reusable names for CSS and JavaScript behavior.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `class` | یک یا چند نام قابل استفاده مجدد می‌دهد | در کلاس‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `multiple classes` | چند مسئولیت کوچک style را ترکیب می‌کند | در کلاس‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `.selector` | class را در CSS target می‌کند | در کلاس‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از کلاس‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `class` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `classes.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `class` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **شناسه id در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
