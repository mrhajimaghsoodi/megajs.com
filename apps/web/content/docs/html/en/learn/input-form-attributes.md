---
title: "HTML Input Form Attributes"
description: "This page explains overriding form action, method, target, and validation from a single control with examples, tables, and practical HTML notes."
seoTitle: "HTML Input Form Attributes Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Input Form Attributes with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages."
keywords: "HTML, HTML Input Form Attributes, HTML input form attributes, formaction formmethod, submit button"
order: 45
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Input Form Attributes

HTML Input Form Attributes focuses on overriding form action, method, target, and validation from a single control. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Input Form Attributes, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `formaction`: overrides the parent form action.
- `formmethod`: overrides get or post for one button.
- `formnovalidate`: skips validation for one submit action.
- For this topic, clear labels, understandable validation, and predictable submission is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<form action="/subscribe" method="post">
  <label for="input-form-attributes-email">Email</label>
  <input id="input-form-attributes-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Input Form Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>formaction</code></td><td>overrides the parent form action</td></tr>
    <tr><td><code>formmethod</code></td><td>overrides get or post for one button</td></tr>
    <tr><td><code>formnovalidate</code></td><td>skips validation for one submit action</td></tr>
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
    <title>HTML Input Form Attributes practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="input-form-attributes-email">Email</label>
      <input id="input-form-attributes-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `formaction` | overrides the parent form action | In HTML Input Form Attributes, match it to the real page purpose, not just the visual result. |
| `formmethod` | overrides get or post for one button | In HTML Input Form Attributes, match it to the real page purpose, not just the visual result. |
| `formnovalidate` | skips validation for one submit action | In HTML Input Form Attributes, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Input Form Attributes only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `formaction` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `input-form-attributes.html`, run the first example, then replace at least one use of `formaction` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Graphics** so the learning path builds on this concept.
