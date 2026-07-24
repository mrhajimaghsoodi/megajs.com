/** Pull first fenced ```html block from markdown body for playground default. */
export function extractFirstHtmlFence(markdown: string): string | null {
  const html = markdown.match(/```html\s*\n([\s\S]*?)```/i);
  if (html) return html[1].trim();

  // Learn-track CSS pages may use a bare ```css fence — wrap it for the live editor.
  const css = markdown.match(/```css\s*\n([\s\S]*?)```/i);
  if (css) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
${css[1].trim()}
</style>
</head>
<body>
  <h1>CSS preview</h1>
  <p class="demo">Edit the CSS above and press Run.</p>
  <div class="box">Box</div>
  <ul class="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</body>
</html>`;
  }

  // Learn-track JS pages may use a bare ```js / ```javascript fence.
  const js = markdown.match(/```(?:js|javascript)\s*\n([\s\S]*?)```/i);
  if (js) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <h1>JavaScript preview</h1>
  <pre id="out"></pre>
  <script>
  const out = document.querySelector('#out');
  const log = (...args) => {
    out.textContent += args.map(String).join(' ') + '\\n';
  };
  try {
${js[1].trim()}
  } catch (error) {
    log('Error:', error && error.message ? error.message : error);
  }
  </script>
</body>
</html>`;
  }

  return null;
}
