---
title: "Alias، Union و Functionها"
description: "این صفحه author کردن نام type قابل استفاده مجدد، valueهای variant، signature تابع و assertion را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "آموزش Alias، Union و Functionها در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Alias، Union و Functionها (aliases unions functions): مثال HTML با typescript.js CDN، تمرین live مسیر W3Schools، type، interface، generics."
keywords: "TypeScript, Alias، Union و Functionها, آموزش TypeScript, مرجع TypeScript, TypeScript aliases-unions-functions, Aliases, Unions, and Functions tutorial"
order: 12
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# Alias، Union و Functionها

Alias، Union و Functionها درباره author کردن نام type قابل استفاده مجدد، valueهای variant، signature تابع و assertion است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools TypeScript Tutorial است و مثال‌ها به شکل HTML کامل با typescript.js CDN نوشته شده‌اند تا در live editor اجرا شوند.

هنگام تمرین Alias، Union و Functionها فقط به خروجی JavaScript نگاه نکنید؛ پیام compiler، inference، narrowing و تفاوت type با runtime را هم بررسی کنید.

## ایده اصلی

- `interface`: contract نام‌دار برای object.
- `type alias`: نامی برای هر expression از نوع type.
- `union`: یکی از چند type ممکن.
- برای این موضوع، narrowing قابل توضیح و پوشش همه caseهای union نشانه اصلی کیفیت TypeScript code است.

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
interface Lesson {
  title: string;
  minutes?: number;
  readonly track: 'learn' | 'reference' | 'official';
}
const lesson: Lesson = { title: 'Aliases, Unions, and Functions', minutes: 12, track: 'learn' };
log(lesson.title, lesson.minutes ?? 0, lesson.track);
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
  { syntax: 'interface', purpose: 'named object contract' },
  { syntax: 'type alias', purpose: 'name for any type expression' },
  { syntax: 'union', purpose: 'one of several possible types' }
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
  { id: 1, action: 'Read Aliases, Unions, and Functions', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'aliases-unions-functions');
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
| `interface` | contract نام‌دار برای object | در Alias، Union و Functionها آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `type alias` | نامی برای هر expression از نوع type | در Alias، Union و Functionها آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `union` | یکی از چند type ممکن | در Alias، Union و Functionها آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |

## اشتباه‌های رایج

- کپی کردن Alias، Union و Functionها بدون فعال کردن `strict` یا بدون نگاه به output واقعی JavaScript.
- استفاده از `any` یا assertion برای پنهان کردن data نامطمئن به جای `unknown`، guard و validation.
- فراموش کردن تست `interface` با input نامعتبر، null/undefined و boundaryهای module یا DOM.

## تمرین کوتاه

یک فایل `aliases-unions-functions.ts` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `interface` را تغییر دهید. اگر compiler warning یا output عجیب شد، type annotation و value runtime را جدا بررسی کنید.

## گام بعدی

بعد از این صفحه، **Type Alias و Interface** را بخوانید تا مسیر TypeScript مرحله‌به‌مرحله کامل‌تر شود.
