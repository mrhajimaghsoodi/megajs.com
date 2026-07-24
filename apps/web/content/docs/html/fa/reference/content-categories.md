---
title: "دسته‌بندی محتوای HTML"
description: "این صفحه مدل‌های flow، phrasing، embedded، interactive و palpable را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع دسته‌بندی محتوای HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع دسته‌بندی محتوای HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, دسته‌بندی محتوای HTML, آموزش HTML, مرجع HTML, HTML content categories, flow content, phrasing content"
order: 5
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# دسته‌بندی محتوای HTML

دسته‌بندی محتوای HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی مدل‌های flow، phrasing، embedded، interactive و palpable است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از دسته‌بندی محتوای HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `flow content` | بیشتر محتوای سطح body | با validation، accessibility و رفتار browser تست شود. |
| `phrasing content` | محتوای سطح متن داخل paragraph | با validation، accessibility و رفتار browser تست شود. |
| `interactive content` | محتوایی برای تعامل کاربر | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Content Categories</h2>
  <dl>
    <dt><code>flow content</code></dt>
    <dd>most body-level content</dd>
    <dt><code>phrasing content</code></dt>
    <dd>text-level content inside paragraphs</dd>
    <dt><code>interactive content</code></dt>
    <dd>content intended for user interaction</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Content Categories quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>flow content</code></td><td>most body-level content</td></tr>
    <tr><td><code>phrasing content</code></td><td>text-level content inside paragraphs</td></tr>
    <tr><td><code>interactive content</code></td><td>content intended for user interaction</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای دسته‌بندی محتوای HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Content Categories, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع کامنت‌های HTML**.
