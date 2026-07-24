---
title: "ویدیو در HTML"
description: "در این درس پخش فایل با controls، source، poster، caption و fallback text را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش ویدیو در HTML | مستندات MEGA JS"
seoDescription: "آموزش ویدیو در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, ویدیو در HTML, آموزش HTML video, video controls source track, video captions HTML"
order: 50
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویدیو در HTML

ویدیو در HTML روی پخش فایل با controls، source، poster، caption و fallback text تمرکز دارد. در این درس درباره ویدیو در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی فایل video را host می‌کنید و پخش accessible در مرورگر می‌خواهید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی ویدیو در HTML

- این بخش به ویدیو در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `controls`, `<source>` و `<track kind="captions">` است.
- وقتی وقتی فایل video را host می‌کنید و پخش accessible در مرورگر می‌خواهید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: source و track

```html
<video controls poster="poster.jpg" width="640">
  <source src="intro.mp4" type="video/mp4">
  <source src="intro.webm" type="video/webm">
  <track src="intro.vtt" kind="captions" srclang="en" label="English">
</video>
```

### مثال 2: fallback قابل دانلود

```html
<video controls preload="metadata" poster="course-poster.jpg">
  <source src="course-intro.webm" type="video/webm">
  <source src="course-intro.mp4" type="video/mp4">
  <p>Your browser cannot play this video. <a href="course-intro.mp4">Download it</a>.</p>
</video>
```

### مثال 3: caption چندزبانه

```html
<figure>
  <video controls width="720">
    <source src="demo.mp4" type="video/mp4">
    <track src="demo-fa.vtt" kind="subtitles" srclang="fa" label="فارسی">
    <track src="demo-en.vtt" kind="captions" srclang="en" label="English">
  </video>
  <figcaption>Course introduction with captions.</figcaption>
</figure>
```

## توضیح مثال

- مثال اول pattern اصلی ویدیو در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `controls` دقت کنید: کنترل‌های built-in پخش را نشان می‌دهد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار source، controls، caption و fallback مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `controls` | کنترل‌های built-in پخش را نشان می‌دهد | هنگام تمرین ویدیو در HTML از آن استفاده کنید. |
| `<source>` | چند فرمت video ارائه می‌کند | هنگام تمرین ویدیو در HTML از آن استفاده کنید. |
| `<track kind="captions">` | برای accessibility caption اضافه می‌کند | هنگام تمرین ویدیو در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای ویدیو در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای media از controls، caption/subtitle و fallback link استفاده کنید و autoplay را با احتیاط به کار ببرید.

## اشتباه‌های رایج

- استفاده از ویدیو در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `controls` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `video.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `controls` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **صدا در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
