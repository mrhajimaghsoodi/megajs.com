import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

type RedirectRow = { fromPath: string; toPath: string; code: number };

let redirectCache: { at: number; rows: RedirectRow[] } | null = null;

async function getRedirects(): Promise<RedirectRow[]> {
  const now = Date.now();
  if (redirectCache && now - redirectCache.at < 60_000) return redirectCache.rows;
  try {
    const res = await fetch(`${API}/public/redirects`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const rows = (await res.json()) as RedirectRow[];
    redirectCache = { at: now, rows };
    return rows;
  } catch {
    return [];
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Security headers (Wordfence-inspired hardening on the edge)
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  );

  // RankMath redirects
  const redirects = await getRedirects();
  const hit = redirects.find((r) => r.fromPath === pathname);
  if (hit) {
    const url = request.nextUrl.clone();
    url.pathname = hit.toPath;
    return NextResponse.redirect(url, (hit.code === 302 ? 302 : 301) as 301 | 302);
  }

  // WP Rocket-style cache policy for public pages
  const privatePaths = ['/login', '/profile', '/fa/login', '/en/login', '/fa/profile', '/en/profile'];
  const isPrivate = privatePaths.some(
    (p) => pathname === p || pathname.startsWith(p + '/'),
  );
  if (isPrivate) {
    response.headers.set('Cache-Control', 'private, no-store');
  } else if (!pathname.startsWith('/_next') && !pathname.includes('.')) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=300',
    );
    response.headers.set('X-MEGA-Rocket', '1');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
