---
title: "نمای کلی ECMA-262"
description: "این صفحه اینکه specificationهای ECMAScript چگونه semantics زبان JavaScript را جدا از Web APIهای مرورگر تعریف می‌کنند را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "نمای کلی ECMA-262 — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "نمای کلی ECMA-262 (overview): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا همراه تمرین کاربردی."
keywords: "JavaScript, نمای کلی ECMA-262, آموزش JavaScript, مرجع JavaScript, ECMA-262, ECMAScript spec, TC39 JavaScript"
order: 1
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# نمای کلی ECMA-262

نمای کلی ECMA-262 خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی اینکه specificationهای ECMAScript چگونه semantics زبان JavaScript را جدا از Web APIهای مرورگر تعریف می‌کنند است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `JavaScript` | ویژگی زبان برای نمای کلی ECMA-262 |
| `runtime` | code را اجرا و error را گزارش می‌کند |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>ECMA-262 Overview trace</h2>
  <pre id="overview-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#overview-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<section>
  <h2>ECMA-262 Overview</h2>
  <p id="overview-text">how the ECMAScript specification defines JavaScript language semantics apart from browser Web APIs.</p>
  <output id="overview-out"></output>
</section>
<script>
  const text = document.querySelector('#overview-text').textContent;
  document.querySelector('#overview-out').value =
    `JavaScript handled ${text.length} characters for ECMA-262 Overview`;
</script>
```

## نکته‌های spec و runtime

- در نمای کلی ECMA-262، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Typeهای زبان ECMAScript**.
