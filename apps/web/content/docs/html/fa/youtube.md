---
title: "ویدیوهای YouTube در HTML"
description: "در این درس embed کردن player YouTube با iframe، اندازه responsive و گزینه privacy را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش ویدیوهای YouTube در HTML | مستندات MEGA JS"
seoDescription: "آموزش ویدیوهای YouTube در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی."
keywords: "آموزش HTML, ویدیوهای YouTube در HTML, آموزش HTML YouTube, YouTube iframe embed, responsive video embed"
order: 53
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویدیوهای YouTube در HTML

ویدیوهای YouTube در HTML روی embed کردن player YouTube با iframe، اندازه responsive و گزینه privacy تمرکز دارد. در این درس درباره ویدیوهای YouTube در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی به جای host کردن فایل از platform ویدیویی استفاده می‌کنید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی ویدیوهای YouTube در HTML

- این بخش به ویدیوهای YouTube در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `iframe embed URL`, `title` و `youtube-nocookie.com` است.
- وقتی وقتی به جای host کردن فایل از platform ویدیویی استفاده می‌کنید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<div class="video-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
    title="HTML lesson"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>
```

### مثال 2: گزینه‌ها در context

```html
<section class="youtube-notes" aria-labelledby="youtube-title">
  <h2 id="youtube-title">HTML YouTube Videos options</h2>
  <table>
    <caption>Key syntax for YouTube videos in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>iframe embed URL</code></td>
      <td>loads the YouTube player</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>describes the embedded video</td>
    </tr>
    <tr>
      <td><code>youtube-nocookie.com</code></td>
      <td>reduces tracking before playback</td>
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
    <title>HTML YouTube Videos practice</title>
  </head>
  <body>
    <div class="video-frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
        title="HTML lesson"
        loading="lazy"
        allowfullscreen>
      </iframe>
    </div>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی ویدیوهای YouTube در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `iframe embed URL` دقت کنید: player YouTube را load می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار source، controls، caption و fallback مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `iframe embed URL` | player YouTube را load می‌کند | هنگام تمرین ویدیوهای YouTube در HTML از آن استفاده کنید. |
| `title` | ویدیوی embedded را توصیف می‌کند | هنگام تمرین ویدیوهای YouTube در HTML از آن استفاده کنید. |
| `youtube-nocookie.com` | tracking قبل از پخش را کاهش می‌دهد | هنگام تمرین ویدیوهای YouTube در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای ویدیوهای YouTube در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای media از controls، caption/subtitle و fallback link استفاده کنید و autoplay را با احتیاط به کار ببرید.

## اشتباه‌های رایج

- استفاده از ویدیوهای YouTube در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `iframe embed URL` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `youtube.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `iframe embed URL` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **APIهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
