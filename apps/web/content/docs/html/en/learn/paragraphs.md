---
title: "HTML Paragraphs"
description: "This page explains writing readable text blocks while understanding collapsed whitespace with examples, tables, and practical HTML notes."
seoTitle: "HTML Paragraphs Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Paragraphs with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. For precise authoring."
keywords: "HTML, HTML Paragraphs, HTML paragraphs, p br hr, HTML whitespace"
order: 8
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Paragraphs

HTML Paragraphs focuses on writing readable text blocks while understanding collapsed whitespace. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Paragraphs, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<p>`: wraps one idea or short text block.
- `<br>`: forces a meaningful line break.
- `<hr>`: marks a thematic break.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<p>Write one idea per paragraph so readers can scan the page.</p>
<p>Browsers collapse extra spaces, so use markup for structure.</p>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Paragraphs quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;p&gt;</code></td><td>wraps one idea or short text block</td></tr>
    <tr><td><code>&lt;br&gt;</code></td><td>forces a meaningful line break</td></tr>
    <tr><td><code>&lt;hr&gt;</code></td><td>marks a thematic break</td></tr>
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
    <title>HTML Paragraphs practice</title>
  </head>
  <body>
    <p>Write one idea per paragraph so readers can scan the page.</p>
    <p>Browsers collapse extra spaces, so use markup for structure.</p>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<p>` | wraps one idea or short text block | In HTML Paragraphs, match it to the real page purpose, not just the visual result. |
| `<br>` | forces a meaningful line break | In HTML Paragraphs, match it to the real page purpose, not just the visual result. |
| `<hr>` | marks a thematic break | In HTML Paragraphs, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Paragraphs only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<p>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `paragraphs.html`, run the first example, then replace at least one use of `<p>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Styles** so the learning path builds on this concept.
