---
title: "JavaScript Promises"
description: "This page explains representing future results with fulfillment, rejection, chaining, and error propagation with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Promises Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Promises (promises) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Promises, JavaScript Promises, Promises tutorial, promises"
order: 73
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Promises

JavaScript Promises focuses on representing future results with fulfillment, rejection, chaining, and error propagation. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Promises, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `Promise`: represents pending, fulfilled, or rejected work.
- `.then()`: continues after fulfillment.
- `.catch()`: handles rejection.
- For this topic, clear loading state, reliable error handling, and understandable microtask order is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="promises-load" type="button">Load async data</button>
<output id="promises-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#promises-load').addEventListener('click', async () => {
    document.querySelector('#promises-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#promises-out').value = result;
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Promises quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Promise</code></td><td>represents pending, fulfilled, or rejected work</td></tr>
    <tr><td><code>.then()</code></td><td>continues after fulfillment</td></tr>
    <tr><td><code>.catch()</code></td><td>handles rejection</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('promises terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Promises practice</title>
  </head>
  <body>
    <button id="promises-load" type="button">Load async data</button>
    <output id="promises-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#promises-load').addEventListener('click', async () => {
        document.querySelector('#promises-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#promises-out').value = result;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `Promise` | represents pending, fulfilled, or rejected work | In JavaScript Promises, test it against the real runtime, DOM behavior, and error handling path. |
| `.then()` | continues after fulfillment | In JavaScript Promises, test it against the real runtime, DOM behavior, and error handling path. |
| `.catch()` | handles rejection | In JavaScript Promises, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Promises without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `Promise` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `promises.html`, run the first example, then change one part related to `Promise`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript async await** so the JavaScript learning path builds on this concept.
