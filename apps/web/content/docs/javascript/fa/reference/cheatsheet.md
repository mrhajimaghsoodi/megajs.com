---
title: "Cheatsheet JavaScript"
description: "این صفحه مرور فشرده MDN-style از syntax، value، Array، object، async، DOM و debugging را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Cheatsheet JavaScript — سبک MDN | MEGA JS"
seoDescription: "مرجع Cheatsheet JavaScript (cheatsheet): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, Cheatsheet JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Cheatsheet, Cheatsheet tutorial, cheatsheet"
order: 23
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Cheatsheet JavaScript

Cheatsheet JavaScript یک صفحه مرجع به سبک MDN است. تمرکز آن روی مرور فشرده MDN-style از syntax، value، Array، object، async، DOM و debugging است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از Cheatsheet JavaScript، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای Cheatsheet JavaScript | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>JavaScript Cheatsheet</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in JavaScript Cheatsheet</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="cheatsheet-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#cheatsheet-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>JavaScript Cheatsheet</h2>
  <p id="cheatsheet-text">a compact MDN-style review of syntax, values, arrays, objects, async, DOM, and debugging.</p>
  <output id="cheatsheet-out"></output>
</section>
<script>
  const text = document.querySelector('#cheatsheet-text').textContent;
  document.querySelector('#cheatsheet-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Cheatsheet`;
</script>
```

## نکته‌های دقیق authoring

- برای Cheatsheet JavaScript، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره JavaScript Cheatsheet, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

پس از پایان مرجع، برای نگاه specification-oriented وارد track رسمی شوید.
