---
title: "نمای کلی مرجع HTML"
description: "این صفحه اینکه مرجع HTML به سبک MDN برای نویسندگان چگونه سازمان‌دهی می‌شود را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع نمای کلی مرجع HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع نمای کلی مرجع HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, نمای کلی مرجع HTML, آموزش HTML, مرجع HTML, HTML reference, MDN HTML, HTML docs"
order: 1
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نمای کلی مرجع HTML

نمای کلی مرجع HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی اینکه مرجع HTML به سبک MDN برای نویسندگان چگونه سازمان‌دهی می‌شود است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از نمای کلی مرجع HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `elements` | ساختار و معنی سند را تعریف می‌کنند | با validation، accessibility و رفتار browser تست شود. |
| `attributes` | رفتار و metadata element را تنظیم می‌کنند | با validation، accessibility و رفتار browser تست شود. |
| `interfaces` | HTML را به DOM APIها وصل می‌کنند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Reference Overview</h2>
  <dl>
    <dt><code>elements</code></dt>
    <dd>define document structure and meaning</dd>
    <dt><code>attributes</code></dt>
    <dd>configure element behavior and metadata</dd>
    <dt><code>interfaces</code></dt>
    <dd>connect HTML to DOM APIs</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Reference Overview quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>elements</code></td><td>define document structure and meaning</td></tr>
    <tr><td><code>attributes</code></td><td>configure element behavior and metadata</td></tr>
    <tr><td><code>interfaces</code></td><td>connect HTML to DOM APIs</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای نمای کلی مرجع HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Reference Overview, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع عنصرهای HTML**.
