---
title: "کدگذاری کاراکتر HTML"
description: "در این درس جلوگیری UTF-8 از خراب شدن متن در صفحه چندزبانه را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش کدگذاری کاراکتر HTML | مستندات MEGA JS"
seoDescription: "آموزش کدگذاری کاراکتر HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, کدگذاری کاراکتر HTML, آموزش HTML charset, UTF-8 HTML, meta charset"
order: 36
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کدگذاری کاراکتر HTML

کدگذاری کاراکتر HTML روی جلوگیری UTF-8 از خراب شدن متن در صفحه چندزبانه تمرکز دارد. در این درس درباره کدگذاری کاراکتر HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی محتوا شامل فارسی، انگلیسی، symbol یا emoji است. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی کدگذاری کاراکتر HTML

- این بخش به کدگذاری کاراکتر HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<meta charset="UTF-8">`, `UTF-8` و `mojibake` است.
- وقتی وقتی محتوا شامل فارسی، انگلیسی، symbol یا emoji است، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<head>
  <meta charset="UTF-8">
  <title>UTF-8 page</title>
</head>
<p>English, فارسی, العربية, and emoji 😊 can share one page.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="charset-notes" aria-labelledby="charset-title">
  <h2 id="charset-title">HTML Charset options</h2>
  <table>
    <caption>Key syntax for HTML charset</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></td>
      <td>declares encoding near the top of head</td>
    </tr>
    <tr>
      <td><code>UTF-8</code></td>
      <td>covers most writing systems and emoji</td>
    </tr>
    <tr>
      <td><code>mojibake</code></td>
      <td>the broken text caused by wrong encoding</td>
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
    <title>HTML Charset practice</title>
  </head>
  <body>
    <head>
      <meta charset="UTF-8">
      <title>UTF-8 page</title>
    </head>
    <p>English, فارسی, العربية, and emoji 😊 can share one page.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی کدگذاری کاراکتر HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<meta charset="UTF-8">` دقت کنید: encoding را نزدیک ابتدای head اعلام می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<meta charset="UTF-8">` | encoding را نزدیک ابتدای head اعلام می‌کند | هنگام تمرین کدگذاری کاراکتر HTML از آن استفاده کنید. |
| `UTF-8` | بیشتر سیستم‌های نوشتاری و emoji را پوشش می‌دهد | هنگام تمرین کدگذاری کاراکتر HTML از آن استفاده کنید. |
| `mojibake` | متن خراب ناشی از encoding اشتباه است | هنگام تمرین کدگذاری کاراکتر HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای کدگذاری کاراکتر HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از کدگذاری کاراکتر HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<meta charset="UTF-8">` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `charset.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<meta charset="UTF-8">` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **کدگذاری URL در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
