import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const DEFAULTS = {
  enabled: true,
  lazyLoad: true,
  webpRewrite: true,
  compressionQuality: 82,
  stripMetadata: true,
  maxWidth: 1920,
};

@Injectable()
export class SmushService {
  constructor(private readonly prisma: PrismaService) {}

  async getSettings() {
    const row = await this.prisma.siteSetting.findUnique({ where: { key: 'smush' } });
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
      where: { key: 'smush' },
      create: { key: 'smush', valueJson: JSON.stringify(next) },
      update: { valueJson: JSON.stringify(next) },
    });
    return next;
  }

  /** Simulate Smush optimization: mark media as optimized with WebP-friendly URL hint */
  async optimizeOne(id: string) {
    const item = await this.prisma.mediaItem.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Media not found');
    const settings = await this.getSettings();
    if (!settings.enabled) {
      return this.prisma.mediaItem.update({
        where: { id },
        data: { smushStatus: 'skipped' },
      });
    }

    const original = item.originalBytes || item.sizeBytes || 120_000;
    const quality = Number(settings.compressionQuality ?? 82) / 100;
    const saved = Math.max(1024, Math.floor(original * (1 - quality * 0.55)));
    const optimizedBytes = Math.max(2048, original - saved);

    let optimizedUrl = item.url;
    if (settings.webpRewrite && !item.url.includes('format=webp')) {
      const join = item.url.includes('?') ? '&' : '?';
      optimizedUrl = `${item.url}${join}format=webp&q=${settings.compressionQuality}`;
    }

    return this.prisma.mediaItem.update({
      where: { id },
      data: {
        originalBytes: original,
        sizeBytes: optimizedBytes,
        optimizedUrl,
        smushStatus: 'optimized',
      },
    });
  }

  async optimizeBulk(limit = 50) {
    const pending = await this.prisma.mediaItem.findMany({
      where: { smushStatus: { in: ['pending', 'skipped'] } },
      take: Math.min(200, Math.max(1, limit)),
      orderBy: { createdAt: 'desc' },
    });
    const results = [];
    for (const item of pending) {
      results.push(await this.optimizeOne(item.id));
    }
    return { optimized: results.length, items: results };
  }

  async stats() {
    const [total, optimized, pending, sizes] = await Promise.all([
      this.prisma.mediaItem.count(),
      this.prisma.mediaItem.count({ where: { smushStatus: 'optimized' } }),
      this.prisma.mediaItem.count({ where: { smushStatus: 'pending' } }),
      this.prisma.mediaItem.aggregate({
        _sum: { sizeBytes: true, originalBytes: true },
      }),
    ]);
    const settings = await this.getSettings();
    return {
      settings,
      total,
      optimized,
      pending,
      bytesNow: sizes._sum.sizeBytes ?? 0,
      bytesOriginal: sizes._sum.originalBytes ?? 0,
      saved: Math.max(0, (sizes._sum.originalBytes ?? 0) - (sizes._sum.sizeBytes ?? 0)),
    };
  }
}
