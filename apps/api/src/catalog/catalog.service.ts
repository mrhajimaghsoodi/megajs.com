import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  async listTracks(locale: string) {
    const tracks = await this.prisma.track.findMany({
      where: { status: { in: ['published', 'coming_soon'] } },
      orderBy: { sortOrder: 'asc' },
      include: {
        i18n: { where: { locale } },
        courses: {
          where: { status: { in: ['published', 'coming_soon'] } },
          orderBy: { sortOrder: 'asc' },
          include: { i18n: { where: { locale } } },
        },
      },
    });

    return tracks.map((t) => ({
      id: t.id,
      slug: t.slug,
      yearPlan: t.yearPlan,
      status: t.status,
      title: t.i18n[0]?.title ?? t.slug,
      summary: t.i18n[0]?.summary ?? '',
      courses: t.courses.map((c) => ({
        id: c.id,
        slug: c.slug,
        status: c.status,
        accessTier: c.accessTier,
        priceCents: c.priceCents,
        title: c.i18n[0]?.title ?? c.slug,
        summary: c.i18n[0]?.summary ?? '',
      })),
    }));
  }

  async getTrack(slug: string, locale: string) {
    const track = await this.prisma.track.findUnique({
      where: { slug },
      include: {
        i18n: { where: { locale } },
        courses: {
          orderBy: { sortOrder: 'asc' },
          include: { i18n: { where: { locale } } },
        },
        seo: true,
      },
    });
    if (!track) throw new NotFoundException('Track not found');
    return track;
  }

  async getCourse(slug: string, locale: string) {
    const course = await this.prisma.course.findUnique({
      where: { slug },
      include: {
        i18n: { where: { locale } },
        modules: {
          orderBy: { sortOrder: 'asc' },
          include: {
            i18n: { where: { locale } },
            lessons: {
              orderBy: { sortOrder: 'asc' },
              include: { i18n: { where: { locale } } },
            },
          },
        },
        seo: true,
        track: { include: { i18n: { where: { locale } } } },
      },
    });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  async listChallenges(locale: string) {
    const items = await this.prisma.challenge.findMany({
      where: { status: 'published' },
      include: { i18n: { where: { locale } } },
      orderBy: { points: 'asc' },
    });
    return items.map((c) => ({
      id: c.id,
      slug: c.slug,
      difficulty: c.difficulty,
      language: c.language,
      points: c.points,
      title: c.i18n[0]?.title ?? c.slug,
      prompt: c.i18n[0]?.promptMdx ?? '',
      starterCode: c.i18n[0]?.starterCode ?? '',
    }));
  }

  async listLive(locale: string) {
    const items = await this.prisma.liveEvent.findMany({
      where: { status: { in: ['scheduled', 'live'] } },
      include: { i18n: { where: { locale } } },
      orderBy: { startsAt: 'asc' },
    });
    return items.map((l) => ({
      id: l.id,
      slug: l.slug,
      status: l.status,
      startsAt: l.startsAt,
      title: l.i18n[0]?.title ?? l.slug,
      summary: l.i18n[0]?.summary ?? '',
      destinations: JSON.parse(l.destinationsJson || '[]'),
      externalUrls: JSON.parse(l.externalUrlsJson || '{}'),
    }));
  }
}
