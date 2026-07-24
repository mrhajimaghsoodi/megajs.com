---
title: "کامنت‌های HTML"
description: "این صفحه نوشتن یادداشت‌های source که تصمیم‌ها را توضیح می‌دهند و در صفحه دیده نمی‌شوند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش کامنت‌های HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کامنت‌های HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, کامنت‌های HTML, آموزش HTML, مرجع HTML, HTML comments, HTML comment syntax, comment in HTML"
order: 12
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کامنت‌های HTML

کامنت‌های HTML درباره نوشتن یادداشت‌های source که تصمیم‌ها را توضیح می‌دهند و در صفحه دیده نمی‌شوند است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با کامنت‌های HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<!-- ... -->`: کامنت HTML می‌سازد.
- `TODO`: markup ناتمام را با دقت علامت می‌زند.
- `debug note`: انتخاب‌های غیرمعمول markup را توضیح می‌دهد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="comments" aria-labelledby="comments-title">
  <h2 id="comments-title">HTML Comments</h2>
  <p>leaving source notes that explain decisions without appearing in the page.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Comments quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!-- ... --&gt;</code></td><td>creates an HTML comment</td></tr>
    <tr><td><code>TODO</code></td><td>marks unfinished markup carefully</td></tr>
    <tr><td><code>debug note</code></td><td>explains unusual markup choices</td></tr>
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
    <title>HTML Comments practice</title>
  </head>
  <body>
    <section class="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">HTML Comments</h2>
      <p>leaving source notes that explain decisions without appearing in the page.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<!-- ... -->` | کامنت HTML می‌سازد | در کامنت‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `TODO` | markup ناتمام را با دقت علامت می‌زند | در کامنت‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `debug note` | انتخاب‌های غیرمعمول markup را توضیح می‌دهد | در کامنت‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از کامنت‌های HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<!-- ... -->` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `comments.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<!-- ... -->` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **رنگ‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
