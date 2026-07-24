---
title: "HTML Basics"
description: "Learn the minimum structure every reliable page should have with real HTML examples and practical checks."
seoTitle: "HTML Basics Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Basics with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML basics, HTML document, doctype HTML"
order: 2
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Basics

In HTML Basics, you learn the minimum structure every reliable page should have. The focus is HTML document basics, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you create a new file or review whether a page is valid. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML document basics?

- It gives HTML document basics a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<!doctype html>`, `<meta charset="UTF-8">` and `<meta name="viewport">`.
- It improves real pages when you create a new file or review whether a page is valid, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Hello HTML</h1>
    <p>This page has a clear document structure.</p>
  </body>
</html>
```

### Example 2: Options in context

```html
<section class="basics-notes" aria-labelledby="basics-title">
  <h2 id="basics-title">HTML Basics options</h2>
  <table>
    <caption>Key syntax for HTML document basics</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;!doctype html&gt;</code></td>
      <td>prevents old browser rendering quirks</td>
    </tr>
    <tr>
      <td><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></td>
      <td>keeps text and symbols readable</td>
    </tr>
    <tr>
      <td><code>&lt;meta name=&quot;viewport&quot;&gt;</code></td>
      <td>sets mobile layout expectations</td>
    </tr>
    </tbody>
  </table>
</section>
```

### Example 3: Complete practice page

```html
<main>
  <h1>HTML Basics checklist</h1>
  <p>Open DevTools and verify that HTML document basics is represented in the DOM.</p>
  <ul>
    <li><code>&lt;!doctype html&gt;</code> - prevents old browser rendering quirks</li>
    <li><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> - keeps text and symbols readable</li>
    <li><code>&lt;meta name=&quot;viewport&quot;&gt;</code> - sets mobile layout expectations</li>
  </ul>
</main>
```

## Example explained

- The first example shows the core pattern for HTML document basics without unrelated layout code.
- Pay attention to `<!doctype html>`: prevents old browser rendering quirks.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<!doctype html>` | prevents old browser rendering quirks | Use it while practicing HTML document basics. |
| `<meta charset="UTF-8">` | keeps text and symbols readable | Use it while practicing HTML document basics. |
| `<meta name="viewport">` | sets mobile layout expectations | Use it while practicing HTML document basics. |

## Browser, accessibility, and SEO notes

- Test HTML document basics in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML document basics only for appearance instead of matching the content role.
- Forgetting `<!doctype html>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `basics.html`, copy the first example, then add one extra line that uses `<!doctype html>` correctly in your own content.

## Next step

Next step: continue with **HTML Editors** so the next concept builds on this one.
