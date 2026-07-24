---
title: "HTML Comments"
description: "This page explains leaving source notes that explain decisions without appearing in the page with examples, tables, and practical HTML notes."
seoTitle: "HTML Comments Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Comments with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Comments, HTML comments, HTML comment syntax, comment in HTML"
order: 12
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Comments

HTML Comments focuses on leaving source notes that explain decisions without appearing in the page. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Comments, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<!-- ... -->`: creates an HTML comment.
- `TODO`: marks unfinished markup carefully.
- `debug note`: explains unusual markup choices.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="comments" aria-labelledby="comments-title">
  <h2 id="comments-title">HTML Comments</h2>
  <p>leaving source notes that explain decisions without appearing in the page.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Comments quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!-- ... --&gt;</code></td><td>creates an HTML comment</td></tr>
    <tr><td><code>TODO</code></td><td>marks unfinished markup carefully</td></tr>
    <tr><td><code>debug note</code></td><td>explains unusual markup choices</td></tr>
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
    <title>HTML Comments practice</title>
  </head>
  <body>
    <section class="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">HTML Comments</h2>
      <p>leaving source notes that explain decisions without appearing in the page.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<!-- ... -->` | creates an HTML comment | In HTML Comments, match it to the real page purpose, not just the visual result. |
| `TODO` | marks unfinished markup carefully | In HTML Comments, match it to the real page purpose, not just the visual result. |
| `debug note` | explains unusual markup choices | In HTML Comments, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Comments only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<!-- ... -->` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `comments.html`, run the first example, then replace at least one use of `<!-- ... -->` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Colors** so the learning path builds on this concept.
