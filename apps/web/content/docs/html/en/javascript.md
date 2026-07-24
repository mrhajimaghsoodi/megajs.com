---
title: "HTML JavaScript"
description: "Learn how script tags connect DOM behavior to markup with real HTML examples and practical checks."
seoTitle: "HTML JavaScript Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML JavaScript with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML JavaScript, script tag defer, DOM events"
order: 25
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML JavaScript

In HTML JavaScript, you learn how script tags connect DOM behavior to markup. The focus is JavaScript in HTML, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a page needs interaction after the HTML loads. Read each example slowly, then change one value at a time to see what the browser does.

## What is JavaScript in HTML?

- It gives JavaScript in HTML a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<script>`, `defer` and `DOM selector`.
- It improves real pages when a page needs interaction after the HTML loads, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<button id="theme-toggle" type="button">Toggle theme</button>
<script>
  document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
</script>
```

### Example 2: Options in context

```html
<section class="javascript-notes" aria-labelledby="javascript-title">
  <h2 id="javascript-title">HTML JavaScript options</h2>
  <table>
    <caption>Key syntax for JavaScript in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;script&gt;</code></td>
      <td>runs or loads JavaScript</td>
    </tr>
    <tr>
      <td><code>defer</code></td>
      <td>loads scripts without blocking parsing</td>
    </tr>
    <tr>
      <td><code>DOM selector</code></td>
      <td>finds elements by id, class, or tag</td>
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
    <title>HTML JavaScript practice</title>
  </head>
  <body>
    <button id="theme-toggle" type="button">Toggle theme</button>
    <script>
      document.querySelector('#theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
      });
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for JavaScript in HTML without unrelated layout code.
- Pay attention to `<script>`: runs or loads JavaScript.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<script>` | runs or loads JavaScript | Use it while practicing JavaScript in HTML. |
| `defer` | loads scripts without blocking parsing | Use it while practicing JavaScript in HTML. |
| `DOM selector` | finds elements by id, class, or tag | Use it while practicing JavaScript in HTML. |

## Browser, accessibility, and SEO notes

- Test JavaScript in HTML in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using JavaScript in HTML only for appearance instead of matching the content role.
- Forgetting `<script>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `javascript.html`, copy the first example, then add one extra line that uses `<script>` correctly in your own content.

## Next step

Next step: continue with **HTML File Paths** so the next concept builds on this one.
