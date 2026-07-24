---
title: "HTML Web Workers API"
description: "This page explains running heavy JavaScript work away from the UI thread with examples, tables, and practical HTML notes."
seoTitle: "HTML Web Workers API Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Web Workers API with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Web Workers API, HTML Web Workers, Worker postMessage, background JavaScript"
order: 59
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Web Workers API

HTML Web Workers API focuses on running heavy JavaScript work away from the UI thread. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Web Workers API, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `new Worker()`: starts a background JavaScript file.
- `postMessage()`: sends data between page and worker.
- `onmessage`: receives worker replies.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<button id="calculate" type="button">Calculate</button>
<script>
  const worker = new Worker('/workers/calculate.js');
  document.querySelector('#calculate').addEventListener('click', () => worker.postMessage({ limit: 100000 }));
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Web Workers API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>new Worker()</code></td><td>starts a background JavaScript file</td></tr>
    <tr><td><code>postMessage()</code></td><td>sends data between page and worker</td></tr>
    <tr><td><code>onmessage</code></td><td>receives worker replies</td></tr>
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
    <title>HTML Web Workers API practice</title>
  </head>
  <body>
    <button id="calculate" type="button">Calculate</button>
    <script>
      const worker = new Worker('/workers/calculate.js');
      document.querySelector('#calculate').addEventListener('click', () => worker.postMessage({ limit: 100000 }));
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `new Worker()` | starts a background JavaScript file | In HTML Web Workers API, match it to the real page purpose, not just the visual result. |
| `postMessage()` | sends data between page and worker | In HTML Web Workers API, match it to the real page purpose, not just the visual result. |
| `onmessage` | receives worker replies | In HTML Web Workers API, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Web Workers API only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `new Worker()` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `web-workers.html`, run the first example, then replace at least one use of `new Worker()` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Server-Sent Events** so the learning path builds on this concept.
