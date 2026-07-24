---
title: "HTML Graphics"
description: "Learn how canvas, SVG, and images cover different drawing needs with real HTML examples and practical checks."
seoTitle: "HTML Graphics Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Graphics with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML graphics, canvas SVG img, web graphics"
order: 46
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Graphics

In HTML Graphics, you learn how canvas, SVG, and images cover different drawing needs. The focus is HTML graphics, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when visual information should be drawn, scaled, or embedded in the browser. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML graphics?

- It gives HTML graphics a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<canvas>`, `<svg>` and `<img>`.
- It improves real pages when visual information should be drawn, scaled, or embedded in the browser, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<figure>
  <svg viewBox="0 0 120 80" role="img" aria-labelledby="chart-title">
    <title id="chart-title">Simple bar chart</title>
    <rect width="40" height="70" x="10" y="10"></rect>
  </svg>
</figure>
```

### Example 2: Options in context

```html
<section class="graphics-notes" aria-labelledby="graphics-title">
  <h2 id="graphics-title">HTML Graphics options</h2>
  <table>
    <caption>Key syntax for HTML graphics</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;canvas&gt;</code></td>
      <td>draws pixels with JavaScript</td>
    </tr>
    <tr>
      <td><code>&lt;svg&gt;</code></td>
      <td>describes scalable vector shapes in markup</td>
    </tr>
    <tr>
      <td><code>&lt;img&gt;</code></td>
      <td>embeds finished bitmap or vector files</td>
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
    <title>HTML Graphics practice</title>
  </head>
  <body>
    <figure>
      <svg viewBox="0 0 120 80" role="img" aria-labelledby="chart-title">
        <title id="chart-title">Simple bar chart</title>
        <rect width="40" height="70" x="10" y="10"></rect>
      </svg>
    </figure>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML graphics without unrelated layout code.
- Pay attention to `<canvas>`: draws pixels with JavaScript.
- The second and third examples show how the same idea fits into a larger page with fallback text, titles, canvas size, or viewBox details.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<canvas>` | draws pixels with JavaScript | Use it while practicing HTML graphics. |
| `<svg>` | describes scalable vector shapes in markup | Use it while practicing HTML graphics. |
| `<img>` | embeds finished bitmap or vector files | Use it while practicing HTML graphics. |

## Browser, accessibility, and SEO notes

- Test HTML graphics in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Provide alternative text or titles for graphics; canvas without fallback is not enough for screen readers.

## Common mistakes

- Using HTML graphics only for appearance instead of matching the content role.
- Forgetting `<canvas>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `graphics.html`, copy the first example, then add one extra line that uses `<canvas>` correctly in your own content.

## Next step

Next step: continue with **HTML Canvas** so the next concept builds on this one.
