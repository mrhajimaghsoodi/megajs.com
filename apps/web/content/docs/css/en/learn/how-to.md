---
title: "How To Add CSS"
description: "This page explains using inline, internal, and external CSS while keeping production styles maintainable with examples, tables, and practical CSS notes."
seoTitle: "How To Add CSS Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn How To Add CSS (how to) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, How To Add CSS, CSS How To Add CSS, How To Add CSS tutorial, how to"
order: 5
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# How To Add CSS

How To Add CSS focuses on using inline, internal, and external CSS while keeping production styles maintainable. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice How To Add CSS, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `<link rel="stylesheet">`: loads a reusable stylesheet.
- `<style>`: keeps page-level demo CSS with the HTML.
- `style=""`: adds one-off inline declarations.
- For this topic, alignment between selectors, declarations, the cascade, and computed style is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How To Add CSS practice</title>
    <style>
      .demo {
        padding: 1rem;
        border-radius: .75rem;
        background: #f8fafc;
      }
      .demo code {
        color: #2563eb;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <section class="demo">
      <h2>How To Add CSS</h2>
      <p>Try changing <code>&lt;link rel=&quot;stylesheet&quot;&gt;</code> and inspect the computed style.</p>
    </section>
  </body>
</html>
```

### Example 2: Options in a styled table

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How To Add CSS practice</title>
    <style>
      table {
        border-collapse: collapse;
        width: min(100%, 42rem);
      }
      caption {
        font-weight: 700;
        margin-block-end: .5rem;
      }
      th,
      td {
        border: 1px solid #cbd5e1;
        padding: .65rem;
        text-align: start;
      }
      code {
        color: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>How To Add CSS quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>&lt;link rel=&quot;stylesheet&quot;&gt;</code></td><td>loads a reusable stylesheet</td></tr>
        <tr><td><code>&lt;style&gt;</code></td><td>keeps page-level demo CSS with the HTML</td></tr>
        <tr><td><code>style=&quot;&quot;</code></td><td>adds one-off inline declarations</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How To Add CSS practice</title>
    <style>
      main {
        width: min(100% - 2rem, 52rem);
        margin-inline: auto;
        padding-block: 2rem;
      }
      .checklist {
        display: grid;
        gap: .75rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>How To Add CSS checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<link rel="stylesheet">` | loads a reusable stylesheet | In How To Add CSS, match it to the real cascade, specificity, and layout needs of the page. |
| `<style>` | keeps page-level demo CSS with the HTML | In How To Add CSS, match it to the real cascade, specificity, and layout needs of the page. |
| `style=""` | adds one-off inline declarations | In How To Add CSS, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in How To Add CSS.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `<link rel="stylesheet">` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `how-to.html`, run the first example, then replace at least one declaration related to `<link rel="stylesheet">` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Comments** so the CSS learning path builds on this concept.
