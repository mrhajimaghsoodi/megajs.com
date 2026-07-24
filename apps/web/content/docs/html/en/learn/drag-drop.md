---
title: "HTML Drag and Drop API"
description: "This page explains making elements draggable and handling dragstart, dragover, and drop targets with examples, tables, and practical HTML notes."
seoTitle: "HTML Drag and Drop API Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Drag and Drop API with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Drag and Drop API, HTML drag drop, draggable, dataTransfer"
order: 57
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Drag and Drop API

HTML Drag and Drop API focuses on making elements draggable and handling dragstart, dragover, and drop targets. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Drag and Drop API, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `draggable="true"`: allows an element to start dragging.
- `dataTransfer`: carries data during drag operations.
- `drop event`: handles the final drop action.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<div id="card" draggable="true">Drag this card</div>
<div id="drop-zone">Drop zone</div>
<script>
  document.querySelector('#drop-zone').addEventListener('dragover', (event) => event.preventDefault());
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Drag and Drop API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>draggable=&quot;true&quot;</code></td><td>allows an element to start dragging</td></tr>
    <tr><td><code>dataTransfer</code></td><td>carries data during drag operations</td></tr>
    <tr><td><code>drop event</code></td><td>handles the final drop action</td></tr>
  </tbody>
</table>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Drag and Drop API practice</title>
  </head>
  <body>
    <div id="card" draggable="true">Drag this card</div>
    <div id="drop-zone">Drop zone</div>
    <script>
      document.querySelector('#drop-zone').addEventListener('dragover', (event) => event.preventDefault());
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `draggable="true"` | allows an element to start dragging | In HTML Drag and Drop API, match it to the real page purpose, not just the visual result. |
| `dataTransfer` | carries data during drag operations | In HTML Drag and Drop API, match it to the real page purpose, not just the visual result. |
| `drop event` | handles the final drop action | In HTML Drag and Drop API, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Drag and Drop API only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `draggable="true"` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `drag-drop.html`, run the first example, then replace at least one use of `draggable="true"` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Web Storage API** so the learning path builds on this concept.
