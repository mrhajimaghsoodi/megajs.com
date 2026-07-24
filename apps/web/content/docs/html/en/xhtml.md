---
title: "HTML and XHTML"
description: "Learn how modern HTML differs from stricter XML-style syntax with real HTML examples and practical checks."
seoTitle: "HTML and XHTML Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML and XHTML with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML XHTML, XHTML syntax, modern HTML"
order: 38
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML and XHTML

In HTML and XHTML, you learn how modern HTML differs from stricter XML-style syntax. The focus is HTML and XHTML, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you read old examples or integrate XML-like templates. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML and XHTML?

- It gives HTML and XHTML a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `HTML parsing`, `XHTML` and `void elements`.
- It improves real pages when you read old examples or integrate XML-like templates, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<!-- Valid in modern HTML and also close to XHTML style -->
<img src="logo.svg" alt="Logo">
<input type="email" name="email">
```

### Example 2: Options in context

```html
<section class="xhtml-notes" aria-labelledby="xhtml-title">
  <h2 id="xhtml-title">HTML and XHTML options</h2>
  <table>
    <caption>Key syntax for HTML and XHTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>HTML parsing</code></td>
      <td>forgives some syntax mistakes</td>
    </tr>
    <tr>
      <td><code>XHTML</code></td>
      <td>requires well-formed XML syntax</td>
    </tr>
    <tr>
      <td><code>void elements</code></td>
      <td>do not need XML-style closing slash in HTML</td>
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
    <title>HTML and XHTML practice</title>
  </head>
  <body>
    <!-- Valid in modern HTML and also close to XHTML style -->
    <img src="logo.svg" alt="Logo">
    <input type="email" name="email">
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML and XHTML without unrelated layout code.
- Pay attention to `HTML parsing`: forgives some syntax mistakes.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `HTML parsing` | forgives some syntax mistakes | Use it while practicing HTML and XHTML. |
| `XHTML` | requires well-formed XML syntax | Use it while practicing HTML and XHTML. |
| `void elements` | do not need XML-style closing slash in HTML | Use it while practicing HTML and XHTML. |

## Browser, accessibility, and SEO notes

- Test HTML and XHTML in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML and XHTML only for appearance instead of matching the content role.
- Forgetting `HTML parsing` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `xhtml.html`, copy the first example, then add one extra line that uses `HTML parsing` correctly in your own content.

## Next step

Next step: continue with **HTML div Element** so the next concept builds on this one.
