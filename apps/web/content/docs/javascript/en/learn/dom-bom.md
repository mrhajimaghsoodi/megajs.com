---
title: "DOM and BOM"
description: "This page explains reading and changing documents, handling browser windows, location, history, navigator, and storage with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "DOM and BOM Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn DOM and BOM (dom bom) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance with practical."
keywords: "JavaScript, DOM and BOM, JavaScript dom-bom, DOM and BOM tutorial"
order: 76
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# DOM and BOM

DOM and BOM focuses on reading and changing documents, handling browser windows, location, history, navigator, and storage. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice DOM and BOM, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `document.querySelector()`: selects one DOM element.
- `addEventListener()`: subscribes to browser events.
- `window`: the browser global object.
- For this topic, predictable DOM updates, clean listeners, and accessible feedback is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="dom-bom-toggle" type="button">Toggle state</button>
<p id="dom-bom-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#dom-bom-toggle');
  const status = document.querySelector('#dom-bom-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>DOM and BOM quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>document.querySelector()</code></td><td>selects one DOM element</td></tr>
    <tr><td><code>addEventListener()</code></td><td>subscribes to browser events</td></tr>
    <tr><td><code>window</code></td><td>the browser global object</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('dom-bom terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM and BOM practice</title>
  </head>
  <body>
    <button id="dom-bom-toggle" type="button">Toggle state</button>
    <p id="dom-bom-status">Waiting for an event.</p>
    <script>
      const button = document.querySelector('#dom-bom-toggle');
      const status = document.querySelector('#dom-bom-status');
      button.addEventListener('click', (event) => {
        status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
        status.classList.toggle('is-active');
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `document.querySelector()` | selects one DOM element | In DOM and BOM, test it against the real runtime, DOM behavior, and error handling path. |
| `addEventListener()` | subscribes to browser events | In DOM and BOM, test it against the real runtime, DOM behavior, and error handling path. |
| `window` | the browser global object | In DOM and BOM, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying DOM and BOM without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `document.querySelector()` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `dom-bom.html`, run the first example, then change one part related to `document.querySelector()`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **DOM Introduction** so the JavaScript learning path builds on this concept.
