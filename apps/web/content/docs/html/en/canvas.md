---
title: "HTML Canvas"
description: "Learn how JavaScript draws pixels, charts, games, or visual effects on a bitmap surface with real HTML examples and practical checks."
seoTitle: "HTML Canvas Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Canvas with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML canvas, canvas getContext 2d, JavaScript drawing"
order: 47
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Canvas

In HTML Canvas, you learn how JavaScript draws pixels, charts, games, or visual effects on a bitmap surface. The focus is HTML canvas, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you need dynamic drawing rather than static markup shapes. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML canvas?

- It gives HTML canvas a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<canvas>`, `getContext("2d")` and `fallback text`.
- It improves real pages when you need dynamic drawing rather than static markup shapes, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Simple rectangle

```html
<canvas id="chart" width="300" height="150">Canvas is not supported.</canvas>
<script>
  const canvas = document.querySelector('#chart');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'royalblue';
  ctx.fillRect(20, 20, 120, 80);
</script>
```

### Example 2: Progress bar

```html
<canvas id="progress" width="320" height="120">Progress chart fallback</canvas>
<script>
  const progress = document.querySelector('#progress');
  const ctx = progress.getContext('2d');
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(20, 45, 280, 30);
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(20, 45, 190, 30);
</script>
```

### Example 3: Drawing a badge

```html
<canvas id="badge" width="200" height="200" aria-label="Canvas badge"></canvas>
<script>
  const badge = document.querySelector('#badge');
  const ctx = badge.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 100, 70, 0, Math.PI * 2);
  ctx.fillStyle = 'gold';
  ctx.fill();
  ctx.strokeText('HTML', 76, 105);
</script>
```

## Example explained

- The first example shows the core pattern for HTML canvas without unrelated layout code.
- Pay attention to `<canvas>`: creates the drawing surface.
- The second and third examples show how the same idea fits into a larger page with fallback text, titles, canvas size, or viewBox details.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<canvas>` | creates the drawing surface | Use it while practicing HTML canvas. |
| `getContext("2d")` | returns the 2D drawing API | Use it while practicing HTML canvas. |
| `fallback text` | appears when canvas is unsupported | Use it while practicing HTML canvas. |

## Browser, accessibility, and SEO notes

- Test HTML canvas in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Provide alternative text or titles for graphics; canvas without fallback is not enough for screen readers.

## Common mistakes

- Using HTML canvas only for appearance instead of matching the content role.
- Forgetting `<canvas>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `canvas.html`, copy the first example, then add one extra line that uses `<canvas>` correctly in your own content.

## Next step

Next step: continue with **HTML SVG** so the next concept builds on this one.
