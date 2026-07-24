---
title: "CSS در HTML"
description: "این صفحه وصل کردن CSS inline، internal و external به markup به شکل درست را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش CSS در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش CSS در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, CSS در HTML, آموزش HTML, مرجع HTML, HTML CSS, link stylesheet, internal CSS"
order: 14
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# CSS در HTML

CSS در HTML درباره وصل کردن CSS inline، internal و external به markup به شکل درست است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با CSS در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `style attribute`: style تک‌باره را روی یک element اعمال می‌کند.
- `<style>`: CSS مخصوص همان صفحه را در head نگه می‌دارد.
- `<link rel="stylesheet">`: CSS خارجی قابل استفاده مجدد را load می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="css" aria-labelledby="css-title">
  <h2 id="css-title">HTML CSS</h2>
  <p>connecting inline, internal, and external CSS to HTML markup safely.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML CSS quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>style attribute</code></td><td>applies one-off styles to one element</td></tr>
    <tr><td><code>&lt;style&gt;</code></td><td>keeps page-specific CSS in the head</td></tr>
    <tr><td><code>&lt;link rel=&quot;stylesheet&quot;&gt;</code></td><td>loads reusable external CSS</td></tr>
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
    <title>HTML CSS practice</title>
  </head>
  <body>
    <section class="css" aria-labelledby="css-title">
      <h2 id="css-title">HTML CSS</h2>
      <p>connecting inline, internal, and external CSS to HTML markup safely.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `style attribute` | style تک‌باره را روی یک element اعمال می‌کند | در CSS در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<style>` | CSS مخصوص همان صفحه را در head نگه می‌دارد | در CSS در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<link rel="stylesheet">` | CSS خارجی قابل استفاده مجدد را load می‌کند | در CSS در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از CSS در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `style attribute` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `css.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `style attribute` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **لینک‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
