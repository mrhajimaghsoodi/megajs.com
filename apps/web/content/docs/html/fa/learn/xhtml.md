---
title: "HTML و XHTML"
description: "این صفحه مقایسه HTML مدرن با syntax سخت‌گیرانه‌تر شبیه XML را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش HTML و XHTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش HTML و XHTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, HTML و XHTML, آموزش HTML, مرجع HTML, HTML XHTML, XHTML syntax, modern HTML"
order: 38
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML و XHTML

HTML و XHTML درباره مقایسه HTML مدرن با syntax سخت‌گیرانه‌تر شبیه XML است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با HTML و XHTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `HTML parsing`: بعضی خطاهای syntax را تحمل می‌کند.
- `XHTML`: syntax well-formed شبیه XML می‌خواهد.
- `void elements`: در HTML به slash پایانی XML-style نیاز ندارند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="xhtml" aria-labelledby="xhtml-title">
  <h2 id="xhtml-title">HTML and XHTML</h2>
  <p>comparing modern HTML parsing with stricter XML-style syntax.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML and XHTML quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>HTML parsing</code></td><td>forgives some syntax mistakes</td></tr>
    <tr><td><code>XHTML</code></td><td>requires well-formed XML syntax</td></tr>
    <tr><td><code>void elements</code></td><td>do not need XML-style closing slash in HTML</td></tr>
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
    <title>HTML and XHTML practice</title>
  </head>
  <body>
    <section class="xhtml" aria-labelledby="xhtml-title">
      <h2 id="xhtml-title">HTML and XHTML</h2>
      <p>comparing modern HTML parsing with stricter XML-style syntax.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `HTML parsing` | بعضی خطاهای syntax را تحمل می‌کند | در HTML و XHTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `XHTML` | syntax well-formed شبیه XML می‌خواهد | در HTML و XHTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `void elements` | در HTML به slash پایانی XML-style نیاز ندارند | در HTML و XHTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از HTML و XHTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `HTML parsing` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `xhtml.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `HTML parsing` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **عنصر div در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
