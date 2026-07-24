---
title: "رسانه در HTML"
description: "این صفحه افزودن video، audio، plugin و media embedded همراه caption و fallback را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش رسانه در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش رسانه در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, رسانه در HTML, آموزش HTML, مرجع HTML, HTML media, HTML Media tutorial"
order: 49
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# رسانه در HTML

رسانه در HTML درباره افزودن video، audio، plugin و media embedded همراه caption و fallback است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با رسانه در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<video>`: video را با control native قرار می‌دهد.
- `<audio>`: صدا را با control native قرار می‌دهد.
- `<source>`: چند format رسانه ارائه می‌کند.
- برای این موضوع، fallback، caption و control قابل دسترس معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<video controls poster="lesson.jpg" width="720">
  <source src="lesson.webm" type="video/webm">
  <source src="lesson.mp4" type="video/mp4">
  <track src="lesson-en.vtt" kind="captions" srclang="en" label="English">
</video>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Media quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;video&gt;</code></td><td>embeds video with native controls</td></tr>
    <tr><td><code>&lt;audio&gt;</code></td><td>embeds sound with native controls</td></tr>
    <tr><td><code>&lt;source&gt;</code></td><td>offers multiple media formats</td></tr>
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
    <title>HTML Media practice</title>
  </head>
  <body>
    <video controls poster="lesson.jpg" width="720">
      <source src="lesson.webm" type="video/webm">
      <source src="lesson.mp4" type="video/mp4">
      <track src="lesson-en.vtt" kind="captions" srclang="en" label="English">
    </video>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<video>` | video را با control native قرار می‌دهد | در رسانه در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<audio>` | صدا را با control native قرار می‌دهد | در رسانه در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<source>` | چند format رسانه ارائه می‌کند | در رسانه در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از رسانه در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<video>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `media.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<video>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ویدیو در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
