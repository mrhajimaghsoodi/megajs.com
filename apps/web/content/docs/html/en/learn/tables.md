---
title: "HTML Tables"
description: "This page explains organizing real tabular data with captions, headers, rows, and cells with examples, tables, and practical HTML notes."
seoTitle: "HTML Tables Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Tables with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Tables, HTML tables, table th td caption, accessible tables"
order: 19
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Tables

HTML Tables focuses on organizing real tabular data with captions, headers, rows, and cells. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Tables, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<table>`: wraps tabular data.
- `<th scope>`: labels rows or columns for assistive tech.
- `<caption>`: names the table for context.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<table>
  <caption>HTML study plan</caption>
  <thead><tr><th scope="col">Topic</th><th scope="col">Status</th></tr></thead>
  <tbody><tr><td>Forms</td><td>In progress</td></tr></tbody>
</table>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Tables quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;table&gt;</code></td><td>wraps tabular data</td></tr>
    <tr><td><code>&lt;th scope&gt;</code></td><td>labels rows or columns for assistive tech</td></tr>
    <tr><td><code>&lt;caption&gt;</code></td><td>names the table for context</td></tr>
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
    <title>HTML Tables practice</title>
  </head>
  <body>
    <table>
      <caption>HTML study plan</caption>
      <thead><tr><th scope="col">Topic</th><th scope="col">Status</th></tr></thead>
      <tbody><tr><td>Forms</td><td>In progress</td></tr></tbody>
    </table>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<table>` | wraps tabular data | In HTML Tables, match it to the real page purpose, not just the visual result. |
| `<th scope>` | labels rows or columns for assistive tech | In HTML Tables, match it to the real page purpose, not just the visual result. |
| `<caption>` | names the table for context | In HTML Tables, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Tables only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<table>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `tables.html`, run the first example, then replace at least one use of `<table>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Lists** so the learning path builds on this concept.
