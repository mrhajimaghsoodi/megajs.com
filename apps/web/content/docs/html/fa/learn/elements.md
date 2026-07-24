---
title: "عنصرهای HTML"
description: "این صفحه اینکه opening tag، محتوا، فرزندهای تو در تو و closing tag چگونه معنا می‌سازند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش عنصرهای HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش عنصرهای HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, عنصرهای HTML, آموزش HTML, مرجع HTML, HTML elements, opening tag, nested HTML"
order: 5
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای HTML

عنصرهای HTML درباره اینکه opening tag، محتوا، فرزندهای تو در تو و closing tag چگونه معنا می‌سازند است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با عنصرهای HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `opening tag`: element را شروع می‌کند و می‌تواند attribute داشته باشد.
- `content`: متن یا elementهای فرزند داخل است.
- `closing tag`: بیشتر elementهای غیر void را پایان می‌دهد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="elements" aria-labelledby="elements-title">
  <h2 id="elements-title">HTML Elements</h2>
  <p>how opening tags, content, nested children, and closing tags create meaning.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Elements quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>opening tag</code></td><td>starts an element and can hold attributes</td></tr>
    <tr><td><code>content</code></td><td>the text or child elements inside</td></tr>
    <tr><td><code>closing tag</code></td><td>ends most non-void elements</td></tr>
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
    <title>HTML Elements practice</title>
  </head>
  <body>
    <section class="elements" aria-labelledby="elements-title">
      <h2 id="elements-title">HTML Elements</h2>
      <p>how opening tags, content, nested children, and closing tags create meaning.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `opening tag` | element را شروع می‌کند و می‌تواند attribute داشته باشد | در عنصرهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `content` | متن یا elementهای فرزند داخل است | در عنصرهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `closing tag` | بیشتر elementهای غیر void را پایان می‌دهد | در عنصرهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از عنصرهای HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `opening tag` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `elements.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `opening tag` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویژگی‌های HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
