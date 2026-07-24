---
title: "لیست‌های HTML"
description: "در این درس بیان itemهای گروهی با ordered، unordered و description list را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش لیست در HTML | مستندات MEGA JS"
seoDescription: "آموزش لیست در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, لیست در HTML, آموزش HTML lists, ul ol dl li, ordered list unordered list"
order: 20
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# لیست‌های HTML

لیست‌های HTML روی بیان itemهای گروهی با ordered، unordered و description list تمرکز دارد. در این درس درباره لیست در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی محتوا به طور طبیعی مجموعه، ترتیب یا glossary است. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی لیست در HTML

- این بخش به لیست‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<ul>`, `<ol>` و `<dl>` است.
- وقتی وقتی محتوا به طور طبیعی مجموعه، ترتیب یا glossary است، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<ul>
  <li>Use unordered lists when order does not matter.</li>
</ul>
<ol>
  <li>Create index.html.</li>
  <li>Open it in a browser.</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>The markup language of the web.</dd>
</dl>
```

### مثال 2: گزینه‌ها در context

```html
<section class="lists-notes" aria-labelledby="lists-title">
  <h2 id="lists-title">HTML Lists options</h2>
  <table>
    <caption>Key syntax for HTML lists</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;ul&gt;</code></td>
      <td>groups items where order does not matter</td>
    </tr>
    <tr>
      <td><code>&lt;ol&gt;</code></td>
      <td>groups ordered steps or rankings</td>
    </tr>
    <tr>
      <td><code>&lt;dl&gt;</code></td>
      <td>pairs terms with descriptions</td>
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
    <title>HTML Lists practice</title>
  </head>
  <body>
    <ul>
      <li>Use unordered lists when order does not matter.</li>
    </ul>
    <ol>
      <li>Create index.html.</li>
      <li>Open it in a browser.</li>
    </ol>
    <dl>
      <dt>HTML</dt>
      <dd>The markup language of the web.</dd>
    </dl>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی لیست در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<ul>` دقت کنید: itemهایی را گروه می‌کند که ترتیب مهم نیست.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<ul>` | itemهایی را گروه می‌کند که ترتیب مهم نیست | هنگام تمرین لیست در HTML از آن استفاده کنید. |
| `<ol>` | مرحله‌ها یا رتبه‌های مرتب را گروه می‌کند | هنگام تمرین لیست در HTML از آن استفاده کنید. |
| `<dl>` | term را با description جفت می‌کند | هنگام تمرین لیست در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای لیست در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از لیست در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<ul>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `lists.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<ul>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **عنصرهای Block و Inline در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
