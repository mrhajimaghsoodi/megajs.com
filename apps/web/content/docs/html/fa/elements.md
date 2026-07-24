---
title: "عنصرهای HTML"
description: "در این درس اینکه opening tag، محتوا، فرزندهای تو در تو و closing tag چگونه معنا می‌سازند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش عنصرهای HTML | مستندات MEGA JS"
seoDescription: "آموزش عنصرهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, عنصرهای HTML, آموزش HTML elements, opening tag closing tag, nested HTML"
order: 5
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای HTML

عنصرهای HTML روی اینکه opening tag، محتوا، فرزندهای تو در تو و closing tag چگونه معنا می‌سازند تمرکز دارد. در این درس درباره عنصرهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی انتخاب می‌کنید کدام wrapper یا element برای محتوا مناسب است. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی عنصرهای HTML

- این بخش به عنصرهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `opening tag`, `content` و `closing tag` است.
- وقتی وقتی انتخاب می‌کنید کدام wrapper یا element برای محتوا مناسب است، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<p class="lead">This paragraph is one HTML element.</p>
<button type="button">Save</button>
<section>
  <h2>Nested elements</h2>
  <p>Elements can contain other elements.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<section class="elements-notes" aria-labelledby="elements-title">
  <h2 id="elements-title">HTML Elements options</h2>
  <table>
    <caption>Key syntax for HTML elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>opening tag</code></td>
      <td>starts an element and can hold attributes</td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>the text or child elements inside</td>
    </tr>
    <tr>
      <td><code>closing tag</code></td>
      <td>ends most non-void elements</td>
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
    <title>HTML Elements practice</title>
  </head>
  <body>
    <p class="lead">This paragraph is one HTML element.</p>
    <button type="button">Save</button>
    <section>
      <h2>Nested elements</h2>
      <p>Elements can contain other elements.</p>
    </section>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی عنصرهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `opening tag` دقت کنید: element را شروع می‌کند و می‌تواند attribute داشته باشد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `opening tag` | element را شروع می‌کند و می‌تواند attribute داشته باشد | هنگام تمرین عنصرهای HTML از آن استفاده کنید. |
| `content` | متن یا elementهای فرزند داخل آن است | هنگام تمرین عنصرهای HTML از آن استفاده کنید. |
| `closing tag` | بیشتر elementهای غیر void را پایان می‌دهد | هنگام تمرین عنصرهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای عنصرهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از عنصرهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `opening tag` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `elements.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `opening tag` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویژگی‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
