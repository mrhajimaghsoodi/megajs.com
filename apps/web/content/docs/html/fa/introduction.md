---
title: "مقدمه HTML"
description: "در این درس نقش tag، attribute، متن و مرورگر در ساخت یک صفحه وب را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش مقدمه و ساختار HTML | مستندات MEGA JS"
seoDescription: "آموزش مقدمه و ساختار HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, مقدمه و ساختار HTML, آموزش HTML introduction, آموزش HTML tutorial, web page structure"
order: 1
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مقدمه HTML

مقدمه HTML روی نقش tag، attribute، متن و مرورگر در ساخت یک صفحه وب تمرکز دارد. در این درس درباره مقدمه و ساختار HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که قبل از نوشتن سندهای بزرگ‌تر به یک نقشه ذهنی روشن نیاز دارید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی مقدمه و ساختار HTML

- این بخش به مقدمه HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<!doctype html>`, `<html lang="en">` و `<head> / <body>` است.
- وقتی قبل از نوشتن سندهای بزرگ‌تر به یک نقشه ذهنی روشن نیاز دارید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<article>
  <h1>Welcome to HTML</h1>
  <p>HTML uses elements to describe headings, paragraphs, links, images, forms, and more.</p>
</article>
```

### مثال 2: گزینه‌ها در context

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Introduction</title>
  </head>
  <body>
    <h1>My first document</h1>
    <p>The browser builds a page from this structure.</p>
  </body>
</html>
```

### مثال 3: صفحه تمرینی کامل

```html
<main>
  <h1>Recipe notes</h1>
  <p>HTML describes the role of this text.</p>
  <a href="ingredients.html">View ingredients</a>
</main>
```

## توضیح مثال

- مثال اول pattern اصلی مقدمه و ساختار HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<!doctype html>` دقت کنید: سند مدرن را در standards mode شروع می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<!doctype html>` | سند مدرن را در standards mode شروع می‌کند | هنگام تمرین مقدمه و ساختار HTML از آن استفاده کنید. |
| `<html lang="en">` | کل سند را می‌پوشاند و زبان را مشخص می‌کند | هنگام تمرین مقدمه و ساختار HTML از آن استفاده کنید. |
| `<head> / <body>` | metadata را از محتوای قابل مشاهده جدا می‌کند | هنگام تمرین مقدمه و ساختار HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای مقدمه و ساختار HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از مقدمه و ساختار HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<!doctype html>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `introduction.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<!doctype html>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **مبانی HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
