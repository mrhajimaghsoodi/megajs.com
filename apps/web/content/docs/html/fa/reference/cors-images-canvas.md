---
title: "CORS تصویر و Canvas"
description: "این صفحه اثر imageهای cross-origin بر canvas، خواندن pixel و taint شدن را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع CORS تصویر و Canvas — سبک MDN | MEGA JS"
seoDescription: "مرجع CORS تصویر و Canvas با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, CORS تصویر و Canvas, آموزش HTML, مرجع HTML, CORS images canvas, tainted canvas, crossorigin image"
order: 14
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# CORS تصویر و Canvas

CORS تصویر و Canvas یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی اثر imageهای cross-origin بر canvas، خواندن pixel و taint شدن است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از CORS تصویر و Canvas، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `crossorigin` | fetch با CORS را درخواست می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `tainted canvas` | canvas که pixelهای آن قابل خواندن نیست | با validation، accessibility و رفتار browser تست شود. |
| `toDataURL()` | pixelهای canvas را در صورت مجاز بودن export می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>CORS Images and Canvas</h2>
  <dl>
    <dt><code>crossorigin</code></dt>
    <dd>requests CORS-enabled fetching</dd>
    <dt><code>tainted canvas</code></dt>
    <dd>canvas whose pixels cannot be read</dd>
    <dt><code>toDataURL()</code></dt>
    <dd>exports canvas pixels when allowed</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>CORS Images and Canvas quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>crossorigin</code></td><td>requests CORS-enabled fetching</td></tr>
    <tr><td><code>tainted canvas</code></td><td>canvas whose pixels cannot be read</td></tr>
    <tr><td><code>toDataURL()</code></td><td>exports canvas pixels when allowed</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای CORS تصویر و Canvas، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CORS Images and Canvas, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Image Map در HTML**.
