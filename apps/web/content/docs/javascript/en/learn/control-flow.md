---
title: "Control Flow"
description: "This page explains making decisions, looping, comparing values, converting types, matching patterns, and handling errors with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Control Flow Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Control Flow (control flow) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, Control Flow, JavaScript control-flow, Control Flow tutorial"
order: 44
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Control Flow

Control Flow focuses on making decisions, looping, comparing values, converting types, matching patterns, and handling errors. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Control Flow, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `value`: a JavaScript value used in Control Flow.
- `expression`: code that produces a value.
- `runtime`: the browser or engine executing code.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>Control Flow</h2>
  <p id="control-flow-text">making decisions, looping, comparing values, converting types, matching patterns, and handling errors.</p>
  <output id="control-flow-out"></output>
</section>
<script>
  const text = document.querySelector('#control-flow-text').textContent;
  document.querySelector('#control-flow-out').value =
    `JavaScript handled ${text.length} characters for Control Flow`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Control Flow quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Control Flow</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('control-flow terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control Flow practice</title>
  </head>
  <body>
    <section>
      <h2>Control Flow</h2>
      <p id="control-flow-text">making decisions, looping, comparing values, converting types, matching patterns, and handling errors.</p>
      <output id="control-flow-out"></output>
    </section>
    <script>
      const text = document.querySelector('#control-flow-text').textContent;
      document.querySelector('#control-flow-out').value =
        `JavaScript handled ${text.length} characters for Control Flow`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `value` | a JavaScript value used in Control Flow | In Control Flow, test it against the real runtime, DOM behavior, and error handling path. |
| `expression` | code that produces a value | In Control Flow, test it against the real runtime, DOM behavior, and error handling path. |
| `runtime` | the browser or engine executing code | In Control Flow, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Control Flow without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `value` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `control-flow.html`, run the first example, then change one part related to `value`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Comparisons** so the JavaScript learning path builds on this concept.
