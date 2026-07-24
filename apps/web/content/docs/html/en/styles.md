---
title: "HTML Styles"
description: "Learn how inline CSS changes a single element for demos or one-off cases with real HTML examples and practical checks."
seoTitle: "HTML Styles Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Styles with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML styles, style attribute, inline CSS"
order: 9
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Styles

In HTML Styles, you learn how inline CSS changes a single element for demos or one-off cases. The focus is HTML style attribute, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you need a quick visual example while learning CSS alongside HTML. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML style attribute?

- It gives HTML style attribute a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `style`, `color` and `background-color`.
- It improves real pages when you need a quick visual example while learning CSS alongside HTML, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<h1 style="color: #1d4ed8; font-size: 2rem;">Styled heading</h1>
<p style="background: #eff6ff; padding: 1rem;">Inline styles are useful for demos, not large sites.</p>
```

### Example 2: Options in context

```html
<section class="styles-notes" aria-labelledby="styles-title">
  <h2 id="styles-title">HTML Styles options</h2>
  <table>
    <caption>Key syntax for HTML style attribute</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>style</code></td>
      <td>contains CSS declarations on one element</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>sets text color</td>
    </tr>
    <tr>
      <td><code>background-color</code></td>
      <td>sets the element background</td>
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
    <title>HTML Styles practice</title>
  </head>
  <body>
    <h1 style="color: #1d4ed8; font-size: 2rem;">Styled heading</h1>
    <p style="background: #eff6ff; padding: 1rem;">Inline styles are useful for demos, not large sites.</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML style attribute without unrelated layout code.
- Pay attention to `style`: contains CSS declarations on one element.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `style` | contains CSS declarations on one element | Use it while practicing HTML style attribute. |
| `color` | sets text color | Use it while practicing HTML style attribute. |
| `background-color` | sets the element background | Use it while practicing HTML style attribute. |

## Browser, accessibility, and SEO notes

- Test HTML style attribute in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML style attribute only for appearance instead of matching the content role.
- Forgetting `style` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `styles.html`, copy the first example, then add one extra line that uses `style` correctly in your own content.

## Next step

Next step: continue with **HTML Text Formatting** so the next concept builds on this one.
