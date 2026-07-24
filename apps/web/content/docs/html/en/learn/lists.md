---
title: "HTML Lists"
description: "This page explains choosing ordered, unordered, and description lists for grouped content with examples, tables, and practical HTML notes."
seoTitle: "HTML Lists Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Lists with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Lists, HTML lists, ul ol dl li, ordered list unordered list"
order: 20
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Lists

HTML Lists focuses on choosing ordered, unordered, and description lists for grouped content. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Lists, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<ul>`: groups items where order does not matter.
- `<ol>`: groups ordered steps or rankings.
- `<dl>`: pairs terms with descriptions.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<ol>
  <li>Create the HTML file.</li>
  <li>Add semantic sections.</li>
  <li>Test links and forms.</li>
</ol>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Lists quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;ul&gt;</code></td><td>groups items where order does not matter</td></tr>
    <tr><td><code>&lt;ol&gt;</code></td><td>groups ordered steps or rankings</td></tr>
    <tr><td><code>&lt;dl&gt;</code></td><td>pairs terms with descriptions</td></tr>
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
    <title>HTML Lists practice</title>
  </head>
  <body>
    <ol>
      <li>Create the HTML file.</li>
      <li>Add semantic sections.</li>
      <li>Test links and forms.</li>
    </ol>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<ul>` | groups items where order does not matter | In HTML Lists, match it to the real page purpose, not just the visual result. |
| `<ol>` | groups ordered steps or rankings | In HTML Lists, match it to the real page purpose, not just the visual result. |
| `<dl>` | pairs terms with descriptions | In HTML Lists, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Lists only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<ul>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `lists.html`, run the first example, then replace at least one use of `<ul>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Block and Inline Elements** so the learning path builds on this concept.
