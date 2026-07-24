---
title: "Null در TypeScript"
description: "این صفحه مدیریت null و undefined زیر strictNullChecks را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "آموزش Null در TypeScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Null در TypeScript (nullables): مثال HTML با typescript.js CDN، تمرین live مسیر W3Schools، type، interface، generics و نکته compiler همراه تمرین کاربردی."
keywords: "TypeScript, Null در TypeScript, آموزش TypeScript, مرجع TypeScript, TypeScript Null, Null tutorial, nullables"
order: 22
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# Null در TypeScript

Null در TypeScript درباره مدیریت null و undefined زیر strictNullChecks است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools TypeScript Tutorial است و مثال‌ها به شکل HTML کامل با typescript.js CDN نوشته شده‌اند تا در live editor اجرا شوند.

هنگام تمرین Null در TypeScript فقط به خروجی JavaScript نگاه نکنید؛ پیام compiler، inference، narrowing و تفاوت type با runtime را هم بررسی کنید.

## ایده اصلی

- `strictNullChecks`: null و undefined را جداگانه check می‌کند.
- `value == null`: check runtime برای null یا undefined.
- `NonNullable<T>`: null و undefined را حذف می‌کند.
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
function parseTitle(value: unknown): string {
  if (typeof value === 'object' && value !== null && 'title' in value) {
    const title = (value as { title?: unknown }).title;
    if (typeof title === 'string') return title;
  }
  return 'Untitled';
}
log(parseTitle(JSON.parse('{"title":"TypeScript Null"}')));
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
  { syntax: 'strictNullChecks', purpose: 'checks null and undefined separately' },
  { syntax: 'value == null', purpose: 'runtime check for null or undefined' },
  { syntax: 'NonNullable<T>', purpose: 'removes null and undefined' }
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
  { id: 1, action: 'Read TypeScript Null', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'nullables');
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
| `strictNullChecks` | null و undefined را جداگانه check می‌کند | در Null در TypeScript آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `value == null` | check runtime برای null یا undefined | در Null در TypeScript آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `NonNullable<T>` | null و undefined را حذف می‌کند | در Null در TypeScript آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |

## اشتباه‌های رایج

- کپی کردن Null در TypeScript بدون فعال کردن `strict` یا بدون نگاه به output واقعی JavaScript.
- استفاده از `any` یا assertion برای پنهان کردن data نامطمئن به جای `unknown`، guard و validation.
- فراموش کردن تست `strictNullChecks` با input نامعتبر، null/undefined و boundaryهای module یا DOM.

## تمرین کوتاه

یک فایل `nullables.ts` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `strictNullChecks` را تغییر دهید. اگر compiler warning یا output عجیب شد، type annotation و value runtime را جدا بررسی کنید.

## گام بعدی

بعد از این صفحه، **Tooling و Ecosystem** را بخوانید تا مسیر TypeScript مرحله‌به‌مرحله کامل‌تر شود.
