---
title: "Async، Promise و Typeها"
description: "این صفحه Promise<T>، return type در async، valueهای awaited، مدل کردن rejection و helperهای concurrent را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Async، Promise و Typeها - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع Async، Promise و Typeها (async promises types): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler."
keywords: "TypeScript, Async، Promise و Typeها, آموزش TypeScript, مرجع TypeScript, TypeScript Async, Promises, and Types, Async, Promises, and Types tutorial, async promises types"
order: 16
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Async، Promise و Typeها

Async، Promise و Typeها یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی Promise<T>، return type در async، valueهای awaited، مدل کردن rejection و helperهای concurrent است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از Async، Promise و Typeها، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Promise<T>` | type مربوط به نتیجه آینده | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `Awaited<T>` | valueهای awaited را unwrap می‌کند | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `try/catch` | error handling در runtime پیرامون کار async | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

## مثال‌ها

### مثال 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\n'; };
const tsCode = `
type ReferenceTerm = {
  syntax: string;
  meaning: string;
  source: 'MDN-style' | 'TypeScript';
};
const terms: ReferenceTerm[] = [
  { syntax: 'Promise<T>', meaning: 'type for a future result', source: 'MDN-style' },
  { syntax: 'Awaited<T>', meaning: 'unwraps awaited values', source: 'MDN-style' },
  { syntax: 'try/catch', meaning: 'runtime error handling around async work', source: 'MDN-style' }
];
terms.forEach((term) => log(term.source, term.syntax, '-', term.meaning));
`;
try {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext, strict: true }
  });
  // Run emitted JS in a Function with log in scope
  new Function('log', result.outputText)(log);
} catch (e) {
  log('Error:', e.message || e);
}
</script>
</body>
</html>
```

### مثال 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\n'; };
const tsCode = `
async function loadLesson(): Promise<{ title: string; ready: boolean }> {
  return { title: 'Async, Promises, and Types', ready: true };
}
loadLesson().then((lesson) => {
  log(lesson.title, lesson.ready ? 'ready' : 'pending');
});
`;
try {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext, strict: true }
  });
  // Run emitted JS in a Function with log in scope
  new Function('log', result.outputText)(log);
} catch (e) {
  log('Error:', e.message || e);
}
</script>
</body>
</html>
```

## نکته‌های دقیق authoring

- برای Async، Promise و Typeها، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Async, Promises, and Types, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Symbol، BigInt و Typeهای Unique**.
