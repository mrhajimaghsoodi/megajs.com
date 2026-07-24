---
title: "مرجع Iterator و Generator"
description: "این صفحه protocol iterable، protocol iterator، generator function، yield و iteration custom را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Iterator و Generator — سبک MDN | MEGA JS"
seoDescription: "مرجع Iterator و Generator (iterators generators): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین."
keywords: "JavaScript, مرجع Iterator و Generator, آموزش JavaScript, مرجع JavaScript, JavaScript Iterators and Generators Reference, Iterators and Generators Reference tutorial, iterators generators"
order: 17
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Iterator و Generator

مرجع Iterator و Generator یک صفحه مرجع به سبک MDN است. تمرکز آن روی protocol iterable، protocol iterator، generator function، yield و iteration custom است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Iterator و Generator، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای مرجع Iterator و Generator | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Iterators and Generators Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Iterators and Generators Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="iterators-generators-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#iterators-generators-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>Iterators and Generators Reference</h2>
  <ul id="iterators-generators-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#iterators-generators-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Iterator و Generator، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Iterators and Generators Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Memory و Garbage Collection**.
