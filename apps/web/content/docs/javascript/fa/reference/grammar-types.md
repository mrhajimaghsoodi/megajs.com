---
title: "مرجع Grammar و Typeها"
description: "این صفحه grammar واژگانی، value، literal، declaration، primitive type، object و conversion را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Grammar و Typeها — سبک MDN | MEGA JS"
seoDescription: "مرجع Grammar و Typeها (grammar types): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع Grammar و Typeها, آموزش JavaScript, مرجع JavaScript, JavaScript Grammar and Types Reference, Grammar and Types Reference tutorial, grammar types"
order: 2
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Grammar و Typeها

مرجع Grammar و Typeها یک صفحه مرجع به سبک MDN است. تمرکز آن روی grammar واژگانی، value، literal، declaration، primitive type، object و conversion است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Grammar و Typeها، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای مرجع Grammar و Typeها | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Grammar and Types Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Grammar and Types Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="grammar-types-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#grammar-types-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>Grammar and Types Reference</h2>
  <output id="grammar-types-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#grammar-types-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Grammar و Typeها، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Grammar and Types Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع جریان کنترل**.
