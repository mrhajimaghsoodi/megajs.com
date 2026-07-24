import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * On-demand ISR purge — called by WP Rocket admin purge.
 * Auth: Authorization: Bearer $REVALIDATE_SECRET
 */
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'REVALIDATE_SECRET is not configured' },
      { status: 503 },
    );
  }

  const auth = req.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (token !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  let body: { purgeAll?: boolean; paths?: string[]; tags?: string[]; purgedAt?: string } = {};
  try {
    body = await req.json();
  } catch {
    body = { purgeAll: true };
  }

  const purged: string[] = [];

  if (body.purgeAll !== false) {
    revalidateTag('sitemap', 'max');
    revalidateTag('catalog', 'max');
    revalidateTag('articles', 'max');
    revalidateTag('pages', 'max');
    revalidateTag('terms', 'max');
    revalidateTag('courses', 'max');
    revalidatePath('/', 'layout');
    purged.push(
      'layout:/',
      'tag:sitemap',
      'tag:catalog',
      'tag:articles',
      'tag:pages',
      'tag:terms',
      'tag:courses',
    );
  }

  for (const path of body.paths ?? []) {
    revalidatePath(path);
    purged.push(`path:${path}`);
  }
  for (const tag of body.tags ?? []) {
    revalidateTag(tag, 'max');
    purged.push(`tag:${tag}`);
  }

  return NextResponse.json({
    ok: true,
    purgedAt: body.purgedAt ?? new Date().toISOString(),
    purged,
  });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    hint: 'POST with Bearer REVALIDATE_SECRET to purge cache',
  });
}
