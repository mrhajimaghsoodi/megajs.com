---
title: "HTML Layout"
description: "Learn how landmark elements divide pages into header, nav, main, aside, and footer with real HTML examples and practical checks."
seoTitle: "HTML Layout Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Layout with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML layout, header nav main footer, semantic layout"
order: 28
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Layout

In HTML Layout, you learn how landmark elements divide pages into header, nav, main, aside, and footer. The focus is HTML layout, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a page needs recognizable regions before CSS grid or flexbox styling. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML layout?

- It gives HTML layout a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<header>`, `<nav>` and `<main>`.
- It improves real pages when a page needs recognizable regions before CSS grid or flexbox styling, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<header>Site header</header>
<nav aria-label="Primary navigation">...</nav>
<main>
  <article>
    <h1>Page content</h1>
  </article>
</main>
<footer>Copyright notice</footer>
```

### Example 2: Options in context

```html
<section class="layout-notes" aria-labelledby="layout-title">
  <h2 id="layout-title">HTML Layout options</h2>
  <table>
    <caption>Key syntax for HTML layout</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;header&gt;</code></td>
      <td>contains introductory page or section content</td>
    </tr>
    <tr>
      <td><code>&lt;nav&gt;</code></td>
      <td>groups major navigation links</td>
    </tr>
    <tr>
      <td><code>&lt;main&gt;</code></td>
      <td>contains the unique main page content</td>
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
    <title>HTML Layout practice</title>
  </head>
  <body>
    <header>Site header</header>
    <nav aria-label="Primary navigation">...</nav>
    <main>
      <article>
        <h1>Page content</h1>
      </article>
    </main>
    <footer>Copyright notice</footer>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML layout without unrelated layout code.
- Pay attention to `<header>`: contains introductory page or section content.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<header>` | contains introductory page or section content | Use it while practicing HTML layout. |
| `<nav>` | groups major navigation links | Use it while practicing HTML layout. |
| `<main>` | contains the unique main page content | Use it while practicing HTML layout. |

## Browser, accessibility, and SEO notes

- Test HTML layout in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML layout only for appearance instead of matching the content role.
- Forgetting `<header>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `layout.html`, copy the first example, then add one extra line that uses `<header>` correctly in your own content.

## Next step

Next step: continue with **HTML Responsive Web Design** so the next concept builds on this one.
