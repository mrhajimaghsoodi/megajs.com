---
title: "HTML APIs"
description: "Learn how markup and JavaScript work with browser capabilities with real HTML examples and practical checks."
seoTitle: "HTML APIs Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML APIs with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML APIs, browser APIs, JavaScript HTML APIs"
order: 54
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML APIs

In HTML APIs, you learn how markup and JavaScript work with browser capabilities. The focus is HTML APIs, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a page needs storage, location, workers, drag-and-drop, or live updates. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML APIs?

- It gives HTML APIs a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `navigator`, `localStorage` and `events`.
- It improves real pages when a page needs storage, location, workers, drag-and-drop, or live updates, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<button id="save" type="button">Save preference</button>
<script>
  document.querySelector('#save').addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
  });
</script>
```

### Example 2: Options in context

```html
<section class="apis-notes" aria-labelledby="apis-title">
  <h2 id="apis-title">HTML APIs options</h2>
  <table>
    <caption>Key syntax for HTML APIs</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>navigator</code></td>
      <td>exposes many browser capabilities</td>
    </tr>
    <tr>
      <td><code>localStorage</code></td>
      <td>stores small client-side values</td>
    </tr>
    <tr>
      <td><code>events</code></td>
      <td>connect browser activity to handlers</td>
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
    <title>HTML APIs practice</title>
  </head>
  <body>
    <button id="save" type="button">Save preference</button>
    <script>
      document.querySelector('#save').addEventListener('click', () => {
        localStorage.setItem('theme', 'dark');
      });
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML APIs without unrelated layout code.
- Pay attention to `navigator`: exposes many browser capabilities.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `navigator` | exposes many browser capabilities | Use it while practicing HTML APIs. |
| `localStorage` | stores small client-side values | Use it while practicing HTML APIs. |
| `events` | connect browser activity to handlers | Use it while practicing HTML APIs. |

## Browser, accessibility, and SEO notes

- Test HTML APIs in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML APIs only for appearance instead of matching the content role.
- Forgetting `navigator` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `apis.html`, copy the first example, then add one extra line that uses `navigator` correctly in your own content.

## Next step

Next step: continue with **HTML Web APIs** so the next concept builds on this one.
