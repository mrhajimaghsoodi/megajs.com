---
title: "APIهای HTML"
description: "در این درس همکاری markup و JavaScript با قابلیت‌های مرورگر را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش APIهای HTML | مستندات MEGA JS"
seoDescription: "آموزش APIهای HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, APIهای HTML, آموزش HTML APIs, browser APIs, JavaScript HTML APIs"
order: 54
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# APIهای HTML

APIهای HTML روی همکاری markup و JavaScript با قابلیت‌های مرورگر تمرکز دارد. در این درس درباره APIهای HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی صفحه به storage، location، worker، drag-and-drop یا update زنده نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی APIهای HTML

- این بخش به APIهای HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `navigator`, `localStorage` و `events` است.
- وقتی وقتی صفحه به storage، location، worker، drag-and-drop یا update زنده نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<button id="save" type="button">Save preference</button>
<script>
  document.querySelector('#save').addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="apis-notes" aria-labelledby="apis-title">
  <h2 id="apis-title">HTML APIs options</h2>
  <table>
    <caption>Key syntax for HTML APIs</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>navigator</code></td>
      <td>exposes many browser capabilities</td>
    </tr>
    <tr>
      <td><code>localStorage</code></td>
      <td>stores small client-side values</td>
    </tr>
    <tr>
      <td><code>events</code></td>
      <td>connect browser activity to handlers</td>
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
    <title>HTML APIs practice</title>
  </head>
  <body>
    <button id="save" type="button">Save preference</button>
    <script>
      document.querySelector('#save').addEventListener('click', () => {
        localStorage.setItem('theme', 'dark');
      });
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی APIهای HTML را بدون کد layout اضافی نشان می‌دهد.
- به `navigator` دقت کنید: بسیاری از قابلیت‌های مرورگر را ارائه می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `navigator` | بسیاری از قابلیت‌های مرورگر را ارائه می‌کند | هنگام تمرین APIهای HTML از آن استفاده کنید. |
| `localStorage` | مقدارهای کوچک سمت کاربر را ذخیره می‌کند | هنگام تمرین APIهای HTML از آن استفاده کنید. |
| `events` | فعالیت مرورگر را به handler وصل می‌کند | هنگام تمرین APIهای HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای APIهای HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از APIهای HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `navigator` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `apis.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `navigator` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **Web APIها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
