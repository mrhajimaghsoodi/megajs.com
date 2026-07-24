---
title: "افزونه‌ها در HTML"
description: "در این درس مقایسه pluginهای قدیمی با object، embed، iframe و media native را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش افزونه‌ها در HTML | مستندات MEGA JS"
seoDescription: "آموزش افزونه‌ها در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, افزونه‌ها در HTML, آموزش HTML plugins, object embed, legacy HTML plugins"
order: 52
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# افزونه‌ها در HTML

افزونه‌ها در HTML روی مقایسه pluginهای قدیمی با object، embed، iframe و media native تمرکز دارد. در این درس درباره افزونه‌ها در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی embed قدیمی را نگه‌داری می‌کنید یا fallback PDF می‌خواهید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی افزونه‌ها در HTML

- این بخش به افزونه‌ها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<object>`, `<embed>` و `native media` است.
- وقتی وقتی embed قدیمی را نگه‌داری می‌کنید یا fallback PDF می‌خواهید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<object data="brochure.pdf" type="application/pdf" width="100%" height="500">
  <p><a href="brochure.pdf">Download the PDF brochure</a></p>
</object>
```

### مثال 2: گزینه‌ها در context

```html
<section class="plugins-notes" aria-labelledby="plugins-title">
  <h2 id="plugins-title">HTML Plug-ins options</h2>
  <table>
    <caption>Key syntax for HTML plug-ins</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;object&gt;</code></td>
      <td>embeds external resources with fallback content</td>
    </tr>
    <tr>
      <td><code>&lt;embed&gt;</code></td>
      <td>places external content with fewer fallback options</td>
    </tr>
    <tr>
      <td><code>native media</code></td>
      <td>usually replaces old plugin players</td>
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
    <title>HTML Plug-ins practice</title>
  </head>
  <body>
    <object data="brochure.pdf" type="application/pdf" width="100%" height="500">
      <p><a href="brochure.pdf">Download the PDF brochure</a></p>
    </object>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی افزونه‌ها در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<object>` دقت کنید: resource خارجی را با fallback embed می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار source، controls، caption و fallback مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<object>` | resource خارجی را با fallback embed می‌کند | هنگام تمرین افزونه‌ها در HTML از آن استفاده کنید. |
| `<embed>` | محتوای خارجی را با fallback کمتر قرار می‌دهد | هنگام تمرین افزونه‌ها در HTML از آن استفاده کنید. |
| `native media` | معمولاً جای playerهای plugin قدیمی را می‌گیرد | هنگام تمرین افزونه‌ها در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای افزونه‌ها در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای media از controls، caption/subtitle و fallback link استفاده کنید و autoplay را با احتیاط به کار ببرید.

## اشتباه‌های رایج

- استفاده از افزونه‌ها در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<object>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `plugins.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<object>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویدیوهای YouTube در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
