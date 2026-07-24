---
title: "CSS در HTML"
description: "در این درس وصل شدن CSS inline، internal و external به markup را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش CSS در HTML | مستندات MEGA JS"
seoDescription: "آموزش CSS در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, CSS در HTML, آموزش HTML CSS, link stylesheet, internal CSS"
order: 14
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# CSS در HTML

CSS در HTML روی وصل شدن CSS inline، internal و external به markup تمرکز دارد. در این درس درباره CSS در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی تصمیم می‌گیرید styleهای صفحه یا پروژه کجا باشند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی CSS در HTML

- این بخش به CSS در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `style attribute`, `<style>` و `<link rel="stylesheet">` است.
- وقتی وقتی تصمیم می‌گیرید styleهای صفحه یا پروژه کجا باشند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<head>
  <link rel="stylesheet" href="styles.css">
  <style>
    .notice { border-left: 4px solid royalblue; }
  </style>
</head>
<p class="notice" style="padding: 1rem;">CSS can be external, internal, or inline.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="css-notes" aria-labelledby="css-title">
  <h2 id="css-title">HTML CSS options</h2>
  <table>
    <caption>Key syntax for CSS in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>style attribute</code></td>
      <td>applies one-off styles to one element</td>
    </tr>
    <tr>
      <td><code>&lt;style&gt;</code></td>
      <td>keeps page-specific CSS in the head</td>
    </tr>
    <tr>
      <td><code>&lt;link rel=&quot;stylesheet&quot;&gt;</code></td>
      <td>loads reusable external CSS</td>
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
    <title>HTML CSS practice</title>
  </head>
  <body>
    <head>
      <link rel="stylesheet" href="styles.css">
      <style>
        .notice { border-left: 4px solid royalblue; }
      </style>
    </head>
    <p class="notice" style="padding: 1rem;">CSS can be external, internal, or inline.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی CSS در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `style attribute` دقت کنید: style تک‌باره را روی یک element اعمال می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `style attribute` | style تک‌باره را روی یک element اعمال می‌کند | هنگام تمرین CSS در HTML از آن استفاده کنید. |
| `<style>` | CSS مخصوص همان صفحه را در head نگه می‌دارد | هنگام تمرین CSS در HTML از آن استفاده کنید. |
| `<link rel="stylesheet">` | CSS خارجی قابل استفاده مجدد را load می‌کند | هنگام تمرین CSS در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای CSS در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از CSS در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `style attribute` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `css.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `style attribute` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **لینک‌ها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
