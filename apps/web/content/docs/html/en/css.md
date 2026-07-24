---
title: "HTML CSS"
description: "Learn how inline, internal, and external CSS connect presentation to markup with real HTML examples and practical checks."
seoTitle: "HTML CSS Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML CSS with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML CSS, link stylesheet, internal CSS"
order: 14
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML CSS

In HTML CSS, you learn how inline, internal, and external CSS connect presentation to markup. The focus is CSS in HTML, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you decide where styles should live for a page or project. Read each example slowly, then change one value at a time to see what the browser does.

## What is CSS in HTML?

- It gives CSS in HTML a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `style attribute`, `<style>` and `<link rel="stylesheet">`.
- It improves real pages when you decide where styles should live for a page or project, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<head>
  <link rel="stylesheet" href="styles.css">
  <style>
    .notice { border-left: 4px solid royalblue; }
  </style>
</head>
<p class="notice" style="padding: 1rem;">CSS can be external, internal, or inline.</p>
```

### Example 2: Options in context

```html
<section class="css-notes" aria-labelledby="css-title">
  <h2 id="css-title">HTML CSS options</h2>
  <table>
    <caption>Key syntax for CSS in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>style attribute</code></td>
      <td>applies one-off styles to one element</td>
    </tr>
    <tr>
      <td><code>&lt;style&gt;</code></td>
      <td>keeps page-specific CSS in the head</td>
    </tr>
    <tr>
      <td><code>&lt;link rel=&quot;stylesheet&quot;&gt;</code></td>
      <td>loads reusable external CSS</td>
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
    <title>HTML CSS practice</title>
  </head>
  <body>
    <head>
      <link rel="stylesheet" href="styles.css">
      <style>
        .notice { border-left: 4px solid royalblue; }
      </style>
    </head>
    <p class="notice" style="padding: 1rem;">CSS can be external, internal, or inline.</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for CSS in HTML without unrelated layout code.
- Pay attention to `style attribute`: applies one-off styles to one element.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `style attribute` | applies one-off styles to one element | Use it while practicing CSS in HTML. |
| `<style>` | keeps page-specific CSS in the head | Use it while practicing CSS in HTML. |
| `<link rel="stylesheet">` | loads reusable external CSS | Use it while practicing CSS in HTML. |

## Browser, accessibility, and SEO notes

- Test CSS in HTML in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using CSS in HTML only for appearance instead of matching the content role.
- Forgetting `style attribute` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `css.html`, copy the first example, then add one extra line that uses `style attribute` correctly in your own content.

## Next step

Next step: continue with **HTML Links** so the next concept builds on this one.
