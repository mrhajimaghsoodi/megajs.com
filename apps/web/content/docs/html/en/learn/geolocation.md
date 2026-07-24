---
title: "HTML Geolocation API"
description: "This page explains requesting a user location only with permission, error handling, and clear purpose with examples, tables, and practical HTML notes."
seoTitle: "HTML Geolocation API Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Geolocation API with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Geolocation API, HTML geolocation, navigator geolocation, location permission"
order: 56
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Geolocation API

HTML Geolocation API focuses on requesting a user location only with permission, error handling, and clear purpose. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Geolocation API, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `navigator.geolocation`: accesses the Geolocation API.
- `getCurrentPosition()`: requests one location result.
- `permission prompt`: asks the user before sharing location.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<button id="locate" type="button">Find location</button>
<output id="location-result"></output>
<script>
  document.querySelector('#locate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
      document.querySelector('#location-result').value = position.coords.latitude;
    });
  });
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Geolocation API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>navigator.geolocation</code></td><td>accesses the Geolocation API</td></tr>
    <tr><td><code>getCurrentPosition()</code></td><td>requests one location result</td></tr>
    <tr><td><code>permission prompt</code></td><td>asks the user before sharing location</td></tr>
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
    <title>HTML Geolocation API practice</title>
  </head>
  <body>
    <button id="locate" type="button">Find location</button>
    <output id="location-result"></output>
    <script>
      document.querySelector('#locate').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((position) => {
          document.querySelector('#location-result').value = position.coords.latitude;
        });
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `navigator.geolocation` | accesses the Geolocation API | In HTML Geolocation API, match it to the real page purpose, not just the visual result. |
| `getCurrentPosition()` | requests one location result | In HTML Geolocation API, match it to the real page purpose, not just the visual result. |
| `permission prompt` | asks the user before sharing location | In HTML Geolocation API, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Geolocation API only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `navigator.geolocation` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `geolocation.html`, run the first example, then replace at least one use of `navigator.geolocation` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Drag and Drop API** so the learning path builds on this concept.
