---
title: "Strings and Numbers"
description: "This page explains formatting text, searching strings, calculating numbers, and choosing numeric tools with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Strings and Numbers Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Strings and Numbers (strings numbers) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, Strings and Numbers, JavaScript strings-numbers, Strings and Numbers tutorial"
order: 22
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Strings and Numbers

Strings and Numbers focuses on formatting text, searching strings, calculating numbers, and choosing numeric tools. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Strings and Numbers, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `value`: a JavaScript value used in Strings and Numbers.
- `expression`: code that produces a value.
- `runtime`: the browser or engine executing code.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<label>
  Search lesson
  <input id="strings-numbers-query" value="script">
</label>
<output id="strings-numbers-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#strings-numbers-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#strings-numbers-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Strings and Numbers quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Strings and Numbers</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('strings-numbers terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings and Numbers practice</title>
  </head>
  <body>
    <label>
      Search lesson
      <input id="strings-numbers-query" value="script">
    </label>
    <output id="strings-numbers-result"></output>
    <script>
      const title = 'JavaScript live editor';
      const query = document.querySelector('#strings-numbers-query').value.trim();
      const found = title.toLowerCase().includes(query.toLowerCase());
      document.querySelector('#strings-numbers-result').value =
        `"${query}" found: ${found === true}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `value` | a JavaScript value used in Strings and Numbers | In Strings and Numbers, test it against the real runtime, DOM behavior, and error handling path. |
| `expression` | code that produces a value | In Strings and Numbers, test it against the real runtime, DOM behavior, and error handling path. |
| `runtime` | the browser or engine executing code | In Strings and Numbers, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Strings and Numbers without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `value` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `strings-numbers.html`, run the first example, then change one part related to `value`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Strings** so the JavaScript learning path builds on this concept.
