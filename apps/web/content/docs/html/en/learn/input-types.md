---
title: "HTML Input Types"
description: "This page explains selecting the right input type for validation, mobile keyboards, and browser UI with examples, tables, and practical HTML notes."
seoTitle: "HTML Input Types Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Input Types with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. For precise authoring."
keywords: "HTML, HTML Input Types, HTML input types, email number checkbox, form input"
order: 43
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Input Types

HTML Input Types focuses on selecting the right input type for validation, mobile keyboards, and browser UI. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Input Types, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `type="email"`: validates an email-like value.
- `type="number"`: opens numeric controls and keyboards.
- `type="checkbox"`: captures an on/off choice.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="input-types" aria-labelledby="input-types-title">
  <h2 id="input-types-title">HTML Input Types</h2>
  <p>selecting the right input type for validation, mobile keyboards, and browser UI.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Input Types quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>type=&quot;email&quot;</code></td><td>validates an email-like value</td></tr>
    <tr><td><code>type=&quot;number&quot;</code></td><td>opens numeric controls and keyboards</td></tr>
    <tr><td><code>type=&quot;checkbox&quot;</code></td><td>captures an on/off choice</td></tr>
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
    <title>HTML Input Types practice</title>
  </head>
  <body>
    <section class="input-types" aria-labelledby="input-types-title">
      <h2 id="input-types-title">HTML Input Types</h2>
      <p>selecting the right input type for validation, mobile keyboards, and browser UI.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `type="email"` | validates an email-like value | In HTML Input Types, match it to the real page purpose, not just the visual result. |
| `type="number"` | opens numeric controls and keyboards | In HTML Input Types, match it to the real page purpose, not just the visual result. |
| `type="checkbox"` | captures an on/off choice | In HTML Input Types, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Input Types only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `type="email"` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `input-types.html`, run the first example, then replace at least one use of `type="email"` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Input Attributes** so the learning path builds on this concept.
