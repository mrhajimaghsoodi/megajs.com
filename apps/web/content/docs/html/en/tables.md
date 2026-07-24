---
title: "HTML Tables"
description: "Learn how rows, cells, headers, and captions describe tabular data with real HTML examples and practical checks."
seoTitle: "HTML Tables Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Tables with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML tables, table th td caption, accessible tables"
order: 19
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Tables

In HTML Tables, you learn how rows, cells, headers, and captions describe tabular data. The focus is HTML tables, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when data has a row-and-column relationship, not just a visual grid. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML tables?

- It gives HTML tables a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<table>`, `<th scope>` and `<caption>`.
- It improves real pages when data has a row-and-column relationship, not just a visual grid, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<table>
  <caption>Course modules</caption>
  <thead>
    <tr><th scope="col">Module</th><th scope="col">Status</th></tr>
  </thead>
  <tbody>
    <tr><td>HTML Basics</td><td>Ready</td></tr>
  </tbody>
</table>
```

### Example 2: Options in context

```html
<section class="tables-notes" aria-labelledby="tables-title">
  <h2 id="tables-title">HTML Tables options</h2>
  <table>
    <caption>Key syntax for HTML tables</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;table&gt;</code></td>
      <td>wraps tabular data</td>
    </tr>
    <tr>
      <td><code>&lt;th scope&gt;</code></td>
      <td>labels rows or columns for assistive tech</td>
    </tr>
    <tr>
      <td><code>&lt;caption&gt;</code></td>
      <td>names the table for context</td>
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
    <title>HTML Tables practice</title>
  </head>
  <body>
    <table>
      <caption>Course modules</caption>
      <thead>
        <tr><th scope="col">Module</th><th scope="col">Status</th></tr>
      </thead>
      <tbody>
        <tr><td>HTML Basics</td><td>Ready</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML tables without unrelated layout code.
- Pay attention to `<table>`: wraps tabular data.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<table>` | wraps tabular data | Use it while practicing HTML tables. |
| `<th scope>` | labels rows or columns for assistive tech | Use it while practicing HTML tables. |
| `<caption>` | names the table for context | Use it while practicing HTML tables. |

## Browser, accessibility, and SEO notes

- Test HTML tables in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML tables only for appearance instead of matching the content role.
- Forgetting `<table>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `tables.html`, copy the first example, then add one extra line that uses `<table>` correctly in your own content.

## Next step

Next step: continue with **HTML Lists** so the next concept builds on this one.
