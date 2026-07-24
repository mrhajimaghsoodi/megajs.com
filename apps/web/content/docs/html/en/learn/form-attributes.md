---
title: "HTML Form Attributes"
description: "This page explains controlling where form data goes, which HTTP method is used, and how autocomplete behaves with examples, tables, and practical HTML notes."
seoTitle: "HTML Form Attributes Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Form Attributes with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Form Attributes, HTML form attributes, action method autocomplete, HTML forms"
order: 41
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Form Attributes

HTML Form Attributes focuses on controlling where form data goes, which HTTP method is used, and how autocomplete behaves. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Form Attributes, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `action`: sets the submission URL.
- `method`: chooses get or post submission.
- `autocomplete`: allows useful browser autofill.
- For this topic, clear labels, understandable validation, and predictable submission is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<form action="/subscribe" method="post">
  <label for="form-attributes-email">Email</label>
  <input id="form-attributes-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Form Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>action</code></td><td>sets the submission URL</td></tr>
    <tr><td><code>method</code></td><td>chooses get or post submission</td></tr>
    <tr><td><code>autocomplete</code></td><td>allows useful browser autofill</td></tr>
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
    <title>HTML Form Attributes practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="form-attributes-email">Email</label>
      <input id="form-attributes-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `action` | sets the submission URL | In HTML Form Attributes, match it to the real page purpose, not just the visual result. |
| `method` | chooses get or post submission | In HTML Form Attributes, match it to the real page purpose, not just the visual result. |
| `autocomplete` | allows useful browser autofill | In HTML Form Attributes, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Form Attributes only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `action` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `form-attributes.html`, run the first example, then replace at least one use of `action` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Form Elements** so the learning path builds on this concept.
