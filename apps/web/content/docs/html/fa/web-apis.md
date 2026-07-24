---
title: "Web APIها در HTML"
description: "در این درس گسترش صفحه با APIهایی مثل Clipboard، Fetch و DOM را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Web APIها در HTML | مستندات MEGA JS"
seoDescription: "آموزش Web APIها در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, Web APIها در HTML, آموزش HTML Web APIs, Clipboard API DOM, browser API tutorial"
order: 55
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Web APIها در HTML

Web APIها در HTML روی گسترش صفحه با APIهایی مثل Clipboard، Fetch و DOM تمرکز دارد. در این درس درباره Web APIها در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی HTML ساده به دسترسی کنترل‌شده به قابلیت‌های مرورگر نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Web APIها در HTML

- این بخش به Web APIها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `Clipboard API`, `DOM API` و `Fetch API` است.
- وقتی وقتی HTML ساده به دسترسی کنترل‌شده به قابلیت‌های مرورگر نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<button id="copy" type="button">Copy link</button>
<script>
  document.querySelector('#copy').addEventListener('click', async () => {
    await navigator.clipboard.writeText(location.href);
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="web-apis-notes" aria-labelledby="web-apis-title">
  <h2 id="web-apis-title">HTML Web APIs options</h2>
  <table>
    <caption>Key syntax for HTML Web APIs</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>Clipboard API</code></td>
      <td>copies or reads clipboard data with permission rules</td>
    </tr>
    <tr>
      <td><code>DOM API</code></td>
      <td>finds and updates elements</td>
    </tr>
    <tr>
      <td><code>Fetch API</code></td>
      <td>loads data from servers</td>
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
    <title>HTML Web APIs practice</title>
  </head>
  <body>
    <button id="copy" type="button">Copy link</button>
    <script>
      document.querySelector('#copy').addEventListener('click', async () => {
        await navigator.clipboard.writeText(location.href);
      });
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی Web APIها در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `Clipboard API` دقت کنید: clipboard را با قوانین permission می‌خواند یا می‌نویسد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `Clipboard API` | clipboard را با قوانین permission می‌خواند یا می‌نویسد | هنگام تمرین Web APIها در HTML از آن استفاده کنید. |
| `DOM API` | elementها را پیدا و به‌روزرسانی می‌کند | هنگام تمرین Web APIها در HTML از آن استفاده کنید. |
| `Fetch API` | داده را از server می‌گیرد | هنگام تمرین Web APIها در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Web APIها در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از Web APIها در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `Clipboard API` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `web-apis.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `Clipboard API` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **API موقعیت جغرافیایی در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
