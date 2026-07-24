import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

type RedirectRow = { fromPath: string; toPath: string; code: number };

type CacheConfig = {
  enabled: boolean;
  htmlCacheSeconds: number;
  browserCacheSeconds: number;
  staleWhileRevalidateSeconds: number;
  excludePaths: string[];
  exposeDebugHeaders?: boolean;
  purgedAt?: string | null;
};

let redirectCache: { at: number; rows: RedirectRow[] } | null = null;
let rocketCache: { at: number; config: CacheConfig } | null = null;

const FALLBACK_CACHE: CacheConfig = {
  enabled: true,
  htmlCacheSeconds: 300,
  browserCacheSeconds: 0,
  staleWhileRevalidateSeconds: 86400,
  excludePaths: ['/login', '/profile', '/api', '/fa/login', '/en/login', '/fa/profile', '/en/profile'],
  exposeDebugHeaders: true,
  purgedAt: null,
};

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

async function getCacheConfig(): Promise<CacheConfig> {
  const now = Date.now();
  if (rocketCache && now - rocketCache.at < 30_000) return rocketCache.config;
  try {
    const res = await fetch(`${API}/public/cache-config`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return FALLBACK_CACHE;
    const config = (await res.json()) as CacheConfig;
    rocketCache = { at: now, config: { ...FALLBACK_CACHE, ...config } };
    return rocketCache.config;
  } catch {
    return FALLBACK_CACHE;
  }
}

function isExcluded(pathname: string, excludePaths: string[]) {
  return excludePaths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
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

  // SEO-friendly HTML cache (WP Rocket settings) — SWR keeps pages fast for users & crawlers
  if (!pathname.startsWith('/_next') && !pathname.includes('.')) {
    const cfg = await getCacheConfig();
    const privatePath =
      isExcluded(pathname, cfg.excludePaths) ||
      pathname.includes('/login') ||
      pathname.includes('/profile');

    if (!cfg.enabled || privatePath) {
      response.headers.set('Cache-Control', 'private, no-store, max-age=0, must-revalidate');
      response.headers.set('X-MEGA-Rocket', privatePath ? 'BYPASS' : 'OFF');
    } else {
      const sMax = Math.max(0, Number(cfg.htmlCacheSeconds) || 0);
      const maxAge = Math.max(0, Number(cfg.browserCacheSeconds) || 0);
      const swr = Math.max(0, Number(cfg.staleWhileRevalidateSeconds) || 0);
      const parts = [
        'public',
        `max-age=${maxAge}`,
        `s-maxage=${sMax}`,
        `stale-while-revalidate=${swr}`,
      ];
      response.headers.set('Cache-Control', parts.join(', '));
      response.headers.set(
        'CDN-Cache-Control',
        `public, s-maxage=${sMax}, stale-while-revalidate=${swr}`,
      );
      response.headers.set('X-MEGA-Rocket', 'HIT-POLICY');
      response.headers.set('Vary', 'Accept-Encoding');
      if (cfg.exposeDebugHeaders && cfg.purgedAt) {
        response.headers.set('X-MEGA-Cache-Bust', cfg.purgedAt);
      }
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
