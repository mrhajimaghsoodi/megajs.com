---
title: "مرجع RegExp"
description: "این صفحه literalهای RegExp، flag، group، lookaround، Unicode، APIهای match و limitهای validation را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع RegExp — سبک MDN | MEGA JS"
seoDescription: "مرجع RegExp (regexp ref): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی برای پروژه واقعی وب."
keywords: "JavaScript, مرجع RegExp, آموزش JavaScript, مرجع JavaScript, JavaScript RegExp Reference, RegExp Reference tutorial, regexp ref"
order: 14
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع RegExp

مرجع RegExp یک صفحه مرجع به سبک MDN است. تمرکز آن روی literalهای RegExp، flag، group، lookaround، Unicode، APIهای match و limitهای validation است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع RegExp، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `/pattern/u` | regular expression literal می‌سازد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `flags` | رفتار matching را تغییر می‌دهد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `match()` | matchهای الگو را از text برمی‌گرداند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>RegExp Reference</h2>
  <dl>
    <dt><code>/pattern/u</code></dt>
    <dd>creates a regular expression literal</dd>
    <dt><code>flags</code></dt>
    <dd>change matching behavior</dd>
    <dt><code>match()</code></dt>
    <dd>returns pattern matches from text</dd>
  </dl>
  <output id="regexp-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#regexp-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<label>Username <input id="regexp-ref-name" value="mega_js"></label>
<output id="regexp-ref-out"></output>
<script>
  const username = document.querySelector('#regexp-ref-name').value;
  const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
  document.querySelector('#regexp-ref-out').value = `Valid username: ${isValid}`;
</script>
```

## نکته‌های دقیق authoring

- برای مرجع RegExp، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره RegExp Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع مدیریت Error**.
