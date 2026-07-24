---
title: "مقدمه JavaScript"
description: "نمای کلی زبان هم‌راستا با مفاهیم MDN و ECMAScript."
order: 1
sources:
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
  - name: W3Schools JavaScript
    url: https://www.w3schools.com/js/
  - name: ECMA-262
    url: https://tc39.es/ecma262/
---

# مقدمه JavaScript

JavaScript زبان برنامه‌نویسی وب است — و با Node.js، زبان سرور، CLI و شل دسکتاپ هم شده است.

## کجا اجرا می‌شود؟

- **مرورگر** — DOM، event، fetch
- **Node.js** — فایل، HTTP، ابزارها
- **Runtimeهای توکار** — Edge، Deno، Bun (همان زبان، APIهای متفاوت)

## اولین برنامه

```js
const message = 'سلام MEGA JS';
console.log(message);
```

## ستون‌های زبان

1. **Value و type** — string، number، boolean، null، undefined، object، symbol، bigint
2. **Function** — first-class، closure، arrow function
3. **Object و prototype** — پایه تقریباً همه چیز
4. **Asynchrony** — callback ← Promise ← `async`/`await`
5. **Module** — `import` / `export`

> ترتیب موضوعات مطابق MDN JavaScript Guide و اسکلت آموزش W3Schools است و به فارسی روان بازنویسی شده؛ اصطلاحات تخصصی در صورت نیاز انگلیسی مانده‌اند.
