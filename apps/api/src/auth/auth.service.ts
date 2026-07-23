import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { createHash, randomInt, randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  private hash(value: string) {
    return createHash('sha256').update(value).digest('hex');
  }

  userIdFromAuthHeader(authorization?: string) {
    if (!authorization?.startsWith('Bearer ')) return null;
    const token = authorization.slice('Bearer '.length);
    // Dev token format: mj_<userId>_<sessionId>
    const parts = token.split('_');
    if (parts.length < 3 || parts[0] !== 'mj') return null;
    return parts[1];
  }

  async requestOtp(phone: string) {
    const normalized = phone.replace(/\s+/g, '');
    if (!/^\+?\d{10,15}$/.test(normalized)) {
      throw new BadRequestException('Invalid phone');
    }

    const code = String(randomInt(100000, 999999));
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await this.prisma.otpCode.create({
      data: {
        phone: normalized,
        codeHash: this.hash(code),
        expiresAt,
      },
    });

    // In production: send SMS. In development: return code for testing.
    return {
      ok: true,
      expiresInSec: 300,
      devCode: process.env.NODE_ENV === 'production' ? undefined : code,
    };
  }

  async verifyOtp(phone: string, code: string) {
    const normalized = phone.replace(/\s+/g, '');
    const otp = await this.prisma.otpCode.findFirst({
      where: {
        phone: normalized,
        consumed: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!otp || otp.codeHash !== this.hash(code)) {
      throw new UnauthorizedException('Invalid or expired code');
    }

    await this.prisma.otpCode.update({
      where: { id: otp.id },
      data: { consumed: true },
    });

    let user = await this.prisma.user.findUnique({ where: { phone: normalized } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          phone: normalized,
          phoneVerified: true,
          displayName: `User ${normalized.slice(-4)}`,
          identities: {
            create: {
              provider: 'phone',
              providerUserId: normalized,
            },
          },
          wallet: { create: { balance: 0 } },
        },
      });
    } else if (!user.phoneVerified) {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: { phoneVerified: true },
      });
    }

    const sessionId = randomUUID();
    const accessToken = `mj_${user.id}_${sessionId}`;
    await this.prisma.session.create({
      data: {
        userId: user.id,
        tokenHash: this.hash(accessToken),
        client: 'web',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      accessToken,
      user: await this.getMe(user.id),
    };
  }

  async linkPhone(userId: string, phone: string, code: string) {
    const normalized = phone.replace(/\s+/g, '');
    const otp = await this.prisma.otpCode.findFirst({
      where: {
        phone: normalized,
        consumed: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });
    if (!otp || otp.codeHash !== this.hash(code)) {
      throw new UnauthorizedException('Invalid or expired code');
    }

    const existing = await this.prisma.user.findUnique({
      where: { phone: normalized },
    });
    if (existing && existing.id !== userId) {
      throw new BadRequestException('Phone already linked to another account');
    }

    await this.prisma.otpCode.update({
      where: { id: otp.id },
      data: { consumed: true },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: { phone: normalized, phoneVerified: true },
    });

    await this.prisma.authIdentity.upsert({
      where: {
        provider_providerUserId: {
          provider: 'phone',
          providerUserId: normalized,
        },
      },
      create: {
        userId,
        provider: 'phone',
        providerUserId: normalized,
      },
      update: { userId },
    });

    return this.getMe(userId);
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        identities: true,
        wallet: true,
        subscriptions: {
          where: { status: 'active', endsAt: { gt: new Date() } },
          include: { plan: true },
        },
      },
    });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
