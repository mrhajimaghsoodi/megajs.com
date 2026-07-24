---
title: "مرجع Objectهای Built-in"
description: "این صفحه object و constructorهای global مثل Object، Function، Date، JSON، Promise و Reflect را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Objectهای Built-in — سبک MDN | MEGA JS"
seoDescription: "مرجع Objectهای Built-in (builtin objects): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع Objectهای Built-in, آموزش JavaScript, مرجع JavaScript, JavaScript Built-in Objects Reference, Built-in Objects Reference tutorial, builtin objects"
order: 10
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Objectهای Built-in

مرجع Objectهای Built-in یک صفحه مرجع به سبک MDN است. تمرکز آن روی object و constructorهای global مثل Object، Function، Date، JSON، Promise و Reflect است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Objectهای Built-in، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای مرجع Objectهای Built-in | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Built-in Objects Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Built-in Objects Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="builtin-objects-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#builtin-objects-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<article>
  <h2 id="builtin-objects-title">Built-in Objects Reference</h2>
  <output id="builtin-objects-out"></output>
</article>
<script>
  class Lesson {
    constructor(title) {
      this.title = title;
    }
    label() {
      return `Lesson: ${this.title}`;
    }
  }
  const lesson = new Lesson(document.querySelector('#builtin-objects-title').textContent);
  document.querySelector('#builtin-objects-out').value = lesson.label();
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Objectهای Built-in، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Built-in Objects Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Array**.
