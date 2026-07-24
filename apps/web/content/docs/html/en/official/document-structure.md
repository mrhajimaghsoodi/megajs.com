---
title: "Document Structure"
description: "This page explains doctype, html, head, body, metadata, sections, and document outlines for authors with examples, tables, and practical HTML notes."
seoTitle: "Document Structure — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "Document Structure from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, Document Structure, HTML document structure, WHATWG document, doctype html"
order: 2
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Document Structure

Document Structure is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains doctype, html, head, body, metadata, sections, and document outlines for authors for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `<!doctype html>` | required preamble for HTML documents |
| `<html>` | root element of the document |
| `<head>` | metadata container before body content |

## Authoring examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document Structure</title>
  </head>
  <body>
    <main>
      <h1>Document Structure</h1>
    </main>
  </body>
</html>
```

### Example 2

```html
<main>
  <h1>Document Structure checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## Interop and security notes

- In Document Structure, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Continue with **Elements and Content Model**.
