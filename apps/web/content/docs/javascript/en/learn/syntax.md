---
title: "JavaScript Syntax"
description: "This page explains writing identifiers, literals, expressions, blocks, and semicolons predictably with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Syntax Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Syntax (syntax) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Syntax, JavaScript Syntax, Syntax tutorial, syntax"
order: 6
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Syntax

JavaScript Syntax focuses on writing identifiers, literals, expressions, blocks, and semicolons predictably. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Syntax, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `identifier`: names variables, functions, and properties.
- `literal`: writes a value directly in source.
- `{ ... }`: creates a block or object literal depending on context.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Syntax</h2>
  <p id="syntax-text">writing identifiers, literals, expressions, blocks, and semicolons predictably.</p>
  <output id="syntax-out"></output>
</section>
<script>
  const text = document.querySelector('#syntax-text').textContent;
  document.querySelector('#syntax-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Syntax`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Syntax quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>identifier</code></td><td>names variables, functions, and properties</td></tr>
    <tr><td><code>literal</code></td><td>writes a value directly in source</td></tr>
    <tr><td><code>{ ... }</code></td><td>creates a block or object literal depending on context</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('syntax terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Syntax practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Syntax</h2>
      <p id="syntax-text">writing identifiers, literals, expressions, blocks, and semicolons predictably.</p>
      <output id="syntax-out"></output>
    </section>
    <script>
      const text = document.querySelector('#syntax-text').textContent;
      document.querySelector('#syntax-out').value =
        `JavaScript handled ${text.length} characters for JavaScript Syntax`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `identifier` | names variables, functions, and properties | In JavaScript Syntax, test it against the real runtime, DOM behavior, and error handling path. |
| `literal` | writes a value directly in source | In JavaScript Syntax, test it against the real runtime, DOM behavior, and error handling path. |
| `{ ... }` | creates a block or object literal depending on context | In JavaScript Syntax, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Syntax without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `identifier` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `syntax.html`, run the first example, then change one part related to `identifier`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Comments** so the JavaScript learning path builds on this concept.
