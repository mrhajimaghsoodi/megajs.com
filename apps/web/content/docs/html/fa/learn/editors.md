---
title: "ویرایشگرهای HTML"
description: "این صفحه انتخاب editor، ذخیره فایل .html و دیدن سریع تغییرها را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش ویرایشگرهای HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش ویرایشگرهای HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, ویرایشگرهای HTML, آموزش HTML, مرجع HTML, HTML editor, VS Code HTML, save HTML file"
order: 3
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویرایشگرهای HTML

ویرایشگرهای HTML درباره انتخاب editor، ذخیره فایل .html و دیدن سریع تغییرها است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با ویرایشگرهای HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `index.html`: فایل ورودی رایج برای سایت کوچک.
- `UTF-8`: encoding مناسب فارسی، symbol و emoji.
- `live preview`: صفحه تمرینی را هنگام ویرایش reload می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="editors" aria-labelledby="editors-title">
  <h2 id="editors-title">HTML Editors</h2>
  <p>choosing an editor, saving .html files, and previewing changes quickly.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Editors quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>index.html</code></td><td>common entry file for a small site</td></tr>
    <tr><td><code>UTF-8</code></td><td>encoding that supports Persian, symbols, and emoji</td></tr>
    <tr><td><code>live preview</code></td><td>reloads practice pages while you edit</td></tr>
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
    <title>HTML Editors practice</title>
  </head>
  <body>
    <section class="editors" aria-labelledby="editors-title">
      <h2 id="editors-title">HTML Editors</h2>
      <p>choosing an editor, saving .html files, and previewing changes quickly.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `index.html` | فایل ورودی رایج برای سایت کوچک | در ویرایشگرهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `UTF-8` | encoding مناسب فارسی، symbol و emoji | در ویرایشگرهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `live preview` | صفحه تمرینی را هنگام ویرایش reload می‌کند | در ویرایشگرهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از ویرایشگرهای HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `index.html` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `editors.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `index.html` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **مثال‌های پایه HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
