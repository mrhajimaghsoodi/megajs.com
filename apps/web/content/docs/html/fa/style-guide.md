---
title: "راهنمای سبک HTML"
description: "در این درس نگه‌داری markup با tagهای lowercase، attributeهای quoted و indentation یکدست را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش راهنمای سبک HTML | مستندات MEGA JS"
seoDescription: "آموزش راهنمای سبک HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, راهنمای سبک HTML, آموزش HTML style guide, آموزش HTML formatting, clean HTML"
order: 32
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# راهنمای سبک HTML

راهنمای سبک HTML روی نگه‌داری markup با tagهای lowercase، attributeهای quoted و indentation یکدست تمرکز دارد. در این درس درباره راهنمای سبک HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی تیم به HTML قابل پیش‌بینی در review نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی راهنمای سبک HTML

- این بخش به راهنمای سبک HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `lowercase tags`, `quoted attributes` و `indentation` است.
- وقتی وقتی تیم به HTML قابل پیش‌بینی در review نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Consistent HTML</title>
  </head>
  <body>
    <img src="logo.svg" alt="Logo">
  </body>
</html>
```

### مثال 2: گزینه‌ها در context

```html
<section class="style-guide-notes" aria-labelledby="style-guide-title">
  <h2 id="style-guide-title">HTML Style Guide options</h2>
  <table>
    <caption>Key syntax for HTML style guide</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>lowercase tags</code></td>
      <td>match common modern HTML style</td>
    </tr>
    <tr>
      <td><code>quoted attributes</code></td>
      <td>avoid ambiguous values</td>
    </tr>
    <tr>
      <td><code>indentation</code></td>
      <td>shows nesting at a glance</td>
    </tr>
    </tbody>
  </table>
</section>
```

### مثال 3: صفحه تمرینی کامل

```html
<main>
  <h1>HTML Style Guide checklist</h1>
  <p>Open DevTools and verify that HTML style guide is represented in the DOM.</p>
  <ul>
    <li><code>lowercase tags</code> - match common modern HTML style</li>
    <li><code>quoted attributes</code> - avoid ambiguous values</li>
    <li><code>indentation</code> - shows nesting at a glance</li>
  </ul>
</main>
```

## توضیح مثال

- مثال اول pattern اصلی راهنمای سبک HTML را بدون کد layout اضافی نشان می‌دهد.
- به `lowercase tags` دقت کنید: با style رایج HTML مدرن هماهنگ است.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `lowercase tags` | با style رایج HTML مدرن هماهنگ است | هنگام تمرین راهنمای سبک HTML از آن استفاده کنید. |
| `quoted attributes` | از مقدارهای مبهم جلوگیری می‌کند | هنگام تمرین راهنمای سبک HTML از آن استفاده کنید. |
| `indentation` | تو در تو بودن را سریع نشان می‌دهد | هنگام تمرین راهنمای سبک HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای راهنمای سبک HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از راهنمای سبک HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `lowercase tags` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `style-guide.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `lowercase tags` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **Entityهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
