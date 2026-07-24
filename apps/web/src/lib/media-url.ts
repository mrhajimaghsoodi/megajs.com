const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

/** Resolve relative `/api/uploads/...` URLs against the API host. */
export function resolveMediaUrl(url?: string | null): string {
  if (!url) return '';
  if (/^https?:\/\//i.test(url) || url.startsWith('data:')) return url;
  const origin = API.replace(/\/api\/?$/, '');
  if (url.startsWith('/')) return `${origin}${url}`;
  return `${origin}/${url}`;
}
