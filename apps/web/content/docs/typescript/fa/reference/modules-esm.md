---
title: "ES Module و TypeScript"
description: "این صفحه شکل‌های import/export، import فقط برای type، module resolution و رفتار browser یا bundler را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع ES Module و TypeScript - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع ES Module و TypeScript (modules esm): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler همراه تمرین کاربردی."
keywords: "TypeScript, ES Module و TypeScript, آموزش TypeScript, مرجع TypeScript, TypeScript ES Modules and TypeScript, ES Modules and TypeScript tutorial, modules esm"
order: 9
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# ES Module و TypeScript

ES Module و TypeScript یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی شکل‌های import/export، import فقط برای type، module resolution و رفتار browser یا bundler است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از ES Module و TypeScript، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `import type` | فقط یک type را import می‌کند | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `moduleResolution` | ruleهای پیدا کردن فایل‌های module | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `ESM` | سیستم استاندارد module در JavaScript | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

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
  { syntax: 'import type', meaning: 'imports only a type', source: 'MDN-style' },
  { syntax: 'moduleResolution', meaning: 'rules for finding module files', source: 'MDN-style' },
  { syntax: 'ESM', meaning: 'standard JavaScript module system', source: 'MDN-style' }
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
type ModuleInfo = { mode: 'ESM' | 'CommonJS'; typeOnlyImports: boolean };
const info: ModuleInfo = { mode: 'ESM', typeOnlyImports: true };
log('Module mode:', info.mode);
log('Uses import type:', info.typeOnlyImports);
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

- برای ES Module و TypeScript، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره ES Modules and TypeScript, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Iterator، Iterable و Collectionهای Typed**.
