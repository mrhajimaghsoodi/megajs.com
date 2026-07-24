---
title: "TypeScript پیشرفته"
description: "این صفحه استفاده از operationهای type پیشرفته، guard، inference، declaration، decorator، migration و best practice را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "آموزش TypeScript پیشرفته در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش TypeScript پیشرفته (advanced): مثال HTML با typescript.js CDN، تمرین live مسیر W3Schools، type، interface، generics و نکته compiler همراه تمرین کاربردی."
keywords: "TypeScript, TypeScript پیشرفته, آموزش TypeScript, مرجع TypeScript, TypeScript advanced, Advanced TypeScript tutorial"
order: 30
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript پیشرفته

TypeScript پیشرفته درباره استفاده از operationهای type پیشرفته، guard، inference، declaration، decorator، migration و best practice است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools TypeScript Tutorial است و مثال‌ها به شکل HTML کامل با typescript.js CDN نوشته شده‌اند تا در live editor اجرا شوند.

هنگام تمرین TypeScript پیشرفته فقط به خروجی JavaScript نگاه نکنید؛ پیام compiler، inference، narrowing و تفاوت type با runtime را هم بررسی کنید.

## ایده اصلی

- `conditional types`: typeهایی که با check مربوط به assignability انتخاب می‌شوند.
- `mapped types`: object typeهایی که روی keyها transform می‌شوند.
- `narrowing`: refine کردن type گسترده با جریان code.
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
type Lesson = {
  title: string;
  track: 'learn' | 'reference' | 'official';
  terms: string[];
};
const lesson: Lesson = {
  title: 'Advanced TypeScript',
  track: 'learn',
  terms: ['conditional types', 'mapped types', 'narrowing'],
};
log(lesson.title, lesson.track, lesson.terms.join(', '));
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
  { syntax: 'conditional types', purpose: 'types selected by assignability checks' },
  { syntax: 'mapped types', purpose: 'object types transformed over keys' },
  { syntax: 'narrowing', purpose: 'refining a broad type through code flow' }
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
  { id: 1, action: 'Read Advanced TypeScript', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'advanced');
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
| `conditional types` | typeهایی که با check مربوط به assignability انتخاب می‌شوند | در TypeScript پیشرفته آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `mapped types` | object typeهایی که روی keyها transform می‌شوند | در TypeScript پیشرفته آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `narrowing` | refine کردن type گسترده با جریان code | در TypeScript پیشرفته آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |

## اشتباه‌های رایج

- کپی کردن TypeScript پیشرفته بدون فعال کردن `strict` یا بدون نگاه به output واقعی JavaScript.
- استفاده از `any` یا assertion برای پنهان کردن data نامطمئن به جای `unknown`، guard و validation.
- فراموش کردن تست `conditional types` با input نامعتبر، null/undefined و boundaryهای module یا DOM.

## تمرین کوتاه

یک فایل `advanced.ts` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `conditional types` را تغییر دهید. اگر compiler warning یا output عجیب شد، type annotation و value runtime را جدا بررسی کنید.

## گام بعدی

بعد از این صفحه، **Typeهای پیشرفته در TypeScript** را بخوانید تا مسیر TypeScript مرحله‌به‌مرحله کامل‌تر شود.
