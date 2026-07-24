---
title: "HTML Links"
description: "This page explains creating accessible links to pages, files, email addresses, and page sections with examples, tables, and practical HTML notes."
seoTitle: "HTML Links Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Links with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Links, HTML links, href target rel, anchor links"
order: 15
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Links

HTML Links focuses on creating accessible links to pages, files, email addresses, and page sections. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Links, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `href`: defines the link destination.
- `target / rel`: controls new tabs and security relationship.
- `#fragment`: jumps to an element id on the page.
- For this topic, clear meaning for users, screen readers, and search engines is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<a href="/docs/html/learn/forms" rel="next">Continue to HTML forms</a>
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Read MDN</a>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Links quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>href</code></td><td>defines the link destination</td></tr>
    <tr><td><code>target / rel</code></td><td>controls new tabs and security relationship</td></tr>
    <tr><td><code>#fragment</code></td><td>jumps to an element id on the page</td></tr>
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
    <title>HTML Links practice</title>
  </head>
  <body>
    <a href="/docs/html/learn/forms" rel="next">Continue to HTML forms</a>
    <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Read MDN</a>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `href` | defines the link destination | In HTML Links, match it to the real page purpose, not just the visual result. |
| `target / rel` | controls new tabs and security relationship | In HTML Links, match it to the real page purpose, not just the visual result. |
| `#fragment` | jumps to an element id on the page | In HTML Links, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Links only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `href` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `links.html`, run the first example, then replace at least one use of `href` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Images** so the learning path builds on this concept.
