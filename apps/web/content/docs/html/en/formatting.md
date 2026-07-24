---
title: "HTML Text Formatting"
description: "Learn how semantic formatting elements mark importance, emphasis, edits, and code with real HTML examples and practical checks."
seoTitle: "HTML Text Formatting Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Text Formatting with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML formatting, strong em mark code, semantic text"
order: 10
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Text Formatting

In HTML Text Formatting, you learn how semantic formatting elements mark importance, emphasis, edits, and code. The focus is HTML text formatting, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when text needs meaning beyond plain words. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML text formatting?

- It gives HTML text formatting a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<strong>`, `<em>` and `<mark> / <code>`.
- It improves real pages when text needs meaning beyond plain words, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p><strong>Important:</strong> Save your work often.</p>
<p><em>Emphasis</em> changes the tone of a sentence.</p>
<p>Use <code>&lt;code&gt;</code> for short code fragments.</p>
```

### Example 2: Options in context

```html
<section class="formatting-notes" aria-labelledby="formatting-title">
  <h2 id="formatting-title">HTML Text Formatting options</h2>
  <table>
    <caption>Key syntax for HTML text formatting</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;strong&gt;</code></td>
      <td>marks strong importance</td>
    </tr>
    <tr>
      <td><code>&lt;em&gt;</code></td>
      <td>marks stress emphasis</td>
    </tr>
    <tr>
      <td><code>&lt;mark&gt; / &lt;code&gt;</code></td>
      <td>highlights text or marks code fragments</td>
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
    <title>HTML Text Formatting practice</title>
  </head>
  <body>
    <p><strong>Important:</strong> Save your work often.</p>
    <p><em>Emphasis</em> changes the tone of a sentence.</p>
    <p>Use <code>&lt;code&gt;</code> for short code fragments.</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML text formatting without unrelated layout code.
- Pay attention to `<strong>`: marks strong importance.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<strong>` | marks strong importance | Use it while practicing HTML text formatting. |
| `<em>` | marks stress emphasis | Use it while practicing HTML text formatting. |
| `<mark> / <code>` | highlights text or marks code fragments | Use it while practicing HTML text formatting. |

## Browser, accessibility, and SEO notes

- Test HTML text formatting in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML text formatting only for appearance instead of matching the content role.
- Forgetting `<strong>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `formatting.html`, copy the first example, then add one extra line that uses `<strong>` correctly in your own content.

## Next step

Next step: continue with **HTML Quotations** so the next concept builds on this one.
