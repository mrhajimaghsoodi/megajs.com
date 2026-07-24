---
title: "HTML SVG"
description: "Learn how vector shapes are written directly in HTML and scale cleanly with real HTML examples and practical checks."
seoTitle: "HTML SVG Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML SVG with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML SVG, svg viewBox circle rect, accessible SVG"
order: 48
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML SVG

In HTML SVG, you learn how vector shapes are written directly in HTML and scale cleanly. The focus is HTML SVG, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when icons, diagrams, and simple charts need sharp scalable graphics. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML SVG?

- It gives HTML SVG a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<svg viewBox>`, `<circle> / <rect>` and `<title>`.
- It improves real pages when icons, diagrams, and simple charts need sharp scalable graphics, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<svg viewBox="0 0 100 100" role="img" aria-labelledby="circle-title">
  <title id="circle-title">Blue circle</title>
  <circle cx="50" cy="50" r="40" fill="royalblue"></circle>
</svg>
```

### Example 2: Options in context

```html
<section class="svg-notes" aria-labelledby="svg-title">
  <h2 id="svg-title">HTML SVG options</h2>
  <table>
    <caption>Key syntax for HTML SVG</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;svg viewBox&gt;</code></td>
      <td>sets the internal coordinate system</td>
    </tr>
    <tr>
      <td><code>&lt;circle&gt; / &lt;rect&gt;</code></td>
      <td>draw basic vector shapes</td>
    </tr>
    <tr>
      <td><code>&lt;title&gt;</code></td>
      <td>labels the graphic accessibly</td>
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
    <title>HTML SVG practice</title>
  </head>
  <body>
    <svg viewBox="0 0 100 100" role="img" aria-labelledby="circle-title">
      <title id="circle-title">Blue circle</title>
      <circle cx="50" cy="50" r="40" fill="royalblue"></circle>
    </svg>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML SVG without unrelated layout code.
- Pay attention to `<svg viewBox>`: sets the internal coordinate system.
- The second and third examples show how the same idea fits into a larger page with fallback text, titles, canvas size, or viewBox details.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<svg viewBox>` | sets the internal coordinate system | Use it while practicing HTML SVG. |
| `<circle> / <rect>` | draw basic vector shapes | Use it while practicing HTML SVG. |
| `<title>` | labels the graphic accessibly | Use it while practicing HTML SVG. |

## Browser, accessibility, and SEO notes

- Test HTML SVG in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Provide alternative text or titles for graphics; canvas without fallback is not enough for screen readers.

## Common mistakes

- Using HTML SVG only for appearance instead of matching the content role.
- Forgetting `<svg viewBox>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `svg.html`, copy the first example, then add one extra line that uses `<svg viewBox>` correctly in your own content.

## Next step

Next step: continue with **HTML Media** so the next concept builds on this one.
