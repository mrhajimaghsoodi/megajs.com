---
title: "HTML Forms"
description: "This page explains collecting user input with accessible controls, labels, validation, and submission settings with examples, tables, and practical HTML notes."
seoTitle: "HTML Forms Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Forms with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Forms, HTML forms, HTML Forms tutorial"
order: 40
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Forms

HTML Forms focuses on collecting user input with accessible controls, labels, validation, and submission settings. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Forms, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<form>`: wraps controls that submit data.
- `<label>`: names a control for every user.
- `<button type="submit">`: submits the form intentionally.
- For this topic, clear labels, understandable validation, and predictable submission is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<form action="/subscribe" method="post">
  <label for="forms-email">Email</label>
  <input id="forms-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Forms quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;form&gt;</code></td><td>wraps controls that submit data</td></tr>
    <tr><td><code>&lt;label&gt;</code></td><td>names a control for every user</td></tr>
    <tr><td><code>&lt;button type=&quot;submit&quot;&gt;</code></td><td>submits the form intentionally</td></tr>
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
    <title>HTML Forms practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="forms-email">Email</label>
      <input id="forms-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<form>` | wraps controls that submit data | In HTML Forms, match it to the real page purpose, not just the visual result. |
| `<label>` | names a control for every user | In HTML Forms, match it to the real page purpose, not just the visual result. |
| `<button type="submit">` | submits the form intentionally | In HTML Forms, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Forms only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<form>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `forms.html`, run the first example, then replace at least one use of `<form>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Form Attributes** so the learning path builds on this concept.
