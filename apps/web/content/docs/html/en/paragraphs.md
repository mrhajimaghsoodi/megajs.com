---
title: "HTML Paragraphs"
description: "Learn how paragraphs group text and how browsers collapse whitespace with real HTML examples and practical checks."
seoTitle: "HTML Paragraphs Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Paragraphs with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML paragraphs, p br hr, HTML whitespace"
order: 8
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Paragraphs

In HTML Paragraphs, you learn how paragraphs group text and how browsers collapse whitespace. The focus is HTML paragraphs, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you write readable body copy instead of line-by-line visual spacing. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML paragraphs?

- It gives HTML paragraphs a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<p>`, `<br>` and `<hr>`.
- It improves real pages when you write readable body copy instead of line-by-line visual spacing, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p>HTML collapses extra spaces in normal paragraphs.</p>
<p>Use a new paragraph when the idea changes.</p>
<hr>
<p>The hr element separates related sections.</p>
```

### Example 2: Options in context

```html
<section class="paragraphs-notes" aria-labelledby="paragraphs-title">
  <h2 id="paragraphs-title">HTML Paragraphs options</h2>
  <table>
    <caption>Key syntax for HTML paragraphs</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;p&gt;</code></td>
      <td>wraps one idea or short block of text</td>
    </tr>
    <tr>
      <td><code>&lt;br&gt;</code></td>
      <td>forces a line break only when meaningful</td>
    </tr>
    <tr>
      <td><code>&lt;hr&gt;</code></td>
      <td>marks a thematic break between sections</td>
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
    <title>HTML Paragraphs practice</title>
  </head>
  <body>
    <p>HTML collapses extra spaces in normal paragraphs.</p>
    <p>Use a new paragraph when the idea changes.</p>
    <hr>
    <p>The hr element separates related sections.</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML paragraphs without unrelated layout code.
- Pay attention to `<p>`: wraps one idea or short block of text.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<p>` | wraps one idea or short block of text | Use it while practicing HTML paragraphs. |
| `<br>` | forces a line break only when meaningful | Use it while practicing HTML paragraphs. |
| `<hr>` | marks a thematic break between sections | Use it while practicing HTML paragraphs. |

## Browser, accessibility, and SEO notes

- Test HTML paragraphs in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML paragraphs only for appearance instead of matching the content role.
- Forgetting `<p>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `paragraphs.html`, copy the first example, then add one extra line that uses `<p>` correctly in your own content.

## Next step

Next step: continue with **HTML Styles** so the next concept builds on this one.
