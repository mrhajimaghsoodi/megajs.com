/** Pull first fenced ```html block from markdown body for playground default. */
export function extractFirstHtmlFence(markdown: string): string | null {
  const m = markdown.match(/```html\s*\n([\s\S]*?)```/i);
  return m ? m[1].trim() : null;
}
