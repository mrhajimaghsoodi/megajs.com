---
title: "Microformats در HTML"
description: "این صفحه قراردادهای class-based برای people، event، product و feed را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع Microformats در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع Microformats در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, Microformats در HTML, آموزش HTML, مرجع HTML, HTML microformats, h-card h-entry, semantic classes"
order: 12
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Microformats در HTML

Microformats در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی قراردادهای class-based برای people، event، product و feed است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از Microformats در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `h-card` | شخص یا سازمان را نمایش می‌دهد | با validation، accessibility و رفتار browser تست شود. |
| `h-entry` | post یا article را نمایش می‌دهد | با validation، accessibility و رفتار browser تست شود. |
| `p-name` | property نام را مشخص می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Microformats</h2>
  <dl>
    <dt><code>h-card</code></dt>
    <dd>represents a person or organization</dd>
    <dt><code>h-entry</code></dt>
    <dd>represents a post or article</dd>
    <dt><code>p-name</code></dt>
    <dd>marks a name property</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Microformats quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>h-card</code></td><td>represents a person or organization</td></tr>
    <tr><td><code>h-entry</code></td><td>represents a post or article</td></tr>
    <tr><td><code>p-name</code></td><td>marks a name property</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای Microformats در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Microformats, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **attributeهای data در HTML**.
