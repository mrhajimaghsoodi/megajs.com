---
title: "راهنمای Scripting در HTML"
description: "این صفحه load کردن script، moduleها، fallback noscript و patternهای DOM را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع راهنمای Scripting در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع راهنمای Scripting در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, راهنمای Scripting در HTML, آموزش HTML, مرجع HTML, HTML scripting, script defer module, noscript"
order: 17
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# راهنمای Scripting در HTML

راهنمای Scripting در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی load کردن script، moduleها، fallback noscript و patternهای DOM است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از راهنمای Scripting در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `<script defer>` | script classic را بدون blocking parsing load می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `type="module"` | moduleهای JavaScript را load می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `<noscript>` | وقتی script غیرفعال است fallback فراهم می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Scripting Guide</h2>
  <dl>
    <dt><code>&lt;script defer&gt;</code></dt>
    <dd>loads classic scripts without blocking parsing</dd>
    <dt><code>type=&quot;module&quot;</code></dt>
    <dd>loads JavaScript modules</dd>
    <dt><code>&lt;noscript&gt;</code></dt>
    <dd>provides fallback when scripts are disabled</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Scripting Guide quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script defer&gt;</code></td><td>loads classic scripts without blocking parsing</td></tr>
    <tr><td><code>type=&quot;module&quot;</code></td><td>loads JavaScript modules</td></tr>
    <tr><td><code>&lt;noscript&gt;</code></td><td>provides fallback when scripts are disabled</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای راهنمای Scripting در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Scripting Guide, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Quirks Mode در HTML**.
