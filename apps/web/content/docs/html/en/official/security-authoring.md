---
title: "Security and Authoring Notes"
description: "This page explains author-facing security guidance for links, iframes, forms, scripts, and user-generated content with examples, tables, and practical HTML notes."
seoTitle: "Security and Authoring Notes — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "Security and Authoring Notes from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, Security and Authoring Notes, HTML security, WHATWG authoring, iframe sandbox noopener"
order: 7
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Security and Authoring Notes

Security and Authoring Notes is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains author-facing security guidance for links, iframes, forms, scripts, and user-generated content for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `rel="noopener"` | prevents opener access from new tabs |
| `sandbox` | restricts iframe capabilities |
| `autocomplete` | helps forms handle sensitive data predictably |

## Authoring examples

### Example 1

```html
<section class="security-authoring" aria-labelledby="security-authoring-title">
  <h2 id="security-authoring-title">Security and Authoring Notes</h2>
  <p>author-facing security guidance for links, iframes, forms, scripts, and user-generated content.</p>
</section>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security and Authoring Notes practice</title>
  </head>
  <body>
    <section class="security-authoring" aria-labelledby="security-authoring-title">
      <h2 id="security-authoring-title">Security and Authoring Notes</h2>
      <p>author-facing security guidance for links, iframes, forms, scripts, and user-generated content.</p>
    </section>
  </body>
</html>
```

## Interop and security notes

- In Security and Authoring Notes, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Finish this track by returning to the reference track and testing one real page.
