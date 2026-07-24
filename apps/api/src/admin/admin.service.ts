import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WalletService } from '../wallet/wallet.service';

const STAFF_ROLES = [
  'user',
  'instructor',
  'editor',
  'support',
  'analyst',
  'super_admin',
] as const;

const USER_STATUSES = ['active', 'suspended', 'banned'] as const;

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly wallet: WalletService,
  ) {}

  private async audit(
    actorId: string | null,
    action: string,
    entityId: string | null,
    meta: Record<string, unknown> = {},
  ) {
    await this.prisma.auditLog.create({
      data: {
        actorId,
        action,
        entity: 'User',
        entityId,
        metaJson: JSON.stringify(meta),
      },
    });
  }

  async dashboard() {
    const now = new Date();
    const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      usersTotal,
      usersToday,
      usersWeek,
      usersMonth,
      usersByRole,
      usersByStatus,
      usersSuspended,
      coursesTotal,
      coursesPublished,
      lessonsPublished,
      lessonsDraft,
      tracksTotal,
      enrollmentsTotal,
      enrollmentsMonth,
      articlesTotal,
      articlesPublished,
      articlesDraft,
      pagesTotal,
      pagesPublished,
      mediaTotal,
      mediaOptimized,
      commentsPending,
      commentsApproved,
      ordersTotal,
      ordersToday,
      ordersWeek,
      ordersMonth,
      revenueCompleted,
      ordersByStatus,
      ordersByKind,
      activeSubs,
      couponsActive,
      plansActive,
      challengesPublished,
      submissionsTotal,
      submissionsWeek,
      liveScheduled,
      liveNow,
      liveEnded,
      tokenBalance,
      ticketsOpen,
      ticketsUrgent,
      ticketsResolvedMonth,
      securityEvents24h,
      blockedIps,
      lockouts,
      redirects,
      seoRows,
      recentUsers,
      recentOrders,
      recentTickets,
      recentAudit,
      recentArticles,
      topCourses,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.count({ where: { createdAt: { gte: dayAgo } } }),
      this.prisma.user.count({ where: { createdAt: { gte: weekAgo } } }),
      this.prisma.user.count({ where: { createdAt: { gte: monthAgo } } }),
      this.prisma.user.groupBy({ by: ['role'], _count: true }),
      this.prisma.user.groupBy({ by: ['status'], _count: true }),
      this.prisma.user.count({ where: { status: { in: ['suspended', 'banned'] } } }),
      this.prisma.course.count(),
      this.prisma.course.count({ where: { status: 'published' } }),
      this.prisma.lesson.count({ where: { status: 'published' } }),
      this.prisma.lesson.count({ where: { status: 'draft' } }),
      this.prisma.track.count(),
      this.prisma.enrollment.count(),
      this.prisma.enrollment.count({ where: { createdAt: { gte: monthAgo } } }),
      this.prisma.article.count(),
      this.prisma.article.count({ where: { status: 'published' } }),
      this.prisma.article.count({ where: { status: 'draft' } }),
      this.prisma.page.count(),
      this.prisma.page.count({ where: { status: 'published' } }),
      this.prisma.mediaItem.count(),
      this.prisma.mediaItem.count({ where: { smushStatus: 'optimized' } }),
      this.prisma.comment.count({ where: { status: 'pending' } }),
      this.prisma.comment.count({ where: { status: 'approved' } }),
      this.prisma.order.count(),
      this.prisma.order.count({ where: { createdAt: { gte: dayAgo } } }),
      this.prisma.order.count({ where: { createdAt: { gte: weekAgo } } }),
      this.prisma.order.count({ where: { createdAt: { gte: monthAgo } } }),
      this.prisma.order.aggregate({
        where: { status: 'completed' },
        _sum: { amountCents: true },
      }),
      this.prisma.order.groupBy({ by: ['status'], _count: true }),
      this.prisma.order.groupBy({
        by: ['kind'],
        _count: true,
        _sum: { amountCents: true },
      }),
      this.prisma.subscription.count({
        where: { status: 'active', endsAt: { gt: now } },
      }),
      this.prisma.coupon.count({ where: { active: true } }),
      this.prisma.plan.count({ where: { active: true } }),
      this.prisma.challenge.count({ where: { status: 'published' } }),
      this.prisma.submission.count(),
      this.prisma.submission.count({ where: { createdAt: { gte: weekAgo } } }),
      this.prisma.liveEvent.count({ where: { status: 'scheduled' } }),
      this.prisma.liveEvent.count({ where: { status: 'live' } }),
      this.prisma.liveEvent.count({ where: { status: 'ended' } }),
      this.prisma.wallet.aggregate({ _sum: { balance: true } }),
      this.prisma.ticket.count({
        where: { status: { in: ['open', 'pending', 'answered'] } },
      }),
      this.prisma.ticket.count({
        where: {
          priority: 'urgent',
          status: { in: ['open', 'pending', 'answered'] },
        },
      }),
      this.prisma.ticket.count({
        where: {
          status: { in: ['resolved', 'closed'] },
          updatedAt: { gte: monthAgo },
        },
      }),
      this.prisma.securityEvent.count({ where: { createdAt: { gte: dayAgo } } }),
      this.prisma.blockedIp.count(),
      this.prisma.loginLockout.count({
        where: { lockedUntil: { gt: now } },
      }),
      this.prisma.redirect.count(),
      this.prisma.seoMeta.count(),
      this.prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        take: 8,
        select: {
          id: true,
          displayName: true,
          phone: true,
          role: true,
          status: true,
          createdAt: true,
        },
      }),
      this.prisma.order.findMany({
        orderBy: { createdAt: 'desc' },
        take: 8,
        include: {
          user: {
            select: { id: true, displayName: true, phone: true },
          },
        },
      }),
      this.prisma.ticket.findMany({
        orderBy: { updatedAt: 'desc' },
        take: 8,
        include: {
          user: { select: { displayName: true, phone: true } },
        },
      }),
      this.prisma.auditLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 12,
      }),
      this.prisma.article.findMany({
        orderBy: { updatedAt: 'desc' },
        take: 6,
        include: { i18n: true },
      }),
      this.prisma.enrollment.groupBy({
        by: ['courseId'],
        _count: true,
        orderBy: { _count: { courseId: 'desc' } },
        take: 5,
      }),
    ]);

    const courseIds = topCourses.map((c) => c.courseId);
    const courseRows = courseIds.length
      ? await this.prisma.course.findMany({
          where: { id: { in: courseIds } },
          include: { i18n: true },
        })
      : [];

    const health = {
      contentReady: articlesPublished + pagesPublished + coursesPublished,
      pendingModeration: commentsPending + ticketsUrgent,
      securityAlerts: blockedIps + lockouts + securityEvents24h,
      cacheOk: true,
    };

    return {
      generatedAt: now.toISOString(),
      // legacy flat fields (compat)
      users: usersTotal,
      courses: coursesTotal,
      publishedLessons: lessonsPublished,
      orders: ordersTotal,
      activeSubs,
      challenges: challengesPublished,
      liveScheduled,
      liveNow,
      totalTokensInWallets: tokenBalance._sum.balance ?? 0,
      ticketsOpen,
      overview: {
        usersTotal,
        usersToday,
        usersWeek,
        usersMonth,
        usersSuspended,
        revenueCompletedCents: revenueCompleted._sum.amountCents ?? 0,
        ordersToday,
        ordersWeek,
        ordersMonth,
        ticketsOpen,
        ticketsUrgent,
        liveNow,
        enrollmentsMonth,
        submissionsWeek,
      },
      people: {
        total: usersTotal,
        today: usersToday,
        week: usersWeek,
        month: usersMonth,
        suspended: usersSuspended,
        byRole: usersByRole,
        byStatus: usersByStatus,
      },
      content: {
        articlesTotal,
        articlesPublished,
        articlesDraft,
        pagesTotal,
        pagesPublished,
        mediaTotal,
        mediaOptimized,
        commentsPending,
        commentsApproved,
        redirects,
        seoRows,
      },
      catalog: {
        tracksTotal,
        coursesTotal,
        coursesPublished,
        lessonsPublished,
        lessonsDraft,
        enrollmentsTotal,
        enrollmentsMonth,
        topCourses: topCourses.map((row) => ({
          courseId: row.courseId,
          count: row._count,
          course: courseRows.find((c) => c.id === row.courseId) ?? null,
        })),
      },
      commerce: {
        ordersTotal,
        ordersToday,
        ordersWeek,
        ordersMonth,
        revenueCompletedCents: revenueCompleted._sum.amountCents ?? 0,
        byStatus: ordersByStatus,
        byKind: ordersByKind,
        activeSubs,
        couponsActive,
        plansActive,
      },
      learning: {
        challengesPublished,
        submissionsTotal,
        submissionsWeek,
        liveScheduled,
        liveNow,
        liveEnded,
        totalTokensInWallets: tokenBalance._sum.balance ?? 0,
      },
      support: {
        ticketsOpen,
        ticketsUrgent,
        ticketsResolvedMonth,
      },
      security: {
        events24h: securityEvents24h,
        blockedIps,
        lockouts,
      },
      health,
      recent: {
        users: recentUsers,
        orders: recentOrders,
        tickets: recentTickets,
        audit: recentAudit,
        articles: recentArticles,
      },
    };
  }

  listUsers(q?: string, role?: string, status?: string) {
    return this.prisma.user.findMany({
      where: {
        AND: [
          q
            ? {
                OR: [
                  { phone: { contains: q } },
                  { email: { contains: q } },
                  { displayName: { contains: q } },
                  { id: { contains: q } },
                ],
              }
            : {},
          role ? { role } : {},
          status ? { status } : {},
        ],
      },
      include: {
        wallet: true,
        identities: true,
        subscriptions: {
          where: { status: 'active', endsAt: { gt: new Date() } },
          include: { plan: true },
          take: 3,
        },
        _count: {
          select: {
            enrollments: true,
            submissions: true,
            orders: true,
            tickets: true,
            sessions: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async getUserDetail(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        wallet: { include: { ledger: { orderBy: { createdAt: 'desc' }, take: 50 } } },
        identities: true,
        sessions: { orderBy: { createdAt: 'desc' }, take: 20 },
        enrollments: {
          include: {
            course: { include: { i18n: true, track: { include: { i18n: true } } } },
          },
          orderBy: { createdAt: 'desc' },
        },
        subscriptions: {
          include: { plan: true },
          orderBy: { startsAt: 'desc' },
        },
        orders: { orderBy: { createdAt: 'desc' }, take: 50 },
        tickets: { orderBy: { updatedAt: 'desc' }, take: 20 },
        submissions: {
          include: { challenge: { include: { i18n: true } } },
          orderBy: { createdAt: 'desc' },
          take: 30,
        },
        progress: {
          include: { lesson: { include: { i18n: true } } },
          orderBy: { updatedAt: 'desc' },
          take: 30,
        },
        liveRegs: {
          include: { live: { include: { i18n: true } } },
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
        staffNotes: { orderBy: { createdAt: 'desc' }, take: 50 },
      },
    });
    if (!user) throw new NotFoundException('User not found');

    const [plans, courses, audit] = await Promise.all([
      this.prisma.plan.findMany({ where: { active: true }, orderBy: { priceCents: 'asc' } }),
      this.prisma.course.findMany({
        where: { status: 'published' },
        include: { i18n: true },
        orderBy: { sortOrder: 'asc' },
        take: 200,
      }),
      this.prisma.auditLog.findMany({
        where: { entity: 'User', entityId: id },
        orderBy: { createdAt: 'desc' },
        take: 40,
      }),
    ]);

    return {
      user,
      catalogs: { plans, courses },
      audit,
      authNote:
        'Authentication is phone OTP (no password). Revoke sessions to force re-login.',
    };
  }

  async updateUser(
    id: string,
    actorId: string,
    data: {
      displayName?: string | null;
      email?: string | null;
      phone?: string | null;
      phoneVerified?: boolean;
      avatarUrl?: string | null;
      locale?: string;
      theme?: string;
    },
  ) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException();

    if (data.email) {
      const clash = await this.prisma.user.findFirst({
        where: { email: data.email, NOT: { id } },
      });
      if (clash) throw new BadRequestException('Email already in use');
    }
    if (data.phone) {
      const normalized = data.phone.replace(/\s+/g, '');
      const clash = await this.prisma.user.findFirst({
        where: { phone: normalized, NOT: { id } },
      });
      if (clash) throw new BadRequestException('Phone already in use');
      data.phone = normalized;
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        displayName: data.displayName === undefined ? undefined : data.displayName,
        email: data.email === undefined ? undefined : data.email || null,
        phone: data.phone === undefined ? undefined : data.phone || null,
        phoneVerified: data.phoneVerified,
        avatarUrl: data.avatarUrl === undefined ? undefined : data.avatarUrl || null,
        locale: data.locale,
        theme: data.theme,
      },
    });
    await this.audit(actorId, 'user.profile_update', id, data as Record<string, unknown>);
    return updated;
  }

  async setUserRole(id: string, role: string, actorId: string) {
    if (!(STAFF_ROLES as readonly string[]).includes(role)) {
      throw new BadRequestException('Invalid role');
    }
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException();
    const updated = await this.prisma.user.update({
      where: { id },
      data: { role },
    });
    await this.audit(actorId, 'user.role_change', id, { from: user.role, to: role });
    return updated;
  }

  async setUserStatus(
    id: string,
    status: string,
    actorId: string,
    reason?: string,
  ) {
    if (!(USER_STATUSES as readonly string[]).includes(status)) {
      throw new BadRequestException('Invalid status');
    }
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException();
    if (id === actorId && status !== 'active') {
      throw new BadRequestException('Cannot suspend/ban yourself');
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        status,
        suspendedAt: status === 'active' ? null : new Date(),
        suspendedReason: status === 'active' ? null : reason || null,
      },
    });

    if (status !== 'active') {
      await this.prisma.session.deleteMany({ where: { userId: id } });
    }

    await this.audit(actorId, 'user.status_change', id, {
      from: user.status,
      to: status,
      reason,
    });
    return updated;
  }

  async adjustWallet(id: string, amount: number, reason: string, actorId: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException();
    const wallet = await this.wallet.adminAdjust(
      id,
      amount,
      reason || 'admin_adjust',
      actorId,
    );
    await this.audit(actorId, 'user.wallet_adjust', id, { amount, reason });
    return wallet;
  }

  async grantEnrollment(userId: string, courseId: string, actorId: string) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');
    const enrollment = await this.prisma.enrollment.upsert({
      where: { userId_courseId: { userId, courseId } },
      create: { userId, courseId, source: 'admin_grant' },
      update: {},
      include: { course: { include: { i18n: true } } },
    });
    await this.audit(actorId, 'user.enrollment_grant', userId, { courseId });
    return enrollment;
  }

  async revokeEnrollment(userId: string, courseId: string, actorId: string) {
    await this.prisma.enrollment.deleteMany({ where: { userId, courseId } });
    await this.audit(actorId, 'user.enrollment_revoke', userId, { courseId });
    return { ok: true };
  }

  async grantSubscription(userId: string, planId: string, actorId: string, days?: number) {
    const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
    if (!plan) throw new NotFoundException('Plan not found');
    const startsAt = new Date();
    const interval = days && days > 0 ? days : plan.intervalDays;
    const endsAt = new Date(startsAt.getTime() + interval * 86400000);
    const sub = await this.prisma.subscription.create({
      data: {
        userId,
        planId: plan.id,
        status: 'active',
        startsAt,
        endsAt,
        autoRenew: false,
      },
      include: { plan: true },
    });
    await this.prisma.order.create({
      data: {
        userId,
        kind: 'admin_subscription',
        amountCents: 0,
        status: 'paid',
        metaJson: JSON.stringify({ planId, grantedBy: actorId }),
      },
    });
    await this.audit(actorId, 'user.subscription_grant', userId, {
      planId,
      endsAt: endsAt.toISOString(),
    });
    return sub;
  }

  async cancelSubscription(userId: string, subscriptionId: string, actorId: string) {
    const sub = await this.prisma.subscription.findFirst({
      where: { id: subscriptionId, userId },
    });
    if (!sub) throw new NotFoundException('Subscription not found');
    const updated = await this.prisma.subscription.update({
      where: { id: subscriptionId },
      data: { status: 'cancelled', autoRenew: false, endsAt: new Date() },
    });
    await this.audit(actorId, 'user.subscription_cancel', userId, { subscriptionId });
    return updated;
  }

  async revokeAllSessions(userId: string, actorId: string) {
    const result = await this.prisma.session.deleteMany({ where: { userId } });
    await this.audit(actorId, 'user.sessions_revoke_all', userId, { count: result.count });
    return result;
  }

  async revokeSession(userId: string, sessionId: string, actorId: string) {
    await this.prisma.session.deleteMany({ where: { id: sessionId, userId } });
    await this.audit(actorId, 'user.session_revoke', userId, { sessionId });
    return { ok: true };
  }

  async addStaffNote(userId: string, body: string, actorId: string) {
    if (!body?.trim()) throw new BadRequestException('Note body required');
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException();
    const note = await this.prisma.staffNote.create({
      data: { userId, authorId: actorId, body: body.trim() },
    });
    await this.audit(actorId, 'user.staff_note', userId, { noteId: note.id });
    return note;
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
