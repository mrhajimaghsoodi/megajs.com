---
title: "Entityهای HTML"
description: "در این درس نوشتن امن کاراکترهای رزروشده و فاصله‌های خاص را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Entityهای HTML | مستندات MEGA JS"
seoDescription: "آموزش Entityهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, Entityهای HTML, آموزش HTML entities, amp lt gt nbsp, reserved characters HTML"
order: 33
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Entityهای HTML

Entityهای HTML روی نوشتن امن کاراکترهای رزروشده و فاصله‌های خاص تمرکز دارد. در این درس درباره Entityهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی متن باید symbolهایی را نشان دهد که HTML آن‌ها را markup می‌پندارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Entityهای HTML

- این بخش به Entityهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `&amp;`, `&lt; / &gt;` و `&nbsp;` است.
- وقتی وقتی متن باید symbolهایی را نشان دهد که HTML آن‌ها را markup می‌پندارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<p>Use &amp; for an ampersand and &lt; for a less-than sign.</p>
<p>Keep these words together with&nbsp;a non-breaking space.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="entities-notes" aria-labelledby="entities-title">
  <h2 id="entities-title">HTML Entities options</h2>
  <table>
    <caption>Key syntax for HTML entities</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&amp;amp;</code></td>
      <td>prints an ampersand</td>
    </tr>
    <tr>
      <td><code>&amp;lt; / &amp;gt;</code></td>
      <td>prints less-than and greater-than signs</td>
    </tr>
    <tr>
      <td><code>&amp;nbsp;</code></td>
      <td>keeps words from breaking apart</td>
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
    <title>HTML Entities practice</title>
  </head>
  <body>
    <p>Use &amp; for an ampersand and &lt; for a less-than sign.</p>
    <p>Keep these words together with&nbsp;a non-breaking space.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی Entityهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `&amp;` دقت کنید: علامت ampersand را چاپ می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `&amp;` | علامت ampersand را چاپ می‌کند | هنگام تمرین Entityهای HTML از آن استفاده کنید. |
| `&lt; / &gt;` | علامت‌های کوچکتر و بزرگتر را چاپ می‌کند | هنگام تمرین Entityهای HTML از آن استفاده کنید. |
| `&nbsp;` | جدا شدن کلمات را جلوگیری می‌کند | هنگام تمرین Entityهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Entityهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از Entityهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `&amp;` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `entities.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `&amp;` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **نمادها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
