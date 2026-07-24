import { serveTypedSitemap } from '@/lib/serve-sitemap';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET() {
  return serveTypedSitemap('category');
}
