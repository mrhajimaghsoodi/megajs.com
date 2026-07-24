---
title: "عنصرهای کدنویسی در HTML"
description: "این صفحه نمایش معنایی code، ورودی keyboard، خروجی نمونه و variable را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش عنصرهای کدنویسی در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش عنصرهای کدنویسی در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, عنصرهای کدنویسی در HTML, آموزش HTML, مرجع HTML, HTML code elements, code pre kbd samp, technical writing HTML"
order: 30
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای کدنویسی در HTML

عنصرهای کدنویسی در HTML درباره نمایش معنایی code، ورودی keyboard، خروجی نمونه و variable است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با عنصرهای کدنویسی در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<code>`: قطعه code inline را مشخص می‌کند.
- `<pre>`: فاصله‌های block code را حفظ می‌کند.
- `<kbd> / <samp>`: ورودی کاربر و خروجی برنامه را مشخص می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="computercode" aria-labelledby="computercode-title">
  <h2 id="computercode-title">HTML Computer Code Elements</h2>
  <p>showing code, keyboard input, sample output, and variables semantically.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Computer Code Elements quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;code&gt;</code></td><td>marks inline code fragments</td></tr>
    <tr><td><code>&lt;pre&gt;</code></td><td>preserves spacing for code blocks</td></tr>
    <tr><td><code>&lt;kbd&gt; / &lt;samp&gt;</code></td><td>marks user input and program output</td></tr>
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
    <title>HTML Computer Code Elements practice</title>
  </head>
  <body>
    <section class="computercode" aria-labelledby="computercode-title">
      <h2 id="computercode-title">HTML Computer Code Elements</h2>
      <p>showing code, keyboard input, sample output, and variables semantically.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<code>` | قطعه code inline را مشخص می‌کند | در عنصرهای کدنویسی در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<pre>` | فاصله‌های block code را حفظ می‌کند | در عنصرهای کدنویسی در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<kbd> / <samp>` | ورودی کاربر و خروجی برنامه را مشخص می‌کند | در عنصرهای کدنویسی در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از عنصرهای کدنویسی در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<code>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `computercode.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<code>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **معناشناسی HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
