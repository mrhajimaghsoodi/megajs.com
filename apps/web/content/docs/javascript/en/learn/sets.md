---
title: "JavaScript Sets"
description: "This page explains keeping unique values and using set-style operations in application state with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Sets Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Sets (sets) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance with practical."
keywords: "JavaScript, JavaScript Sets, JavaScript Sets, Sets tutorial, sets"
order: 42
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Sets

JavaScript Sets focuses on keeping unique values and using set-style operations in application state. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Sets, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `Map`: stores key-value entries with arbitrary keys.
- `Set`: stores unique values.
- `WeakMap`: allows object keys without preventing garbage collection.
- For this topic, readable data flow, controlled mutation, and testable output is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Sets</h2>
  <ul id="sets-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#sets-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Sets quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Map</code></td><td>stores key-value entries with arbitrary keys</td></tr>
    <tr><td><code>Set</code></td><td>stores unique values</td></tr>
    <tr><td><code>WeakMap</code></td><td>allows object keys without preventing garbage collection</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('sets terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Sets practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Sets</h2>
      <ul id="sets-list"></ul>
    </section>
    <script>
      const lessons = ['variables', 'arrays', 'promises', 'DOM'];
      const uniqueLessons = new Set(lessons);
      document.querySelector('#sets-list').innerHTML =
        [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `Map` | stores key-value entries with arbitrary keys | In JavaScript Sets, test it against the real runtime, DOM behavior, and error handling path. |
| `Set` | stores unique values | In JavaScript Sets, test it against the real runtime, DOM behavior, and error handling path. |
| `WeakMap` | allows object keys without preventing garbage collection | In JavaScript Sets, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Sets without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `Map` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `sets.html`, run the first example, then change one part related to `Map`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Maps** so the JavaScript learning path builds on this concept.
