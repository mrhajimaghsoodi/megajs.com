---
title: "راهنمای رسانه HTML"
description: "این صفحه video، audio، text track، media source، control و الگوهای fallback را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع راهنمای رسانه HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع راهنمای رسانه HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, راهنمای رسانه HTML, آموزش HTML, مرجع HTML, HTML media guide, video audio track, MDN media"
order: 10
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# راهنمای رسانه HTML

راهنمای رسانه HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی video، audio، text track، media source، control و الگوهای fallback است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از راهنمای رسانه HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `<video>` | element پخش video | با validation، accessibility و رفتار browser تست شود. |
| `<audio>` | element پخش audio | با validation، accessibility و رفتار browser تست شود. |
| `<track>` | متن زمان‌بندی‌شده برای caption یا subtitle | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Media Guide</h2>
  <dl>
    <dt><code>&lt;video&gt;</code></dt>
    <dd>video playback element</dd>
    <dt><code>&lt;audio&gt;</code></dt>
    <dd>audio playback element</dd>
    <dt><code>&lt;track&gt;</code></dt>
    <dd>timed text for captions or subtitles</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Media Guide quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;video&gt;</code></td><td>video playback element</td></tr>
    <tr><td><code>&lt;audio&gt;</code></td><td>audio playback element</td></tr>
    <tr><td><code>&lt;track&gt;</code></td><td>timed text for captions or subtitles</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای راهنمای رسانه HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Media Guide, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Microdata در HTML**.
