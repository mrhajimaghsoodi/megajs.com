---
title: "JavaScript Comparisons"
description: "This page explains comparing values with strict equality, relational operators, and predictable coercion choices with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Comparisons Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Comparisons (comparisons) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Comparisons, JavaScript Comparisons, Comparisons tutorial, comparisons"
order: 45
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Comparisons

JavaScript Comparisons focuses on comparing values with strict equality, relational operators, and predictable coercion choices. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Comparisons, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `===`: compares without type coercion.
- `Object.is()`: uses SameValue semantics.
- `truthy/falsy`: describes boolean conversion behavior.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<ol id="comparisons-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#comparisons-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Comparisons quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>===</code></td><td>compares without type coercion</td></tr>
    <tr><td><code>Object.is()</code></td><td>uses SameValue semantics</td></tr>
    <tr><td><code>truthy/falsy</code></td><td>describes boolean conversion behavior</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('comparisons terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Comparisons practice</title>
  </head>
  <body>
    <ol id="comparisons-list"></ol>
    <script>
      const scores = [92, 71, 88, 64];
      const passed = [];
      for (const score of scores) {
        if (score < 70) continue;
        passed.push(score >= 90 ? 'excellent' : 'passed');
      }
      document.querySelector('#comparisons-list').innerHTML =
        passed.map((status) => `<li>${status}</li>`).join('');
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `===` | compares without type coercion | In JavaScript Comparisons, test it against the real runtime, DOM behavior, and error handling path. |
| `Object.is()` | uses SameValue semantics | In JavaScript Comparisons, test it against the real runtime, DOM behavior, and error handling path. |
| `truthy/falsy` | describes boolean conversion behavior | In JavaScript Comparisons, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Comparisons without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `===` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `comparisons.html`, run the first example, then change one part related to `===`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript if else** so the JavaScript learning path builds on this concept.
