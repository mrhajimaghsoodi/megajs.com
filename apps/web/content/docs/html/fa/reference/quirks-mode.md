---
title: "Quirks Mode در HTML"
description: "این صفحه تغییر mode با DOCTYPE، standards mode، limited quirks و layout قدیمی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع Quirks Mode در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع Quirks Mode در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, Quirks Mode در HTML, آموزش HTML, مرجع HTML, HTML quirks mode, doctype standards mode, compatMode"
order: 18
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Quirks Mode در HTML

Quirks Mode در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی تغییر mode با DOCTYPE، standards mode، limited quirks و layout قدیمی است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از Quirks Mode در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `<!doctype html>` | standards mode را انتخاب می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `quirks mode` | رفتار قدیمی مرورگر را emulate می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `document.compatMode` | mode فعلی rendering را گزارش می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Quirks Mode</h2>
  <dl>
    <dt><code>&lt;!doctype html&gt;</code></dt>
    <dd>selects standards mode</dd>
    <dt><code>quirks mode</code></dt>
    <dd>emulates legacy browser behavior</dd>
    <dt><code>document.compatMode</code></dt>
    <dd>reports the current rendering mode</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Quirks Mode quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!doctype html&gt;</code></td><td>selects standards mode</td></tr>
    <tr><td><code>quirks mode</code></td><td>emulates legacy browser behavior</td></tr>
    <tr><td><code>document.compatMode</code></td><td>reports the current rendering mode</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای Quirks Mode در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Quirks Mode, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **چیت‌شیت HTML**.
