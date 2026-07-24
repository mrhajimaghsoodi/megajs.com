---
title: "مرجع جریان کنترل"
description: "این صفحه statementهای تصمیم، loop، label، exception و انتقال کنترل را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع جریان کنترل — سبک MDN | MEGA JS"
seoDescription: "مرجع جریان کنترل (control flow ref): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع جریان کنترل, آموزش JavaScript, مرجع JavaScript, JavaScript Control Flow Reference, Control Flow Reference tutorial, control flow ref"
order: 3
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع جریان کنترل

مرجع جریان کنترل یک صفحه مرجع به سبک MDN است. تمرکز آن روی statementهای تصمیم، loop، label، exception و انتقال کنترل است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع جریان کنترل، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `if` | وقتی condition درست است branch می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `for...of` | روی valueهای iterable iteration می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `break` | از loop یا switch زود خارج می‌شود | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Control Flow Reference</h2>
  <dl>
    <dt><code>if</code></dt>
    <dd>branches when a condition is true</dd>
    <dt><code>for...of</code></dt>
    <dd>iterates iterable values</dd>
    <dt><code>break</code></dt>
    <dd>exits a loop or switch early</dd>
  </dl>
  <output id="control-flow-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#control-flow-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<ol id="control-flow-ref-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#control-flow-ref-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

## نکته‌های دقیق authoring

- برای مرجع جریان کنترل، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Control Flow Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Expression و Operator**.
