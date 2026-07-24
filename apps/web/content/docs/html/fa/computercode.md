---
title: "عنصرهای کدنویسی در HTML"
description: "در این درس نشانه‌گذاری معنایی code، keyboard input، variable و خروجی نمونه را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش elementهای نمایش کد در HTML | مستندات MEGA JS"
seoDescription: "آموزش elementهای نمایش کد در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی."
keywords: "آموزش HTML, elementهای نمایش کد در HTML, آموزش HTML code elements, code pre kbd samp, technical writing HTML"
order: 30
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای کدنویسی در HTML

عنصرهای کدنویسی در HTML روی نشانه‌گذاری معنایی code، keyboard input، variable و خروجی نمونه تمرکز دارد. در این درس درباره elementهای نمایش کد در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی دستورهای فنی باید از متن عادی جدا شوند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی elementهای نمایش کد در HTML

- این بخش به عنصرهای کدنویسی در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<code>`, `<pre>` و `<kbd> / <samp>` است.
- وقتی وقتی دستورهای فنی باید از متن عادی جدا شوند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<p>Run <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<pre><code>npm run dev</code></pre>
<p>The result is <samp>Server ready</samp>.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="computercode-notes" aria-labelledby="computercode-title">
  <h2 id="computercode-title">HTML Computer Code Elements options</h2>
  <table>
    <caption>Key syntax for HTML computer code elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;code&gt;</code></td>
      <td>marks inline code fragments</td>
    </tr>
    <tr>
      <td><code>&lt;pre&gt;</code></td>
      <td>preserves spacing for blocks of code</td>
    </tr>
    <tr>
      <td><code>&lt;kbd&gt; / &lt;samp&gt;</code></td>
      <td>marks user input and program output</td>
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
    <title>HTML Computer Code Elements practice</title>
  </head>
  <body>
    <p>Run <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
    <pre><code>npm run dev</code></pre>
    <p>The result is <samp>Server ready</samp>.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی elementهای نمایش کد در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<code>` دقت کنید: قطعه code inline را مشخص می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<code>` | قطعه code inline را مشخص می‌کند | هنگام تمرین elementهای نمایش کد در HTML از آن استفاده کنید. |
| `<pre>` | فاصله‌های block code را حفظ می‌کند | هنگام تمرین elementهای نمایش کد در HTML از آن استفاده کنید. |
| `<kbd> / <samp>` | ورودی کاربر و خروجی برنامه را مشخص می‌کند | هنگام تمرین elementهای نمایش کد در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای elementهای نمایش کد در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از elementهای نمایش کد در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<code>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `computercode.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<code>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **معناشناسی HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
