---
title: "HTML id Attribute"
description: "Learn how one unique identifier targets labels, fragments, CSS, and scripts with real HTML examples and practical checks."
seoTitle: "HTML id Attribute Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML id Attribute with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Build confidence."
keywords: "HTML tutorial, HTML id, id attribute, fragment links"
order: 23
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML id Attribute

In HTML id Attribute, you learn how one unique identifier targets labels, fragments, CSS, and scripts. The focus is HTML id attribute, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when exactly one element needs to be named on a page. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML id attribute?

- It gives HTML id attribute a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `id`, `for` and `#fragment`.
- It improves real pages when exactly one element needs to be named on a page, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
<a href="#email">Jump to the email field</a>
```

### Example 2: Options in context

```html
<section class="id-notes" aria-labelledby="id-title">
  <h2 id="id-title">HTML id Attribute options</h2>
  <table>
    <caption>Key syntax for HTML id attribute</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>id</code></td>
      <td>must be unique in the document</td>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td>connects a label to an input id</td>
    </tr>
    <tr>
      <td><code>#fragment</code></td>
      <td>links directly to an element id</td>
    </tr>
    </tbody>
  </table>
</section>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML id Attribute practice</title>
  </head>
  <body>
    <label for="email">Email</label>
    <input id="email" name="email" type="email">
    <a href="#email">Jump to the email field</a>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML id attribute without unrelated layout code.
- Pay attention to `id`: must be unique in the document.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `id` | must be unique in the document | Use it while practicing HTML id attribute. |
| `for` | connects a label to an input id | Use it while practicing HTML id attribute. |
| `#fragment` | links directly to an element id | Use it while practicing HTML id attribute. |

## Browser, accessibility, and SEO notes

- Test HTML id attribute in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML id attribute only for appearance instead of matching the content role.
- Forgetting `id` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `id.html`, copy the first example, then add one extra line that uses `id` correctly in your own content.

## Next step

Next step: continue with **HTML Iframes** so the next concept builds on this one.
