---
title: "نمای کلی مرجع JavaScript"
description: "این صفحه اینکه MDN چگونه guide، reference، built-in، syntax و integration مرورگر در JavaScript را سازمان می‌دهد را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "نمای کلی مرجع JavaScript — سبک MDN | MEGA JS"
seoDescription: "نمای کلی مرجع JavaScript (overview): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, نمای کلی مرجع JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript reference, MDN JavaScript, JavaScript docs"
order: 1
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# نمای کلی مرجع JavaScript

نمای کلی مرجع JavaScript یک صفحه مرجع به سبک MDN است. تمرکز آن روی اینکه MDN چگونه guide، reference، built-in، syntax و integration مرورگر در JavaScript را سازمان می‌دهد است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از نمای کلی مرجع JavaScript، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای نمای کلی مرجع JavaScript | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>JavaScript Reference Overview</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in JavaScript Reference Overview</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="overview-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#overview-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>JavaScript Reference Overview</h2>
  <p id="overview-text">how MDN organizes JavaScript guides, reference pages, built-ins, syntax, and browser integration.</p>
  <output id="overview-out"></output>
</section>
<script>
  const text = document.querySelector('#overview-text').textContent;
  document.querySelector('#overview-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Reference Overview`;
</script>
```

## نکته‌های دقیق authoring

- برای نمای کلی مرجع JavaScript، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره JavaScript Reference Overview, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Grammar و Typeها**.
