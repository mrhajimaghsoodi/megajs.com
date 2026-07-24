import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export const ROCKET_DEFAULTS = {
  enabled: true,
  /** HTML / CDN shared cache (s-maxage) — SEO-friendly SWR */
  htmlCacheSeconds: 300,
  /** Browser cache for static-ish HTML (max-age) — keep short so users see updates */
  browserCacheSeconds: 0,
  /** Serve stale while background revalidate (CDN) */
  staleWhileRevalidateSeconds: 86400,
  preloadPaths: ['/', '/fa', '/en', '/fa/learn', '/en/learn', '/fa/articles', '/en/articles'],
  excludePaths: ['/login', '/profile', '/api', '/fa/login', '/en/login', '/fa/profile', '/en/profile'],
  minifyCss: true,
  minifyJs: false,
  lazyRender: true,
  dnsPrefetch: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
  /** Soft user hint: show cache age header for debugging */
  exposeDebugHeaders: true,
};

export type RocketSettings = typeof ROCKET_DEFAULTS;

@Injectable()
export class WpRocketService {
  constructor(private readonly prisma: PrismaService) {}

  async getSettings(): Promise<RocketSettings> {
    const row = await this.prisma.siteSetting.findUnique({
      where: { key: 'wprocket' },
    });
    if (!row) return { ...ROCKET_DEFAULTS };
    try {
      return { ...ROCKET_DEFAULTS, ...JSON.parse(row.valueJson) };
    } catch {
      return { ...ROCKET_DEFAULTS };
    }
  }

  async saveSettings(value: Record<string, unknown>) {
    const next = { ...ROCKET_DEFAULTS, ...value };
    await this.prisma.siteSetting.upsert({
      where: { key: 'wprocket' },
      create: { key: 'wprocket', valueJson: JSON.stringify(next) },
      update: { valueJson: JSON.stringify(next) },
    });
    return next;
  }

  async getCacheBust(): Promise<string | null> {
    const bust = await this.prisma.siteSetting.findUnique({
      where: { key: 'wprocket_cache_bust' },
    });
    if (!bust) return null;
    try {
      return JSON.parse(bust.valueJson).purgedAt ?? null;
    } catch {
      return null;
    }
  }

  /** Public config consumed by Next middleware (no secrets). */
  async getPublicConfig() {
    const [settings, purgedAt] = await Promise.all([this.getSettings(), this.getCacheBust()]);
    return {
      enabled: settings.enabled,
      htmlCacheSeconds: settings.htmlCacheSeconds,
      browserCacheSeconds: settings.browserCacheSeconds,
      staleWhileRevalidateSeconds: settings.staleWhileRevalidateSeconds,
      excludePaths: settings.excludePaths,
      preloadPaths: settings.preloadPaths,
      dnsPrefetch: settings.dnsPrefetch,
      exposeDebugHeaders: settings.exposeDebugHeaders,
      purgedAt,
    };
  }

  async purge() {
    const stamp = new Date().toISOString();
    await this.prisma.siteSetting.upsert({
      where: { key: 'wprocket_cache_bust' },
      create: { key: 'wprocket_cache_bust', valueJson: JSON.stringify({ purgedAt: stamp }) },
      update: { valueJson: JSON.stringify({ purgedAt: stamp }) },
    });

    const revalidate = await this.notifyWebRevalidate(stamp);
    return { ok: true, purgedAt: stamp, revalidate };
  }

  async status() {
    const [settings, purgedAt] = await Promise.all([this.getSettings(), this.getCacheBust()]);
    return { settings, purgedAt };
  }

  async cacheHeaders(pathname: string) {
    const [s, purgedAt] = await Promise.all([this.getSettings(), this.getCacheBust()]);
    if (!s.enabled) {
      return { 'Cache-Control': 'no-store', 'X-MEGA-Rocket': 'OFF' };
    }
    const excluded = (s.excludePaths as string[]).some(
      (p) => pathname === p || pathname.startsWith(`${p}/`),
    );
    if (excluded || this.isPrivatePath(pathname)) {
      return {
        'Cache-Control': 'private, no-store, max-age=0, must-revalidate',
        'X-MEGA-Rocket': 'BYPASS',
      };
    }

    const sMax = Math.max(0, Number(s.htmlCacheSeconds) || 0);
    const maxAge = Math.max(0, Number(s.browserCacheSeconds) || 0);
    const swr = Math.max(0, Number(s.staleWhileRevalidateSeconds) || 0);
    const parts = [`public`, `s-maxage=${sMax}`, `stale-while-revalidate=${swr}`];
    if (maxAge > 0) parts.splice(1, 0, `max-age=${maxAge}`);
    else parts.splice(1, 0, 'max-age=0');

    const headers: Record<string, string> = {
      'Cache-Control': parts.join(', '),
      'CDN-Cache-Control': `public, s-maxage=${sMax}, stale-while-revalidate=${swr}`,
      'X-MEGA-Rocket': 'HIT-POLICY',
      Vary: 'Accept-Encoding',
    };
    if (s.exposeDebugHeaders && purgedAt) {
      headers['X-MEGA-Cache-Bust'] = purgedAt;
    }
    return headers;
  }

  isPrivatePath(pathname: string) {
    const privateHints = ['/login', '/profile', '/admin'];
    return privateHints.some((p) => pathname === p || pathname.includes(p));
  }

  private async notifyWebRevalidate(purgedAt: string) {
    const base =
      process.env.WEB_REVALIDATE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.WEB_ORIGIN;
    const secret = process.env.REVALIDATE_SECRET;
    if (!base || !secret) {
      return { ok: false, reason: 'WEB_REVALIDATE_URL/REVALIDATE_SECRET not configured' };
    }
    try {
      const res = await fetch(`${base.replace(/\/$/, '')}/api/revalidate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${secret}`,
        },
        body: JSON.stringify({ purgeAll: true, purgedAt }),
      });
      const text = await res.text();
      return { ok: res.ok, status: res.status, body: text.slice(0, 500) };
    } catch (e: any) {
      return { ok: false, reason: e?.message ?? 'revalidate failed' };
    }
  }
}
