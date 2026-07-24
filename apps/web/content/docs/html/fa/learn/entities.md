---
title: "Entityهای HTML"
description: "این صفحه نمایش امن کاراکترهای رزروشده، فاصله غیرقابل‌شکستن و symbolها را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش Entityهای HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Entityهای HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, Entityهای HTML, آموزش HTML, مرجع HTML, HTML entities, amp lt gt nbsp, reserved characters HTML"
order: 33
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Entityهای HTML

Entityهای HTML درباره نمایش امن کاراکترهای رزروشده، فاصله غیرقابل‌شکستن و symbolها است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با Entityهای HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `&amp;`: علامت ampersand را چاپ می‌کند.
- `&lt; / &gt;`: علامت‌های کوچکتر و بزرگتر را چاپ می‌کند.
- `&nbsp;`: جدا شدن کلمات را جلوگیری می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="entities" aria-labelledby="entities-title">
  <h2 id="entities-title">HTML Entities</h2>
  <p>printing reserved characters, non-breaking spaces, and symbols safely.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Entities quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&amp;amp;</code></td><td>prints an ampersand</td></tr>
    <tr><td><code>&amp;lt; / &amp;gt;</code></td><td>prints less-than and greater-than signs</td></tr>
    <tr><td><code>&amp;nbsp;</code></td><td>keeps words from breaking apart</td></tr>
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
    <title>HTML Entities practice</title>
  </head>
  <body>
    <section class="entities" aria-labelledby="entities-title">
      <h2 id="entities-title">HTML Entities</h2>
      <p>printing reserved characters, non-breaking spaces, and symbols safely.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `&amp;` | علامت ampersand را چاپ می‌کند | در Entityهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `&lt; / &gt;` | علامت‌های کوچکتر و بزرگتر را چاپ می‌کند | در Entityهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `&nbsp;` | جدا شدن کلمات را جلوگیری می‌کند | در Entityهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از Entityهای HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `&amp;` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `entities.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `&amp;` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **نمادها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
