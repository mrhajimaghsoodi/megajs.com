import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { createHash, randomInt, randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import {
  mergeMyAccountSettings,
  type MyAccountSettings,
} from '../plugins/my-account.defaults';

type CaptchaChallenge = {
  answer: string;
  expiresAt: number;
};

@Injectable()
export class MyAccountPolicyService {
  private readonly captchas = new Map<string, CaptchaChallenge>();

  constructor(private readonly prisma: PrismaService) {}

  private hash(value: string) {
    return createHash('sha256').update(value).digest('hex');
  }

  async getSettings(): Promise<MyAccountSettings> {
    const row = await this.prisma.siteSetting.findUnique({ where: { key: 'my_account' } });
    if (!row) return mergeMyAccountSettings();
    try {
      return mergeMyAccountSettings(JSON.parse(row.valueJson));
    } catch {
      return mergeMyAccountSettings();
    }
  }

  createCaptcha() {
    this.gcCaptchas();
    const a = randomInt(2, 12);
    const b = randomInt(1, 9);
    const id = randomUUID();
    this.captchas.set(id, {
      answer: String(a + b),
      expiresAt: Date.now() + 10 * 60 * 1000,
    });
    return {
      id,
      question: `${a} + ${b} = ?`,
      expiresInSec: 600,
    };
  }

  assertCaptcha(captchaId?: string, captchaAnswer?: string) {
    if (!captchaId || captchaAnswer == null || captchaAnswer === '') {
      throw new BadRequestException('Captcha is required');
    }
    const row = this.captchas.get(captchaId);
    this.captchas.delete(captchaId);
    if (!row || row.expiresAt < Date.now()) {
      throw new BadRequestException('Captcha expired');
    }
    if (String(captchaAnswer).trim() !== row.answer) {
      throw new BadRequestException('Captcha is incorrect');
    }
  }

  async assertCaptchaIfEnabled(captchaId?: string, captchaAnswer?: string) {
    const settings = await this.getSettings();
    if (!settings.captcha.enabled) return;
    this.assertCaptcha(captchaId, captchaAnswer);
  }

  async assertCanLogin(user: { emailVerified: boolean; email: string | null }) {
    const settings = await this.getSettings();
    if (!settings.emailVerification.enabled) return;
    if (!settings.emailVerification.blockLogin) return;
    if (user.emailVerified) return;
    // Allow first-time users without email so they can set & verify it in account settings.
    if (!user.email) return;
    throw new ForbiddenException(
      'Email verification required before login. Verify your email to continue.',
    );
  }

  async requestEmailCodePublic(email: string) {
    const settings = await this.getSettings();
    if (!settings.emailVerification.enabled) {
      throw new BadRequestException('Email verification is disabled');
    }
    const normalized = email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({ where: { email: normalized } });
    if (!user) {
      return { ok: true, expiresInSec: 900 };
    }
    if (user.emailVerified) {
      return { ok: true, alreadyVerified: true };
    }
    const code = String(randomInt(100000, 999999));
    await this.prisma.otpCode.create({
      data: {
        phone: `email:${normalized}`,
        codeHash: this.hash(code),
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        userId: user.id,
      },
    });
    return {
      ok: true,
      expiresInSec: 900,
      devCode: process.env.NODE_ENV === 'production' ? undefined : code,
    };
  }

  async verifyEmailCodePublic(email: string, code: string) {
    const normalized = email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({ where: { email: normalized } });
    if (!user) throw new BadRequestException('Invalid or expired email code');
    const otp = await this.prisma.otpCode.findFirst({
      where: {
        phone: `email:${normalized}`,
        consumed: false,
        expiresAt: { gt: new Date() },
        userId: user.id,
      },
      orderBy: { createdAt: 'desc' },
    });
    if (!otp || otp.codeHash !== this.hash(code)) {
      throw new BadRequestException('Invalid or expired email code');
    }
    await this.prisma.otpCode.update({
      where: { id: otp.id },
      data: { consumed: true },
    });
    await this.prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true },
    });
    return { ok: true, emailVerified: true };
  }

  async assertCanPurchase(userId: string) {
    const settings = await this.getSettings();
    if (!settings.emailVerification.enabled) return;
    if (!settings.emailVerification.blockPurchase) return;
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new ForbiddenException('User not found');
    if (user.emailVerified) return;
    throw new ForbiddenException(
      'Email verification required before purchase. Verify your email in account settings.',
    );
  }

  async requestEmailCode(userId: string, email: string) {
    const settings = await this.getSettings();
    if (!settings.emailVerification.enabled) {
      throw new BadRequestException('Email verification is disabled');
    }
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      throw new BadRequestException('Invalid email');
    }
    const taken = await this.prisma.user.findFirst({
      where: { email: normalized, NOT: { id: userId } },
    });
    if (taken) throw new BadRequestException('Email already in use');

    await this.prisma.user.update({
      where: { id: userId },
      data: { email: normalized, emailVerified: false },
    });

    const code = String(randomInt(100000, 999999));
    await this.prisma.otpCode.create({
      data: {
        phone: `email:${normalized}`,
        codeHash: this.hash(code),
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        userId,
      },
    });

    return {
      ok: true,
      email: normalized,
      expiresInSec: 900,
      devCode: process.env.NODE_ENV === 'production' ? undefined : code,
    };
  }

  async verifyEmailCode(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.email) throw new BadRequestException('Set an email first');

    const otp = await this.prisma.otpCode.findFirst({
      where: {
        phone: `email:${user.email}`,
        consumed: false,
        expiresAt: { gt: new Date() },
        userId,
      },
      orderBy: { createdAt: 'desc' },
    });
    if (!otp || otp.codeHash !== this.hash(code)) {
      throw new BadRequestException('Invalid or expired email code');
    }
    await this.prisma.otpCode.update({
      where: { id: otp.id },
      data: { consumed: true },
    });
    return this.prisma.user.update({
      where: { id: userId },
      data: { emailVerified: true },
    });
  }

  private gcCaptchas() {
    const now = Date.now();
    for (const [id, row] of this.captchas) {
      if (row.expiresAt < now) this.captchas.delete(id);
    }
  }
}
