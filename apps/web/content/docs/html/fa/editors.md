---
title: "ویرایشگرهای HTML"
description: "در این درس نوشتن، ذخیره، پیش‌نمایش و format کردن فایل HTML بدون ابزار پنهان را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش ویرایشگرهای HTML | مستندات MEGA JS"
seoDescription: "آموزش ویرایشگرهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, ویرایشگرهای HTML, آموزش HTML editor, VS Code HTML, save HTML file"
order: 3
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویرایشگرهای HTML

ویرایشگرهای HTML روی نوشتن، ذخیره، پیش‌نمایش و format کردن فایل HTML بدون ابزار پنهان تمرکز دارد. در این درس درباره ویرایشگرهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی workflow ساده و مناسب تمرین می‌سازید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی ویرایشگرهای HTML

- این بخش به ویرایشگرهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `index.html`, `live preview` و `UTF-8 save encoding` است.
- وقتی وقتی workflow ساده و مناسب تمرین می‌سازید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<!-- Save this file as index.html, then open it in a browser. -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Editor Practice</title>
  </head>
  <body>
    <h1>Edited in my code editor</h1>
  </body>
</html>
```

### مثال 2: گزینه‌ها در context

```html
<section class="editors-notes" aria-labelledby="editors-title">
  <h2 id="editors-title">HTML Editors options</h2>
  <table>
    <caption>Key syntax for HTML editors</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>index.html</code></td>
      <td>common entry file name for a site folder</td>
    </tr>
    <tr>
      <td><code>live preview</code></td>
      <td>reloads changes quickly while learning</td>
    </tr>
    <tr>
      <td><code>UTF-8 save encoding</code></td>
      <td>avoids broken Persian, symbols, or emoji</td>
    </tr>
    </tbody>
  </table>
</section>
```

### مثال 3: صفحه تمرینی کامل

```html
<main>
  <h1>HTML Editors checklist</h1>
  <p>Open DevTools and verify that HTML editors is represented in the DOM.</p>
  <ul>
    <li><code>index.html</code> - common entry file name for a site folder</li>
    <li><code>live preview</code> - reloads changes quickly while learning</li>
    <li><code>UTF-8 save encoding</code> - avoids broken Persian, symbols, or emoji</li>
  </ul>
</main>
```

## توضیح مثال

- مثال اول pattern اصلی ویرایشگرهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `index.html` دقت کنید: نام رایج فایل ورودی در پوشه سایت.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `index.html` | نام رایج فایل ورودی در پوشه سایت | هنگام تمرین ویرایشگرهای HTML از آن استفاده کنید. |
| `live preview` | تغییرها را سریع در زمان یادگیری نشان می‌دهد | هنگام تمرین ویرایشگرهای HTML از آن استفاده کنید. |
| `UTF-8 save encoding` | از خراب شدن فارسی، نماد و emoji جلوگیری می‌کند | هنگام تمرین ویرایشگرهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای ویرایشگرهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از ویرایشگرهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `index.html` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `editors.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `index.html` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **مثال‌های پایه HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
