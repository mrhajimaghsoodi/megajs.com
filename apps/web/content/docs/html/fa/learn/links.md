---
title: "لینک‌ها در HTML"
description: "این صفحه ساخت linkهای دسترس‌پذیر به صفحه، فایل، email و بخش‌های داخلی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش لینک‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش لینک‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, لینک‌ها در HTML, آموزش HTML, مرجع HTML, HTML links, href target rel, anchor links"
order: 15
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# لینک‌ها در HTML

لینک‌ها در HTML درباره ساخت linkهای دسترس‌پذیر به صفحه، فایل، email و بخش‌های داخلی است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با لینک‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `href`: مقصد link را تعریف می‌کند.
- `target / rel`: تب جدید و رابطه امنیتی را کنترل می‌کند.
- `#fragment`: به id یک element در همان صفحه می‌پرد.
- برای این موضوع، معنای واضح برای کاربر، screen reader و search engine معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<a href="/docs/html/learn/forms" rel="next">Continue to HTML forms</a>
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Read MDN</a>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Links quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>href</code></td><td>defines the link destination</td></tr>
    <tr><td><code>target / rel</code></td><td>controls new tabs and security relationship</td></tr>
    <tr><td><code>#fragment</code></td><td>jumps to an element id on the page</td></tr>
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
    <title>HTML Links practice</title>
  </head>
  <body>
    <a href="/docs/html/learn/forms" rel="next">Continue to HTML forms</a>
    <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Read MDN</a>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `href` | مقصد link را تعریف می‌کند | در لینک‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `target / rel` | تب جدید و رابطه امنیتی را کنترل می‌کند | در لینک‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `#fragment` | به id یک element در همان صفحه می‌پرد | در لینک‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از لینک‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `href` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `links.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `href` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **تصویرها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
