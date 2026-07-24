---
title: "قالب‌بندی متن در HTML"
description: "در این درس نشانه‌گذاری اهمیت، تاکید، ویرایش و code با elementهای معنایی را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش قالب‌بندی متن در HTML | مستندات MEGA JS"
seoDescription: "آموزش قالب‌بندی متن در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. برای شروع مطمئن و کاربردی."
keywords: "آموزش HTML, قالب‌بندی متن در HTML, آموزش HTML formatting, strong em mark code, semantic text"
order: 10
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# قالب‌بندی متن در HTML

قالب‌بندی متن در HTML روی نشانه‌گذاری اهمیت، تاکید، ویرایش و code با elementهای معنایی تمرکز دارد. در این درس درباره قالب‌بندی متن در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی متن به معنایی فراتر از کلمات ساده نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی قالب‌بندی متن در HTML

- این بخش به قالب‌بندی متن در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<strong>`, `<em>` و `<mark> / <code>` است.
- وقتی وقتی متن به معنایی فراتر از کلمات ساده نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<p><strong>Important:</strong> Save your work often.</p>
<p><em>Emphasis</em> changes the tone of a sentence.</p>
<p>Use <code>&lt;code&gt;</code> for short code fragments.</p>
```

### مثال 2: گزینه‌ها در context

```html
<section class="formatting-notes" aria-labelledby="formatting-title">
  <h2 id="formatting-title">HTML Text Formatting options</h2>
  <table>
    <caption>Key syntax for HTML text formatting</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;strong&gt;</code></td>
      <td>marks strong importance</td>
    </tr>
    <tr>
      <td><code>&lt;em&gt;</code></td>
      <td>marks stress emphasis</td>
    </tr>
    <tr>
      <td><code>&lt;mark&gt; / &lt;code&gt;</code></td>
      <td>highlights text or marks code fragments</td>
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
    <title>HTML Text Formatting practice</title>
  </head>
  <body>
    <p><strong>Important:</strong> Save your work often.</p>
    <p><em>Emphasis</em> changes the tone of a sentence.</p>
    <p>Use <code>&lt;code&gt;</code> for short code fragments.</p>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی قالب‌بندی متن در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<strong>` دقت کنید: اهمیت قوی را نشان می‌دهد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<strong>` | اهمیت قوی را نشان می‌دهد | هنگام تمرین قالب‌بندی متن در HTML از آن استفاده کنید. |
| `<em>` | تاکید معنایی را نشان می‌دهد | هنگام تمرین قالب‌بندی متن در HTML از آن استفاده کنید. |
| `<mark> / <code>` | متن را highlight یا قطعه code را مشخص می‌کند | هنگام تمرین قالب‌بندی متن در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای قالب‌بندی متن در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از قالب‌بندی متن در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<strong>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `formatting.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<strong>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **نقل‌قول‌ها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
