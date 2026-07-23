import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}

  async ensureWallet(userId: string) {
    const existing = await this.prisma.wallet.findUnique({ where: { userId } });
    if (existing) return existing;
    return this.prisma.wallet.create({ data: { userId, balance: 0 } });
  }

  async getWallet(userId: string) {
    const wallet = await this.ensureWallet(userId);
    return { id: wallet.id, balance: wallet.balance, updatedAt: wallet.updatedAt };
  }

  async getLedger(userId: string) {
    const wallet = await this.ensureWallet(userId);
    return this.prisma.ledgerEntry.findMany({
      where: { walletId: wallet.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  async credit(
    userId: string,
    amount: number,
    reason: string,
    refType?: string,
    refId?: string,
  ) {
    if (amount <= 0) throw new BadRequestException('amount must be > 0');
    const wallet = await this.ensureWallet(userId);
    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: amount } },
      });
      await tx.ledgerEntry.create({
        data: {
          walletId: wallet.id,
          type: 'earn',
          amount,
          reason,
          refType,
          refId,
        },
      });
      return updated;
    });
  }

  async redeem(
    userId: string,
    tokens: number,
    target: 'subscription' | 'course',
    targetId: string,
  ) {
    const wallet = await this.ensureWallet(userId);
    if (wallet.balance < tokens) {
      throw new BadRequestException('Insufficient token balance');
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: tokens } },
      });
      await tx.ledgerEntry.create({
        data: {
          walletId: wallet.id,
          type: 'redeem',
          amount: -tokens,
          reason: `redeem:${target}`,
          refType: target,
          refId: targetId,
        },
      });

      if (target === 'course') {
        const course = await tx.course.findUnique({ where: { id: targetId } });
        if (!course) throw new NotFoundException('Course not found');
        await tx.enrollment.upsert({
          where: { userId_courseId: { userId, courseId: targetId } },
          create: { userId, courseId: targetId, source: 'token_redeem' },
          update: {},
        });
      }

      if (target === 'subscription') {
        const plan = await tx.plan.findUnique({ where: { id: targetId } });
        if (!plan || !plan.active) throw new NotFoundException('Plan not found');
        const startsAt = new Date();
        const endsAt = new Date(startsAt.getTime() + plan.intervalDays * 86400000);
        await tx.subscription.create({
          data: {
            userId,
            planId: plan.id,
            status: 'active',
            startsAt,
            endsAt,
          },
        });
      }

      await tx.order.create({
        data: {
          userId,
          kind: `token_${target}`,
          amountCents: 0,
          tokenSpent: tokens,
          status: 'paid',
          metaJson: JSON.stringify({ targetId }),
        },
      });

      return { balance: updated.balance, redeemed: tokens, target, targetId };
    });
  }
}
