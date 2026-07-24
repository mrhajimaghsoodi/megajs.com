---
title: "تصویرها در HTML"
description: "در این درس قرار دادن image با alt دسترس‌پذیر و اندازه پایدار را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش تصویر در HTML | مستندات MEGA JS"
seoDescription: "آموزش تصویر در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, تصویر در HTML, آموزش HTML images, img alt src, responsive images"
order: 16
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# تصویرها در HTML

تصویرها در HTML روی قرار دادن image با alt دسترس‌پذیر و اندازه پایدار تمرکز دارد. در این درس درباره تصویر در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی تصویر اطلاعات، برندینگ، chart یا decoration اضافه می‌کند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی تصویر در HTML

- این بخش به تصویرها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `src`, `alt` و `width / height` است.
- وقتی وقتی تصویر اطلاعات، برندینگ، chart یا decoration اضافه می‌کند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<figure>
  <img src="/images/html-layout.png" alt="Diagram of an HTML page layout" width="640" height="360">
  <figcaption>HTML layout diagram</figcaption>
</figure>
```

### مثال 2: گزینه‌ها در context

```html
<section class="images-notes" aria-labelledby="images-title">
  <h2 id="images-title">HTML Images options</h2>
  <table>
    <caption>Key syntax for HTML images</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>src</code></td>
      <td>points to the image file</td>
    </tr>
    <tr>
      <td><code>alt</code></td>
      <td>describes meaningful images or marks decorative ones empty</td>
    </tr>
    <tr>
      <td><code>width / height</code></td>
      <td>reserves layout space before loading</td>
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
    <title>HTML Images practice</title>
  </head>
  <body>
    <figure>
      <img src="/images/html-layout.png" alt="Diagram of an HTML page layout" width="640" height="360">
      <figcaption>HTML layout diagram</figcaption>
    </figure>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی تصویر در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `src` دقت کنید: به فایل تصویر اشاره می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `src` | به فایل تصویر اشاره می‌کند | هنگام تمرین تصویر در HTML از آن استفاده کنید. |
| `alt` | تصویر معنادار را توصیف یا تزئینی را خالی می‌کند | هنگام تمرین تصویر در HTML از آن استفاده کنید. |
| `width / height` | قبل از load شدن فضا رزرو می‌کند | هنگام تمرین تصویر در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای تصویر در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از تصویر در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `src` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `images.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `src` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **فاوآیکن HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
