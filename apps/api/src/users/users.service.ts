import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async dashboard(userId: string) {
    const [user, progressCount, completed, enrollments, submissions, liveRegs, orders] =
      await Promise.all([
        this.prisma.user.findUnique({
          where: { id: userId },
          include: {
            wallet: true,
            identities: true,
            subscriptions: {
              where: { status: 'active', endsAt: { gt: new Date() } },
              include: { plan: true },
            },
          },
        }),
        this.prisma.lessonProgress.count({ where: { userId } }),
        this.prisma.lessonProgress.count({ where: { userId, completed: true } }),
        this.prisma.enrollment.count({ where: { userId } }),
        this.prisma.submission.count({ where: { userId } }),
        this.prisma.liveRegistration.count({ where: { userId } }),
        this.prisma.order.count({ where: { userId } }),
      ]);

    return {
      user,
      stats: {
        lessonsStarted: progressCount,
        lessonsCompleted: completed,
        enrollments,
        submissions,
        liveRegistrations: liveRegs,
        orders,
        streakPlaceholder: completed > 0 ? Math.min(completed, 30) : 0,
      },
    };
  }

  progress(userId: string) {
    return this.prisma.lessonProgress.findMany({
      where: { userId },
      include: {
        lesson: {
          include: {
            i18n: true,
            module: { include: { course: { include: { i18n: true } } } },
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    });
  }

  orders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  enrollments(userId: string) {
    return this.prisma.enrollment.findMany({
      where: { userId },
      include: {
        course: { include: { i18n: true, track: { include: { i18n: true } } } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  submissions(userId: string) {
    return this.prisma.submission.findMany({
      where: { userId },
      include: { challenge: { include: { i18n: true } } },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  updateSettings(
    userId: string,
    body: { locale?: string; theme?: string; displayName?: string },
  ) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        locale: body.locale,
        theme: body.theme,
        displayName: body.displayName,
      },
    });
  }
}
