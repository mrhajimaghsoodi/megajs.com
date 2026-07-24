---
title: "Drag and Drop در HTML"
description: "در این درس ارسال data از element draggable به drop target را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Drag and Drop در HTML | مستندات MEGA JS"
seoDescription: "آموزش Drag and Drop در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. برای شروع مطمئن و کاربردی."
keywords: "آموزش HTML, Drag and Drop در HTML, آموزش HTML drag and drop, draggable dragstart drop, DataTransfer"
order: 57
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Drag and Drop در HTML

Drag and Drop در HTML روی ارسال data از element draggable به drop target تمرکز دارد. در این درس درباره Drag and Drop در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی کاربر باید card، file یا item را با pointer جابه‌جا کند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Drag and Drop در HTML

- این بخش به Drag and Drop در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `draggable="true"`, `dragstart` و `drop` است.
- وقتی وقتی کاربر باید card، file یا item را با pointer جابه‌جا کند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<div draggable="true" id="card">Drag me</div>
<div id="drop-zone">Drop here</div>
<script>
  const card = document.querySelector('#card');
  const dropZone = document.querySelector('#drop-zone');
  card.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', card.id));
  dropZone.addEventListener('dragover', (event) => event.preventDefault());
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="drag-drop-notes" aria-labelledby="drag-drop-title">
  <h2 id="drag-drop-title">HTML Drag and Drop API options</h2>
  <table>
    <caption>Key syntax for HTML Drag and Drop API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>draggable=&quot;true&quot;</code></td>
      <td>allows an element to start dragging</td>
    </tr>
    <tr>
      <td><code>dragstart</code></td>
      <td>stores data for the drag operation</td>
    </tr>
    <tr>
      <td><code>drop</code></td>
      <td>handles the result on the target</td>
    </tr>
    </tbody>
  </table>
</section>
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
    <div draggable="true" id="card">Drag me</div>
    <div id="drop-zone">Drop here</div>
    <script>
      const card = document.querySelector('#card');
      const dropZone = document.querySelector('#drop-zone');
      card.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', card.id));
      dropZone.addEventListener('dragover', (event) => event.preventDefault());
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی Drag and Drop در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `draggable="true"` دقت کنید: شروع drag را برای element ممکن می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `draggable="true"` | شروع drag را برای element ممکن می‌کند | هنگام تمرین Drag and Drop در HTML از آن استفاده کنید. |
| `dragstart` | data عملیات drag را ذخیره می‌کند | هنگام تمرین Drag and Drop در HTML از آن استفاده کنید. |
| `drop` | نتیجه را روی target مدیریت می‌کند | هنگام تمرین Drag and Drop در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Drag and Drop در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از Drag and Drop در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `draggable="true"` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `drag-drop.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `draggable="true"` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **Web Storage در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
