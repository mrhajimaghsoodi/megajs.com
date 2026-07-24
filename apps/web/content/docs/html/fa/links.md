---
title: "لینک‌ها در HTML"
description: "در این درس وصل کردن صفحه‌ها، فایل‌ها، email و بخش‌های داخلی با anchor را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش لینک در HTML | مستندات MEGA JS"
seoDescription: "آموزش لینک در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, لینک در HTML, آموزش HTML links, href target rel, anchor links"
order: 15
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# لینک‌ها در HTML

لینک‌ها در HTML روی وصل کردن صفحه‌ها، فایل‌ها، email و بخش‌های داخلی با anchor تمرکز دارد. در این درس درباره لینک در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی کاربر باید با navigation روشن به مقصد دیگری برود. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی لینک در HTML

- این بخش به لینک‌ها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `href`, `target / rel` و `fragment id` است.
- وقتی وقتی کاربر باید با navigation روشن به مقصد دیگری برود، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<a href="/docs/html/forms">Open the forms chapter</a>
<a href="mailto:hello@example.com">Email support</a>
<a href="#summary">Jump to summary</a>
```

### مثال 2: گزینه‌ها در context

```html
<nav aria-label="Documentation">
  <a href="/docs/html/introduction">HTML intro</a>
  <a href="/docs/html/forms" aria-current="page">Forms</a>
  <a href="/docs/html/references">References</a>
</nav>
```

### مثال 3: صفحه تمرینی کامل

```html
<a href="report.pdf" download>Download the PDF report</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open external site
</a>
<section id="summary">
  <h2>Summary</h2>
</section>
```

## توضیح مثال

- مثال اول pattern اصلی لینک در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `href` دقت کنید: مقصد link را تعریف می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `href` | مقصد link را تعریف می‌کند | هنگام تمرین لینک در HTML از آن استفاده کنید. |
| `target / rel` | تب جدید و رابطه امنیتی را کنترل می‌کند | هنگام تمرین لینک در HTML از آن استفاده کنید. |
| `fragment id` | به بخشی مثل #pricing می‌پرد | هنگام تمرین لینک در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای لینک در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از لینک در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `href` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `links.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `href` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **تصویرها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
