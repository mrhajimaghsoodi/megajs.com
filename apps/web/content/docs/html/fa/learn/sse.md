---
title: "رویدادهای Server-Sent در HTML"
description: "این صفحه دریافت update زنده یک‌طرفه از server با EventSource را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش رویدادهای Server-Sent در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش رویدادهای Server-Sent در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible."
keywords: "HTML, رویدادهای Server-Sent در HTML, آموزش HTML, مرجع HTML, HTML SSE, EventSource, server sent events"
order: 60
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# رویدادهای Server-Sent در HTML

رویدادهای Server-Sent در HTML درباره دریافت update زنده یک‌طرفه از server با EventSource است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با رویدادهای Server-Sent در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `EventSource`: جریانی از پیام‌های server باز می‌کند.
- `message event`: payload event پیش‌فرض را دریافت می‌کند.
- `text/event-stream`: MIME type پاسخ‌های SSE است.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<output id="news"></output>
<script>
  const events = new EventSource('/events');
  events.addEventListener('message', (event) => {
    document.querySelector('#news').value = event.data;
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Server-Sent Events quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>EventSource</code></td><td>opens a stream of server messages</td></tr>
    <tr><td><code>message event</code></td><td>receives default event payloads</td></tr>
    <tr><td><code>text/event-stream</code></td><td>MIME type for SSE responses</td></tr>
  </tbody>
</table>
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
      events.addEventListener('message', (event) => {
        document.querySelector('#news').value = event.data;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `EventSource` | جریانی از پیام‌های server باز می‌کند | در رویدادهای Server-Sent در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `message event` | payload event پیش‌فرض را دریافت می‌کند | در رویدادهای Server-Sent در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `text/event-stream` | MIME type پاسخ‌های SSE است | در رویدادهای Server-Sent در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از رویدادهای Server-Sent در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `EventSource` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `sse.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `EventSource` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.
