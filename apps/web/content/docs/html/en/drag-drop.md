---
title: "HTML Drag and Drop API"
description: "Learn how draggable elements send data to drop targets with real HTML examples and practical checks."
seoTitle: "HTML Drag and Drop API Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Drag and Drop API with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML drag and drop, draggable dragstart drop, DataTransfer"
order: 57
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Drag and Drop API

In HTML Drag and Drop API, you learn how draggable elements send data to drop targets. The focus is HTML Drag and Drop API, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when users should move cards, files, or items with a pointer. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML Drag and Drop API?

- It gives HTML Drag and Drop API a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `draggable="true"`, `dragstart` and `drop`.
- It improves real pages when users should move cards, files, or items with a pointer, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<div draggable="true" id="card">Drag me</div>
<div id="drop-zone">Drop here</div>
<script>
  const card = document.querySelector('#card');
  const dropZone = document.querySelector('#drop-zone');
  card.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', card.id));
  dropZone.addEventListener('dragover', (event) => event.preventDefault());
</script>
```

### Example 2: Options in context

```html
<section class="drag-drop-notes" aria-labelledby="drag-drop-title">
  <h2 id="drag-drop-title">HTML Drag and Drop API options</h2>
  <table>
    <caption>Key syntax for HTML Drag and Drop API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>draggable=&quot;true&quot;</code></td>
      <td>allows an element to start dragging</td>
    </tr>
    <tr>
      <td><code>dragstart</code></td>
      <td>stores data for the drag operation</td>
    </tr>
    <tr>
      <td><code>drop</code></td>
      <td>handles the result on the target</td>
    </tr>
    </tbody>
  </table>
</section>
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
    <div draggable="true" id="card">Drag me</div>
    <div id="drop-zone">Drop here</div>
    <script>
      const card = document.querySelector('#card');
      const dropZone = document.querySelector('#drop-zone');
      card.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', card.id));
      dropZone.addEventListener('dragover', (event) => event.preventDefault());
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML Drag and Drop API without unrelated layout code.
- Pay attention to `draggable="true"`: allows an element to start dragging.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `draggable="true"` | allows an element to start dragging | Use it while practicing HTML Drag and Drop API. |
| `dragstart` | stores data for the drag operation | Use it while practicing HTML Drag and Drop API. |
| `drop` | handles the result on the target | Use it while practicing HTML Drag and Drop API. |

## Browser, accessibility, and SEO notes

- Test HTML Drag and Drop API in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML Drag and Drop API only for appearance instead of matching the content role.
- Forgetting `draggable="true"` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `drag-drop.html`, copy the first example, then add one extra line that uses `draggable="true"` correctly in your own content.

## Next step

Next step: continue with **HTML Web Storage API** so the next concept builds on this one.
