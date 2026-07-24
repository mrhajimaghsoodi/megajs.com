---
title: "HTML و XHTML"
description: "در این درس تفاوت HTML مدرن با syntax سخت‌گیرانه XML-style را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش HTML و XHTML | مستندات MEGA JS"
seoDescription: "آموزش HTML و XHTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, HTML و XHTML, آموزش HTML XHTML, XHTML syntax, modern HTML"
order: 38
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML و XHTML

HTML و XHTML روی تفاوت HTML مدرن با syntax سخت‌گیرانه XML-style تمرکز دارد. در این درس درباره HTML و XHTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی مثال قدیمی می‌خوانید یا template شبیه XML دارید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی HTML و XHTML

- این بخش به HTML و XHTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `HTML parsing`, `XHTML` و `void elements` است.
- وقتی وقتی مثال قدیمی می‌خوانید یا template شبیه XML دارید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<!-- Valid in modern HTML and also close to XHTML style -->
<img src="logo.svg" alt="Logo">
<input type="email" name="email">
```

### مثال 2: گزینه‌ها در context

```html
<section class="xhtml-notes" aria-labelledby="xhtml-title">
  <h2 id="xhtml-title">HTML and XHTML options</h2>
  <table>
    <caption>Key syntax for HTML and XHTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>HTML parsing</code></td>
      <td>forgives some syntax mistakes</td>
    </tr>
    <tr>
      <td><code>XHTML</code></td>
      <td>requires well-formed XML syntax</td>
    </tr>
    <tr>
      <td><code>void elements</code></td>
      <td>do not need XML-style closing slash in HTML</td>
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
    <title>HTML and XHTML practice</title>
  </head>
  <body>
    <!-- Valid in modern HTML and also close to XHTML style -->
    <img src="logo.svg" alt="Logo">
    <input type="email" name="email">
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی HTML و XHTML را بدون کد layout اضافی نشان می‌دهد.
- به `HTML parsing` دقت کنید: بعضی خطاهای syntax را تحمل می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `HTML parsing` | بعضی خطاهای syntax را تحمل می‌کند | هنگام تمرین HTML و XHTML از آن استفاده کنید. |
| `XHTML` | syntax well-formed شبیه XML می‌خواهد | هنگام تمرین HTML و XHTML از آن استفاده کنید. |
| `void elements` | در HTML به slash پایانی XML-style نیاز ندارند | هنگام تمرین HTML و XHTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای HTML و XHTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از HTML و XHTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `HTML parsing` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `xhtml.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `HTML parsing` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **عنصر div در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
