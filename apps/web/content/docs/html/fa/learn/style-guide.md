---
title: "راهنمای سبک HTML"
description: "این صفحه نوشتن HTML یکدست، lowercase، quoted و قابل نگه‌داری در تیم را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش راهنمای سبک HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش راهنمای سبک HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, راهنمای سبک HTML, آموزش HTML, مرجع HTML, HTML style guide, HTML formatting, clean HTML"
order: 32
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# راهنمای سبک HTML

راهنمای سبک HTML درباره نوشتن HTML یکدست، lowercase، quoted و قابل نگه‌داری در تیم است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با راهنمای سبک HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `lowercase tags`: با style رایج HTML مدرن هماهنگ است.
- `quoted attributes`: از مقدارهای مبهم جلوگیری می‌کند.
- `indentation`: تو در تو بودن را سریع نشان می‌دهد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="style-guide" aria-labelledby="style-guide-title">
  <h2 id="style-guide-title">HTML Style Guide</h2>
  <p>writing consistent, lowercase, quoted, and maintainable HTML in teams.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Style Guide quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>lowercase tags</code></td><td>match common modern HTML style</td></tr>
    <tr><td><code>quoted attributes</code></td><td>avoid ambiguous values</td></tr>
    <tr><td><code>indentation</code></td><td>shows nesting at a glance</td></tr>
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
    <title>HTML Style Guide practice</title>
  </head>
  <body>
    <section class="style-guide" aria-labelledby="style-guide-title">
      <h2 id="style-guide-title">HTML Style Guide</h2>
      <p>writing consistent, lowercase, quoted, and maintainable HTML in teams.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `lowercase tags` | با style رایج HTML مدرن هماهنگ است | در راهنمای سبک HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `quoted attributes` | از مقدارهای مبهم جلوگیری می‌کند | در راهنمای سبک HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `indentation` | تو در تو بودن را سریع نشان می‌دهد | در راهنمای سبک HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از راهنمای سبک HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `lowercase tags` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `style-guide.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `lowercase tags` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Entityهای HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
