---
title: "مثال‌های پایه HTML"
description: "در این درس اولین elementهایی که مبتدی‌ها در بیشتر صفحه‌ها کنار هم می‌گذارند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش مثال‌های پایه HTML | مستندات MEGA JS"
seoDescription: "آموزش مثال‌های پایه HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, مثال‌های پایه HTML, آموزش HTML examples, آموزش HTML h1 p a img, basic HTML tags"
order: 4
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مثال‌های پایه HTML

مثال‌های پایه HTML روی اولین elementهایی که مبتدی‌ها در بیشتر صفحه‌ها کنار هم می‌گذارند تمرکز دارد. در این درس درباره مثال‌های پایه HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی صفحه‌ای سریع با heading، paragraph، link و image می‌خواهید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی مثال‌های پایه HTML

- این بخش به مثال‌های پایه HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<h1>`, `<p>` و `<a> / <img>` است.
- وقتی وقتی صفحه‌ای سریع با heading، paragraph، link و image می‌خواهید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<h1>Main heading</h1>
<p>A paragraph explains one idea.</p>
<a href="about.html">Read more</a>
<img src="team.jpg" alt="Our team working together">
```

### مثال 2: گزینه‌ها در context

```html
<section class="basic-notes" aria-labelledby="basic-title">
  <h2 id="basic-title">HTML Basic Examples options</h2>
  <table>
    <caption>Key syntax for basic HTML examples</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;h1&gt;</code></td>
      <td>names the main topic of the page</td>
    </tr>
    <tr>
      <td><code>&lt;p&gt;</code></td>
      <td>holds a readable paragraph of text</td>
    </tr>
    <tr>
      <td><code>&lt;a&gt; / &lt;img&gt;</code></td>
      <td>connects pages and embeds images</td>
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
    <title>HTML Basic Examples practice</title>
  </head>
  <body>
    <h1>Main heading</h1>
    <p>A paragraph explains one idea.</p>
    <a href="about.html">Read more</a>
    <img src="team.jpg" alt="Our team working together">
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی مثال‌های پایه HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<h1>` دقت کنید: موضوع اصلی صفحه را نام‌گذاری می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<h1>` | موضوع اصلی صفحه را نام‌گذاری می‌کند | هنگام تمرین مثال‌های پایه HTML از آن استفاده کنید. |
| `<p>` | یک پاراگراف خوانا از متن را نگه می‌دارد | هنگام تمرین مثال‌های پایه HTML از آن استفاده کنید. |
| `<a> / <img>` | صفحه‌ها را وصل می‌کند و image را نمایش می‌دهد | هنگام تمرین مثال‌های پایه HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای مثال‌های پایه HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از مثال‌های پایه HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<h1>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `basic.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<h1>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **عنصرهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
