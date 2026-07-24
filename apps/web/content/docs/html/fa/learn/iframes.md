---
title: "آی‌فریم‌ها در HTML"
description: "این صفحه قراردادن امن یک صفحه دیگر با title، permission و انتخاب load را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش آی‌فریم‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش آی‌فریم‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, آی‌فریم‌ها در HTML, آموزش HTML, مرجع HTML, HTML iframe, iframe src title, embed page"
order: 24
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# آی‌فریم‌ها در HTML

آی‌فریم‌ها در HTML درباره قراردادن امن یک صفحه دیگر با title، permission و انتخاب load است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با آی‌فریم‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `src`: URL صفحه embedded را تعیین می‌کند.
- `title`: frame را برای screen reader نام‌گذاری می‌کند.
- `loading="lazy"`: load شدن frame بیرون از دید را عقب می‌اندازد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="HTML Iframes" loading="lazy" allowfullscreen></iframe>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Iframes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>src</code></td><td>sets the embedded page URL</td></tr>
    <tr><td><code>title</code></td><td>labels the frame for screen readers</td></tr>
    <tr><td><code>loading=&quot;lazy&quot;</code></td><td>defers offscreen frame loading</td></tr>
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
    <title>HTML Iframes practice</title>
  </head>
  <body>
    <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="HTML Iframes" loading="lazy" allowfullscreen></iframe>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `src` | URL صفحه embedded را تعیین می‌کند | در آی‌فریم‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `title` | frame را برای screen reader نام‌گذاری می‌کند | در آی‌فریم‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `loading="lazy"` | load شدن frame بیرون از دید را عقب می‌اندازد | در آی‌فریم‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از آی‌فریم‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `src` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `iframes.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `src` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **JavaScript در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
