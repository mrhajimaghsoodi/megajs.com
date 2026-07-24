---
title: "HTML Graphics"
description: "This page explains drawing and embedding browser-native graphics with canvas and SVG with examples, tables, and practical HTML notes."
seoTitle: "HTML Graphics Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Graphics with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Graphics, HTML graphics, HTML Graphics tutorial"
order: 46
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Graphics

HTML Graphics focuses on drawing and embedding browser-native graphics with canvas and SVG. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Graphics, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<canvas>`: creates a scriptable bitmap drawing surface.
- `<svg>`: embeds scalable vector graphics.
- `fallback text`: keeps non-visual users informed.
- For this topic, useful fallback or labels for non-visual users is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<canvas id="graphics-chart" width="320" height="120">Chart fallback text</canvas>
<script>
  const canvas = document.querySelector('#graphics-chart');
  const context = canvas.getContext('2d');
  context.fillRect(20, 30, 160, 50);
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Graphics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;canvas&gt;</code></td><td>creates a scriptable bitmap drawing surface</td></tr>
    <tr><td><code>&lt;svg&gt;</code></td><td>embeds scalable vector graphics</td></tr>
    <tr><td><code>fallback text</code></td><td>keeps non-visual users informed</td></tr>
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
    <title>HTML Graphics practice</title>
  </head>
  <body>
    <canvas id="graphics-chart" width="320" height="120">Chart fallback text</canvas>
    <script>
      const canvas = document.querySelector('#graphics-chart');
      const context = canvas.getContext('2d');
      context.fillRect(20, 30, 160, 50);
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<canvas>` | creates a scriptable bitmap drawing surface | In HTML Graphics, match it to the real page purpose, not just the visual result. |
| `<svg>` | embeds scalable vector graphics | In HTML Graphics, match it to the real page purpose, not just the visual result. |
| `fallback text` | keeps non-visual users informed | In HTML Graphics, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Graphics only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<canvas>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `graphics.html`, run the first example, then replace at least one use of `<canvas>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Canvas** so the learning path builds on this concept.
