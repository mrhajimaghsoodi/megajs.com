import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const ORDER_STATUSES = [
  'pending',
  'processing',
  'completed',
  'on_hold',
  'cancelled',
  'refunded',
  'failed',
] as const;

@Injectable()
export class CommerceAdminService {
  constructor(private readonly prisma: PrismaService) {}

  private async audit(
    actorId: string | null,
    action: string,
    entity: string,
    entityId: string | null,
    meta: Record<string, unknown> = {},
  ) {
    await this.prisma.auditLog.create({
      data: {
        actorId,
        action,
        entity,
        entityId,
        metaJson: JSON.stringify(meta),
      },
    });
  }

  private slugify(input: string) {
    return input
      .trim()
      .toLowerCase()
      .replace(/[^\w\u0600-\u06FF]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
  }

  // ——— Orders ———

  listOrders(status?: string, q?: string) {
    return this.prisma.order.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(q
          ? {
              OR: [
                { id: { contains: q } },
                { user: { phone: { contains: q } } },
                { user: { email: { contains: q } } },
                { user: { displayName: { contains: q } } },
              ],
            }
          : {}),
      },
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            phone: true,
            email: true,
          },
        },
        coupon: true,
        _count: { select: { notes: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
  }

  async getOrder(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            phone: true,
            email: true,
            role: true,
            status: true,
          },
        },
        coupon: true,
        notes: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!order) throw new NotFoundException('Order not found');

    let product: unknown = null;
    let plan: unknown = null;
    if (order.productId) {
      product = await this.prisma.course.findUnique({
        where: { id: order.productId },
        include: { i18n: true },
      });
    }
    if (order.planId) {
      plan = await this.prisma.plan.findUnique({ where: { id: order.planId } });
    }

    return { ...order, product, plan };
  }

  async updateOrderStatus(id: string, status: string, actorId: string) {
    if (!ORDER_STATUSES.includes(status as any)) {
      throw new BadRequestException(`Invalid status: ${status}`);
    }
    const existing = await this.prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Order not found');

    const data: Record<string, unknown> = { status };
    if (status === 'completed' && !existing.paidAt) data.paidAt = new Date();
    if (status === 'refunded') {
      data.refundedAt = new Date();
      if (!existing.refundCents) data.refundCents = existing.amountCents;
    }

    const order = await this.prisma.order.update({ where: { id }, data });
    await this.audit(actorId, 'order.status', 'Order', id, {
      from: existing.status,
      to: status,
    });
    return order;
  }

  async refundOrder(
    id: string,
    actorId: string,
    body: { amountCents?: number; note?: string },
  ) {
    const existing = await this.prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Order not found');
    const amount =
      body.amountCents === undefined
        ? existing.amountCents
        : Math.max(0, Math.min(existing.amountCents, Number(body.amountCents)));

    const order = await this.prisma.order.update({
      where: { id },
      data: {
        status: 'refunded',
        refundCents: amount,
        refundedAt: new Date(),
      },
    });

    if (body.note?.trim()) {
      await this.prisma.orderNote.create({
        data: {
          orderId: id,
          authorId: actorId,
          body: body.note.trim(),
          isCustomerVisible: false,
        },
      });
    }

    await this.audit(actorId, 'order.refund', 'Order', id, { amount });
    return order;
  }

  async addOrderNote(
    id: string,
    actorId: string,
    body: { body?: string; isCustomerVisible?: boolean },
  ) {
    if (!body.body?.trim()) throw new BadRequestException('body required');
    const existing = await this.prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Order not found');
    const note = await this.prisma.orderNote.create({
      data: {
        orderId: id,
        authorId: actorId,
        body: body.body.trim(),
        isCustomerVisible: Boolean(body.isCustomerVisible),
      },
    });
    await this.audit(actorId, 'order.note', 'Order', id);
    return note;
  }

  // ——— Coupons ———

  listCoupons() {
    return this.prisma.coupon.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async createCoupon(
    actorId: string,
    body: {
      code?: string;
      discountType?: string;
      amount?: number;
      currency?: string;
      maxUses?: number | null;
      minAmountCents?: number;
      expiresAt?: string | null;
      active?: boolean;
      scopeJson?: string;
    },
  ) {
    if (!body.code?.trim()) throw new BadRequestException('code required');
    if (!['percent', 'fixed'].includes(body.discountType ?? '')) {
      throw new BadRequestException('discountType must be percent|fixed');
    }
    const coupon = await this.prisma.coupon.create({
      data: {
        code: body.code.trim().toUpperCase(),
        discountType: body.discountType!,
        amount: Number(body.amount ?? 0),
        currency: body.currency ?? 'IRT',
        maxUses: body.maxUses ?? null,
        minAmountCents: body.minAmountCents ?? 0,
        expiresAt: body.expiresAt ? new Date(body.expiresAt) : null,
        active: body.active ?? true,
        scopeJson: body.scopeJson ?? '{}',
      },
    });
    await this.audit(actorId, 'coupon.create', 'Coupon', coupon.id);
    return coupon;
  }

  async updateCoupon(
    id: string,
    actorId: string,
    body: Partial<{
      code: string;
      discountType: string;
      amount: number;
      currency: string;
      maxUses: number | null;
      minAmountCents: number;
      expiresAt: string | null;
      active: boolean;
      scopeJson: string;
    }>,
  ) {
    const coupon = await this.prisma.coupon.update({
      where: { id },
      data: {
        code: body.code?.trim().toUpperCase(),
        discountType: body.discountType,
        amount: body.amount === undefined ? undefined : Number(body.amount),
        currency: body.currency,
        maxUses: body.maxUses,
        minAmountCents: body.minAmountCents,
        expiresAt:
          body.expiresAt === undefined
            ? undefined
            : body.expiresAt
              ? new Date(body.expiresAt)
              : null,
        active: body.active,
        scopeJson: body.scopeJson,
      },
    });
    await this.audit(actorId, 'coupon.update', 'Coupon', id, body);
    return coupon;
  }

  async deleteCoupon(id: string, actorId: string) {
    await this.prisma.coupon.delete({ where: { id } });
    await this.audit(actorId, 'coupon.delete', 'Coupon', id);
    return { ok: true };
  }

  // ——— Plans ———

  listPlans() {
    return this.prisma.plan.findMany({
      include: { _count: { select: { subscriptions: true } } },
      orderBy: { priceCents: 'asc' },
    });
  }

  async createPlan(
    actorId: string,
    body: {
      code?: string;
      intervalDays?: number;
      priceCents?: number;
      currency?: string;
      active?: boolean;
      i18nJson?: string;
    },
  ) {
    if (!body.code?.trim()) throw new BadRequestException('code required');
    const plan = await this.prisma.plan.create({
      data: {
        code: body.code.trim(),
        intervalDays: Number(body.intervalDays ?? 30),
        priceCents: Number(body.priceCents ?? 0),
        currency: body.currency ?? 'IRT',
        active: body.active ?? true,
        i18nJson: body.i18nJson ?? '{}',
      },
    });
    await this.audit(actorId, 'plan.create', 'Plan', plan.id);
    return plan;
  }

  async updatePlan(
    id: string,
    actorId: string,
    body: Partial<{
      code: string;
      intervalDays: number;
      priceCents: number;
      currency: string;
      active: boolean;
      i18nJson: string;
    }>,
  ) {
    const plan = await this.prisma.plan.update({
      where: { id },
      data: {
        code: body.code?.trim(),
        intervalDays:
          body.intervalDays === undefined ? undefined : Number(body.intervalDays),
        priceCents:
          body.priceCents === undefined ? undefined : Number(body.priceCents),
        currency: body.currency,
        active: body.active,
        i18nJson: body.i18nJson,
      },
    });
    await this.audit(actorId, 'plan.update', 'Plan', id, body);
    return plan;
  }

  // ——— Catalog write (products = courses) ———

  async createTrack(
    actorId: string,
    body: {
      slug?: string;
      yearPlan?: number;
      status?: string;
      sortOrder?: number;
      locale?: string;
      title?: string;
      summary?: string;
      description?: string;
    },
  ) {
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Untitled track';
    const slug = body.slug?.trim() || this.slugify(title) || `track-${Date.now()}`;
    const track = await this.prisma.track.create({
      data: {
        slug,
        yearPlan: Number(body.yearPlan ?? new Date().getFullYear()),
        status: body.status ?? 'draft',
        sortOrder: body.sortOrder ?? 0,
        i18n: {
          create: {
            locale,
            title,
            summary: body.summary ?? '',
            description: body.description ?? '',
          },
        },
      },
      include: { i18n: true },
    });
    await this.audit(actorId, 'track.create', 'Track', track.id);
    return track;
  }

  async updateTrack(
    id: string,
    actorId: string,
    body: {
      slug?: string;
      yearPlan?: number;
      status?: string;
      sortOrder?: number;
      locale?: string;
      title?: string;
      summary?: string;
      description?: string;
    },
  ) {
    const locale = body.locale ?? 'fa';
    await this.prisma.track.update({
      where: { id },
      data: {
        slug: body.slug?.trim(),
        yearPlan: body.yearPlan === undefined ? undefined : Number(body.yearPlan),
        status: body.status,
        sortOrder: body.sortOrder,
      },
    });
    if (body.title !== undefined || body.summary !== undefined || body.description !== undefined) {
      const cur = await this.prisma.trackI18n.findUnique({
        where: { trackId_locale: { trackId: id, locale } },
      });
      if (cur) {
        await this.prisma.trackI18n.update({
          where: { id: cur.id },
          data: {
            title: body.title ?? cur.title,
            summary: body.summary ?? cur.summary,
            description: body.description ?? cur.description,
          },
        });
      } else {
        await this.prisma.trackI18n.create({
          data: {
            trackId: id,
            locale,
            title: body.title ?? 'Untitled',
            summary: body.summary ?? '',
            description: body.description ?? '',
          },
        });
      }
    }
    await this.audit(actorId, 'track.update', 'Track', id, body);
    return this.prisma.track.findUnique({
      where: { id },
      include: { i18n: true, _count: { select: { courses: true } } },
    });
  }

  async createCourse(
    actorId: string,
    body: {
      trackId?: string;
      slug?: string;
      status?: string;
      accessTier?: string;
      priceCents?: number;
      currency?: string;
      sortOrder?: number;
      estimatedMinutes?: number;
      sku?: string;
      coverUrl?: string;
      featured?: boolean;
      locale?: string;
      title?: string;
      summary?: string;
      description?: string;
      termIds?: string[];
    },
  ) {
    if (!body.trackId) throw new BadRequestException('trackId required');
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Untitled course';
    const slug = body.slug?.trim() || this.slugify(title) || `course-${Date.now()}`;

    const course = await this.prisma.course.create({
      data: {
        trackId: body.trackId,
        slug,
        status: body.status ?? 'draft',
        accessTier: body.accessTier ?? 'paid',
        priceCents: Number(body.priceCents ?? 0),
        currency: body.currency ?? 'IRT',
        sortOrder: body.sortOrder ?? 0,
        estimatedMinutes: body.estimatedMinutes ?? 0,
        sku: body.sku,
        coverUrl: body.coverUrl,
        featured: body.featured ?? false,
        i18n: {
          create: {
            locale,
            title,
            summary: body.summary ?? '',
            description: body.description ?? '',
          },
        },
        ...(body.termIds?.length
          ? {
              taxonomies: {
                create: body.termIds.map((termId) => ({ termId })),
              },
            }
          : {}),
      },
      include: { i18n: true, taxonomies: true },
    });
    await this.audit(actorId, 'course.create', 'Course', course.id);
    return course;
  }

  async updateCourse(
    id: string,
    actorId: string,
    body: {
      trackId?: string;
      slug?: string;
      status?: string;
      accessTier?: string;
      priceCents?: number;
      currency?: string;
      sortOrder?: number;
      estimatedMinutes?: number;
      sku?: string | null;
      coverUrl?: string | null;
      featured?: boolean;
      locale?: string;
      title?: string;
      summary?: string;
      description?: string;
      termIds?: string[];
    },
  ) {
    const locale = body.locale ?? 'fa';
    await this.prisma.$transaction(async (tx) => {
      await tx.course.update({
        where: { id },
        data: {
          trackId: body.trackId,
          slug: body.slug?.trim(),
          status: body.status,
          accessTier: body.accessTier,
          priceCents:
            body.priceCents === undefined ? undefined : Number(body.priceCents),
          currency: body.currency,
          sortOrder: body.sortOrder,
          estimatedMinutes: body.estimatedMinutes,
          sku: body.sku === undefined ? undefined : body.sku,
          coverUrl: body.coverUrl === undefined ? undefined : body.coverUrl,
          featured: body.featured,
        },
      });

      if (
        body.title !== undefined ||
        body.summary !== undefined ||
        body.description !== undefined
      ) {
        const cur = await tx.courseI18n.findUnique({
          where: { courseId_locale: { courseId: id, locale } },
        });
        if (cur) {
          await tx.courseI18n.update({
            where: { id: cur.id },
            data: {
              title: body.title ?? cur.title,
              summary: body.summary ?? cur.summary,
              description: body.description ?? cur.description,
            },
          });
        } else {
          await tx.courseI18n.create({
            data: {
              courseId: id,
              locale,
              title: body.title ?? 'Untitled',
              summary: body.summary ?? '',
              description: body.description ?? '',
            },
          });
        }
      }

      if (body.termIds) {
        await tx.courseTerm.deleteMany({ where: { courseId: id } });
        if (body.termIds.length) {
          await tx.courseTerm.createMany({
            data: body.termIds.map((termId) => ({ courseId: id, termId })),
          });
        }
      }
    });

    await this.audit(actorId, 'course.update', 'Course', id, body);
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        i18n: true,
        taxonomies: { include: { term: { include: { i18n: true } } } },
        modules: { include: { i18n: true, lessons: { include: { i18n: true } } } },
      },
    });
  }

  async getCourse(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        i18n: true,
        track: { include: { i18n: true } },
        taxonomies: { include: { term: { include: { i18n: true } } } },
        modules: {
          orderBy: { sortOrder: 'asc' },
          include: {
            i18n: true,
            lessons: {
              orderBy: { sortOrder: 'asc' },
              include: { i18n: true },
            },
          },
        },
        seo: true,
        _count: { select: { enrollments: true } },
      },
    });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  async createModule(
    actorId: string,
    courseId: string,
    body: { slug?: string; sortOrder?: number; locale?: string; title?: string },
  ) {
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Module';
    const slug = body.slug?.trim() || this.slugify(title) || `mod-${Date.now()}`;
    const mod = await this.prisma.module.create({
      data: {
        courseId,
        slug,
        sortOrder: body.sortOrder ?? 0,
        i18n: { create: { locale, title } },
      },
      include: { i18n: true },
    });
    await this.audit(actorId, 'module.create', 'Module', mod.id);
    return mod;
  }

  async createLesson(
    actorId: string,
    moduleId: string,
    body: {
      slug?: string;
      status?: string;
      isFreePreview?: boolean;
      sortOrder?: number;
      durationSeconds?: number;
      youtubeUrl?: string;
      aparatUrl?: string;
      podcastUrl?: string;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
    },
  ) {
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Lesson';
    const slug = body.slug?.trim() || this.slugify(title) || `lesson-${Date.now()}`;
    const lesson = await this.prisma.lesson.create({
      data: {
        moduleId,
        slug,
        status: body.status ?? 'draft',
        isFreePreview: body.isFreePreview ?? false,
        sortOrder: body.sortOrder ?? 0,
        durationSeconds: body.durationSeconds ?? 0,
        youtubeUrl: body.youtubeUrl,
        aparatUrl: body.aparatUrl,
        podcastUrl: body.podcastUrl,
        i18n: {
          create: {
            locale,
            title,
            summary: body.summary ?? '',
            bodyMdx: body.bodyMdx ?? '',
          },
        },
      },
      include: { i18n: true },
    });
    await this.audit(actorId, 'lesson.create', 'Lesson', lesson.id);
    return lesson;
  }

  async updateLesson(
    id: string,
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      isFreePreview?: boolean;
      sortOrder?: number;
      durationSeconds?: number;
      youtubeUrl?: string | null;
      aparatUrl?: string | null;
      podcastUrl?: string | null;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
    },
  ) {
    const locale = body.locale ?? 'fa';
    await this.prisma.lesson.update({
      where: { id },
      data: {
        slug: body.slug?.trim(),
        status: body.status,
        isFreePreview: body.isFreePreview,
        sortOrder: body.sortOrder,
        durationSeconds: body.durationSeconds,
        youtubeUrl: body.youtubeUrl === undefined ? undefined : body.youtubeUrl,
        aparatUrl: body.aparatUrl === undefined ? undefined : body.aparatUrl,
        podcastUrl: body.podcastUrl === undefined ? undefined : body.podcastUrl,
      },
    });
    if (
      body.title !== undefined ||
      body.summary !== undefined ||
      body.bodyMdx !== undefined
    ) {
      const cur = await this.prisma.lessonI18n.findUnique({
        where: { lessonId_locale: { lessonId: id, locale } },
      });
      if (cur) {
        await this.prisma.lessonI18n.update({
          where: { id: cur.id },
          data: {
            title: body.title ?? cur.title,
            summary: body.summary ?? cur.summary,
            bodyMdx: body.bodyMdx ?? cur.bodyMdx,
          },
        });
      } else {
        await this.prisma.lessonI18n.create({
          data: {
            lessonId: id,
            locale,
            title: body.title ?? 'Lesson',
            summary: body.summary ?? '',
            bodyMdx: body.bodyMdx ?? '',
          },
        });
      }
    }
    await this.audit(actorId, 'lesson.update', 'Lesson', id, body);
    return this.prisma.lesson.findUnique({
      where: { id },
      include: { i18n: true },
    });
  }

  // ——— Reports ———

  async reports() {
    const now = new Date();
    const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      ordersTotal,
      revenueCompleted,
      ordersToday,
      ordersWeek,
      ordersMonth,
      byStatus,
      byKind,
      topCourses,
      activeSubs,
      couponsUsed,
      newUsersMonth,
      articlesPublished,
      pagesPublished,
    ] = await Promise.all([
      this.prisma.order.count(),
      this.prisma.order.aggregate({
        where: { status: 'completed' },
        _sum: { amountCents: true },
      }),
      this.prisma.order.count({ where: { createdAt: { gte: dayAgo } } }),
      this.prisma.order.count({ where: { createdAt: { gte: weekAgo } } }),
      this.prisma.order.count({ where: { createdAt: { gte: monthAgo } } }),
      this.prisma.order.groupBy({ by: ['status'], _count: true }),
      this.prisma.order.groupBy({ by: ['kind'], _count: true, _sum: { amountCents: true } }),
      this.prisma.enrollment.groupBy({
        by: ['courseId'],
        _count: true,
        orderBy: { _count: { courseId: 'desc' } },
        take: 10,
      }),
      this.prisma.subscription.count({
        where: { status: 'active', endsAt: { gt: now } },
      }),
      this.prisma.coupon.aggregate({ _sum: { usedCount: true } }),
      this.prisma.user.count({ where: { createdAt: { gte: monthAgo } } }),
      this.prisma.article.count({ where: { status: 'published' } }),
      this.prisma.page.count({ where: { status: 'published' } }),
    ]);

    const courseIds = topCourses.map((c) => c.courseId);
    const courses = courseIds.length
      ? await this.prisma.course.findMany({
          where: { id: { in: courseIds } },
          include: { i18n: true },
        })
      : [];

    return {
      ordersTotal,
      revenueCompletedCents: revenueCompleted._sum.amountCents ?? 0,
      ordersToday,
      ordersWeek,
      ordersMonth,
      byStatus,
      byKind,
      topCourses: topCourses.map((row) => ({
        ...row,
        course: courses.find((c) => c.id === row.courseId) ?? null,
      })),
      activeSubs,
      couponsUsed: couponsUsed._sum.usedCount ?? 0,
      newUsersMonth,
      articlesPublished,
      pagesPublished,
    };
  }
}
