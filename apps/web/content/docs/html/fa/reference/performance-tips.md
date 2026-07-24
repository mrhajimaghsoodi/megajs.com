---
title: "نکته‌های Performance در HTML"
description: "این صفحه hintهای load، ابعاد image، lazy loading، جای script و وزن document را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع نکته‌های Performance در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع نکته‌های Performance در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. همراه تمرین کاربردی."
keywords: "HTML, نکته‌های Performance در HTML, آموزش HTML, مرجع HTML, HTML performance, lazy loading defer, web performance"
order: 16
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نکته‌های Performance در HTML

نکته‌های Performance در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی hintهای load، ابعاد image، lazy loading، جای script و وزن document است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از نکته‌های Performance در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `loading="lazy"` | media بیرون از دید را عقب می‌اندازد | با validation، accessibility و رفتار browser تست شود. |
| `defer` | script را بعد از parsing اجرا می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `width / height` | از layout shift برای media جلوگیری می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Performance Tips</h2>
  <dl>
    <dt><code>loading=&quot;lazy&quot;</code></dt>
    <dd>defers offscreen media</dd>
    <dt><code>defer</code></dt>
    <dd>executes scripts after parsing</dd>
    <dt><code>width / height</code></dt>
    <dd>prevents layout shifts for media</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Performance Tips quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>loading=&quot;lazy&quot;</code></td><td>defers offscreen media</td></tr>
    <tr><td><code>defer</code></td><td>executes scripts after parsing</td></tr>
    <tr><td><code>width / height</code></td><td>prevents layout shifts for media</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای نکته‌های Performance در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Performance Tips, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **راهنمای Scripting در HTML**.
