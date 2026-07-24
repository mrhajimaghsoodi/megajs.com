---
title: "Mapped Types"
description: "This page explains creating object type transformations over key unions and modifiers with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "Mapped Types - Official TypeScript Docs | MEGA JS Docs"
seoDescription: "Mapped Types (mapped official): official TypeScript Docs summary with Handbook, Reference, Modules, declaration files, tsconfig, and compiler notes."
keywords: "TypeScript, Mapped Types, TypeScript Mapped Types, Mapped Types tutorial, mapped official"
order: 16
track: official
sources:
  - name: TypeScript Docs
    url: https://www.typescriptlang.org/docs/
  - name: TypeScript Handbook
    url: https://www.typescriptlang.org/docs/handbook/intro.html
---
# Mapped Types

Mapped Types summarizes the official typescriptlang.org/docs structure. It focuses on creating object type transformations over key unions and modifiers and helps authors read the Handbook and Reference without turning this page into a full documentation dump.

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
log('Mapped Types official reading trace');
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
type User = { id: number; name: string; active: boolean };
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
type PublicUser = Pick<User, 'id' | 'name'>;
const user: PublicUser = { id: 1, name: 'Ada' };
log(getValue(user, 'name'));
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

- In Mapped Types, compare official caveats with your TypeScript version, tsconfig options, and actual JavaScript runtime behavior.
- If the topic involves modules, declaration files, or JavaScript projects, also check your package manager and bundler behavior.
- For production code, pair the official text with CI typechecks, tests, and validation for external data.

## Next step

Continue the official track with **Template Literal Types**.
