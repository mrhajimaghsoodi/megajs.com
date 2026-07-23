import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async dashboard() {
    const [
      users,
      courses,
      publishedLessons,
      orders,
      activeSubs,
      challenges,
      liveScheduled,
      liveNow,
      tokenBalance,
      ticketsOpen,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.course.count(),
      this.prisma.lesson.count({ where: { status: 'published' } }),
      this.prisma.order.count(),
      this.prisma.subscription.count({
        where: { status: 'active', endsAt: { gt: new Date() } },
      }),
      this.prisma.challenge.count({ where: { status: 'published' } }),
      this.prisma.liveEvent.count({ where: { status: 'scheduled' } }),
      this.prisma.liveEvent.count({ where: { status: 'live' } }),
      this.prisma.wallet.aggregate({ _sum: { balance: true } }),
      this.prisma.ticket.count({
        where: { status: { in: ['open', 'pending', 'answered'] } },
      }),
    ]);

    return {
      users,
      courses,
      publishedLessons,
      orders,
      activeSubs,
      challenges,
      liveScheduled,
      liveNow,
      totalTokensInWallets: tokenBalance._sum.balance ?? 0,
      ticketsOpen,
      generatedAt: new Date().toISOString(),
    };
  }

  listUsers(q?: string) {
    return this.prisma.user.findMany({
      where: q
        ? {
            OR: [
              { phone: { contains: q } },
              { email: { contains: q } },
              { displayName: { contains: q } },
            ],
          }
        : undefined,
      include: {
        wallet: true,
        identities: true,
        _count: { select: { enrollments: true, submissions: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async setUserRole(id: string, role: string) {
    const allowed = [
      'user',
      'instructor',
      'editor',
      'support',
      'analyst',
      'super_admin',
    ];
    if (!allowed.includes(role)) throw new BadRequestException('Invalid role');
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException();
    const updated = await this.prisma.user.update({
      where: { id },
      data: { role },
    });
    await this.prisma.auditLog.create({
      data: {
        actorId: null,
        action: 'user.role_change',
        entity: 'User',
        entityId: id,
        metaJson: JSON.stringify({ role }),
      },
    });
    return updated;
  }

  listTracks() {
    return this.prisma.track.findMany({
      include: { i18n: true, _count: { select: { courses: true } }, seo: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  listCourses() {
    return this.prisma.course.findMany({
      include: {
        i18n: true,
        track: true,
        seo: true,
        _count: { select: { enrollments: true, modules: true } },
      },
      orderBy: [{ trackId: 'asc' }, { sortOrder: 'asc' }],
    });
  }

  listSeo() {
    return this.prisma.seoMeta.findMany({ orderBy: { entityType: 'asc' }, take: 200 });
  }

  listOrders() {
    return this.prisma.order.findMany({
      include: { user: { select: { id: true, phone: true, displayName: true } } },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  listChallenges() {
    return this.prisma.challenge.findMany({
      include: {
        i18n: true,
        _count: { select: { submissions: true, tests: true } },
      },
      orderBy: { points: 'asc' },
    });
  }

  listAudit() {
    return this.prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }
}
