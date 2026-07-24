---
title: "String Search"
description: "This page explains finding substrings with includes, indexOf, startsWith, endsWith, and match with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "String Search Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn String Search (string search) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, String Search, JavaScript String Search, String Search tutorial, string search"
order: 26
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# String Search

String Search focuses on finding substrings with includes, indexOf, startsWith, endsWith, and match. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice String Search, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `String`: stores text as a sequence of UTF-16 code units.
- `template literal`: interpolates expressions inside text.
- `includes()`: checks for a substring.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<label>
  Search lesson
  <input id="string-search-query" value="script">
</label>
<output id="string-search-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#string-search-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#string-search-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>String Search quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>String</code></td><td>stores text as a sequence of UTF-16 code units</td></tr>
    <tr><td><code>template literal</code></td><td>interpolates expressions inside text</td></tr>
    <tr><td><code>includes()</code></td><td>checks for a substring</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('string-search terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Search practice</title>
  </head>
  <body>
    <label>
      Search lesson
      <input id="string-search-query" value="script">
    </label>
    <output id="string-search-result"></output>
    <script>
      const title = 'JavaScript live editor';
      const query = document.querySelector('#string-search-query').value.trim();
      const found = title.toLowerCase().includes(query.toLowerCase());
      document.querySelector('#string-search-result').value =
        `"${query}" found: ${found === true}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `String` | stores text as a sequence of UTF-16 code units | In String Search, test it against the real runtime, DOM behavior, and error handling path. |
| `template literal` | interpolates expressions inside text | In String Search, test it against the real runtime, DOM behavior, and error handling path. |
| `includes()` | checks for a substring | In String Search, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying String Search without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `String` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `string-search.html`, run the first example, then change one part related to `String`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Numbers** so the JavaScript learning path builds on this concept.
