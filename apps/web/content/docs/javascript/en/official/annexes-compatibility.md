---
title: "Annexes and Compatibility"
description: "This page explains normative optional behavior, web compatibility annexes, legacy features, and implementation notes with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Annexes and Compatibility — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "Annexes and Compatibility (annexes compatibility): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime."
keywords: "JavaScript, Annexes and Compatibility, JavaScript Annexes and Compatibility, Annexes and Compatibility tutorial, annexes compatibility"
order: 9
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Annexes and Compatibility

Annexes and Compatibility is a specification-oriented ECMA-262 and TC39 summary. It focuses on normative optional behavior, web compatibility annexes, legacy features, and implementation notes, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `Annex B` | defines legacy web compatibility behavior |
| `normative optional` | allowed behavior that implementations may choose under spec rules |
| `legacy feature` | older behavior preserved for existing web content |

## Runnable examples

### Example 1

```html
<section>
  <h2>Annexes and Compatibility trace</h2>
  <pre id="annexes-compatibility-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#annexes-compatibility-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<section>
  <h2>Annexes and Compatibility</h2>
  <p id="annexes-compatibility-text">normative optional behavior, web compatibility annexes, legacy features, and implementation notes.</p>
  <output id="annexes-compatibility-out"></output>
</section>
<script>
  const text = document.querySelector('#annexes-compatibility-text').textContent;
  document.querySelector('#annexes-compatibility-out').value =
    `JavaScript handled ${text.length} characters for Annexes and Compatibility`;
</script>
```

## Spec and runtime notes

- In Annexes and Compatibility, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

After this track, open a reference page and test its behavior in the Console.
