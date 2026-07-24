---
title: "Web Storage در HTML"
description: "در این درس نگه‌داری مقدارهای کوچک در مرورگر با localStorage و sessionStorage را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Web Storage در HTML | مستندات MEGA JS"
seoDescription: "آموزش Web Storage در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, Web Storage در HTML, آموزش HTML web storage, localStorage sessionStorage, client storage"
order: 58
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Web Storage در HTML

Web Storage در HTML روی نگه‌داری مقدارهای کوچک در مرورگر با localStorage و sessionStorage تمرکز دارد. در این درس درباره Web Storage در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی preference، draft یا UI state باید بعد از reload بماند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Web Storage در HTML

- این بخش به Web Storage در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `localStorage`, `sessionStorage` و `setItem() / getItem()` است.
- وقتی وقتی preference، draft یا UI state باید بعد از reload بماند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<label>
  Display name
  <input id="display-name" name="displayName">
</label>
<script>
  const displayName = document.querySelector('#display-name');
  displayName.value = localStorage.getItem('displayName') || '';
  displayName.addEventListener('input', () => localStorage.setItem('displayName', displayName.value));
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="web-storage-notes" aria-labelledby="web-storage-title">
  <h2 id="web-storage-title">HTML Web Storage API options</h2>
  <table>
    <caption>Key syntax for HTML Web Storage API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>localStorage</code></td>
      <td>persists until cleared</td>
    </tr>
    <tr>
      <td><code>sessionStorage</code></td>
      <td>persists for the current tab session</td>
    </tr>
    <tr>
      <td><code>setItem() / getItem()</code></td>
      <td>write and read string values</td>
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
    <title>HTML Web Storage API practice</title>
  </head>
  <body>
    <label>
      Display name
      <input id="display-name" name="displayName">
    </label>
    <script>
      const displayName = document.querySelector('#display-name');
      displayName.value = localStorage.getItem('displayName') || '';
      displayName.addEventListener('input', () => localStorage.setItem('displayName', displayName.value));
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی Web Storage در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `localStorage` دقت کنید: تا زمان پاک شدن باقی می‌ماند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `localStorage` | تا زمان پاک شدن باقی می‌ماند | هنگام تمرین Web Storage در HTML از آن استفاده کنید. |
| `sessionStorage` | برای session همان tab باقی می‌ماند | هنگام تمرین Web Storage در HTML از آن استفاده کنید. |
| `setItem() / getItem()` | مقدارهای string را می‌نویسد و می‌خواند | هنگام تمرین Web Storage در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Web Storage در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از Web Storage در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `localStorage` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `web-storage.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `localStorage` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **Web Workerها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
