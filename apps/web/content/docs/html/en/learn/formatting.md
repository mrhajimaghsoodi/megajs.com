---
title: "HTML Text Formatting"
description: "This page explains marking importance, emphasis, insertions, deletions, and code-like text semantically with examples, tables, and practical HTML notes."
seoTitle: "HTML Text Formatting Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Text Formatting with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Text Formatting, HTML formatting, strong em mark code, semantic text"
order: 10
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Text Formatting

HTML Text Formatting focuses on marking importance, emphasis, insertions, deletions, and code-like text semantically. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Text Formatting, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<strong>`: marks strong importance.
- `<em>`: marks stress emphasis.
- `<mark> / <code>`: highlights text or marks code fragments.
- For this topic, clear labels, understandable validation, and predictable submission is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<form action="/subscribe" method="post">
  <label for="formatting-email">Email</label>
  <input id="formatting-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Text Formatting quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;strong&gt;</code></td><td>marks strong importance</td></tr>
    <tr><td><code>&lt;em&gt;</code></td><td>marks stress emphasis</td></tr>
    <tr><td><code>&lt;mark&gt; / &lt;code&gt;</code></td><td>highlights text or marks code fragments</td></tr>
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
    <title>HTML Text Formatting practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="formatting-email">Email</label>
      <input id="formatting-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<strong>` | marks strong importance | In HTML Text Formatting, match it to the real page purpose, not just the visual result. |
| `<em>` | marks stress emphasis | In HTML Text Formatting, match it to the real page purpose, not just the visual result. |
| `<mark> / <code>` | highlights text or marks code fragments | In HTML Text Formatting, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Text Formatting only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<strong>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `formatting.html`, run the first example, then replace at least one use of `<strong>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Quotations** so the learning path builds on this concept.
