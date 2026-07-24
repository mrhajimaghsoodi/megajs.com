---
title: "API موقعیت جغرافیایی در HTML"
description: "در این درس درخواست location فقط بعد از permission کاربر را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش API موقعیت جغرافیایی در HTML | مستندات MEGA JS"
seoDescription: "آموزش API موقعیت جغرافیایی در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی."
keywords: "آموزش HTML, API موقعیت جغرافیایی در HTML, آموزش HTML geolocation, navigator geolocation, getCurrentPosition"
order: 56
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# API موقعیت جغرافیایی در HTML

API موقعیت جغرافیایی در HTML روی درخواست location فقط بعد از permission کاربر تمرکز دارد. در این درس درباره API موقعیت جغرافیایی در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی map، delivery، weather یا store locator واقعاً به location نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی API موقعیت جغرافیایی در HTML

- این بخش به API موقعیت جغرافیایی در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `navigator.geolocation`, `getCurrentPosition()` و `coords` است.
- وقتی وقتی map، delivery، weather یا store locator واقعاً به location نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<button id="locate" type="button">Find my location</button>
<output id="result"></output>
<script>
  const result = document.querySelector('#result');
  document.querySelector('#locate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      result.value = pos.coords.latitude + ', ' + pos.coords.longitude;
    });
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="geolocation-notes" aria-labelledby="geolocation-title">
  <h2 id="geolocation-title">HTML Geolocation API options</h2>
  <table>
    <caption>Key syntax for HTML Geolocation API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>navigator.geolocation</code></td>
      <td>entry point for location requests</td>
    </tr>
    <tr>
      <td><code>getCurrentPosition()</code></td>
      <td>asks for one current location result</td>
    </tr>
    <tr>
      <td><code>coords</code></td>
      <td>contains latitude, longitude, and accuracy</td>
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
    <title>HTML Geolocation API practice</title>
  </head>
  <body>
    <button id="locate" type="button">Find my location</button>
    <output id="result"></output>
    <script>
      const result = document.querySelector('#result');
      document.querySelector('#locate').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((pos) => {
          result.value = pos.coords.latitude + ', ' + pos.coords.longitude;
        });
      });
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی API موقعیت جغرافیایی در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `navigator.geolocation` دقت کنید: نقطه ورود درخواست location.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار event handler، permission، state و مدیریت خطا قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `navigator.geolocation` | نقطه ورود درخواست location | هنگام تمرین API موقعیت جغرافیایی در HTML از آن استفاده کنید. |
| `getCurrentPosition()` | یک نتیجه location فعلی می‌خواهد | هنگام تمرین API موقعیت جغرافیایی در HTML از آن استفاده کنید. |
| `coords` | latitude، longitude و accuracy را نگه می‌دارد | هنگام تمرین API موقعیت جغرافیایی در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای API موقعیت جغرافیایی در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.

## اشتباه‌های رایج

- استفاده از API موقعیت جغرافیایی در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `navigator.geolocation` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `geolocation.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `navigator.geolocation` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **Drag and Drop در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
