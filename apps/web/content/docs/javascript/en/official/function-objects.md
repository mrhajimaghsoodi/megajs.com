---
title: "Function Objects and Calls"
description: "This page explains function objects, call and construct behavior, closures, this binding, and class constructors with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Function Objects and Calls — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "Function Objects and Calls (function objects): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime."
keywords: "JavaScript, Function Objects and Calls, JavaScript Function Objects and Calls, Function Objects and Calls tutorial, function objects"
order: 5
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Function Objects and Calls

Function Objects and Calls is a specification-oriented ECMA-262 and TC39 summary. It focuses on function objects, call and construct behavior, closures, this binding, and class constructors, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `[[Call]]` | internal method used when a function is called |
| `[[Construct]]` | internal method used with new |
| `ThisMode` | specifies lexical, strict, or global this binding behavior |

## Runnable examples

### Example 1

```html
<section>
  <h2>Function Objects and Calls trace</h2>
  <pre id="function-objects-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#function-objects-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<button id="function-objects-button" type="button">Count clicks</button>
<output id="function-objects-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#function-objects-button').addEventListener('click', () => {
    document.querySelector('#function-objects-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

## Spec and runtime notes

- In Function Objects and Calls, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **Promises, Jobs, and Microtasks**.
