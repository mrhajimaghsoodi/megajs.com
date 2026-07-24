---
title: "افزونه‌ها در HTML"
description: "این صفحه شناخت pluginهای قدیمی و جایگزین‌های embed مدرن برای file و widget را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش افزونه‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش افزونه‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, افزونه‌ها در HTML, آموزش HTML, مرجع HTML, HTML plugins, object embed, HTML embed"
order: 52
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# افزونه‌ها در HTML

افزونه‌ها در HTML درباره شناخت pluginهای قدیمی و جایگزین‌های embed مدرن برای file و widget است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با افزونه‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<object>`: resource خارجی را با fallback قرار می‌دهد.
- `<embed>`: محتوای شبیه plugin را مستقیم قرار می‌دهد.
- `fallback link`: بدون پشتیبانی plugin هم محتوا را reachable نگه می‌دارد.
- برای این موضوع، fallback، caption و control قابل دسترس معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="plugins" aria-labelledby="plugins-title">
  <h2 id="plugins-title">HTML Plug-ins</h2>
  <p>understanding legacy plugins and modern embed alternatives for files and widgets.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Plug-ins quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;object&gt;</code></td><td>embeds an external resource with fallback</td></tr>
    <tr><td><code>&lt;embed&gt;</code></td><td>embeds plugin-like content directly</td></tr>
    <tr><td><code>fallback link</code></td><td>keeps content reachable without plugin support</td></tr>
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
    <title>HTML Plug-ins practice</title>
  </head>
  <body>
    <section class="plugins" aria-labelledby="plugins-title">
      <h2 id="plugins-title">HTML Plug-ins</h2>
      <p>understanding legacy plugins and modern embed alternatives for files and widgets.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<object>` | resource خارجی را با fallback قرار می‌دهد | در افزونه‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<embed>` | محتوای شبیه plugin را مستقیم قرار می‌دهد | در افزونه‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `fallback link` | بدون پشتیبانی plugin هم محتوا را reachable نگه می‌دارد | در افزونه‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از افزونه‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<object>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `plugins.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<object>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویدیوهای YouTube در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
