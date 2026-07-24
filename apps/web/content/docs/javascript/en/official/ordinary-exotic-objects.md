---
title: "Ordinary and Exotic Objects"
description: "This page explains object internal methods, property descriptors, ordinary objects, arrays, proxies, and module namespace objects with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Ordinary and Exotic Objects — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "Ordinary and Exotic Objects (ordinary exotic objects): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples,."
keywords: "JavaScript, Ordinary and Exotic Objects, JavaScript Ordinary and Exotic Objects, Ordinary and Exotic Objects tutorial, ordinary exotic objects"
order: 4
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Ordinary and Exotic Objects

Ordinary and Exotic Objects is a specification-oriented ECMA-262 and TC39 summary. It focuses on object internal methods, property descriptors, ordinary objects, arrays, proxies, and module namespace objects, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `Ordinary Object` | uses the default internal object methods |
| `Exotic Object` | customizes one or more internal methods |
| `Property Descriptor` | describes value, getter, setter, and attribute flags |

## Runnable examples

### Example 1

```html
<section>
  <h2>Ordinary and Exotic Objects trace</h2>
  <pre id="ordinary-exotic-objects-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#ordinary-exotic-objects-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<article>
  <h2 id="ordinary-exotic-objects-title">Ordinary and Exotic Objects</h2>
  <output id="ordinary-exotic-objects-out"></output>
</article>
<script>
  class Lesson {
    constructor(title) {
      this.title = title;
    }
    label() {
      return `Lesson: ${this.title}`;
    }
  }
  const lesson = new Lesson(document.querySelector('#ordinary-exotic-objects-title').textContent);
  document.querySelector('#ordinary-exotic-objects-out').value = lesson.label();
</script>
```

## Spec and runtime notes

- In Ordinary and Exotic Objects, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **Function Objects and Calls**.
