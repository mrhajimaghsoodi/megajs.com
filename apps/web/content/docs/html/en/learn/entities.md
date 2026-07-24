---
title: "HTML Entities"
description: "This page explains printing reserved characters, non-breaking spaces, and symbols safely with examples, tables, and practical HTML notes."
seoTitle: "HTML Entities Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Entities with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Entities, HTML entities, amp lt gt nbsp, reserved characters HTML"
order: 33
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Entities

HTML Entities focuses on printing reserved characters, non-breaking spaces, and symbols safely. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Entities, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `&amp;`: prints an ampersand.
- `&lt; / &gt;`: prints less-than and greater-than signs.
- `&nbsp;`: keeps words from breaking apart.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="entities" aria-labelledby="entities-title">
  <h2 id="entities-title">HTML Entities</h2>
  <p>printing reserved characters, non-breaking spaces, and symbols safely.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Entities quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&amp;amp;</code></td><td>prints an ampersand</td></tr>
    <tr><td><code>&amp;lt; / &amp;gt;</code></td><td>prints less-than and greater-than signs</td></tr>
    <tr><td><code>&amp;nbsp;</code></td><td>keeps words from breaking apart</td></tr>
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
    <title>HTML Entities practice</title>
  </head>
  <body>
    <section class="entities" aria-labelledby="entities-title">
      <h2 id="entities-title">HTML Entities</h2>
      <p>printing reserved characters, non-breaking spaces, and symbols safely.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `&amp;` | prints an ampersand | In HTML Entities, match it to the real page purpose, not just the visual result. |
| `&lt; / &gt;` | prints less-than and greater-than signs | In HTML Entities, match it to the real page purpose, not just the visual result. |
| `&nbsp;` | keeps words from breaking apart | In HTML Entities, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Entities only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `&amp;` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `entities.html`, run the first example, then replace at least one use of `&amp;` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Symbols** so the learning path builds on this concept.
