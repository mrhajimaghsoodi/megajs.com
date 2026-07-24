---
title: "CSS Selectors Specification"
description: "This page explains the official selector grammar, matching model, specificity rules, pseudo-classes, and pseudo-elements with examples, tables, and practical CSS notes."
seoTitle: "CSS Selectors Specification — W3C Official Summary | MEGA JS Docs"
seoDescription: "CSS Selectors Specification (selectors spec): W3C CSS official summary for authors with examples, interop notes, computed style, and stable production guidance."
keywords: "CSS, CSS Selectors Specification, CSS Selectors spec, W3C selectors, selector grammar"
order: 4
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# CSS Selectors Specification

CSS Selectors Specification is a specification-oriented summary of W3C CSS. It is not a full spec dump; it explains the official selector grammar, matching model, specificity rules, pseudo-classes, and pseudo-elements for authors who want interoperable and durable styles.

## Reading with a specification mindset

In CSS specifications, terms such as must, should, computed value, used value, grammar, and conformance carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the W3C text.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `selector list` | comma-separated selectors sharing declarations |
| `compound selector` | sequence of simple selectors without combinators |
| `relative selector` | selector evaluated from an anchor element |

## Authoring examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Specification practice</title>
    <style>
      article:has(a[href^="https"]) {
        border-inline-start: .25rem solid #2563eb;
        padding-inline-start: 1rem;
      }
      article :is(h2, p) {
        margin-block: .5rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h2>CSS Selectors Specification</h2>
      <p><a href="https://www.w3.org/Style/CSS/">W3C CSS</a></p>
    </article>
  </body>
</html>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Specification practice</title>
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
      <h1>CSS Selectors Specification checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## Interop and accessibility notes

- In CSS Selectors Specification, grammar and computed-style algorithms are not only implementation details; your CSS must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable and understandable in DevTools.
- For motion, color contrast, focus, and responsive behavior, include user preferences and accessibility constraints from the start.

## Next step

Continue with **CSS Box Model Specification**.
