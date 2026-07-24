---
title: "HTML Block and Inline Elements"
description: "This page explains understanding normal document flow and text-level inline elements with examples, tables, and practical HTML notes."
seoTitle: "HTML Block and Inline Elements Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Block and Inline Elements with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages."
keywords: "HTML, HTML Block and Inline Elements, HTML block inline, div span display, HTML layout flow"
order: 21
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Block and Inline Elements

HTML Block and Inline Elements focuses on understanding normal document flow and text-level inline elements. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Block and Inline Elements, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `block elements`: usually start on a new line and fill width.
- `inline elements`: flow inside text without a forced break.
- `display CSS`: changes visual layout without changing semantics.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="block-inline" aria-labelledby="block-inline-title">
  <h2 id="block-inline-title">HTML Block and Inline Elements</h2>
  <p>understanding normal document flow and text-level inline elements.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Block and Inline Elements quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>block elements</code></td><td>usually start on a new line and fill width</td></tr>
    <tr><td><code>inline elements</code></td><td>flow inside text without a forced break</td></tr>
    <tr><td><code>display CSS</code></td><td>changes visual layout without changing semantics</td></tr>
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
    <title>HTML Block and Inline Elements practice</title>
  </head>
  <body>
    <section class="block-inline" aria-labelledby="block-inline-title">
      <h2 id="block-inline-title">HTML Block and Inline Elements</h2>
      <p>understanding normal document flow and text-level inline elements.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `block elements` | usually start on a new line and fill width | In HTML Block and Inline Elements, match it to the real page purpose, not just the visual result. |
| `inline elements` | flow inside text without a forced break | In HTML Block and Inline Elements, match it to the real page purpose, not just the visual result. |
| `display CSS` | changes visual layout without changing semantics | In HTML Block and Inline Elements, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Block and Inline Elements only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `block elements` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `block-inline.html`, run the first example, then replace at least one use of `block elements` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Classes** so the learning path builds on this concept.
