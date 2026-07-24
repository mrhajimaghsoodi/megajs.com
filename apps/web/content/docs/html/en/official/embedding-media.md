---
title: "Embedding and Media"
description: "This page explains images, media elements, iframe embedding, fallback, lazy loading, and policy hooks with examples, tables, and practical HTML notes."
seoTitle: "Embedding and Media — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "Embedding and Media from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, Embedding and Media, WHATWG media, HTML embedding, iframe img video"
order: 6
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Embedding and Media

Embedding and Media is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains images, media elements, iframe embedding, fallback, lazy loading, and policy hooks for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `<img>` | embeds an image resource |
| `<iframe>` | nests a browsing context |
| `<source>` | selects media or image candidates |

## Authoring examples

### Example 1

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Embedding and Media" loading="lazy" allowfullscreen></iframe>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedding and Media practice</title>
  </head>
  <body>
    <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Embedding and Media" loading="lazy" allowfullscreen></iframe>
  </body>
</html>
```

## Interop and security notes

- In Embedding and Media, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Continue with **Security and Authoring Notes**.
