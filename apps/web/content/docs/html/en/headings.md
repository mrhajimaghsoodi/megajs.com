---
title: "HTML Headings"
description: "Learn how h1 through h6 create a scannable document outline with real HTML examples and practical checks."
seoTitle: "HTML Headings (h1-h6) Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Headings with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML headings, h1 h2 h3, SEO heading structure"
order: 7
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Headings

In HTML Headings, you learn how h1 through h6 create a scannable document outline. The focus is HTML headings, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you structure articles, documentation pages, and landing pages for humans and search engines. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML headings?

- It gives HTML headings a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<h1>`, `<h2>` and `<h3>-<h6>`.
- It improves real pages when you structure articles, documentation pages, and landing pages for humans and search engines, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<h1>HTML Course</h1>
<h2>Basics</h2>
<h3>Elements</h3>
<h2>Forms</h2>
<h3>Input types</h3>
```

### Example 2: Options in context

```html
<article>
  <h1>Learning HTML</h1>
  <section>
    <h2>Why headings matter</h2>
    <p>Users scan headings before reading details.</p>
  </section>
  <section>
    <h2>Practice outline</h2>
    <h3>Write one h1</h3>
    <h3>Add h2 sections</h3>
  </section>
</article>
```

### Example 3: Complete practice page

```html
<!-- Avoid skipping from h1 to h4 just for a smaller look. -->
<h1>Product guide</h1>
<h2>Installation</h2>
<h3>System requirements</h3>
<h2>Troubleshooting</h2>
```

## Example explained

- The first example shows the core pattern for HTML headings without unrelated layout code.
- Pay attention to `<h1>`: one main page heading.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<h1>` | one main page heading | Use it while practicing HTML headings. |
| `<h2>` | major sections under the h1 | Use it while practicing HTML headings. |
| `<h3>-<h6>` | deeper subsections without skipping levels | Use it while practicing HTML headings. |

## Browser, accessibility, and SEO notes

- Test HTML headings in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML headings only for appearance instead of matching the content role.
- Forgetting `<h1>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `headings.html`, copy the first example, then add one extra line that uses `<h1>` correctly in your own content.

## Next step

Next step: continue with **HTML Paragraphs** so the next concept builds on this one.
