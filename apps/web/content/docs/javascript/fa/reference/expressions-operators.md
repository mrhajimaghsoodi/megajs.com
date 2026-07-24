---
title: "مرجع Expression و Operator"
description: "این صفحه precedence operator، assignment، comparison، logical، optional chaining و nullish coalescing را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Expression و Operator — سبک MDN | MEGA JS"
seoDescription: "مرجع Expression و Operator (expressions operators): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین."
keywords: "JavaScript, مرجع Expression و Operator, آموزش JavaScript, مرجع JavaScript, JavaScript Expressions and Operators Reference, Expressions and Operators Reference tutorial, expressions operators"
order: 4
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Expression و Operator

مرجع Expression و Operator یک صفحه مرجع به سبک MDN است. تمرکز آن روی precedence operator، assignment، comparison، logical، optional chaining و nullish coalescing است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Expression و Operator، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای مرجع Expression و Operator | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Expressions and Operators Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Expressions and Operators Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="expressions-operators-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#expressions-operators-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>Expressions and Operators Reference</h2>
  <p id="expressions-operators-text">operator precedence, assignment, comparison, logical, optional chaining, and nullish coalescing.</p>
  <output id="expressions-operators-out"></output>
</section>
<script>
  const text = document.querySelector('#expressions-operators-text').textContent;
  document.querySelector('#expressions-operators-out').value =
    `JavaScript handled ${text.length} characters for Expressions and Operators Reference`;
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Expression و Operator، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Expressions and Operators Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Functionها**.
