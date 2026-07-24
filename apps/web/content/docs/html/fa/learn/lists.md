---
title: "لیست‌های HTML"
description: "این صفحه انتخاب list مرتب، نامرتب و توضیحی برای محتوای گروهی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش لیست‌های HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش لیست‌های HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, لیست‌های HTML, آموزش HTML, مرجع HTML, HTML lists, ul ol dl li, ordered list unordered list"
order: 20
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# لیست‌های HTML

لیست‌های HTML درباره انتخاب list مرتب، نامرتب و توضیحی برای محتوای گروهی است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با لیست‌های HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<ul>`: itemهایی را گروه می‌کند که ترتیب مهم نیست.
- `<ol>`: مرحله‌ها یا رتبه‌های مرتب را گروه می‌کند.
- `<dl>`: term را با description جفت می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<ol>
  <li>Create the HTML file.</li>
  <li>Add semantic sections.</li>
  <li>Test links and forms.</li>
</ol>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Lists quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;ul&gt;</code></td><td>groups items where order does not matter</td></tr>
    <tr><td><code>&lt;ol&gt;</code></td><td>groups ordered steps or rankings</td></tr>
    <tr><td><code>&lt;dl&gt;</code></td><td>pairs terms with descriptions</td></tr>
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
    <title>HTML Lists practice</title>
  </head>
  <body>
    <ol>
      <li>Create the HTML file.</li>
      <li>Add semantic sections.</li>
      <li>Test links and forms.</li>
    </ol>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<ul>` | itemهایی را گروه می‌کند که ترتیب مهم نیست | در لیست‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<ol>` | مرحله‌ها یا رتبه‌های مرتب را گروه می‌کند | در لیست‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<dl>` | term را با description جفت می‌کند | در لیست‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از لیست‌های HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<ul>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `lists.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<ul>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **عنصرهای Block و Inline در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
