---
title: "مرجع Intl"
description: "این صفحه formatting وابسته به locale، collation، date، number، list، relative time و segmentation را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Intl — سبک MDN | MEGA JS"
seoDescription: "مرجع Intl (intl ref): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی برای پروژه واقعی وب."
keywords: "JavaScript, مرجع Intl, آموزش JavaScript, مرجع JavaScript, JavaScript Intl Reference, Intl Reference tutorial, intl ref"
order: 21
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Intl

مرجع Intl یک صفحه مرجع به سبک MDN است. تمرکز آن روی formatting وابسته به locale، collation، date، number، list، relative time و segmentation است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Intl، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Date` | timestamp را با accessorهای local و UTC نمایش می‌دهد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `Intl` | output وابسته به locale را format می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `timestamp` | millisecond از Unix epoch را می‌شمارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Intl Reference</h2>
  <dl>
    <dt><code>Date</code></dt>
    <dd>represents a timestamp with local and UTC accessors</dd>
    <dt><code>Intl</code></dt>
    <dd>formats locale-aware output</dd>
    <dt><code>timestamp</code></dt>
    <dd>counts milliseconds from the Unix epoch</dd>
  </dl>
  <output id="intl-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#intl-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<time id="intl-ref-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#intl-ref-time').textContent = formatter.format(now);
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Intl، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Intl Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع JavaScript و DOM**.
