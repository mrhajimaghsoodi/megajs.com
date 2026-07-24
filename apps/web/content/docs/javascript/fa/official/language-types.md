---
title: "Typeهای زبان ECMAScript"
description: "این صفحه valueهای زبان ECMAScript، typeهای specification، primitive، object و completion record را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Typeهای زبان ECMAScript — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Typeهای زبان ECMAScript (language types): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Typeهای زبان ECMAScript, آموزش JavaScript, مرجع JavaScript, JavaScript ECMAScript Language Types, ECMAScript Language Types tutorial, language types"
order: 2
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Typeهای زبان ECMAScript

Typeهای زبان ECMAScript خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی valueهای زبان ECMAScript، typeهای specification، primitive، object و completion record است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `ECMAScript Language Type` | دسته value در runtime مثل Undefined، Number، BigInt، String، Symbol یا Object |
| `Specification Type` | record مخصوص spec برای تعریف algorithmها |
| `Completion Record` | completionهای normal، throw، return، break یا continue را می‌پوشاند |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>ECMAScript Language Types trace</h2>
  <pre id="language-types-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#language-types-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<section>
  <h2>ECMAScript Language Types</h2>
  <output id="language-types-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#language-types-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

## نکته‌های spec و runtime

- در Typeهای زبان ECMAScript، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Execution Context و Realm**.
