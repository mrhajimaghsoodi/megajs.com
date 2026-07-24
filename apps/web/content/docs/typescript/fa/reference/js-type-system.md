---
title: "Type System جاوااسکریپت برای TypeScript"
description: "این صفحه primitive typeها، object typeها، tagهای runtime در JavaScript و آنچه TypeScript می‌تواند یا نمی‌تواند بداند را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Type System جاوااسکریپت برای TypeScript - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع Type System جاوااسکریپت برای TypeScript (js type system): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler."
keywords: "TypeScript, Type System جاوااسکریپت برای TypeScript, آموزش TypeScript, مرجع TypeScript, TypeScript JavaScript Type System for TypeScript, JavaScript Type System for TypeScript tutorial, js type system"
order: 2
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Type System جاوااسکریپت برای TypeScript

Type System جاوااسکریپت برای TypeScript یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی primitive typeها، object typeها، tagهای runtime در JavaScript و آنچه TypeScript می‌تواند یا نمی‌تواند بداند است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از Type System جاوااسکریپت برای TypeScript، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `narrowing` | refine کردن type با evidence در runtime | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `type operator` | operator استفاده‌شده در جایگاه type | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `literal type` | type مربوط به یک value دقیق | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

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
  { syntax: 'narrowing', meaning: 'refining a type through runtime evidence', source: 'MDN-style' },
  { syntax: 'type operator', meaning: 'operator used in type positions', source: 'MDN-style' },
  { syntax: 'literal type', meaning: 'type for one exact value', source: 'MDN-style' }
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
const lesson: string = 'JavaScript Type System for TypeScript';
const attempts: number = 3;
const complete: boolean = attempts > 2;
log(lesson, 'complete:', complete);
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

- برای Type System جاوااسکریپت برای TypeScript، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره JavaScript Type System for TypeScript, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Primitive Wrapperها و TypeScript**.
