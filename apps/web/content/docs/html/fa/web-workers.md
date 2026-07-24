---
title: "Web Workerها در HTML"
description: "در این درس اجرای JavaScript سنگین جدا از thread رابط کاربری را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Web Workerها در HTML | مستندات MEGA JS"
seoDescription: "آموزش Web Workerها در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, Web Workerها در HTML, آموزش HTML web workers, Worker postMessage, JavaScript background thread"
order: 59
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Web Workerها در HTML

Web Workerها در HTML روی اجرای JavaScript سنگین جدا از thread رابط کاربری تمرکز دارد. در این درس درباره Web Workerها در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی محاسبه‌ها typing، scroll یا animation را freeze می‌کنند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Web Workerها در HTML

- این بخش به Web Workerها در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `new Worker()`, `postMessage()` و `onmessage` است.
- وقتی وقتی محاسبه‌ها typing، scroll یا animation را freeze می‌کنند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<button id="calculate" type="button">Calculate</button>
<script>
  const worker = new Worker('/workers/calculate.js');
  const calculate = document.querySelector('#calculate');
  calculate.addEventListener('click', () => worker.postMessage({ limit: 100000 }));
  worker.onmessage = (event) => console.log(event.data);
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="web-workers-notes" aria-labelledby="web-workers-title">
  <h2 id="web-workers-title">HTML Web Workers API options</h2>
  <table>
    <caption>Key syntax for HTML Web Workers API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>new Worker()</code></td>
      <td>starts a background script</td>
    </tr>
    <tr>
      <td><code>postMessage()</code></td>
      <td>sends data between page and worker</td>
    </tr>
    <tr>
      <td><code>onmessage</code></td>
      <td>receives results asynchronously</td>
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
    <title>HTML Web Workers API practice</title>
  </head>
  <body>
    <button id="calculate" type="button">Calculate</button>
    <script>
      const worker = new Worker('/workers/calculate.js');
      const calculate = document.querySelector('#calculate');
      calculate.addEventListener('click', () => worker.postMessage({ limit: 100000 }));
      worker.onmessage = (event) => console.log(event.data);
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی Web Workerها در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `new Worker()` دقت کنید: یک script پس‌زمینه شروع می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `new Worker()` | یک script پس‌زمینه شروع می‌کند | هنگام تمرین Web Workerها در HTML از آن استفاده کنید. |
| `postMessage()` | data را بین page و worker می‌فرستد | هنگام تمرین Web Workerها در HTML از آن استفاده کنید. |
| `onmessage` | نتیجه را asynchronous دریافت می‌کند | هنگام تمرین Web Workerها در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Web Workerها در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از Web Workerها در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `new Worker()` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `web-workers.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `new Worker()` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **رویدادهای Server-Sent در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
