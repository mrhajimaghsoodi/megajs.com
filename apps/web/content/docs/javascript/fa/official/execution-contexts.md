---
title: "Execution Context و Realm"
description: "این صفحه execution context، realm، lexical environment، environment record و اجرای job را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Execution Context و Realm — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Execution Context و Realm (execution contexts): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Execution Context و Realm, آموزش JavaScript, مرجع JavaScript, JavaScript Execution Contexts and Realms, Execution Contexts and Realms tutorial, execution contexts"
order: 3
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Execution Context و Realm

Execution Context و Realm خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی execution context، realm، lexical environment، environment record و اجرای job است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `Execution Context` | state ارزیابی code را دنبال می‌کند |
| `Realm` | global object، intrinsic و environment را گروه می‌کند |
| `Lexical Environment` | bindingها را برای resolve کردن scope نگه می‌دارد |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>Execution Contexts and Realms trace</h2>
  <pre id="execution-contexts-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#execution-contexts-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<section>
  <h2>Execution Contexts and Realms</h2>
  <p id="execution-contexts-text">execution contexts, realms, lexical environments, environment records, and job execution.</p>
  <output id="execution-contexts-out"></output>
</section>
<script>
  const text = document.querySelector('#execution-contexts-text').textContent;
  document.querySelector('#execution-contexts-out').value =
    `JavaScript handled ${text.length} characters for Execution Contexts and Realms`;
</script>
```

## نکته‌های spec و runtime

- در Execution Context و Realm، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Objectهای Ordinary و Exotic**.
