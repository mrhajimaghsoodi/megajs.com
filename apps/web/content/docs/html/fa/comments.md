---
title: "کامنت‌های HTML"
description: "در این درس نوشتن یادداشت‌های فقط source که روی صفحه نمایش داده نمی‌شوند را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش کامنت در HTML | مستندات MEGA JS"
seoDescription: "آموزش کامنت در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, کامنت در HTML, آموزش HTML comments, آموزش HTML comment syntax, comment in HTML"
order: 12
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کامنت‌های HTML

کامنت‌های HTML روی نوشتن یادداشت‌های فقط source که روی صفحه نمایش داده نمی‌شوند تمرکز دارد. در این درس درباره کامنت در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی خواننده آینده به دلیل تصمیم‌های markup نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی کامنت در HTML

- این بخش به کامنت‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<!-- ... -->`, `TODO notes` و `conditional notes` است.
- وقتی وقتی خواننده آینده به دلیل تصمیم‌های markup نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<!-- Explain why this section exists, not what every line does. -->
<section aria-labelledby="pricing-title">
  <h2 id="pricing-title">Pricing</h2>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<section class="comments-notes" aria-labelledby="comments-title">
  <h2 id="comments-title">HTML Comments options</h2>
  <table>
    <caption>Key syntax for HTML comments</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;!-- ... --&gt;</code></td>
      <td>creates an HTML comment</td>
    </tr>
    <tr>
      <td><code>TODO notes</code></td>
      <td>mark unfinished content carefully</td>
    </tr>
    <tr>
      <td><code>conditional notes</code></td>
      <td>explain unusual markup choices</td>
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
    <title>HTML Comments practice</title>
  </head>
  <body>
    <!-- Explain why this section exists, not what every line does. -->
    <section aria-labelledby="pricing-title">
      <h2 id="pricing-title">Pricing</h2>
    </section>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی کامنت در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<!-- ... -->` دقت کنید: کامنت HTML می‌سازد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<!-- ... -->` | کامنت HTML می‌سازد | هنگام تمرین کامنت در HTML از آن استفاده کنید. |
| `TODO notes` | کار ناتمام را با دقت علامت می‌زند | هنگام تمرین کامنت در HTML از آن استفاده کنید. |
| `conditional notes` | انتخاب‌های غیرمعمول markup را توضیح می‌دهد | هنگام تمرین کامنت در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای کامنت در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از کامنت در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<!-- ... -->` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `comments.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<!-- ... -->` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **رنگ‌ها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
