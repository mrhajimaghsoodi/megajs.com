import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const DEFAULTS = {
  enabled: true,
  browserCacheSeconds: 604800,
  htmlCacheSeconds: 60,
  preloadPaths: ['/', '/fa', '/en', '/fa/learn', '/en/learn'],
  excludePaths: ['/login', '/profile', '/api'],
  minifyCss: true,
  minifyJs: false,
  lazyRender: true,
  dnsPrefetch: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
};

@Injectable()
export class WpRocketService {
  constructor(private readonly prisma: PrismaService) {}

  async getSettings() {
    const row = await this.prisma.siteSetting.findUnique({
      where: { key: 'wprocket' },
    });
    if (!row) return DEFAULTS;
    try {
      return { ...DEFAULTS, ...JSON.parse(row.valueJson) };
    } catch {
      return DEFAULTS;
    }
  }

  async saveSettings(value: Record<string, unknown>) {
    const next = { ...DEFAULTS, ...value };
    await this.prisma.siteSetting.upsert({
      where: { key: 'wprocket' },
      create: { key: 'wprocket', valueJson: JSON.stringify(next) },
      update: { valueJson: JSON.stringify(next) },
    });
    return next;
  }

  async purge() {
    const stamp = new Date().toISOString();
    await this.prisma.siteSetting.upsert({
      where: { key: 'wprocket_cache_bust' },
      create: { key: 'wprocket_cache_bust', valueJson: JSON.stringify({ purgedAt: stamp }) },
      update: { valueJson: JSON.stringify({ purgedAt: stamp }) },
    });
    return { ok: true, purgedAt: stamp };
  }

  async status() {
    const [settings, bust] = await Promise.all([
      this.getSettings(),
      this.prisma.siteSetting.findUnique({ where: { key: 'wprocket_cache_bust' } }),
    ]);
    let purgedAt: string | null = null;
    if (bust) {
      try {
        purgedAt = JSON.parse(bust.valueJson).purgedAt ?? null;
      } catch {
        purgedAt = null;
      }
    }
    return { settings, purgedAt };
  }

  cacheHeaders(pathname: string) {
    return this.getSettings().then((s) => {
      if (!s.enabled) {
        return {
          'Cache-Control': 'no-store',
        };
      }
      const excluded = (s.excludePaths as string[]).some(
        (p) => pathname === p || pathname.startsWith(p + '/'),
      );
      if (excluded) {
        return { 'Cache-Control': 'private, no-store' };
      }
      return {
        'Cache-Control': `public, s-maxage=${s.htmlCacheSeconds}, stale-while-revalidate=300`,
        'X-MEGA-Rocket': 'HIT-POLICY',
      };
    });
  }
}
