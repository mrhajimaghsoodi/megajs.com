---
title: "HTML Basic Examples"
description: "Learn the first elements beginners combine on almost every page with real HTML examples and practical checks."
seoTitle: "HTML Basic Examples Tutorial | MEGA JS Docs"
seoDescription: "Master HTML Basic Examples with practical examples, focused syntax notes, browser checks, and a short exercise for real accessible web pages. Practice it today."
keywords: "HTML tutorial, HTML examples, HTML h1 p a img, basic HTML tags"
order: 4
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Basic Examples

In HTML Basic Examples, you learn the first elements beginners combine on almost every page. The focus is basic HTML examples, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you want a quick page with heading, paragraph, link, and image. Read each example slowly, then change one value at a time to see what the browser does.

## What is basic HTML examples?

- It gives basic HTML examples a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<h1>`, `<p>` and `<a> / <img>`.
- It improves real pages when you want a quick page with heading, paragraph, link, and image, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<h1>Main heading</h1>
<p>A paragraph explains one idea.</p>
<a href="about.html">Read more</a>
<img src="team.jpg" alt="Our team working together">
```

### Example 2: Options in context

```html
<section class="basic-notes" aria-labelledby="basic-title">
  <h2 id="basic-title">HTML Basic Examples options</h2>
  <table>
    <caption>Key syntax for basic HTML examples</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;h1&gt;</code></td>
      <td>names the main topic of the page</td>
    </tr>
    <tr>
      <td><code>&lt;p&gt;</code></td>
      <td>holds a readable paragraph of text</td>
    </tr>
    <tr>
      <td><code>&lt;a&gt; / &lt;img&gt;</code></td>
      <td>connects pages and embeds images</td>
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
    <title>HTML Basic Examples practice</title>
  </head>
  <body>
    <h1>Main heading</h1>
    <p>A paragraph explains one idea.</p>
    <a href="about.html">Read more</a>
    <img src="team.jpg" alt="Our team working together">
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for basic HTML examples without unrelated layout code.
- Pay attention to `<h1>`: names the main topic of the page.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<h1>` | names the main topic of the page | Use it while practicing basic HTML examples. |
| `<p>` | holds a readable paragraph of text | Use it while practicing basic HTML examples. |
| `<a> / <img>` | connects pages and embeds images | Use it while practicing basic HTML examples. |

## Browser, accessibility, and SEO notes

- Test basic HTML examples in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using basic HTML examples only for appearance instead of matching the content role.
- Forgetting `<h1>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `basic.html`, copy the first example, then add one extra line that uses `<h1>` correctly in your own content.

## Next step

Next step: continue with **HTML Elements** so the next concept builds on this one.
