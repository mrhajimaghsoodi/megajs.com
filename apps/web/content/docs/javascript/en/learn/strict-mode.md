---
title: "JavaScript Strict Mode"
description: "This page explains opting into stricter runtime rules and safer errors for older risky behavior with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Strict Mode Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Strict Mode (strict mode) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Strict Mode, JavaScript Strict Mode, Strict Mode tutorial, strict mode"
order: 60
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Strict Mode

JavaScript Strict Mode focuses on opting into stricter runtime rules and safer errors for older risky behavior. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Strict Mode, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `JavaScript`: language feature used in JavaScript Strict Mode.
- `runtime`: executes code and reports errors.
- `DevTools Console`: checks values while learning.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Strict Mode</h2>
  <p id="strict-mode-text">opting into stricter runtime rules and safer errors for older risky behavior.</p>
  <output id="strict-mode-out"></output>
</section>
<script>
  const text = document.querySelector('#strict-mode-text').textContent;
  document.querySelector('#strict-mode-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Strict Mode`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Strict Mode quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in JavaScript Strict Mode</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('strict-mode terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Strict Mode practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Strict Mode</h2>
      <p id="strict-mode-text">opting into stricter runtime rules and safer errors for older risky behavior.</p>
      <output id="strict-mode-out"></output>
    </section>
    <script>
      const text = document.querySelector('#strict-mode-text').textContent;
      document.querySelector('#strict-mode-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Strict Mode`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `JavaScript` | language feature used in JavaScript Strict Mode | In JavaScript Strict Mode, test it against the real runtime, DOM behavior, and error handling path. |
| `runtime` | executes code and reports errors | In JavaScript Strict Mode, test it against the real runtime, DOM behavior, and error handling path. |
| `DevTools Console` | checks values while learning | In JavaScript Strict Mode, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Strict Mode without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `JavaScript` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `strict-mode.html`, run the first example, then change one part related to `JavaScript`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript this Keyword** so the JavaScript learning path builds on this concept.
