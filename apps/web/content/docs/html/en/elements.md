---
title: "HTML Elements"
description: "Learn how opening tags, content, nested children, and closing tags form meaning with real HTML examples and practical checks."
seoTitle: "HTML Elements Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Elements with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML elements, opening tag closing tag, nested HTML"
order: 5
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Elements

In HTML Elements, you learn how opening tags, content, nested children, and closing tags form meaning. The focus is HTML elements, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you decide what wrapper or content element fits a piece of content. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML elements?

- It gives HTML elements a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `opening tag`, `content` and `closing tag`.
- It improves real pages when you decide what wrapper or content element fits a piece of content, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p class="lead">This paragraph is one HTML element.</p>
<button type="button">Save</button>
<section>
  <h2>Nested elements</h2>
  <p>Elements can contain other elements.</p>
</section>
```

### Example 2: Options in context

```html
<section class="elements-notes" aria-labelledby="elements-title">
  <h2 id="elements-title">HTML Elements options</h2>
  <table>
    <caption>Key syntax for HTML elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>opening tag</code></td>
      <td>starts an element and can hold attributes</td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>the text or child elements inside</td>
    </tr>
    <tr>
      <td><code>closing tag</code></td>
      <td>ends most non-void elements</td>
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
    <title>HTML Elements practice</title>
  </head>
  <body>
    <p class="lead">This paragraph is one HTML element.</p>
    <button type="button">Save</button>
    <section>
      <h2>Nested elements</h2>
      <p>Elements can contain other elements.</p>
    </section>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML elements without unrelated layout code.
- Pay attention to `opening tag`: starts an element and can hold attributes.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `opening tag` | starts an element and can hold attributes | Use it while practicing HTML elements. |
| `content` | the text or child elements inside | Use it while practicing HTML elements. |
| `closing tag` | ends most non-void elements | Use it while practicing HTML elements. |

## Browser, accessibility, and SEO notes

- Test HTML elements in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML elements only for appearance instead of matching the content role.
- Forgetting `opening tag` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `elements.html`, copy the first example, then add one extra line that uses `opening tag` correctly in your own content.

## Next step

Next step: continue with **HTML Attributes** so the next concept builds on this one.
