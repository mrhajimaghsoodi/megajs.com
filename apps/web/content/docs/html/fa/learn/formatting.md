---
title: "قالب‌بندی متن در HTML"
description: "این صفحه نشانه‌گذاری معنایی importance، emphasis، insert، delete و متن شبیه code را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش قالب‌بندی متن در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش قالب‌بندی متن در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, قالب‌بندی متن در HTML, آموزش HTML, مرجع HTML, HTML formatting, strong em mark code, semantic text"
order: 10
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# قالب‌بندی متن در HTML

قالب‌بندی متن در HTML درباره نشانه‌گذاری معنایی importance، emphasis، insert، delete و متن شبیه code است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با قالب‌بندی متن در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<strong>`: اهمیت قوی را نشان می‌دهد.
- `<em>`: تاکید معنایی را نشان می‌دهد.
- `<mark> / <code>`: متن را highlight یا قطعه code را مشخص می‌کند.
- برای این موضوع، label روشن، validation قابل فهم و submit قابل پیش‌بینی معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<form action="/subscribe" method="post">
  <label for="formatting-email">Email</label>
  <input id="formatting-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Text Formatting quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;strong&gt;</code></td><td>marks strong importance</td></tr>
    <tr><td><code>&lt;em&gt;</code></td><td>marks stress emphasis</td></tr>
    <tr><td><code>&lt;mark&gt; / &lt;code&gt;</code></td><td>highlights text or marks code fragments</td></tr>
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
    <title>HTML Text Formatting practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="formatting-email">Email</label>
      <input id="formatting-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<strong>` | اهمیت قوی را نشان می‌دهد | در قالب‌بندی متن در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<em>` | تاکید معنایی را نشان می‌دهد | در قالب‌بندی متن در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<mark> / <code>` | متن را highlight یا قطعه code را مشخص می‌کند | در قالب‌بندی متن در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از قالب‌بندی متن در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<strong>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `formatting.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<strong>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **نقل‌قول‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
