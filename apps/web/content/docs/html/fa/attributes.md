---
title: "ویژگی‌های HTML"
description: "در این درس اینکه جفت‌های name-value چگونه URL، label، state و تنظیمات به element اضافه می‌کنند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش ویژگی‌های HTML | مستندات MEGA JS"
seoDescription: "آموزش ویژگی‌های HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, ویژگی‌های HTML, آموزش HTML attributes, href alt class id, آموزش HTML attribute syntax"
order: 6
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های HTML

ویژگی‌های HTML روی اینکه جفت‌های name-value چگونه URL، label، state و تنظیمات به element اضافه می‌کنند تمرکز دارد. در این درس درباره ویژگی‌های HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی tag name به تنهایی اطلاعات کافی ندارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی ویژگی‌های HTML

- این بخش به ویژگی‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `href`, `alt` و `class / id` است.
- وقتی وقتی tag name به تنهایی اطلاعات کافی ندارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<a href="https://example.com" target="_blank" rel="noopener">
  Visit example.com
</a>
<img src="logo.svg" alt="Company logo" width="160" height="48">
```

### مثال 2: گزینه‌ها در context

```html
<section class="attributes-notes" aria-labelledby="attributes-title">
  <h2 id="attributes-title">HTML Attributes options</h2>
  <table>
    <caption>Key syntax for HTML attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>href</code></td>
      <td>sets the destination for a link</td>
    </tr>
    <tr>
      <td><code>alt</code></td>
      <td>describes an image for accessibility and fallback</td>
    </tr>
    <tr>
      <td><code>class / id</code></td>
      <td>creates styling and scripting hooks</td>
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
    <title>HTML Attributes practice</title>
  </head>
  <body>
    <a href="https://example.com" target="_blank" rel="noopener">
      Visit example.com
    </a>
    <img src="logo.svg" alt="Company logo" width="160" height="48">
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی ویژگی‌های HTML را بدون کد layout اضافی نشان می‌دهد.
- به `href` دقت کنید: مقصد link را مشخص می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `href` | مقصد link را مشخص می‌کند | هنگام تمرین ویژگی‌های HTML از آن استفاده کنید. |
| `alt` | image را برای accessibility و fallback توصیف می‌کند | هنگام تمرین ویژگی‌های HTML از آن استفاده کنید. |
| `class / id` | hook برای styling و script می‌سازد | هنگام تمرین ویژگی‌های HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای ویژگی‌های HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از ویژگی‌های HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `href` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `attributes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `href` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **تیترهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
