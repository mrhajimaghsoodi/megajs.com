---
title: "HTML Living Standard Overview"
description: "This page explains the living standard model, conformance classes, and author-facing reading strategy with examples, tables, and practical HTML notes."
seoTitle: "HTML Living Standard Overview — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "HTML Living Standard Overview from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, HTML Living Standard Overview, HTML Living Standard, WHATWG HTML, official HTML"
order: 1
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# HTML Living Standard Overview

HTML Living Standard Overview is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains the living standard model, conformance classes, and author-facing reading strategy for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `Living Standard` | continuously maintained HTML specification |
| `conformance` | requirements for documents and tools |
| `authoring` | rules for writing interoperable documents |

## Authoring examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Living Standard Overview</title>
  </head>
  <body>
    <main>
      <h1>HTML Living Standard Overview</h1>
    </main>
  </body>
</html>
```

### Example 2

```html
<main>
  <h1>HTML Living Standard Overview checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## Interop and security notes

- In HTML Living Standard Overview, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Continue with **Document Structure**.
