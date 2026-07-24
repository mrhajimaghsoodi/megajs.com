---
title: "CSS Cascade Specification"
description: "This page explains the official cascade model for origins, importance, specificity, layers, inheritance, and value processing with examples, tables, and practical CSS notes."
seoTitle: "CSS Cascade Specification — W3C Official Summary | MEGA JS Docs"
seoDescription: "CSS Cascade Specification (cascade spec): W3C CSS official summary for authors with examples, interop notes, computed style, and stable production guidance."
keywords: "CSS, CSS Cascade Specification, CSS Cascade spec, W3C cascade, CSS values"
order: 3
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# CSS Cascade Specification

CSS Cascade Specification is a specification-oriented summary of W3C CSS. It is not a full spec dump; it explains the official cascade model for origins, importance, specificity, layers, inheritance, and value processing for authors who want interoperable and durable styles.

## Reading with a specification mindset

In CSS specifications, terms such as must, should, computed value, used value, grammar, and conformance carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the W3C text.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `cascaded value` | the result after cascade selection |
| `specified value` | the value assigned before computation |
| `computed value` | the value after inheritance and computation |

## Authoring examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Cascade Specification practice</title>
    <style>
      @layer base, components;
      @layer base {
        :where(.note) { color: #334155; }
      }
      @layer components {
        .note.featured { color: #1d4ed8; }
      }
    </style>
  </head>
  <body>
    <p class="note featured">
      Inspect which cascade layer and selector wins for CSS Cascade Specification.
    </p>
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
    <title>CSS Cascade Specification practice</title>
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
      <h1>CSS Cascade Specification checklist</h1>
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

- In CSS Cascade Specification, grammar and computed-style algorithms are not only implementation details; your CSS must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable and understandable in DevTools.
- For motion, color contrast, focus, and responsive behavior, include user preferences and accessibility constraints from the start.

## Next step

Continue with **CSS Selectors Specification**.
