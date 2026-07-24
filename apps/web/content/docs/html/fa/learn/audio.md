---
title: "صدا در HTML"
description: "این صفحه پخش فایل صوتی با controls، چند source و متن download fallback را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش صدا در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش صدا در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, صدا در HTML, آموزش HTML, مرجع HTML, HTML audio, audio source, audio controls"
order: 51
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# صدا در HTML

صدا در HTML درباره پخش فایل صوتی با controls، چند source و متن download fallback است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با صدا در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<audio controls>`: control صوتی native نشان می‌دهد.
- `<source>`: formatهایی مثل mp3 یا ogg ارائه می‌کند.
- `preload`: میزان load اولیه audio را hint می‌دهد.
- برای این موضوع، fallback، caption و control قابل دسترس معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<audio controls preload="metadata">
  <source src="episode.mp3" type="audio/mpeg">
  <source src="episode.ogg" type="audio/ogg">
  <a href="episode.mp3">Download audio</a>
</audio>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Audio quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;audio controls&gt;</code></td><td>shows native audio controls</td></tr>
    <tr><td><code>&lt;source&gt;</code></td><td>offers mp3, ogg, or other formats</td></tr>
    <tr><td><code>preload</code></td><td>hints how much audio to load early</td></tr>
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
    <title>HTML Audio practice</title>
  </head>
  <body>
    <audio controls preload="metadata">
      <source src="episode.mp3" type="audio/mpeg">
      <source src="episode.ogg" type="audio/ogg">
      <a href="episode.mp3">Download audio</a>
    </audio>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<audio controls>` | control صوتی native نشان می‌دهد | در صدا در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<source>` | formatهایی مثل mp3 یا ogg ارائه می‌کند | در صدا در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `preload` | میزان load اولیه audio را hint می‌دهد | در صدا در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از صدا در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<audio controls>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `audio.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<audio controls>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **افزونه‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
