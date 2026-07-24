---
title: "JavaScript Operators"
description: "This page explains combining operands with arithmetic, comparison, logical, and nullish operators with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Operators Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Operators (operators) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Operators, JavaScript Operators, Operators tutorial, operators"
order: 12
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Operators

JavaScript Operators focuses on combining operands with arithmetic, comparison, logical, and nullish operators. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Operators, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `?.`: reads a property only when the base exists.
- `??`: falls back only for null or undefined.
- `&& / ||`: combine or short-circuit logical expressions.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Operators</h2>
  <p id="operators-text">combining operands with arithmetic, comparison, logical, and nullish operators.</p>
  <output id="operators-out"></output>
</section>
<script>
  const text = document.querySelector('#operators-text').textContent;
  document.querySelector('#operators-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Operators`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Operators quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>?.</code></td><td>reads a property only when the base exists</td></tr>
    <tr><td><code>??</code></td><td>falls back only for null or undefined</td></tr>
    <tr><td><code>&amp;&amp; / ||</code></td><td>combine or short-circuit logical expressions</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('operators terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Operators practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Operators</h2>
      <p id="operators-text">combining operands with arithmetic, comparison, logical, and nullish operators.</p>
      <output id="operators-out"></output>
    </section>
    <script>
      const text = document.querySelector('#operators-text').textContent;
      document.querySelector('#operators-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Operators`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `?.` | reads a property only when the base exists | In JavaScript Operators, test it against the real runtime, DOM behavior, and error handling path. |
| `??` | falls back only for null or undefined | In JavaScript Operators, test it against the real runtime, DOM behavior, and error handling path. |
| `&& / ||` | combine or short-circuit logical expressions | In JavaScript Operators, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Operators without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `?.` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `operators.html`, run the first example, then change one part related to `?.`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Arithmetic** so the JavaScript learning path builds on this concept.
