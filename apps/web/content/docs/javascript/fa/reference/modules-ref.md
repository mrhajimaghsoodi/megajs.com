---
title: "مرجع Moduleها"
description: "این صفحه ES module، شکل‌های import و export، static analysis، dynamic import و load در مرورگر را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Moduleها — سبک MDN | MEGA JS"
seoDescription: "مرجع Moduleها (modules ref): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی برای پروژه واقعی وب."
keywords: "JavaScript, مرجع Moduleها, آموزش JavaScript, مرجع JavaScript, JavaScript Modules Reference, Modules Reference tutorial, modules ref"
order: 16
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Moduleها

مرجع Moduleها یک صفحه مرجع به سبک MDN است. تمرکز آن روی ES module، شکل‌های import و export، static analysis، dynamic import و load در مرورگر است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Moduleها، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `import` | bindingهای export شده را وارد module می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `export` | bindingهای module را قابل استفاده می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `module scope` | bindingهای top-level را بیرون از global scope نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Modules Reference</h2>
  <dl>
    <dt><code>import</code></dt>
    <dd>brings exported bindings into a module</dd>
    <dt><code>export</code></dt>
    <dd>makes module bindings available</dd>
    <dt><code>module scope</code></dt>
    <dd>keeps top-level bindings out of global scope</dd>
  </dl>
  <output id="modules-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#modules-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<output id="modules-ref-out"></output>
<script type="module">
  const moduleName = 'Modules Reference';
  const format = (value) => `Module scope: ${value}`;
  document.querySelector('#modules-ref-out').value = format(moduleName);
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Moduleها، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Modules Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Iterator و Generator**.
