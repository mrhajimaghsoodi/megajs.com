---
title: "Narrowing in the Handbook"
description: "This page explains following official control-flow narrowing with typeof, truthiness, equality, in, instanceof, and predicates with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "Narrowing in the Handbook - Official TypeScript Docs | MEGA JS Docs"
seoDescription: "Narrowing in the Handbook (narrowing official): official TypeScript Docs summary with Handbook, Reference, Modules, declaration files, tsconfig, and compiler."
keywords: "TypeScript, Narrowing in the Handbook, TypeScript Narrowing in the Handbook, Narrowing in the Handbook tutorial, narrowing official"
order: 7
track: official
sources:
  - name: TypeScript Docs
    url: https://www.typescriptlang.org/docs/
  - name: TypeScript Handbook
    url: https://www.typescriptlang.org/docs/handbook/intro.html
---
# Narrowing in the Handbook

Narrowing in the Handbook summarizes the official typescriptlang.org/docs structure. It focuses on following official control-flow narrowing with typeof, truthiness, equality, in, instanceof, and predicates and helps authors read the Handbook and Reference without turning this page into a full documentation dump.

## How to read the official text

In the TypeScript Docs, Get Started builds the entry path, the Handbook explains everyday and type-level concepts, the Reference details modules and compiler behavior, and Project Configuration covers production settings.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `Handbook` | official guide for TypeScript authors |
| `compiler` | checks TypeScript and emits JavaScript |
| `strict` | recommended compiler checking mode |

## Runnable examples

### Example 1

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
type OfficialStep = 'open docs' | 'read handbook' | 'compile sample' | 'check tsconfig';
const steps: OfficialStep[] = ['open docs', 'read handbook', 'compile sample', 'check tsconfig'];
log('Narrowing in the Handbook official reading trace');
for (const [index, step] of steps.entries()) {
  log(index + 1, step);
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

### Example 2

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
type Result = { ok: true; value: number } | { ok: false; error: string };
function format(result: Result): string {
  if (result.ok) return 'value ' + result.value.toFixed(1);
  return 'error ' + result.error;
}
log(format({ ok: true, value: 42 }));
log(format({ ok: false, error: 'missing input' }));
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

## Official and compiler notes

- In Narrowing in the Handbook, compare official caveats with your TypeScript version, tsconfig options, and actual JavaScript runtime behavior.
- If the topic involves modules, declaration files, or JavaScript projects, also check your package manager and bundler behavior.
- For production code, pair the official text with CI typechecks, tests, and validation for external data.

## Next step

Continue the official track with **Functions in the Handbook**.
