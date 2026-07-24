---
title: "JavaScript Arrays"
description: "This page explains storing ordered values and choosing mutating or non-mutating operations with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Arrays Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Arrays (arrays) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Arrays, JavaScript Arrays, Arrays tutorial, arrays"
order: 32
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Arrays

JavaScript Arrays focuses on storing ordered values and choosing mutating or non-mutating operations. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Arrays, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `Array`: stores ordered values by index.
- `map()`: creates a transformed array.
- `for...of`: iterates array values.
- For this topic, readable data flow, controlled mutation, and testable output is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Arrays</h2>
  <ul id="arrays-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#arrays-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Arrays quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Array</code></td><td>stores ordered values by index</td></tr>
    <tr><td><code>map()</code></td><td>creates a transformed array</td></tr>
    <tr><td><code>for...of</code></td><td>iterates array values</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('arrays terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Arrays practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Arrays</h2>
      <ul id="arrays-list"></ul>
    </section>
    <script>
      const lessons = ['variables', 'arrays', 'promises', 'DOM'];
      const uniqueLessons = new Set(lessons);
      document.querySelector('#arrays-list').innerHTML =
        [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `Array` | stores ordered values by index | In JavaScript Arrays, test it against the real runtime, DOM behavior, and error handling path. |
| `map()` | creates a transformed array | In JavaScript Arrays, test it against the real runtime, DOM behavior, and error handling path. |
| `for...of` | iterates array values | In JavaScript Arrays, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Arrays without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `Array` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `arrays.html`, run the first example, then change one part related to `Array`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **Array Methods** so the JavaScript learning path builds on this concept.
