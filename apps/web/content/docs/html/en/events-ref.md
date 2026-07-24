---
title: "HTML Event Reference"
description: "Learn how user and browser events connect elements to JavaScript handlers with real HTML examples and practical checks."
seoTitle: "HTML Event Reference Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Event Reference with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML events reference, onclick input submit, JavaScript events HTML"
order: 65
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Event Reference

In HTML Event Reference, you learn how user and browser events connect elements to JavaScript handlers. The focus is HTML event reference, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when interaction requires reacting to clicks, input, submit, load, or drag events. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML event reference?

- It gives HTML event reference a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `click`, `input` and `submit`.
- It improves real pages when interaction requires reacting to clicks, input, submit, load, or drag events, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<button id="save" type="button">Save</button>
<input id="search" aria-label="Live search">
<script>
  document.querySelector('#save').addEventListener('click', () => alert('Saved'));
  document.querySelector('#search').addEventListener('input', (event) => console.log(event.target.value));
</script>
```

### Example 2: Options in context

```html
<section class="events-ref-notes" aria-labelledby="events-ref-title">
  <h2 id="events-ref-title">HTML Event Reference options</h2>
  <table>
    <caption>Key syntax for HTML event reference</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>click</code></td>
      <td>fires when a user activates an element</td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>fires as form values change</td>
    </tr>
    <tr>
      <td><code>submit</code></td>
      <td>fires when a form is submitted</td>
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
    <title>HTML Event Reference practice</title>
  </head>
  <body>
    <button id="save" type="button">Save</button>
    <input id="search" aria-label="Live search">
    <script>
      document.querySelector('#save').addEventListener('click', () => alert('Saved'));
      document.querySelector('#search').addEventListener('input', (event) => console.log(event.target.value));
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML event reference without unrelated layout code.
- Pay attention to `click`: fires when a user activates an element.
- The second and third examples show how the same idea fits into a larger page with exact syntax, purpose, and limitations for each item.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `click` | fires when a user activates an element | Use it while practicing HTML event reference. |
| `input` | fires as form values change | Use it while practicing HTML event reference. |
| `submit` | fires when a form is submitted | Use it while practicing HTML event reference. |

## Browser, accessibility, and SEO notes

- Test HTML event reference in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML event reference only for appearance instead of matching the content role.
- Forgetting `click` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `events-ref.html`, copy the first example, then add one extra line that uses `click` correctly in your own content.

## Next step

Next step: revisit the reference pages and improve one real project page for semantics, accessibility, and validation.
