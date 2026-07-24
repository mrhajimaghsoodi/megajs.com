---
title: "HTML Web Storage API"
description: "Learn how localStorage and sessionStorage keep small values in the browser with real HTML examples and practical checks."
seoTitle: "HTML Web Storage API Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Web Storage API with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML web storage, localStorage sessionStorage, client storage"
order: 58
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Web Storage API

In HTML Web Storage API, you learn how localStorage and sessionStorage keep small values in the browser. The focus is HTML Web Storage API, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when preferences, drafts, or UI state should survive a reload. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML Web Storage API?

- It gives HTML Web Storage API a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `localStorage`, `sessionStorage` and `setItem() / getItem()`.
- It improves real pages when preferences, drafts, or UI state should survive a reload, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<label>
  Display name
  <input id="display-name" name="displayName">
</label>
<script>
  const displayName = document.querySelector('#display-name');
  displayName.value = localStorage.getItem('displayName') || '';
  displayName.addEventListener('input', () => localStorage.setItem('displayName', displayName.value));
</script>
```

### Example 2: Options in context

```html
<section class="web-storage-notes" aria-labelledby="web-storage-title">
  <h2 id="web-storage-title">HTML Web Storage API options</h2>
  <table>
    <caption>Key syntax for HTML Web Storage API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>localStorage</code></td>
      <td>persists until cleared</td>
    </tr>
    <tr>
      <td><code>sessionStorage</code></td>
      <td>persists for the current tab session</td>
    </tr>
    <tr>
      <td><code>setItem() / getItem()</code></td>
      <td>write and read string values</td>
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
    <title>HTML Web Storage API practice</title>
  </head>
  <body>
    <label>
      Display name
      <input id="display-name" name="displayName">
    </label>
    <script>
      const displayName = document.querySelector('#display-name');
      displayName.value = localStorage.getItem('displayName') || '';
      displayName.addEventListener('input', () => localStorage.setItem('displayName', displayName.value));
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML Web Storage API without unrelated layout code.
- Pay attention to `localStorage`: persists until cleared.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `localStorage` | persists until cleared | Use it while practicing HTML Web Storage API. |
| `sessionStorage` | persists for the current tab session | Use it while practicing HTML Web Storage API. |
| `setItem() / getItem()` | write and read string values | Use it while practicing HTML Web Storage API. |

## Browser, accessibility, and SEO notes

- Test HTML Web Storage API in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML Web Storage API only for appearance instead of matching the content role.
- Forgetting `localStorage` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `web-storage.html`, copy the first example, then add one extra line that uses `localStorage` correctly in your own content.

## Next step

Next step: continue with **HTML Web Workers API** so the next concept builds on this one.
