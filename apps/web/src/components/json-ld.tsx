export function JsonLd({ data }: { data: unknown }) {
  if (!data) return null;
  const raw = typeof data === 'string' ? data : JSON.stringify(data);
  if (!raw || raw === '{}' || raw === 'null') return null;
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: raw }} />
  );
}
