import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LiveService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublic(locale: string) {
    const items = await this.prisma.liveEvent.findMany({
      where: { status: { in: ['scheduled', 'live', 'ended'] } },
      include: { i18n: { where: { locale } } },
      orderBy: { startsAt: 'desc' },
    });
    return items.map((l) => this.mapPublic(l));
  }

  async getBySlug(slug: string, locale: string) {
    const event = await this.prisma.liveEvent.findUnique({
      where: { slug },
      include: { i18n: { where: { locale } }, seo: true },
    });
    if (!event) throw new NotFoundException('Live event not found');
    return {
      ...this.mapPublic(event),
      playbackUrl: event.playbackUrl,
      recordingUrl: event.recordingUrl,
      description: event.i18n[0]?.description ?? '',
    };
  }

  private mapPublic(l: {
    id: string;
    slug: string;
    status: string;
    startsAt: Date;
    endsAt: Date | null;
    destinationsJson: string;
    externalUrlsJson: string;
    playbackUrl: string | null;
    recordingUrl: string | null;
    i18n: Array<{ title: string; summary: string }>;
  }) {
    return {
      id: l.id,
      slug: l.slug,
      status: l.status,
      startsAt: l.startsAt,
      endsAt: l.endsAt,
      title: l.i18n[0]?.title ?? l.slug,
      summary: l.i18n[0]?.summary ?? '',
      destinations: JSON.parse(l.destinationsJson || '[]'),
      externalUrls: JSON.parse(l.externalUrlsJson || '{}'),
      hasPlayback: Boolean(l.playbackUrl),
      hasRecording: Boolean(l.recordingUrl),
    };
  }

  async register(userId: string, slug: string) {
    const event = await this.prisma.liveEvent.findUnique({ where: { slug } });
    if (!event) throw new NotFoundException('Live event not found');
    if (event.status === 'cancelled') {
      throw new BadRequestException('Event cancelled');
    }
    await this.prisma.liveRegistration.upsert({
      where: { userId_liveId: { userId, liveId: event.id } },
      create: { userId, liveId: event.id },
      update: {},
    });
    return { ok: true, slug };
  }

  async myRegistrations(userId: string, locale: string) {
    const rows = await this.prisma.liveRegistration.findMany({
      where: { userId },
      include: {
        live: { include: { i18n: { where: { locale } } } },
      },
      orderBy: { createdAt: 'desc' },
    });
    return rows.map((r) => ({
      registeredAt: r.createdAt,
      event: this.mapPublic(r.live),
    }));
  }

  adminList() {
    return this.prisma.liveEvent.findMany({
      include: {
        i18n: true,
        registrations: { select: { id: true } },
        seo: true,
      },
      orderBy: { startsAt: 'desc' },
    });
  }

  async adminCreate(body: {
    slug?: string;
    startsAt?: string;
    destinations?: string[];
    fa?: { title: string; summary: string };
    en?: { title: string; summary: string };
    externalUrls?: Record<string, string>;
  }) {
    if (!body.slug || !body.startsAt || !body.fa?.title) {
      throw new BadRequestException('slug, startsAt, fa.title required');
    }
    const destinations = body.destinations?.length
      ? body.destinations
      : ['site', 'youtube', 'aparat', 'instagram'];
    return this.prisma.liveEvent.create({
      data: {
        slug: body.slug,
        status: 'scheduled',
        startsAt: new Date(body.startsAt),
        destinationsJson: JSON.stringify(destinations),
        externalUrlsJson: JSON.stringify(body.externalUrls ?? {}),
        ingestUrl: `rtmp://ingest.megajs.local/live/${body.slug}`,
        i18n: {
          create: [
            {
              locale: 'fa',
              title: body.fa.title,
              summary: body.fa.summary ?? '',
            },
            {
              locale: 'en',
              title: body.en?.title ?? body.fa.title,
              summary: body.en?.summary ?? body.fa.summary ?? '',
            },
          ],
        },
      },
      include: { i18n: true },
    });
  }

  async adminUpdateStatus(
    id: string,
    body: { status?: string; playbackUrl?: string; recordingUrl?: string },
  ) {
    const allowed = ['scheduled', 'live', 'ended', 'cancelled'];
    if (body.status && !allowed.includes(body.status)) {
      throw new BadRequestException('Invalid status');
    }
    const event = await this.prisma.liveEvent.findUnique({ where: { id } });
    if (!event) throw new NotFoundException();

    return this.prisma.liveEvent.update({
      where: { id },
      data: {
        status: body.status ?? event.status,
        playbackUrl: body.playbackUrl ?? event.playbackUrl,
        recordingUrl: body.recordingUrl ?? event.recordingUrl,
        endsAt:
          body.status === 'ended' || body.status === 'cancelled'
            ? new Date()
            : event.endsAt,
      },
    });
  }
}
