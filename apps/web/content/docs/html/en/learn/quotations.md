---
title: "HTML Quotations"
description: "This page explains representing quotes, abbreviations, addresses, and citations with precise elements with examples, tables, and practical HTML notes."
seoTitle: "HTML Quotations Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Quotations with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. For precise authoring."
keywords: "HTML, HTML Quotations, HTML quotations, blockquote q abbr cite, HTML citation"
order: 11
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Quotations

HTML Quotations focuses on representing quotes, abbreviations, addresses, and citations with precise elements. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Quotations, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<blockquote>`: wraps a longer quoted passage.
- `<q>`: marks a short inline quote.
- `<abbr title>`: expands abbreviations for users.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="quotations" aria-labelledby="quotations-title">
  <h2 id="quotations-title">HTML Quotations</h2>
  <p>representing quotes, abbreviations, addresses, and citations with precise elements.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Quotations quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;blockquote&gt;</code></td><td>wraps a longer quoted passage</td></tr>
    <tr><td><code>&lt;q&gt;</code></td><td>marks a short inline quote</td></tr>
    <tr><td><code>&lt;abbr title&gt;</code></td><td>expands abbreviations for users</td></tr>
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
    <title>HTML Quotations practice</title>
  </head>
  <body>
    <section class="quotations" aria-labelledby="quotations-title">
      <h2 id="quotations-title">HTML Quotations</h2>
      <p>representing quotes, abbreviations, addresses, and citations with precise elements.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<blockquote>` | wraps a longer quoted passage | In HTML Quotations, match it to the real page purpose, not just the visual result. |
| `<q>` | marks a short inline quote | In HTML Quotations, match it to the real page purpose, not just the visual result. |
| `<abbr title>` | expands abbreviations for users | In HTML Quotations, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Quotations only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<blockquote>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `quotations.html`, run the first example, then replace at least one use of `<blockquote>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Comments** so the learning path builds on this concept.
