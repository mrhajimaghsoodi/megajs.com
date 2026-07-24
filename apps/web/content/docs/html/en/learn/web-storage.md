---
title: "HTML Web Storage API"
description: "This page explains saving small client-side values with localStorage and sessionStorage with examples, tables, and practical HTML notes."
seoTitle: "HTML Web Storage API Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Web Storage API with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Web Storage API, HTML Web Storage, localStorage sessionStorage, browser storage"
order: 58
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Web Storage API

HTML Web Storage API focuses on saving small client-side values with localStorage and sessionStorage. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Web Storage API, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `localStorage`: persists strings after the browser closes.
- `sessionStorage`: persists strings for one tab session.
- `JSON.stringify()`: stores structured data as text.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<label for="display-name">Display name</label>
<input id="display-name" name="displayName">
<script>
  const input = document.querySelector('#display-name');
  input.value = localStorage.getItem('displayName') || '';
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Web Storage API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>localStorage</code></td><td>persists strings after the browser closes</td></tr>
    <tr><td><code>sessionStorage</code></td><td>persists strings for one tab session</td></tr>
    <tr><td><code>JSON.stringify()</code></td><td>stores structured data as text</td></tr>
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
    <title>HTML Web Storage API practice</title>
  </head>
  <body>
    <label for="display-name">Display name</label>
    <input id="display-name" name="displayName">
    <script>
      const input = document.querySelector('#display-name');
      input.value = localStorage.getItem('displayName') || '';
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `localStorage` | persists strings after the browser closes | In HTML Web Storage API, match it to the real page purpose, not just the visual result. |
| `sessionStorage` | persists strings for one tab session | In HTML Web Storage API, match it to the real page purpose, not just the visual result. |
| `JSON.stringify()` | stores structured data as text | In HTML Web Storage API, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Web Storage API only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `localStorage` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `web-storage.html`, run the first example, then replace at least one use of `localStorage` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Web Workers API** so the learning path builds on this concept.
