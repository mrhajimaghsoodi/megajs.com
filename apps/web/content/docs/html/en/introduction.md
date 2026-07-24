---
title: "Introduction to HTML"
description: "Learn how tags, attributes, text, and the browser combine to create a page with real HTML examples and practical checks."
seoTitle: "Introduction to HTML Tutorial | MEGA JS Docs"
seoDescription: "Learn Introduction to HTML with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML introduction, HTML tutorial, web page structure"
order: 1
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Introduction to HTML

In Introduction to HTML, you learn how tags, attributes, text, and the browser combine to create a page. The focus is HTML foundations, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you need the mental model before writing larger documents. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML?

- It gives HTML foundations a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<!doctype html>`, `<html lang="en">` and `<head> / <body>`.
- It improves real pages when you need the mental model before writing larger documents, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<article>
  <h1>Welcome to HTML</h1>
  <p>HTML uses elements to describe headings, paragraphs, links, images, forms, and more.</p>
</article>
```

### Example 2: Options in context

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Introduction</title>
  </head>
  <body>
    <h1>My first document</h1>
    <p>The browser builds a page from this structure.</p>
  </body>
</html>
```

### Example 3: Complete practice page

```html
<main>
  <h1>Recipe notes</h1>
  <p>HTML describes the role of this text.</p>
  <a href="ingredients.html">View ingredients</a>
</main>
```

## Example explained

- The first example shows the core pattern for HTML foundations without unrelated layout code.
- Pay attention to `<!doctype html>`: starts a modern standards-mode document.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<!doctype html>` | starts a modern standards-mode document | Use it while practicing HTML foundations. |
| `<html lang="en">` | wraps the document and declares language | Use it while practicing HTML foundations. |
| `<head> / <body>` | separates metadata from visible content | Use it while practicing HTML foundations. |

## Browser, accessibility, and SEO notes

- Test HTML foundations in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML foundations only for appearance instead of matching the content role.
- Forgetting `<!doctype html>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `introduction.html`, copy the first example, then add one extra line that uses `<!doctype html>` correctly in your own content.

## Next step

Next step: continue with **HTML Basics** so the next concept builds on this one.
