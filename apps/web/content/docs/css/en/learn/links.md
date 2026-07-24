---
title: "CSS Links"
description: "This page explains styling link states without hiding affordance, focus, or visited behavior with examples, tables, and practical CSS notes."
seoTitle: "CSS Links Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Links (links) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Links, CSS Links, Links tutorial, links"
order: 20
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Links

CSS Links focuses on styling link states without hiding affordance, focus, or visited behavior. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Links, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `a:hover`: styles a pointer hover state.
- `a:focus-visible`: keeps keyboard focus visible.
- `a:visited`: styles links the user has visited.
- For this topic, visible focus, useful hit targets, and hover/focus/disabled states is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Links practice</title>
    <style>
      .nav {
        display: flex;
        gap: .75rem;
        flex-wrap: wrap;
      }
      .nav a {
        color: #1d4ed8;
        padding: .5rem .75rem;
        border-radius: 999px;
      }
      .nav a:focus-visible,
      .nav a:hover {
        outline: 2px solid currentColor;
        background: #dbeafe;
      }
    </style>
  </head>
  <body>
    <nav class="nav" aria-label="CSS Links">
      <a href="#" aria-current="page">Start</a>
      <a href="#">Reference</a>
      <a href="#">Practice</a>
    </nav>
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
    <title>CSS Links practice</title>
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
      <caption>CSS Links quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>a:hover</code></td><td>styles a pointer hover state</td></tr>
        <tr><td><code>a:focus-visible</code></td><td>keeps keyboard focus visible</td></tr>
        <tr><td><code>a:visited</code></td><td>styles links the user has visited</td></tr>
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
    <title>CSS Links practice</title>
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
      <h1>CSS Links checklist</h1>
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
| `a:hover` | styles a pointer hover state | In CSS Links, match it to the real cascade, specificity, and layout needs of the page. |
| `a:focus-visible` | keeps keyboard focus visible | In CSS Links, match it to the real cascade, specificity, and layout needs of the page. |
| `a:visited` | styles links the user has visited | In CSS Links, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Links.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `a:hover` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `links.html`, run the first example, then replace at least one declaration related to `a:hover` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Lists** so the CSS learning path builds on this concept.
