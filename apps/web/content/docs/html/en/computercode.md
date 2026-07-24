---
title: "HTML Computer Code Elements"
description: "Learn how code, keyboard input, variables, and sample output are marked semantically with real HTML examples and practical checks."
seoTitle: "HTML Computer Code Elements Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Computer Code Elements with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML code elements, code pre kbd samp, technical writing HTML"
order: 30
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Computer Code Elements

In HTML Computer Code Elements, you learn how code, keyboard input, variables, and sample output are marked semantically. The focus is HTML computer code elements, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when technical instructions must distinguish commands from normal prose. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML computer code elements?

- It gives HTML computer code elements a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<code>`, `<pre>` and `<kbd> / <samp>`.
- It improves real pages when technical instructions must distinguish commands from normal prose, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p>Run <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<pre><code>npm run dev</code></pre>
<p>The result is <samp>Server ready</samp>.</p>
```

### Example 2: Options in context

```html
<section class="computercode-notes" aria-labelledby="computercode-title">
  <h2 id="computercode-title">HTML Computer Code Elements options</h2>
  <table>
    <caption>Key syntax for HTML computer code elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;code&gt;</code></td>
      <td>marks inline code fragments</td>
    </tr>
    <tr>
      <td><code>&lt;pre&gt;</code></td>
      <td>preserves spacing for blocks of code</td>
    </tr>
    <tr>
      <td><code>&lt;kbd&gt; / &lt;samp&gt;</code></td>
      <td>marks user input and program output</td>
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
    <title>HTML Computer Code Elements practice</title>
  </head>
  <body>
    <p>Run <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
    <pre><code>npm run dev</code></pre>
    <p>The result is <samp>Server ready</samp>.</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML computer code elements without unrelated layout code.
- Pay attention to `<code>`: marks inline code fragments.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<code>` | marks inline code fragments | Use it while practicing HTML computer code elements. |
| `<pre>` | preserves spacing for blocks of code | Use it while practicing HTML computer code elements. |
| `<kbd> / <samp>` | marks user input and program output | Use it while practicing HTML computer code elements. |

## Browser, accessibility, and SEO notes

- Test HTML computer code elements in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML computer code elements only for appearance instead of matching the content role.
- Forgetting `<code>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `computercode.html`, copy the first example, then add one extra line that uses `<code>` correctly in your own content.

## Next step

Next step: continue with **HTML Semantics** so the next concept builds on this one.
