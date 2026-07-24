---
title: "مبانی HTML"
description: "این صفحه پایه‌های ساخت یک سند کامل HTML و tagهای اصلی صفحه‌های واقعی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش مبانی HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش مبانی HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, مبانی HTML, آموزش HTML, مرجع HTML, HTML basics, HTML Basics tutorial"
order: 2
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مبانی HTML

مبانی HTML درباره پایه‌های ساخت یک سند کامل HTML و tagهای اصلی صفحه‌های واقعی است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با مبانی HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<!doctype html>`: مرورگر را در standards mode نگه می‌دارد.
- `<meta charset="UTF-8">`: متن چندزبانه را خوانا نگه می‌دارد.
- `<title>`: صفحه را بیرون از body قابل مشاهده نام‌گذاری می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Basics</title>
  </head>
  <body>
    <main>
      <h1>HTML Basics</h1>
    </main>
  </body>
</html>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Basics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!doctype html&gt;</code></td><td>keeps browsers in standards mode</td></tr>
    <tr><td><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></td><td>keeps multilingual text readable</td></tr>
    <tr><td><code>&lt;title&gt;</code></td><td>names the page outside the visible body</td></tr>
  </tbody>
</table>
```

### مثال 3: صفحه تمرینی کامل

```html
<main>
  <h1>HTML Basics checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<!doctype html>` | مرورگر را در standards mode نگه می‌دارد | در مبانی HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<meta charset="UTF-8">` | متن چندزبانه را خوانا نگه می‌دارد | در مبانی HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<title>` | صفحه را بیرون از body قابل مشاهده نام‌گذاری می‌کند | در مبانی HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از مبانی HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<!doctype html>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `basics.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<!doctype html>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویرایشگرهای HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
