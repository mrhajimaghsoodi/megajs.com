---
title: "HTML Semantics"
description: "Learn how elements describe the role of content instead of only its appearance with real HTML examples and practical checks."
seoTitle: "HTML Semantics Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Semantics with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, semantic HTML, article section aside, HTML accessibility SEO"
order: 31
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Semantics

In HTML Semantics, you learn how elements describe the role of content instead of only its appearance. The focus is semantic HTML, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when accessibility, SEO, and maintainability depend on meaningful structure. Read each example slowly, then change one value at a time to see what the browser does.

## What is semantic HTML?

- It gives semantic HTML a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<article>`, `<section>` and `<aside>`.
- It improves real pages when accessibility, SEO, and maintainability depend on meaningful structure, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<main>
  <article>
    <header><h1>Semantic HTML</h1></header>
    <p>Use elements that describe the content.</p>
  </article>
</main>
```

### Example 2: Options in context

```html
<section class="semantics-notes" aria-labelledby="semantics-title">
  <h2 id="semantics-title">HTML Semantics options</h2>
  <table>
    <caption>Key syntax for semantic HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;article&gt;</code></td>
      <td>stands for independent reusable content</td>
    </tr>
    <tr>
      <td><code>&lt;section&gt;</code></td>
      <td>groups a themed part with a heading</td>
    </tr>
    <tr>
      <td><code>&lt;aside&gt;</code></td>
      <td>contains related but secondary material</td>
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
    <title>HTML Semantics practice</title>
  </head>
  <body>
    <main>
      <article>
        <header><h1>Semantic HTML</h1></header>
        <p>Use elements that describe the content.</p>
      </article>
    </main>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for semantic HTML without unrelated layout code.
- Pay attention to `<article>`: stands for independent reusable content.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<article>` | stands for independent reusable content | Use it while practicing semantic HTML. |
| `<section>` | groups a themed part with a heading | Use it while practicing semantic HTML. |
| `<aside>` | contains related but secondary material | Use it while practicing semantic HTML. |

## Browser, accessibility, and SEO notes

- Test semantic HTML in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using semantic HTML only for appearance instead of matching the content role.
- Forgetting `<article>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `semantics.html`, copy the first example, then add one extra line that uses `<article>` correctly in your own content.

## Next step

Next step: continue with **HTML Style Guide** so the next concept builds on this one.
