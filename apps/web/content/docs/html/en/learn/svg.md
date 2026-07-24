---
title: "HTML SVG"
description: "This page explains embedding scalable vector shapes directly in markup with accessible labels with examples, tables, and practical HTML notes."
seoTitle: "HTML SVG Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML SVG with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML SVG, HTML SVG, svg viewBox, inline SVG"
order: 48
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML SVG

HTML SVG focuses on embedding scalable vector shapes directly in markup with accessible labels. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML SVG, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<svg>`: creates a vector drawing viewport.
- `viewBox`: maps drawing coordinates to rendered size.
- `<title>`: labels the graphic for accessibility.
- For this topic, useful fallback or labels for non-visual users is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<svg viewBox="0 0 120 80" role="img" aria-labelledby="svg-title">
  <title id="svg-title">HTML badge</title>
  <rect width="120" height="80" rx="12"></rect>
  <text x="24" y="48">HTML</text>
</svg>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML SVG quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;svg&gt;</code></td><td>creates a vector drawing viewport</td></tr>
    <tr><td><code>viewBox</code></td><td>maps drawing coordinates to rendered size</td></tr>
    <tr><td><code>&lt;title&gt;</code></td><td>labels the graphic for accessibility</td></tr>
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
    <title>HTML SVG practice</title>
  </head>
  <body>
    <svg viewBox="0 0 120 80" role="img" aria-labelledby="svg-title">
      <title id="svg-title">HTML badge</title>
      <rect width="120" height="80" rx="12"></rect>
      <text x="24" y="48">HTML</text>
    </svg>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<svg>` | creates a vector drawing viewport | In HTML SVG, match it to the real page purpose, not just the visual result. |
| `viewBox` | maps drawing coordinates to rendered size | In HTML SVG, match it to the real page purpose, not just the visual result. |
| `<title>` | labels the graphic for accessibility | In HTML SVG, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML SVG only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<svg>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `svg.html`, run the first example, then replace at least one use of `<svg>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Media** so the learning path builds on this concept.
