---
title: "Drag and Drop در HTML"
description: "این صفحه draggable کردن elementها و مدیریت dragstart، dragover و drop target را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش Drag and Drop در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Drag and Drop در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, Drag and Drop در HTML, آموزش HTML, مرجع HTML, HTML drag drop, draggable, dataTransfer"
order: 57
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Drag and Drop در HTML

Drag and Drop در HTML درباره draggable کردن elementها و مدیریت dragstart، dragover و drop target است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با Drag and Drop در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `draggable="true"`: element را قابل drag می‌کند.
- `dataTransfer`: داده را هنگام drag حمل می‌کند.
- `drop event`: action نهایی drop را مدیریت می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<div id="card" draggable="true">Drag this card</div>
<div id="drop-zone">Drop zone</div>
<script>
  document.querySelector('#drop-zone').addEventListener('dragover', (event) => event.preventDefault());
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Drag and Drop API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>draggable=&quot;true&quot;</code></td><td>allows an element to start dragging</td></tr>
    <tr><td><code>dataTransfer</code></td><td>carries data during drag operations</td></tr>
    <tr><td><code>drop event</code></td><td>handles the final drop action</td></tr>
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
    <title>HTML Drag and Drop API practice</title>
  </head>
  <body>
    <div id="card" draggable="true">Drag this card</div>
    <div id="drop-zone">Drop zone</div>
    <script>
      document.querySelector('#drop-zone').addEventListener('dragover', (event) => event.preventDefault());
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `draggable="true"` | element را قابل drag می‌کند | در Drag and Drop در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `dataTransfer` | داده را هنگام drag حمل می‌کند | در Drag and Drop در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `drop event` | action نهایی drop را مدیریت می‌کند | در Drag and Drop در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از Drag and Drop در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `draggable="true"` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `drag-drop.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `draggable="true"` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Web Storage در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
