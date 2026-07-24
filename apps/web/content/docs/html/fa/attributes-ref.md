---
title: "مرجع attributeهای HTML"
description: "در این درس تنظیم elementها با attribute و شناخت elementهای پذیرنده را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش مرجع attributeهای HTML | مستندات MEGA JS"
seoDescription: "آموزش مرجع attributeهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. برای شروع مطمئن و کاربردی."
keywords: "آموزش HTML, مرجع attributeهای HTML, آموزش HTML attributes reference, global attributes, boolean attributes"
order: 63
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع attributeهای HTML

مرجع attributeهای HTML روی تنظیم elementها با attribute و شناخت elementهای پذیرنده تمرکز دارد. در این درس درباره مرجع attributeهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی spelling، نوع مقدار یا element معتبر را می‌خواهید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی مرجع attributeهای HTML

- این بخش به مرجع attributeهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `global attributes`, `element-specific attributes` و `boolean attributes` است.
- وقتی وقتی spelling، نوع مقدار یا element معتبر را می‌خواهید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<img src="avatar.png" alt="Profile avatar" width="96" height="96">
<a href="/profile" rel="author">Author profile</a>
<input name="email" type="email" required>
```

### مثال 2: گزینه‌ها در context

```html
<section class="attributes-ref-notes" aria-labelledby="attributes-ref-title">
  <h2 id="attributes-ref-title">HTML Attribute Reference options</h2>
  <table>
    <caption>Key syntax for HTML attribute reference</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>global attributes</code></td>
      <td>work on most HTML elements</td>
    </tr>
    <tr>
      <td><code>element-specific attributes</code></td>
      <td>belong only to certain tags</td>
    </tr>
    <tr>
      <td><code>boolean attributes</code></td>
      <td>are true when present</td>
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
    <title>HTML Attribute Reference practice</title>
  </head>
  <body>
    <img src="avatar.png" alt="Profile avatar" width="96" height="96">
    <a href="/profile" rel="author">Author profile</a>
    <input name="email" type="email" required>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی مرجع attributeهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `global attributes` دقت کنید: روی بیشتر elementهای HTML کار می‌کنند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار syntax دقیق، کاربرد و محدودیت‌های هر مورد قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `global attributes` | روی بیشتر elementهای HTML کار می‌کنند | هنگام تمرین مرجع attributeهای HTML از آن استفاده کنید. |
| `element-specific attributes` | فقط به tagهای مشخص تعلق دارند | هنگام تمرین مرجع attributeهای HTML از آن استفاده کنید. |
| `boolean attributes` | وقتی حاضر باشند true هستند | هنگام تمرین مرجع attributeهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای مرجع attributeهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از مرجع attributeهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `global attributes` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `attributes-ref.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `global attributes` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **attributeهای سراسری HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
