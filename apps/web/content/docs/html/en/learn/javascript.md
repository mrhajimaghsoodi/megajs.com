---
title: "HTML JavaScript"
description: "This page explains adding scripts that interact with the DOM after markup loads with examples, tables, and practical HTML notes."
seoTitle: "HTML JavaScript Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML JavaScript with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. For precise authoring."
keywords: "HTML, HTML JavaScript, HTML JavaScript, script tag defer, DOM events"
order: 25
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML JavaScript

HTML JavaScript focuses on adding scripts that interact with the DOM after markup loads. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML JavaScript, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<script>`: runs or loads JavaScript.
- `defer`: loads scripts without blocking parsing.
- `DOM selector`: finds elements by id, class, or tag.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<button id="javascript-button" type="button">Run example</button>
<script defer>
  document.querySelector('#javascript-button').addEventListener('click', () => {
    document.body.dataset.example = 'javascript';
  });
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script&gt;</code></td><td>runs or loads JavaScript</td></tr>
    <tr><td><code>defer</code></td><td>loads scripts without blocking parsing</td></tr>
    <tr><td><code>DOM selector</code></td><td>finds elements by id, class, or tag</td></tr>
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
    <title>HTML JavaScript practice</title>
  </head>
  <body>
    <button id="javascript-button" type="button">Run example</button>
    <script defer>
      document.querySelector('#javascript-button').addEventListener('click', () => {
        document.body.dataset.example = 'javascript';
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<script>` | runs or loads JavaScript | In HTML JavaScript, match it to the real page purpose, not just the visual result. |
| `defer` | loads scripts without blocking parsing | In HTML JavaScript, match it to the real page purpose, not just the visual result. |
| `DOM selector` | finds elements by id, class, or tag | In HTML JavaScript, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML JavaScript only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<script>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `javascript.html`, run the first example, then replace at least one use of `<script>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML File Paths** so the learning path builds on this concept.
