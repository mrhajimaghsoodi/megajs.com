---
title: "Tooling و Ecosystem"
description: "این صفحه استفاده از Definitely Typed، updateهای TypeScript 5، configuration، Node.js، React و tooling ادیتور را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "آموزش Tooling و Ecosystem در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Tooling و Ecosystem (tooling ecosystem): مثال HTML با typescript.js CDN، تمرین live مسیر W3Schools، type، interface، generics و نکته compiler."
keywords: "TypeScript, Tooling و Ecosystem, آموزش TypeScript, مرجع TypeScript, TypeScript tooling-ecosystem, Tooling and Ecosystem tutorial"
order: 23
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# Tooling و Ecosystem

Tooling و Ecosystem درباره استفاده از Definitely Typed، updateهای TypeScript 5، configuration، Node.js، React و tooling ادیتور است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools TypeScript Tutorial است و مثال‌ها به شکل HTML کامل با typescript.js CDN نوشته شده‌اند تا در live editor اجرا شوند.

هنگام تمرین Tooling و Ecosystem فقط به خروجی JavaScript نگاه نکنید؛ پیام compiler، inference، narrowing و تفاوت type با runtime را هم بررسی کنید.

## ایده اصلی

- `tsconfig`: فایل پروژه برای compiler optionها.
- `declaration file (.d.ts)`: توصیف فقط-type از APIهای JavaScript.
- `language service`: engine ادیتور برای feedbackهای TypeScript.
- برای این موضوع، هماهنگی type، value runtime، inference و خروجی قابل مشاهده نشانه اصلی کیفیت TypeScript code است.

## مثال‌های HTML قابل اجرا با TypeScript

هر مثال یک سند کامل HTML است که TypeScript را از CDN load می‌کند، source را با `ts.transpileModule` به JavaScript تبدیل می‌کند و خروجی را در همان صفحه نشان می‌دهد.

### مثال 1: الگوی TypeScript متمرکز

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
type CompilerMode = 'check' | 'emit' | 'build';
const options: { strict: boolean; mode: CompilerMode; target: string } = {
  strict: true,
  mode: 'check',
  target: 'ES2020',
};
log('strict:', options.strict, 'mode:', options.mode, 'target:', options.target);
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

### مثال 2: گزینه‌های syntax در context

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
type Term = { syntax: string; purpose: string };
const terms: Term[] = [
  { syntax: 'tsconfig', purpose: 'project file for compiler options' },
  { syntax: 'declaration file (.d.ts)', purpose: 'type-only description of JavaScript APIs' },
  { syntax: 'language service', purpose: 'editor engine for TypeScript feedback' }
];
for (const term of terms) {
  log(term.syntax + ' => ' + term.purpose);
}
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

### مثال 3: صفحه تمرینی کامل

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
interface PracticeStep {
  id: number;
  action: string;
  done: boolean;
}
const steps: PracticeStep[] = [
  { id: 1, action: 'Read Tooling and Ecosystem', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'tooling-ecosystem');
log('Remaining steps:', remaining.map((step) => step.action).join(' | '));
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

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `tsconfig` | فایل پروژه برای compiler optionها | در Tooling و Ecosystem آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `declaration file (.d.ts)` | توصیف فقط-type از APIهای JavaScript | در Tooling و Ecosystem آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `language service` | engine ادیتور برای feedbackهای TypeScript | در Tooling و Ecosystem آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |

## اشتباه‌های رایج

- کپی کردن Tooling و Ecosystem بدون فعال کردن `strict` یا بدون نگاه به output واقعی JavaScript.
- استفاده از `any` یا assertion برای پنهان کردن data نامطمئن به جای `unknown`، guard و validation.
- فراموش کردن تست `tsconfig` با input نامعتبر، null/undefined و boundaryهای module یا DOM.

## تمرین کوتاه

یک فایل `tooling-ecosystem.ts` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `tsconfig` را تغییر دهید. اگر compiler warning یا output عجیب شد، type annotation و value runtime را جدا بررسی کنید.

## گام بعدی

بعد از این صفحه، **Definitely Typed** را بخوانید تا مسیر TypeScript مرحله‌به‌مرحله کامل‌تر شود.
