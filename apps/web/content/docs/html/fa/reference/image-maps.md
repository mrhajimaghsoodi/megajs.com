---
title: "Image Map در HTML"
description: "این صفحه ناحیه‌های client-side تصویر که بخش‌های مختلف image را link می‌کنند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع Image Map در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع Image Map در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, Image Map در HTML, آموزش HTML, مرجع HTML, HTML image maps, map area coords, clickable image"
order: 15
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Image Map در HTML

Image Map در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی ناحیه‌های client-side تصویر که بخش‌های مختلف image را link می‌کنند است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از Image Map در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `<map>` | areaهای clickable را گروه می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `<area>` | یک ناحیه و link تعریف می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `coords` | مختصات ناحیه را تعیین می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Image Maps</h2>
  <dl>
    <dt><code>&lt;map&gt;</code></dt>
    <dd>groups clickable areas</dd>
    <dt><code>&lt;area&gt;</code></dt>
    <dd>defines one region and link</dd>
    <dt><code>coords</code></dt>
    <dd>sets region coordinates</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Image Maps quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;map&gt;</code></td><td>groups clickable areas</td></tr>
    <tr><td><code>&lt;area&gt;</code></td><td>defines one region and link</td></tr>
    <tr><td><code>coords</code></td><td>sets region coordinates</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای Image Map در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Image Maps, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **نکته‌های Performance در HTML**.
