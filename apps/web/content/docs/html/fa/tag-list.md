---
title: "فهرست tagهای HTML"
description: "در این درس گروه‌بندی elementها بر اساس کاربرد برای انتخاب markup معنایی را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش فهرست tagهای HTML | مستندات MEGA JS"
seoDescription: "آموزش فهرست tagهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, فهرست tagهای HTML, آموزش HTML tag list, آموزش HTML tags, semantic tags"
order: 62
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# فهرست tagهای HTML

فهرست tagهای HTML روی گروه‌بندی elementها بر اساس کاربرد برای انتخاب markup معنایی تمرکز دارد. در این درس درباره فهرست tagهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی به خاطر ندارید کدام tag با نقش محتوا بهتر است. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی فهرست tagهای HTML

- این بخش به فهرست tagهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `document tags`, `text tags` و `form/media tags` است.
- وقتی وقتی به خاطر ندارید کدام tag با نقش محتوا بهتر است، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<main>
  <article>Use for independent content.</article>
  <aside>Use for related side content.</aside>
  <footer>Use for footer information.</footer>
</main>
```

### مثال 2: گزینه‌ها در context

```html
<section class="tag-list-notes" aria-labelledby="tag-list-title">
  <h2 id="tag-list-title">HTML Tag List options</h2>
  <table>
    <caption>Key syntax for HTML tag list</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>document tags</code></td>
      <td>html, head, body, main structure</td>
    </tr>
    <tr>
      <td><code>text tags</code></td>
      <td>headings, paragraphs, emphasis, code</td>
    </tr>
    <tr>
      <td><code>form/media tags</code></td>
      <td>controls and embedded content</td>
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
    <title>HTML Tag List practice</title>
  </head>
  <body>
    <main>
      <article>Use for independent content.</article>
      <aside>Use for related side content.</aside>
      <footer>Use for footer information.</footer>
    </main>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی فهرست tagهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `document tags` دقت کنید: ساختار اصلی html، head، body.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار syntax دقیق، کاربرد و محدودیت‌های هر مورد قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `document tags` | ساختار اصلی html، head، body | هنگام تمرین فهرست tagهای HTML از آن استفاده کنید. |
| `text tags` | heading، paragraph، emphasis و code | هنگام تمرین فهرست tagهای HTML از آن استفاده کنید. |
| `form/media tags` | controlها و محتوای embedded | هنگام تمرین فهرست tagهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای فهرست tagهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از فهرست tagهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `document tags` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `tag-list.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `document tags` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **مرجع attributeهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
