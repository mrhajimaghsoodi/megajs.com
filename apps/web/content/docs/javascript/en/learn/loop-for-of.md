---
title: "JavaScript for of"
description: "This page explains iterating iterable values from arrays, strings, maps, sets, and generators with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript for of Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript for of (loop for of) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript for of, JavaScript for of, for of tutorial, loop for of"
order: 51
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript for of

JavaScript for of focuses on iterating iterable values from arrays, strings, maps, sets, and generators. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript for of, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `if`: branches when a condition is true.
- `for...of`: iterates iterable values.
- `break`: exits a loop or switch early.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<ol id="loop-for-of-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#loop-for-of-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript for of quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>if</code></td><td>branches when a condition is true</td></tr>
    <tr><td><code>for...of</code></td><td>iterates iterable values</td></tr>
    <tr><td><code>break</code></td><td>exits a loop or switch early</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('loop-for-of terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript for of practice</title>
  </head>
  <body>
    <ol id="loop-for-of-list"></ol>
    <script>
      const scores = [92, 71, 88, 64];
      const passed = [];
      for (const score of scores) {
        if (score < 70) continue;
        passed.push(score >= 90 ? 'excellent' : 'passed');
      }
      document.querySelector('#loop-for-of-list').innerHTML =
        passed.map((status) => `<li>${status}</li>`).join('');
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `if` | branches when a condition is true | In JavaScript for of, test it against the real runtime, DOM behavior, and error handling path. |
| `for...of` | iterates iterable values | In JavaScript for of, test it against the real runtime, DOM behavior, and error handling path. |
| `break` | exits a loop or switch early | In JavaScript for of, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript for of without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `if` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `loop-for-of.html`, run the first example, then change one part related to `if`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Break and Continue** so the JavaScript learning path builds on this concept.
