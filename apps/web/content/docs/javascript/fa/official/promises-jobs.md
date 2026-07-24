---
title: "Promise، Job و Microtask"
description: "این صفحه Promise reaction job، job queue، microtask، host hook و اجرای async function را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Promise، Job و Microtask — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Promise، Job و Microtask (promises jobs): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Promise، Job و Microtask, آموزش JavaScript, مرجع JavaScript, JavaScript Promises, Jobs, and Microtasks, Promises, Jobs, and Microtasks tutorial, promises jobs"
order: 6
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Promise، Job و Microtask

Promise، Job و Microtask خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی Promise reaction job، job queue، microtask، host hook و اجرای async function است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `PromiseReactionJob` | reactionهای fulfillment یا rejection در Promise را اجرا می‌کند |
| `Job Queue` | کاری را نگه می‌دارد که language یا host schedule کرده است |
| `HostEnqueuePromiseJob` | host hook برای queue کردن jobهای Promise |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>Promises, Jobs, and Microtasks trace</h2>
  <pre id="promises-jobs-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#promises-jobs-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<button id="promises-jobs-load" type="button">Load async data</button>
<output id="promises-jobs-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#promises-jobs-load').addEventListener('click', async () => {
    document.querySelector('#promises-jobs-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#promises-jobs-out').value = result;
  });
</script>
```

## نکته‌های spec و runtime

- در Promise، Job و Microtask، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Moduleهای ECMAScript در Spec**.
