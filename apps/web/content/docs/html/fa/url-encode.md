---
title: "کدگذاری URL در HTML"
description: "در این درس تبدیل کاراکترهای ناامن به percent-encoding داخل link و query string را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش کدگذاری URL در HTML | مستندات MEGA JS"
seoDescription: "آموزش کدگذاری URL در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, کدگذاری URL در HTML, آموزش HTML URL encoding, percent encoding, query string HTML"
order: 37
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کدگذاری URL در HTML

کدگذاری URL در HTML روی تبدیل کاراکترهای ناامن به percent-encoding داخل link و query string تمرکز دارد. در این درس درباره کدگذاری URL در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی URL شامل فاصله، فارسی، symbol رزروشده یا query فرم است. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی کدگذاری URL در HTML

- این بخش به کدگذاری URL در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `%20`, `query string` و `encodeURIComponent()` است.
- وقتی وقتی URL شامل فاصله، فارسی، symbol رزروشده یا query فرم است، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<a href="/search?q=learn%20HTML&level=beginner">Search for learn HTML</a>
<form action="/search" method="get">
  <input name="q" value="HTML tables">
</form>
```

### مثال 2: گزینه‌ها در context

```html
<section class="url-encode-notes" aria-labelledby="url-encode-title">
  <h2 id="url-encode-title">HTML URL Encoding options</h2>
  <table>
    <caption>Key syntax for URL encoding in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>%20</code></td>
      <td>represents a space in a URL</td>
    </tr>
    <tr>
      <td><code>query string</code></td>
      <td>passes key-value pairs after ?</td>
    </tr>
    <tr>
      <td><code>encodeURIComponent()</code></td>
      <td>encodes dynamic JavaScript values safely</td>
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
    <title>HTML URL Encoding practice</title>
  </head>
  <body>
    <a href="/search?q=learn%20HTML&level=beginner">Search for learn HTML</a>
    <form action="/search" method="get">
      <input name="q" value="HTML tables">
    </form>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی کدگذاری URL در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `%20` دقت کنید: فاصله را در URL نشان می‌دهد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `%20` | فاصله را در URL نشان می‌دهد | هنگام تمرین کدگذاری URL در HTML از آن استفاده کنید. |
| `query string` | جفت key-value را بعد از ? می‌فرستد | هنگام تمرین کدگذاری URL در HTML از آن استفاده کنید. |
| `encodeURIComponent()` | مقدار dynamic در JavaScript را امن encode می‌کند | هنگام تمرین کدگذاری URL در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای کدگذاری URL در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از کدگذاری URL در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `%20` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `url-encode.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `%20` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **HTML و XHTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
