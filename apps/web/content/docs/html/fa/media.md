---
title: "رسانه در HTML"
description: "در این درس آوردن محتوای زمان‌مند با audio، video، track و embed به صفحه را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش رسانه در HTML | مستندات MEGA JS"
seoDescription: "آموزش رسانه در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, رسانه در HTML, آموزش HTML media, video audio track, web media"
order: 49
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# رسانه در HTML

رسانه در HTML روی آوردن محتوای زمان‌مند با audio، video، track و embed به صفحه تمرکز دارد. در این درس درباره رسانه در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی lesson، demo، podcast یا player خارجی باید داخل صفحه باشد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی رسانه در HTML

- این بخش به رسانه در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<video>`, `<audio>` و `<track>` است.
- وقتی وقتی lesson، demo، podcast یا player خارجی باید داخل صفحه باشد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<video controls width="640">
  <source src="lesson.mp4" type="video/mp4">
  <track src="captions.vtt" kind="captions" srclang="en" label="English">
  Your browser does not support the video element.
</video>
```

### مثال 2: گزینه‌ها در context

```html
<section class="media-notes" aria-labelledby="media-title">
  <h2 id="media-title">HTML Media options</h2>
  <table>
    <caption>Key syntax for HTML media</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;video&gt;</code></td>
      <td>embeds video playback</td>
    </tr>
    <tr>
      <td><code>&lt;audio&gt;</code></td>
      <td>embeds audio playback</td>
    </tr>
    <tr>
      <td><code>&lt;track&gt;</code></td>
      <td>adds captions or subtitles</td>
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
    <title>HTML Media practice</title>
  </head>
  <body>
    <video controls width="640">
      <source src="lesson.mp4" type="video/mp4">
      <track src="captions.vtt" kind="captions" srclang="en" label="English">
      Your browser does not support the video element.
    </video>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی رسانه در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<video>` دقت کنید: پخش video را embed می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار source، controls، caption و fallback مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<video>` | پخش video را embed می‌کند | هنگام تمرین رسانه در HTML از آن استفاده کنید. |
| `<audio>` | پخش audio را embed می‌کند | هنگام تمرین رسانه در HTML از آن استفاده کنید. |
| `<track>` | caption یا subtitle اضافه می‌کند | هنگام تمرین رسانه در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای رسانه در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای media از controls، caption/subtitle و fallback link استفاده کنید و autoplay را با احتیاط به کار ببرید.

## اشتباه‌های رایج

- استفاده از رسانه در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<video>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `media.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<video>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویدیو در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
