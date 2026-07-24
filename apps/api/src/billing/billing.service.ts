import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MyAccountPolicyService } from '../auth/my-account-policy.service';
import { PrismaService } from '../prisma/prisma.service';
import { WalletService } from '../wallet/wallet.service';

/** M2 billing stub: records paid orders without real gateway yet. */
@Injectable()
export class BillingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly wallet: WalletService,
    private readonly myAccount: MyAccountPolicyService,
  ) {}

  async listPlans() {
    const plans = await this.prisma.plan.findMany({ where: { active: true } });
    return plans.map((p) => ({
      id: p.id,
      code: p.code,
      intervalDays: p.intervalDays,
      priceCents: p.priceCents,
      currency: p.currency,
      i18n: JSON.parse(p.i18nJson || '{}'),
    }));
  }

  async checkoutSubscription(userId: string, planCode: string, tokenSpend: number) {
    await this.myAccount.assertCanPurchase(userId);
    const plan = await this.prisma.plan.findUnique({ where: { code: planCode } });
    if (!plan || !plan.active) throw new NotFoundException('Plan not found');

    if (tokenSpend > 0) {
      // redeem() already creates the subscription + ledger + order
      const redeemed = await this.wallet.redeem(userId, tokenSpend, 'subscription', plan.id);
      const cashCents = Math.max(plan.priceCents - tokenSpend * 1000, 0);
      return {
        balance: redeemed.balance,
        amountCents: cashCents,
        tokenSpent: tokenSpend,
        note: cashCents > 0
          ? 'Partial token payment applied; remaining cash gateway stub in M2.1'
          : 'Fully paid with tokens',
      };
    }

    const cashCents = plan.priceCents;
    const startsAt = new Date();
    const endsAt = new Date(startsAt.getTime() + plan.intervalDays * 86400000);

    const subscription = await this.prisma.subscription.create({
      data: {
        userId,
        planId: plan.id,
        status: 'active',
        startsAt,
        endsAt,
      },
    });

    const order = await this.prisma.order.create({
      data: {
        userId,
        kind: 'subscription',
        amountCents: cashCents,
        tokenSpent: 0,
        status: 'paid_stub',
        metaJson: JSON.stringify({ planCode, subscriptionId: subscription.id }),
      },
    });

    return {
      orderId: order.id,
      subscriptionId: subscription.id,
      amountCents: cashCents,
      tokenSpent: 0,
      note: 'Gateway stub — wire Zarinpal/Stripe in M2.1',
    };
  }

  async checkoutCourse(userId: string, courseSlug: string, tokenSpend: number) {
    await this.myAccount.assertCanPurchase(userId);
    if (!courseSlug) throw new BadRequestException('courseSlug required');
    const course = await this.prisma.course.findUnique({ where: { slug: courseSlug } });
    if (!course) throw new NotFoundException('Course not found');

    if (tokenSpend > 0) {
      const redeemed = await this.wallet.redeem(userId, tokenSpend, 'course', course.id);
      const cashCents = Math.max(course.priceCents - tokenSpend * 1000, 0);
      return {
        balance: redeemed.balance,
        courseId: course.id,
        amountCents: cashCents,
        tokenSpent: tokenSpend,
        note: cashCents > 0
          ? 'Partial token payment applied; remaining cash gateway stub in M2.1'
          : 'Fully paid with tokens',
      };
    }

    await this.prisma.enrollment.upsert({
      where: { userId_courseId: { userId, courseId: course.id } },
      create: { userId, courseId: course.id, source: 'purchase' },
      update: {},
    });

    const order = await this.prisma.order.create({
      data: {
        userId,
        kind: 'course',
        amountCents: course.priceCents,
        tokenSpent: 0,
        status: 'paid_stub',
        metaJson: JSON.stringify({ courseSlug }),
      },
    });

    return {
      orderId: order.id,
      courseId: course.id,
      amountCents: course.priceCents,
      tokenSpent: 0,
      note: 'Gateway stub — wire Zarinpal/Stripe in M2.1',
    };
  }
}

