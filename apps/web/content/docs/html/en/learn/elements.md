---
title: "HTML Elements"
description: "This page explains how opening tags, content, nested children, and closing tags create meaning with examples, tables, and practical HTML notes."
seoTitle: "HTML Elements Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Elements with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Elements, HTML elements, opening tag, nested HTML"
order: 5
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Elements

HTML Elements focuses on how opening tags, content, nested children, and closing tags create meaning. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Elements, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `opening tag`: starts an element and can hold attributes.
- `content`: the text or child elements inside.
- `closing tag`: ends most non-void elements.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="elements" aria-labelledby="elements-title">
  <h2 id="elements-title">HTML Elements</h2>
  <p>how opening tags, content, nested children, and closing tags create meaning.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Elements quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>opening tag</code></td><td>starts an element and can hold attributes</td></tr>
    <tr><td><code>content</code></td><td>the text or child elements inside</td></tr>
    <tr><td><code>closing tag</code></td><td>ends most non-void elements</td></tr>
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
    <title>HTML Elements practice</title>
  </head>
  <body>
    <section class="elements" aria-labelledby="elements-title">
      <h2 id="elements-title">HTML Elements</h2>
      <p>how opening tags, content, nested children, and closing tags create meaning.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `opening tag` | starts an element and can hold attributes | In HTML Elements, match it to the real page purpose, not just the visual result. |
| `content` | the text or child elements inside | In HTML Elements, match it to the real page purpose, not just the visual result. |
| `closing tag` | ends most non-void elements | In HTML Elements, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Elements only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `opening tag` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `elements.html`, run the first example, then replace at least one use of `opening tag` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Attributes** so the learning path builds on this concept.
