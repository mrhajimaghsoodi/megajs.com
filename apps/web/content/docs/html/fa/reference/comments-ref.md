---
title: "مرجع کامنت‌های HTML"
description: "این صفحه syntax کامنت، محدودیت parser و نکته‌های authoring امن را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع کامنت‌های HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع کامنت‌های HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, مرجع کامنت‌های HTML, آموزش HTML, مرجع HTML, HTML comments reference, comment syntax, HTML parser"
order: 6
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع کامنت‌های HTML

مرجع کامنت‌های HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی syntax کامنت، محدودیت parser و نکته‌های authoring امن است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از مرجع کامنت‌های HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `<!--` | token کامنت را شروع می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `-->` | token کامنت را تمام می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `--` | نباید داخل comment بیاید | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Comments Reference</h2>
  <dl>
    <dt><code>&lt;!--</code></dt>
    <dd>starts a comment token</dd>
    <dt><code>--&gt;</code></dt>
    <dd>ends a comment token</dd>
    <dt><code>--</code></dt>
    <dd>must not appear inside comments</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Comments Reference quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!--</code></td><td>starts a comment token</td></tr>
    <tr><td><code>--&gt;</code></td><td>ends a comment token</td></tr>
    <tr><td><code>--</code></td><td>must not appear inside comments</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای مرجع کامنت‌های HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Comments Reference, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **فرمت‌های تاریخ و زمان HTML**.
