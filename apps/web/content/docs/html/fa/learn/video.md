---
title: "ویدیو در HTML"
description: "این صفحه پخش video با controls، چند source، caption، poster و fallback link را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش ویدیو در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش ویدیو در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, ویدیو در HTML, آموزش HTML, مرجع HTML, HTML video, video controls track, video captions"
order: 50
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویدیو در HTML

ویدیو در HTML درباره پخش video با controls، چند source، caption، poster و fallback link است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با ویدیو در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<video controls>`: control پخش native را نشان می‌دهد.
- `<source>`: یک candidate برای format ارائه می‌کند.
- `<track>`: caption یا subtitle اضافه می‌کند.
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
  <caption>HTML Video quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;video controls&gt;</code></td><td>shows native playback controls</td></tr>
    <tr><td><code>&lt;source&gt;</code></td><td>offers a format candidate</td></tr>
    <tr><td><code>&lt;track&gt;</code></td><td>adds captions or subtitles</td></tr>
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
    <title>HTML Video practice</title>
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
| `<video controls>` | control پخش native را نشان می‌دهد | در ویدیو در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<source>` | یک candidate برای format ارائه می‌کند | در ویدیو در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<track>` | caption یا subtitle اضافه می‌کند | در ویدیو در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از ویدیو در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<video controls>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `video.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<video controls>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **صدا در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
