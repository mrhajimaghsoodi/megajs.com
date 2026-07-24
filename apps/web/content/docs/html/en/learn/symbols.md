---
title: "HTML Symbols"
description: "This page explains adding copyright, currency, math, arrow, and other symbols with entities with examples, tables, and practical HTML notes."
seoTitle: "HTML Symbols Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Symbols with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Symbols, HTML symbols, copyright degree arrow, HTML entity symbols"
order: 34
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Symbols

HTML Symbols focuses on adding copyright, currency, math, arrow, and other symbols with entities. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Symbols, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `&copy;`: prints the copyright symbol.
- `&deg;`: prints the degree symbol.
- `&rarr;`: prints a right arrow.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="symbols" aria-labelledby="symbols-title">
  <h2 id="symbols-title">HTML Symbols</h2>
  <p>adding copyright, currency, math, arrow, and other symbols with entities.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Symbols quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&amp;copy;</code></td><td>prints the copyright symbol</td></tr>
    <tr><td><code>&amp;deg;</code></td><td>prints the degree symbol</td></tr>
    <tr><td><code>&amp;rarr;</code></td><td>prints a right arrow</td></tr>
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
    <title>HTML Symbols practice</title>
  </head>
  <body>
    <section class="symbols" aria-labelledby="symbols-title">
      <h2 id="symbols-title">HTML Symbols</h2>
      <p>adding copyright, currency, math, arrow, and other symbols with entities.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `&copy;` | prints the copyright symbol | In HTML Symbols, match it to the real page purpose, not just the visual result. |
| `&deg;` | prints the degree symbol | In HTML Symbols, match it to the real page purpose, not just the visual result. |
| `&rarr;` | prints a right arrow | In HTML Symbols, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Symbols only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `&copy;` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `symbols.html`, run the first example, then replace at least one use of `&copy;` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Emojis** so the learning path builds on this concept.
