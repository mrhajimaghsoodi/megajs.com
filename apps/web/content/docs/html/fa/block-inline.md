---
title: "عنصرهای Block و Inline در HTML"
description: "در این درس نحوه حضور elementها در جریان عادی سند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش elementهای Block و Inline | مستندات MEGA JS"
seoDescription: "آموزش elementهای Block و Inline در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین."
keywords: "آموزش HTML, elementهای Block و Inline, آموزش HTML block inline, div span display, آموزش HTML layout flow"
order: 21
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای Block و Inline در HTML

عنصرهای Block و Inline در HTML روی نحوه حضور elementها در جریان عادی سند تمرکز دارد. در این درس درباره elementهای Block و Inline با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی علت تغییرهای layout به نحوه اشغال فضا برمی‌گردد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی elementهای Block و Inline

- این بخش به عنصرهای Block و Inline در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `block elements`, `inline elements` و `display CSS` است.
- وقتی وقتی علت تغییرهای layout به نحوه اشغال فضا برمی‌گردد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<div class="card">
  <h2>Block elements start on a new line.</h2>
  <p>Inline elements like <a href="/docs">links</a> stay inside text flow.</p>
</div>
```

### مثال 2: گزینه‌ها در context

```html
<section class="block-inline-notes" aria-labelledby="block-inline-title">
  <h2 id="block-inline-title">HTML Block and Inline Elements options</h2>
  <table>
    <caption>Key syntax for block and inline elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>block elements</code></td>
      <td>usually start on a new line and fill width</td>
    </tr>
    <tr>
      <td><code>inline elements</code></td>
      <td>flow inside text without a line break</td>
    </tr>
    <tr>
      <td><code>display CSS</code></td>
      <td>can change visual layout without changing semantics</td>
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
    <title>HTML Block and Inline Elements practice</title>
  </head>
  <body>
    <div class="card">
      <h2>Block elements start on a new line.</h2>
      <p>Inline elements like <a href="/docs">links</a> stay inside text flow.</p>
    </div>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی elementهای Block و Inline را بدون کد layout اضافی نشان می‌دهد.
- به `block elements` دقت کنید: معمولاً از خط جدید شروع می‌شوند و عرض را می‌گیرند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `block elements` | معمولاً از خط جدید شروع می‌شوند و عرض را می‌گیرند | هنگام تمرین elementهای Block و Inline از آن استفاده کنید. |
| `inline elements` | داخل متن بدون line break جریان دارند | هنگام تمرین elementهای Block و Inline از آن استفاده کنید. |
| `display CSS` | ظاهر layout را بدون تغییر semantics عوض می‌کند | هنگام تمرین elementهای Block و Inline از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای elementهای Block و Inline را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از elementهای Block و Inline فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `block elements` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `block-inline.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `block elements` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **کلاس‌ها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
