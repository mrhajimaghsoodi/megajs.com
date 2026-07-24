---
title: "HTML Layout"
description: "A focused lesson on structuring a page with header, navigation, main content, and footer."
seoTitle: "Layout in HTML — Step-by-Step Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Layout with a W3Schools-style step-by-step guide to syntax, examples, best practices, and next steps for real web pages. Practice it today."
keywords: "learn HTML, Layout, HTML tutorial, W3Schools, web development"
order: 28
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Layout

This chapter teaches structuring a page with header, navigation, main content, and footer. The order follows the W3Schools HTML tutorial spine, but the explanations are rewritten for MEGA JS so you can learn the same concepts without memorizing copied examples.

## What and why

HTML Layout matters because HTML is the contract between your content, the browser, search engines, assistive technologies, CSS, and JavaScript. When the markup is precise, styling becomes easier, scripts have stable targets, and users get a page that works across devices.

In practice, focus on the role of the element or attribute before you focus on visual output. Browsers provide default behavior, but good HTML gives that behavior a clear purpose.

## Syntax

```html
<header>Site header</header>
<nav aria-label="Primary navigation">...</nav>
<main>
  <article>
    <h1>Page content</h1>
  </article>
</main>
<footer>Copyright notice</footer>
```

Read the snippet from the outside in: identify the containing element, then the attributes, then the text or nested elements. This habit makes larger documents much easier to debug.

## Quick reference

| Item | Purpose | Example cue |
| --- | --- | --- |
| Core concept | The role this lesson plays in HTML structure | Layout |
| Syntax | How the related element, attribute, or API is written | Watch opening tags and attribute values |
| Browser behavior | What the browser provides by default | Inspect the result in DevTools |
| Quality check | Accessibility, SEO, or maintainability impact | Use clear names and fallback text |

## Best practices

- Prefer semantic HTML before adding generic containers or JavaScript behavior.
- Keep examples small while learning, then test the same idea inside a complete document.
- Write attributes intentionally: names, labels, alternative text, and URLs should explain their purpose.
- Validate the page, inspect it in DevTools, and test it with keyboard navigation when interaction is involved.

## Common mistakes to avoid

- Treating Layout as only a visual feature instead of part of document meaning.
- Skipping required context such as labels, titles, fallback text, or character encoding.
- Copying markup without changing names, paths, and text to match the real page.

## Next step

Next step: open **HTML Responsive Web Design** and build on this lesson while the syntax is still fresh.
