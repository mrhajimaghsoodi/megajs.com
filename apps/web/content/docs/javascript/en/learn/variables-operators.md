---
title: "Variables and Operators"
description: "This page explains storing values, choosing declarations, and combining values with operators safely with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Variables and Operators Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Variables and Operators (variables operators) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime."
keywords: "JavaScript, Variables and Operators, JavaScript variables-operators, Variables and Operators tutorial"
order: 8
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Variables and Operators

Variables and Operators focuses on storing values, choosing declarations, and combining values with operators safely. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Variables and Operators, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `value`: a JavaScript value used in Variables and Operators.
- `expression`: code that produces a value.
- `runtime`: the browser or engine executing code.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>Variables and Operators</h2>
  <output id="variables-operators-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#variables-operators-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Variables and Operators quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Variables and Operators</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('variables-operators terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables and Operators practice</title>
  </head>
  <body>
    <section>
      <h2>Variables and Operators</h2>
      <output id="variables-operators-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#variables-operators-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `value` | a JavaScript value used in Variables and Operators | In Variables and Operators, test it against the real runtime, DOM behavior, and error handling path. |
| `expression` | code that produces a value | In Variables and Operators, test it against the real runtime, DOM behavior, and error handling path. |
| `runtime` | the browser or engine executing code | In Variables and Operators, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Variables and Operators without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `value` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `variables-operators.html`, run the first example, then change one part related to `value`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Variables** so the JavaScript learning path builds on this concept.
