---
title: "تیترهای HTML"
description: "در این درس اینکه h1 تا h6 چگونه outline قابل اسکن برای سند می‌سازند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Heading در HTML (h1 تا h6) | مستندات MEGA JS"
seoDescription: "آموزش Heading در HTML (h1 تا h6) با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی."
keywords: "آموزش HTML, Heading در HTML (h1 تا h6), آموزش HTML headings, h1 h2 h3, SEO heading structure"
order: 7
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# تیترهای HTML

تیترهای HTML روی اینکه h1 تا h6 چگونه outline قابل اسکن برای سند می‌سازند تمرکز دارد. در این درس درباره Heading در HTML (h1 تا h6) با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی article، مستندات یا landing page را برای کاربر و search engine ساختار می‌دهید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Heading در HTML (h1 تا h6)

- این بخش به تیترهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<h1>`, `<h2>` و `<h3>-<h6>` است.
- وقتی وقتی article، مستندات یا landing page را برای کاربر و search engine ساختار می‌دهید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<h1>HTML Course</h1>
<h2>Basics</h2>
<h3>Elements</h3>
<h2>Forms</h2>
<h3>Input types</h3>
```

### مثال 2: گزینه‌ها در context

```html
<article>
  <h1>Learning HTML</h1>
  <section>
    <h2>Why headings matter</h2>
    <p>Users scan headings before reading details.</p>
  </section>
  <section>
    <h2>Practice outline</h2>
    <h3>Write one h1</h3>
    <h3>Add h2 sections</h3>
  </section>
</article>
```

### مثال 3: صفحه تمرینی کامل

```html
<!-- Avoid skipping from h1 to h4 just for a smaller look. -->
<h1>Product guide</h1>
<h2>Installation</h2>
<h3>System requirements</h3>
<h2>Troubleshooting</h2>
```

## توضیح مثال

- مثال اول pattern اصلی Heading در HTML (h1 تا h6) را بدون کد layout اضافی نشان می‌دهد.
- به `<h1>` دقت کنید: یک heading اصلی برای صفحه.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<h1>` | یک heading اصلی برای صفحه | هنگام تمرین Heading در HTML (h1 تا h6) از آن استفاده کنید. |
| `<h2>` | بخش‌های اصلی زیر h1 | هنگام تمرین Heading در HTML (h1 تا h6) از آن استفاده کنید. |
| `<h3>-<h6>` | زیر‌بخش‌های عمیق‌تر بدون پرش سطح | هنگام تمرین Heading در HTML (h1 تا h6) از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Heading در HTML (h1 تا h6) را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از Heading در HTML (h1 تا h6) فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<h1>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `headings.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<h1>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **پاراگراف‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
