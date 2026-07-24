---
title: "کلاس‌ها در HTML"
description: "در این درس گروه‌بندی elementها با class قابل استفاده مجدد برای styling و behavior را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش کلاس در HTML | مستندات MEGA JS"
seoDescription: "آموزش کلاس در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, کلاس در HTML, آموزش HTML classes, class attribute, CSS class selector"
order: 22
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کلاس‌ها در HTML

کلاس‌ها در HTML روی گروه‌بندی elementها با class قابل استفاده مجدد برای styling و behavior تمرکز دارد. در این درس درباره کلاس در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی چند element pattern ظاهری یا scripted مشترک دارند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی کلاس در HTML

- این بخش به کلاس‌ها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `class`, `multiple classes` و `CSS selector` است.
- وقتی وقتی چند element pattern ظاهری یا scripted مشترک دارند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<article class="card featured">
  <h2 class="card-title">Reusable class names</h2>
  <p class="card-copy">Classes can be shared by many elements.</p>
</article>
```

### مثال 2: گزینه‌ها در context

```html
<section class="classes-notes" aria-labelledby="classes-title">
  <h2 id="classes-title">HTML Classes options</h2>
  <table>
    <caption>Key syntax for HTML classes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>class</code></td>
      <td>assigns one or more reusable names</td>
    </tr>
    <tr>
      <td><code>multiple classes</code></td>
      <td>combine small styling responsibilities</td>
    </tr>
    <tr>
      <td><code>CSS selector</code></td>
      <td>targets class names with a dot</td>
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
    <title>HTML Classes practice</title>
  </head>
  <body>
    <article class="card featured">
      <h2 class="card-title">Reusable class names</h2>
      <p class="card-copy">Classes can be shared by many elements.</p>
    </article>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی کلاس در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `class` دقت کنید: یک یا چند نام قابل استفاده مجدد می‌دهد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `class` | یک یا چند نام قابل استفاده مجدد می‌دهد | هنگام تمرین کلاس در HTML از آن استفاده کنید. |
| `multiple classes` | چند مسئولیت کوچک style را ترکیب می‌کند | هنگام تمرین کلاس در HTML از آن استفاده کنید. |
| `CSS selector` | class را با نقطه target می‌کند | هنگام تمرین کلاس در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای کلاس در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از کلاس در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `class` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `classes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `class` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **شناسه id در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
