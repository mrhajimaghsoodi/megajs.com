---
title: "HTML Block and Inline Elements"
description: "Learn how elements participate in normal document flow with real HTML examples and practical checks."
seoTitle: "HTML Block and Inline Elements Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Block and Inline Elements with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML block inline, div span display, HTML layout flow"
order: 21
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Block and Inline Elements

In HTML Block and Inline Elements, you learn how elements participate in normal document flow. The focus is block and inline elements, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when layout surprises come from how elements occupy space. Read each example slowly, then change one value at a time to see what the browser does.

## What is block and inline elements?

- It gives block and inline elements a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `block elements`, `inline elements` and `display CSS`.
- It improves real pages when layout surprises come from how elements occupy space, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<div class="card">
  <h2>Block elements start on a new line.</h2>
  <p>Inline elements like <a href="/docs">links</a> stay inside text flow.</p>
</div>
```

### Example 2: Options in context

```html
<section class="block-inline-notes" aria-labelledby="block-inline-title">
  <h2 id="block-inline-title">HTML Block and Inline Elements options</h2>
  <table>
    <caption>Key syntax for block and inline elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>block elements</code></td>
      <td>usually start on a new line and fill width</td>
    </tr>
    <tr>
      <td><code>inline elements</code></td>
      <td>flow inside text without a line break</td>
    </tr>
    <tr>
      <td><code>display CSS</code></td>
      <td>can change visual layout without changing semantics</td>
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
    <title>HTML Block and Inline Elements practice</title>
  </head>
  <body>
    <div class="card">
      <h2>Block elements start on a new line.</h2>
      <p>Inline elements like <a href="/docs">links</a> stay inside text flow.</p>
    </div>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for block and inline elements without unrelated layout code.
- Pay attention to `block elements`: usually start on a new line and fill width.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `block elements` | usually start on a new line and fill width | Use it while practicing block and inline elements. |
| `inline elements` | flow inside text without a line break | Use it while practicing block and inline elements. |
| `display CSS` | can change visual layout without changing semantics | Use it while practicing block and inline elements. |

## Browser, accessibility, and SEO notes

- Test block and inline elements in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using block and inline elements only for appearance instead of matching the content role.
- Forgetting `block elements` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `block-inline.html`, copy the first example, then add one extra line that uses `block elements` correctly in your own content.

## Next step

Next step: continue with **HTML Classes** so the next concept builds on this one.
