---
title: "Lexical and Syntactic Grammar"
description: "This page explains tokens, source text, identifiers, literals, automatic semicolon insertion, and early errors with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Lexical and Syntactic Grammar — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "Lexical and Syntactic Grammar (syntax lexical): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime."
keywords: "JavaScript, Lexical and Syntactic Grammar, JavaScript Lexical and Syntactic Grammar, Lexical and Syntactic Grammar tutorial, syntax lexical"
order: 8
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Lexical and Syntactic Grammar

Lexical and Syntactic Grammar is a specification-oriented ECMA-262 and TC39 summary. It focuses on tokens, source text, identifiers, literals, automatic semicolon insertion, and early errors, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `Lexical Grammar` | turns source text into tokens |
| `Automatic Semicolon Insertion` | inserts semicolons in restricted grammar situations |
| `Early Error` | rejects invalid programs before runtime evaluation |

## Runnable examples

### Example 1

```html
<section>
  <h2>Lexical and Syntactic Grammar trace</h2>
  <pre id="syntax-lexical-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#syntax-lexical-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<section>
  <h2>Lexical and Syntactic Grammar</h2>
  <p id="syntax-lexical-text">tokens, source text, identifiers, literals, automatic semicolon insertion, and early errors.</p>
  <output id="syntax-lexical-out"></output>
</section>
<script>
  const text = document.querySelector('#syntax-lexical-text').textContent;
  document.querySelector('#syntax-lexical-out').value =
    `JavaScript handled ${text.length} characters for Lexical and Syntactic Grammar`;
</script>
```

## Spec and runtime notes

- In Lexical and Syntactic Grammar, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **Annexes and Compatibility**.
