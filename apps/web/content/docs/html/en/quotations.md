---
title: "HTML Quotations"
description: "A focused lesson on representing quotes, abbreviations, addresses, and citations."
seoTitle: "Quotations in HTML — Step-by-Step Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Quotations with a W3Schools-style step-by-step guide to syntax, examples, best practices, and next steps for real web pages. Practice it today."
keywords: "learn HTML, Quotations, HTML tutorial, W3Schools, web development"
order: 11
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Quotations

This chapter teaches representing quotes, abbreviations, addresses, and citations. The order follows the W3Schools HTML tutorial spine, but the explanations are rewritten for MEGA JS so you can learn the same concepts without memorizing copied examples.

## What and why

HTML Quotations matters because HTML is the contract between your content, the browser, search engines, assistive technologies, CSS, and JavaScript. When the markup is precise, styling becomes easier, scripts have stable targets, and users get a page that works across devices.

In practice, focus on the role of the element or attribute before you focus on visual output. Browsers provide default behavior, but good HTML gives that behavior a clear purpose.

## Syntax

```html
<blockquote cite="https://developer.mozilla.org/">
  <p>Use blockquote for longer quoted passages.</p>
</blockquote>
<p><abbr title="HyperText Markup Language">HTML</abbr> structures web pages.</p>
```

Read the snippet from the outside in: identify the containing element, then the attributes, then the text or nested elements. This habit makes larger documents much easier to debug.

## Quick reference

| Item | Purpose | Example cue |
| --- | --- | --- |
| Core concept | The role this lesson plays in HTML structure | Quotations |
| Syntax | How the related element, attribute, or API is written | Watch opening tags and attribute values |
| Browser behavior | What the browser provides by default | Inspect the result in DevTools |
| Quality check | Accessibility, SEO, or maintainability impact | Use clear names and fallback text |

## Best practices

- Prefer semantic HTML before adding generic containers or JavaScript behavior.
- Keep examples small while learning, then test the same idea inside a complete document.
- Write attributes intentionally: names, labels, alternative text, and URLs should explain their purpose.
- Validate the page, inspect it in DevTools, and test it with keyboard navigation when interaction is involved.

## Common mistakes to avoid

- Treating Quotations as only a visual feature instead of part of document meaning.
- Skipping required context such as labels, titles, fallback text, or character encoding.
- Copying markup without changing names, paths, and text to match the real page.

## Next step

Next step: open **HTML Comments** and build on this lesson while the syntax is still fresh.
