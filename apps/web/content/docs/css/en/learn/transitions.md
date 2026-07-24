---
title: "CSS Transitions"
description: "This page explains animating property changes between states with duration, delay, and easing with examples, tables, and practical CSS notes."
seoTitle: "CSS Transitions Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Transitions (transitions) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Transitions, CSS Transitions, Transitions tutorial, transitions"
order: 58
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Transitions

CSS Transitions focuses on animating property changes between states with duration, delay, and easing. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Transitions, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `transition-property`: chooses the animated properties.
- `transition-duration`: sets how long the change takes.
- `transition-timing-function`: sets easing for the change.
- For this topic, smooth, performant motion that respects prefers-reduced-motion is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions practice</title>
    <style>
      .button {
        padding: .8rem 1rem;
        border: 0;
        border-radius: .75rem;
        background: #2563eb;
        color: white;
        transition: transform 180ms ease, background-color 180ms ease;
      }
      .button:hover {
        transform: translateY(-2px);
        background: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <button class="button" type="button">CSS Transitions</button>
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
    <title>CSS Transitions practice</title>
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
      <caption>CSS Transitions quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>transition-property</code></td><td>chooses the animated properties</td></tr>
        <tr><td><code>transition-duration</code></td><td>sets how long the change takes</td></tr>
        <tr><td><code>transition-timing-function</code></td><td>sets easing for the change</td></tr>
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
    <title>CSS Transitions practice</title>
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
      <h1>CSS Transitions checklist</h1>
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
| `transition-property` | chooses the animated properties | In CSS Transitions, match it to the real cascade, specificity, and layout needs of the page. |
| `transition-duration` | sets how long the change takes | In CSS Transitions, match it to the real cascade, specificity, and layout needs of the page. |
| `transition-timing-function` | sets easing for the change | In CSS Transitions, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Transitions.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `transition-property` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `transitions.html`, run the first example, then replace at least one declaration related to `transition-property` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Animations** so the CSS learning path builds on this concept.
