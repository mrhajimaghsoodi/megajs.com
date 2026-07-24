---
title: "پاراگراف‌های HTML"
description: "در این درس گروه‌بندی متن با paragraph و رفتار مرورگر در collapse کردن فاصله‌ها را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش پاراگراف در HTML | مستندات MEGA JS"
seoDescription: "آموزش پاراگراف در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, پاراگراف در HTML, آموزش HTML paragraphs, p br hr, آموزش HTML whitespace"
order: 8
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# پاراگراف‌های HTML

پاراگراف‌های HTML روی گروه‌بندی متن با paragraph و رفتار مرورگر در collapse کردن فاصله‌ها تمرکز دارد. در این درس درباره پاراگراف در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی متن خوانا می‌نویسید نه فاصله‌گذاری ظاهری خط‌به‌خط. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی پاراگراف در HTML

- این بخش به پاراگراف‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<p>`, `<br>` و `<hr>` است.
- وقتی وقتی متن خوانا می‌نویسید نه فاصله‌گذاری ظاهری خط‌به‌خط، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<p>HTML collapses extra spaces in normal paragraphs.</p>
<p>Use a new paragraph when the idea changes.</p>
<hr>
<p>The hr element separates related sections.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="paragraphs-notes" aria-labelledby="paragraphs-title">
  <h2 id="paragraphs-title">HTML Paragraphs options</h2>
  <table>
    <caption>Key syntax for HTML paragraphs</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;p&gt;</code></td>
      <td>wraps one idea or short block of text</td>
    </tr>
    <tr>
      <td><code>&lt;br&gt;</code></td>
      <td>forces a line break only when meaningful</td>
    </tr>
    <tr>
      <td><code>&lt;hr&gt;</code></td>
      <td>marks a thematic break between sections</td>
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
    <title>HTML Paragraphs practice</title>
  </head>
  <body>
    <p>HTML collapses extra spaces in normal paragraphs.</p>
    <p>Use a new paragraph when the idea changes.</p>
    <hr>
    <p>The hr element separates related sections.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی پاراگراف در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<p>` دقت کنید: یک ایده یا بلوک کوتاه متن را می‌پوشاند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<p>` | یک ایده یا بلوک کوتاه متن را می‌پوشاند | هنگام تمرین پاراگراف در HTML از آن استفاده کنید. |
| `<br>` | فقط وقتی لازم است line break ایجاد می‌کند | هنگام تمرین پاراگراف در HTML از آن استفاده کنید. |
| `<hr>` | جدایی موضوعی بین بخش‌ها را نشان می‌دهد | هنگام تمرین پاراگراف در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای پاراگراف در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از پاراگراف در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<p>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `paragraphs.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<p>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **استایل‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
