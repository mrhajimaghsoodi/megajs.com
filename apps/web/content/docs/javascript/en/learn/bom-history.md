---
title: "BOM History"
description: "This page explains using pushState, replaceState, popstate, and back-forward navigation thoughtfully with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "BOM History Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn BOM History (bom history) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, BOM History, JavaScript BOM History, BOM History tutorial, bom history"
order: 88
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# BOM History

BOM History focuses on using pushState, replaceState, popstate, and back-forward navigation thoughtfully. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice BOM History, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `Web API`: browser-provided capability used from JavaScript.
- `DOM`: the document object model JavaScript updates.
- `event loop`: schedules user, network, timer, and rendering work.
- For this topic, predictable DOM updates, clean listeners, and accessible feedback is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="bom-history-toggle" type="button">Toggle state</button>
<p id="bom-history-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#bom-history-toggle');
  const status = document.querySelector('#bom-history-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>BOM History quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Web API</code></td><td>browser-provided capability used from JavaScript</td></tr>
    <tr><td><code>DOM</code></td><td>the document object model JavaScript updates</td></tr>
    <tr><td><code>event loop</code></td><td>schedules user, network, timer, and rendering work</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('bom-history terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOM History practice</title>
  </head>
  <body>
    <button id="bom-history-toggle" type="button">Toggle state</button>
    <p id="bom-history-status">Waiting for an event.</p>
    <script>
      const button = document.querySelector('#bom-history-toggle');
      const status = document.querySelector('#bom-history-status');
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
| `Web API` | browser-provided capability used from JavaScript | In BOM History, test it against the real runtime, DOM behavior, and error handling path. |
| `DOM` | the document object model JavaScript updates | In BOM History, test it against the real runtime, DOM behavior, and error handling path. |
| `event loop` | schedules user, network, timer, and rendering work | In BOM History, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying BOM History without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `Web API` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `bom-history.html`, run the first example, then change one part related to `Web API`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **BOM Navigator** so the JavaScript learning path builds on this concept.
