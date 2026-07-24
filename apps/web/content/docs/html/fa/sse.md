---
title: "رویدادهای Server-Sent در HTML"
description: "در این درس دریافت update زنده یک‌طرفه از server با EventSource را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش Server-Sent Events در HTML | مستندات MEGA JS"
seoDescription: "آموزش Server-Sent Events در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی."
keywords: "آموزش HTML, Server-Sent Events در HTML, آموزش HTML Server-Sent Events, EventSource SSE, live updates HTML"
order: 60
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# رویدادهای Server-Sent در HTML

رویدادهای Server-Sent در HTML روی دریافت update زنده یک‌طرفه از server با EventSource تمرکز دارد. در این درس درباره Server-Sent Events در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی news، score، build log یا notification از server به page stream می‌شود. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی Server-Sent Events در HTML

- این بخش به رویدادهای Server-Sent در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `EventSource`, `message event` و `text/event-stream` است.
- وقتی وقتی news، score، build log یا notification از server به page stream می‌شود، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<output id="news"></output>
<script>
  const events = new EventSource('/events');
  const news = document.querySelector('#news');
  events.addEventListener('message', (event) => {
    news.value = event.data;
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="sse-notes" aria-labelledby="sse-title">
  <h2 id="sse-title">HTML Server-Sent Events options</h2>
  <table>
    <caption>Key syntax for HTML Server-Sent Events</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>EventSource</code></td>
      <td>opens a persistent event stream</td>
    </tr>
    <tr>
      <td><code>message event</code></td>
      <td>receives default server messages</td>
    </tr>
    <tr>
      <td><code>text/event-stream</code></td>
      <td>server response format for SSE</td>
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
    <title>HTML Server-Sent Events practice</title>
  </head>
  <body>
    <output id="news"></output>
    <script>
      const events = new EventSource('/events');
      const news = document.querySelector('#news');
      events.addEventListener('message', (event) => {
        news.value = event.data;
      });
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی Server-Sent Events در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `EventSource` دقت کنید: یک stream event پایدار باز می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `EventSource` | یک stream event پایدار باز می‌کند | هنگام تمرین Server-Sent Events در HTML از آن استفاده کنید. |
| `message event` | پیام‌های پیش‌فرض server را می‌گیرد | هنگام تمرین Server-Sent Events در HTML از آن استفاده کنید. |
| `text/event-stream` | فرمت response server برای SSE | هنگام تمرین Server-Sent Events در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای Server-Sent Events در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از Server-Sent Events در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `EventSource` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `sse.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `EventSource` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **مرجع‌های HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
