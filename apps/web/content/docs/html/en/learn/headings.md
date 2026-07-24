---
title: "HTML Headings"
description: "This page explains building a scannable outline with h1 through h6 without skipping meaning with examples, tables, and practical HTML notes."
seoTitle: "HTML Headings Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Headings with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Headings, HTML headings, h1 h2 h3, SEO heading structure"
order: 7
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Headings

HTML Headings focuses on building a scannable outline with h1 through h6 without skipping meaning. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Headings, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<h1>`: one main page heading.
- `<h2>`: major sections under the h1.
- `<h3>-<h6>`: deeper subsections in order.
- For this topic, clear meaning for users, screen readers, and search engines is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<article>
  <h1>HTML course</h1>
  <h2>HTML Headings</h2>
  <p>building a scannable outline with h1 through h6 without skipping meaning.</p>
</article>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Headings quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;h1&gt;</code></td><td>one main page heading</td></tr>
    <tr><td><code>&lt;h2&gt;</code></td><td>major sections under the h1</td></tr>
    <tr><td><code>&lt;h3&gt;-&lt;h6&gt;</code></td><td>deeper subsections in order</td></tr>
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
    <title>HTML Headings practice</title>
  </head>
  <body>
    <article>
      <h1>HTML course</h1>
      <h2>HTML Headings</h2>
      <p>building a scannable outline with h1 through h6 without skipping meaning.</p>
    </article>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<h1>` | one main page heading | In HTML Headings, match it to the real page purpose, not just the visual result. |
| `<h2>` | major sections under the h1 | In HTML Headings, match it to the real page purpose, not just the visual result. |
| `<h3>-<h6>` | deeper subsections in order | In HTML Headings, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Headings only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<h1>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `headings.html`, run the first example, then replace at least one use of `<h1>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Paragraphs** so the learning path builds on this concept.
