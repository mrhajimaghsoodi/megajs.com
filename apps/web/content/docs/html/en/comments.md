---
title: "HTML Comments"
description: "Learn how source-only notes explain decisions without appearing on the page with real HTML examples and practical checks."
seoTitle: "HTML Comments Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Comments with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML comments, HTML comment syntax, comment in HTML"
order: 12
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Comments

In HTML Comments, you learn how source-only notes explain decisions without appearing on the page. The focus is HTML comments, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when future readers need context for markup decisions. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML comments?

- It gives HTML comments a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<!-- ... -->`, `TODO notes` and `conditional notes`.
- It improves real pages when future readers need context for markup decisions, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<!-- Explain why this section exists, not what every line does. -->
<section aria-labelledby="pricing-title">
  <h2 id="pricing-title">Pricing</h2>
</section>
```

### Example 2: Options in context

```html
<section class="comments-notes" aria-labelledby="comments-title">
  <h2 id="comments-title">HTML Comments options</h2>
  <table>
    <caption>Key syntax for HTML comments</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;!-- ... --&gt;</code></td>
      <td>creates an HTML comment</td>
    </tr>
    <tr>
      <td><code>TODO notes</code></td>
      <td>mark unfinished content carefully</td>
    </tr>
    <tr>
      <td><code>conditional notes</code></td>
      <td>explain unusual markup choices</td>
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
    <title>HTML Comments practice</title>
  </head>
  <body>
    <!-- Explain why this section exists, not what every line does. -->
    <section aria-labelledby="pricing-title">
      <h2 id="pricing-title">Pricing</h2>
    </section>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML comments without unrelated layout code.
- Pay attention to `<!-- ... -->`: creates an HTML comment.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<!-- ... -->` | creates an HTML comment | Use it while practicing HTML comments. |
| `TODO notes` | mark unfinished content carefully | Use it while practicing HTML comments. |
| `conditional notes` | explain unusual markup choices | Use it while practicing HTML comments. |

## Browser, accessibility, and SEO notes

- Test HTML comments in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML comments only for appearance instead of matching the content role.
- Forgetting `<!-- ... -->` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `comments.html`, copy the first example, then add one extra line that uses `<!-- ... -->` correctly in your own content.

## Next step

Next step: continue with **HTML Colors** so the next concept builds on this one.
