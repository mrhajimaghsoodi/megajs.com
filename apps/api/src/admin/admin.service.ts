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
