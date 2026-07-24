---
title: "چیت‌شیت HTML"
description: "این صفحه چک‌لیست فشرده به سبک MDN از element، attribute، form، media و metadata را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع چیت‌شیت HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع چیت‌شیت HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, چیت‌شیت HTML, آموزش HTML, مرجع HTML, HTML cheatsheet, HTML reference quick, HTML checklist"
order: 19
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# چیت‌شیت HTML

چیت‌شیت HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی چک‌لیست فشرده به سبک MDN از element، attribute، form، media و metadata است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از چیت‌شیت HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `metadata` | title، charset، viewport و resource linkها | با validation، accessibility و رفتار browser تست شود. |
| `semantics` | landmark، heading، list و table | با validation، accessibility و رفتار browser تست شود. |
| `forms/media` | input، validation، video و audio | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Cheatsheet</h2>
  <dl>
    <dt><code>metadata</code></dt>
    <dd>title, charset, viewport, and resource links</dd>
    <dt><code>semantics</code></dt>
    <dd>landmarks, headings, lists, and tables</dd>
    <dt><code>forms/media</code></dt>
    <dd>inputs, validation, video, and audio</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Cheatsheet quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>metadata</code></td><td>title, charset, viewport, and resource links</td></tr>
    <tr><td><code>semantics</code></td><td>landmarks, headings, lists, and tables</td></tr>
    <tr><td><code>forms/media</code></td><td>inputs, validation, video, and audio</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای چیت‌شیت HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Cheatsheet, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

پس از پایان مرجع، برای نگاه specification-oriented وارد track رسمی شوید.
