import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WordfenceService {
  constructor(private readonly prisma: PrismaService) {}

  private async settings() {
    const row = await this.prisma.siteSetting.findUnique({
      where: { key: 'wordfence' },
    });
    const defaults = {
      enabled: true,
      maxOtpPerHour: 5,
      maxFailBeforeLock: 5,
      lockoutMinutes: 15,
      blockEmptyUa: false,
    };
    if (!row) return defaults;
    try {
      return { ...defaults, ...JSON.parse(row.valueJson) };
    } catch {
      return defaults;
    }
  }

  async logEvent(data: {
    type: string;
    severity?: string;
    ip?: string;
    phone?: string;
    path?: string;
    userAgent?: string;
    meta?: Record<string, unknown>;
  }) {
    return this.prisma.securityEvent.create({
      data: {
        type: data.type,
        severity: data.severity ?? 'info',
        ip: data.ip,
        phone: data.phone,
        path: data.path,
        userAgent: data.userAgent,
        metaJson: JSON.stringify(data.meta ?? {}),
      },
    });
  }

  async assertIpAllowed(ip?: string) {
    if (!ip) return;
    const block = await this.prisma.blockedIp.findUnique({ where: { ip } });
    if (!block) return;
    if (block.expiresAt && block.expiresAt < new Date()) {
      await this.prisma.blockedIp.delete({ where: { id: block.id } });
      return;
    }
    throw new ForbiddenException('IP blocked by security firewall');
  }

  async assertOtpAllowed(phone: string, ip?: string) {
    const cfg = await this.settings();
    if (!cfg.enabled) return;
    await this.assertIpAllowed(ip);

    const lock = await this.prisma.loginLockout.findUnique({ where: { phone } });
    if (lock?.lockedUntil && lock.lockedUntil > new Date()) {
      throw new ForbiddenException(
        `Too many attempts. Try again after ${lock.lockedUntil.toISOString()}`,
      );
    }

    const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recent = await this.prisma.otpCode.count({
      where: { phone, createdAt: { gte: hourAgo } },
    });
    if (recent >= Number(cfg.maxOtpPerHour ?? 5)) {
      await this.logEvent({
        type: 'otp_rate',
        severity: 'warn',
        ip,
        phone,
        meta: { recent },
      });
      throw new ForbiddenException('OTP rate limit exceeded');
    }
  }

  async recordLoginFail(phone: string, ip?: string) {
    const cfg = await this.settings();
    if (!cfg.enabled) return;

    const lock = await this.prisma.loginLockout.upsert({
      where: { phone },
      create: { phone, ip, failCount: 1 },
      update: {
        ip,
        failCount: { increment: 1 },
      },
    });

    await this.logEvent({
      type: 'login_fail',
      severity: 'warn',
      ip,
      phone,
      meta: { failCount: lock.failCount + 1 },
    });

    const fails = lock.failCount + 1;
    if (fails >= Number(cfg.maxFailBeforeLock ?? 5)) {
      const lockedUntil = new Date(
        Date.now() + Number(cfg.lockoutMinutes ?? 15) * 60 * 1000,
      );
      await this.prisma.loginLockout.update({
        where: { phone },
        data: { lockedUntil, failCount: fails },
      });
      throw new UnauthorizedException('Account temporarily locked');
    }
  }

  async recordLoginSuccess(phone: string) {
    await this.prisma.loginLockout
      .deleteMany({ where: { phone } })
      .catch(() => undefined);
  }

  async dashboard() {
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [events24h, blocked, lockouts, fails24h, cfg] = await Promise.all([
      this.prisma.securityEvent.count({ where: { createdAt: { gte: dayAgo } } }),
      this.prisma.blockedIp.count(),
      this.prisma.loginLockout.count({
        where: { lockedUntil: { gt: new Date() } },
      }),
      this.prisma.securityEvent.count({
        where: { type: 'login_fail', createdAt: { gte: dayAgo } },
      }),
      this.settings(),
    ]);
    const recent = await this.prisma.securityEvent.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    const blockedIps = await this.prisma.blockedIp.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return {
      settings: cfg,
      stats: { events24h, blocked, lockouts, fails24h },
      recent,
      blockedIps,
    };
  }

  async blockIp(ip: string, reason: string, actorId?: string, hours?: number) {
    const expiresAt =
      hours && hours > 0 ? new Date(Date.now() + hours * 60 * 60 * 1000) : null;
    const row = await this.prisma.blockedIp.upsert({
      where: { ip },
      create: { ip, reason, expiresAt, createdBy: actorId },
      update: { reason, expiresAt, createdBy: actorId },
    });
    await this.logEvent({
      type: 'ban_ip',
      severity: 'critical',
      ip,
      meta: { reason, hours },
    });
    return row;
  }

  async unblockIp(ip: string) {
    await this.prisma.blockedIp.deleteMany({ where: { ip } });
    await this.logEvent({ type: 'unban_ip', severity: 'info', ip });
    return { ok: true };
  }

  async runScan() {
    const findings: Array<{ id: string; severity: string; message: string }> = [];
    const cfg = await this.settings();
    if (!cfg.enabled) {
      findings.push({
        id: 'wf_disabled',
        severity: 'warn',
        message: 'Wordfence firewall is disabled.',
      });
    } else {
      findings.push({
        id: 'wf_enabled',
        severity: 'good',
        message: 'Firewall enabled with OTP rate limits and lockouts.',
      });
    }

    const openAdmin = process.env.NODE_ENV !== 'production';
    findings.push({
      id: 'env',
      severity: openAdmin ? 'ok' : 'good',
      message: openAdmin
        ? 'Running in non-production (dev OTP codes exposed).'
        : 'Production mode — OTP codes not returned in API.',
    });

    const usersNoPhone = await this.prisma.user.count({
      where: { phone: null, role: { not: 'user' } },
    });
    if (usersNoPhone) {
      findings.push({
        id: 'staff_phone',
        severity: 'warn',
        message: `${usersNoPhone} staff accounts without phone.`,
      });
    }

    await this.logEvent({
      type: 'scan',
      severity: 'info',
      meta: { findings: findings.length },
    });

    return {
      scannedAt: new Date().toISOString(),
      findings,
      score: findings.every((f) => f.severity === 'good')
        ? 100
        : findings.some((f) => f.severity === 'warn')
          ? 70
          : 90,
    };
  }
}
