---
title: "HTML Web APIs"
description: "This page explains connecting markup to browser capabilities through JavaScript APIs with examples, tables, and practical HTML notes."
seoTitle: "HTML Web APIs Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Web APIs with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Web APIs, HTML Web APIs, browser API, DOM API"
order: 55
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Web APIs

HTML Web APIs focuses on connecting markup to browser capabilities through JavaScript APIs. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Web APIs, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `navigator`: exposes browser capabilities.
- `document`: lets scripts query the DOM.
- `Promise`: represents async API results.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<button id="web-apis-button" type="button">Run example</button>
<script defer>
  document.querySelector('#web-apis-button').addEventListener('click', () => {
    document.body.dataset.example = 'web-apis';
  });
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Web APIs quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>navigator</code></td><td>exposes browser capabilities</td></tr>
    <tr><td><code>document</code></td><td>lets scripts query the DOM</td></tr>
    <tr><td><code>Promise</code></td><td>represents async API results</td></tr>
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
    <title>HTML Web APIs practice</title>
  </head>
  <body>
    <button id="web-apis-button" type="button">Run example</button>
    <script defer>
      document.querySelector('#web-apis-button').addEventListener('click', () => {
        document.body.dataset.example = 'web-apis';
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `navigator` | exposes browser capabilities | In HTML Web APIs, match it to the real page purpose, not just the visual result. |
| `document` | lets scripts query the DOM | In HTML Web APIs, match it to the real page purpose, not just the visual result. |
| `Promise` | represents async API results | In HTML Web APIs, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Web APIs only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `navigator` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `web-apis.html`, run the first example, then replace at least one use of `navigator` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Geolocation API** so the learning path builds on this concept.
