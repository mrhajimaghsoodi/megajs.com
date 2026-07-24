---
title: "آی‌فریم‌ها در HTML"
description: "در این درس قرار دادن یک سند دیگر داخل صفحه فعلی را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش iframe در HTML | مستندات MEGA JS"
seoDescription: "آموزش iframe در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, iframe در HTML, آموزش HTML iframe, iframe src title, embed page"
order: 24
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# آی‌فریم‌ها در HTML

آی‌فریم‌ها در HTML روی قرار دادن یک سند دیگر داخل صفحه فعلی تمرکز دارد. در این درس درباره iframe در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی محتوای خارجی معتبر مثل map یا video باید inline دیده شود. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی iframe در HTML

- این بخش به آی‌فریم‌ها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `src`, `title` و `loading="lazy"` است.
- وقتی وقتی محتوای خارجی معتبر مثل map یا video باید inline دیده شود، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="HTML tutorial video"
  loading="lazy"
  allowfullscreen>
</iframe>
```

### مثال 2: گزینه‌ها در context

```html
<section class="iframes-notes" aria-labelledby="iframes-title">
  <h2 id="iframes-title">HTML Iframes options</h2>
  <table>
    <caption>Key syntax for HTML iframes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>src</code></td>
      <td>sets the embedded page URL</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>labels the frame for screen readers</td>
    </tr>
    <tr>
      <td><code>loading=&quot;lazy&quot;</code></td>
      <td>defers offscreen frame loading</td>
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
    <title>HTML Iframes practice</title>
  </head>
  <body>
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="HTML tutorial video"
      loading="lazy"
      allowfullscreen>
    </iframe>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی iframe در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `src` دقت کنید: URL صفحه embedded را تعیین می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `src` | URL صفحه embedded را تعیین می‌کند | هنگام تمرین iframe در HTML از آن استفاده کنید. |
| `title` | frame را برای screen reader نام‌گذاری می‌کند | هنگام تمرین iframe در HTML از آن استفاده کنید. |
| `loading="lazy"` | load شدن frame بیرون از دید را عقب می‌اندازد | هنگام تمرین iframe در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای iframe در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از iframe در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `src` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `iframes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `src` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **JavaScript در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
