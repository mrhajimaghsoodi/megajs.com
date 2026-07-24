---
title: "HTML Links"
description: "Learn how anchors connect pages, files, email addresses, and in-page sections with real HTML examples and practical checks."
seoTitle: "HTML Links Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Links with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML links, href target rel, anchor links"
order: 15
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Links

In HTML Links, you learn how anchors connect pages, files, email addresses, and in-page sections. The focus is HTML links, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when users need clear navigation or actions that move them somewhere else. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML links?

- It gives HTML links a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `href`, `target / rel` and `fragment id`.
- It improves real pages when users need clear navigation or actions that move them somewhere else, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<a href="/docs/html/forms">Open the forms chapter</a>
<a href="mailto:hello@example.com">Email support</a>
<a href="#summary">Jump to summary</a>
```

### Example 2: Options in context

```html
<nav aria-label="Documentation">
  <a href="/docs/html/introduction">HTML intro</a>
  <a href="/docs/html/forms" aria-current="page">Forms</a>
  <a href="/docs/html/references">References</a>
</nav>
```

### Example 3: Complete practice page

```html
<a href="report.pdf" download>Download the PDF report</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open external site
</a>
<section id="summary">
  <h2>Summary</h2>
</section>
```

## Example explained

- The first example shows the core pattern for HTML links without unrelated layout code.
- Pay attention to `href`: defines the link destination.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `href` | defines the link destination | Use it while practicing HTML links. |
| `target / rel` | controls new tabs and security relationship | Use it while practicing HTML links. |
| `fragment id` | jumps to a section such as #pricing | Use it while practicing HTML links. |

## Browser, accessibility, and SEO notes

- Test HTML links in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML links only for appearance instead of matching the content role.
- Forgetting `href` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `links.html`, copy the first example, then add one extra line that uses `href` correctly in your own content.

## Next step

Next step: continue with **HTML Images** so the next concept builds on this one.
