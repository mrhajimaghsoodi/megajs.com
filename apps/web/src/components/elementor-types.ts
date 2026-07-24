export type Widget =
  | { id: string; type: 'heading'; data: { text: string; tag: 'h1' | 'h2' | 'h3' } }
  | { id: string; type: 'text'; data: { html: string } }
  | { id: string; type: 'button'; data: { label: string; href: string } }
  | { id: string; type: 'image'; data: { url: string; alt: string } }
  | { id: string; type: 'spacer'; data: { size: number } }
  | { id: string; type: 'html'; data: { html: string } };

export type Column = { id: string; width: number; widgets: Widget[] };
export type Section = {
  id: string;
  settings: { bg: string; padding: 'sm' | 'md' | 'lg' };
  columns: Column[];
};
export type BuilderDoc = { version: 1; sections: Section[] };
