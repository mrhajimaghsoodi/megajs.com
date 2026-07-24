---
title: "HTML Symbols"
description: "Learn how copyright, currency, math, and arrow symbols can be inserted with real HTML examples and practical checks."
seoTitle: "HTML Symbols Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Symbols with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML symbols, copyright degree arrow, HTML entity symbols"
order: 34
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Symbols

In HTML Symbols, you learn how copyright, currency, math, and arrow symbols can be inserted. The focus is HTML symbols, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a keyboard does not provide the exact symbol you need. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML symbols?

- It gives HTML symbols a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `&copy;`, `&deg;` and `&rarr;`.
- It improves real pages when a keyboard does not provide the exact symbol you need, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p>Copyright &copy; 2026</p>
<p>Temperature: 24&deg;C</p>
<p>Arrow: &rarr;</p>
```

### Example 2: Options in context

```html
<section class="symbols-notes" aria-labelledby="symbols-title">
  <h2 id="symbols-title">HTML Symbols options</h2>
  <table>
    <caption>Key syntax for HTML symbols</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&amp;copy;</code></td>
      <td>prints the copyright symbol</td>
    </tr>
    <tr>
      <td><code>&amp;deg;</code></td>
      <td>prints the degree symbol</td>
    </tr>
    <tr>
      <td><code>&amp;rarr;</code></td>
      <td>prints a right arrow</td>
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
    <title>HTML Symbols practice</title>
  </head>
  <body>
    <p>Copyright &copy; 2026</p>
    <p>Temperature: 24&deg;C</p>
    <p>Arrow: &rarr;</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML symbols without unrelated layout code.
- Pay attention to `&copy;`: prints the copyright symbol.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `&copy;` | prints the copyright symbol | Use it while practicing HTML symbols. |
| `&deg;` | prints the degree symbol | Use it while practicing HTML symbols. |
| `&rarr;` | prints a right arrow | Use it while practicing HTML symbols. |

## Browser, accessibility, and SEO notes

- Test HTML symbols in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML symbols only for appearance instead of matching the content role.
- Forgetting `&copy;` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `symbols.html`, copy the first example, then add one extra line that uses `&copy;` correctly in your own content.

## Next step

Next step: continue with **HTML Emojis** so the next concept builds on this one.
