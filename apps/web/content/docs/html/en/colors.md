---
title: "HTML Colors"
description: "Learn how CSS color values appear in HTML examples and inline styles with real HTML examples and practical checks."
seoTitle: "HTML Colors Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Colors with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML colors, hex RGB HSL, CSS color values"
order: 13
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Colors

In HTML Colors, you learn how CSS color values appear in HTML examples and inline styles. The focus is HTML colors, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you prototype visual differences before moving styles to CSS. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML colors?

- It gives HTML colors a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `named colors`, `hex` and `rgb() / hsl()`.
- It improves real pages when you prototype visual differences before moving styles to CSS, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p style="color: tomato;">Named color</p>
<p style="color: #2563eb;">Hex color</p>
<p style="background-color: hsl(210 100% 96%);">HSL background</p>
```

### Example 2: Options in context

```html
<section class="colors-notes" aria-labelledby="colors-title">
  <h2 id="colors-title">HTML Colors options</h2>
  <table>
    <caption>Key syntax for HTML colors</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>named colors</code></td>
      <td>quick readable color names such as tomato</td>
    </tr>
    <tr>
      <td><code>hex</code></td>
      <td>compact RGB color notation like #2563eb</td>
    </tr>
    <tr>
      <td><code>rgb() / hsl()</code></td>
      <td>functional color formats with numeric control</td>
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
    <title>HTML Colors practice</title>
  </head>
  <body>
    <p style="color: tomato;">Named color</p>
    <p style="color: #2563eb;">Hex color</p>
    <p style="background-color: hsl(210 100% 96%);">HSL background</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML colors without unrelated layout code.
- Pay attention to `named colors`: quick readable color names such as tomato.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `named colors` | quick readable color names such as tomato | Use it while practicing HTML colors. |
| `hex` | compact RGB color notation like #2563eb | Use it while practicing HTML colors. |
| `rgb() / hsl()` | functional color formats with numeric control | Use it while practicing HTML colors. |

## Browser, accessibility, and SEO notes

- Test HTML colors in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML colors only for appearance instead of matching the content role.
- Forgetting `named colors` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `colors.html`, copy the first example, then add one extra line that uses `named colors` correctly in your own content.

## Next step

Next step: continue with **HTML CSS** so the next concept builds on this one.
