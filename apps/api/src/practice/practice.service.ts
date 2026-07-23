import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { createContext, runInContext } from 'vm';
import { PrismaService } from '../prisma/prisma.service';
import { WalletService } from '../wallet/wallet.service';

function pointsToTokens(points: number, pointsPerToken = 100) {
  return Math.floor(points / pointsPerToken);
}

@Injectable()
export class PracticeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly wallet: WalletService,
  ) {}

  listChallenges(locale: string) {
    return this.prisma.challenge
      .findMany({
        where: { status: 'published' },
        include: { i18n: { where: { locale } } },
        orderBy: { points: 'asc' },
      })
      .then((items) =>
        items.map((c) => ({
          id: c.id,
          slug: c.slug,
          difficulty: c.difficulty,
          language: c.language,
          points: c.points,
          title: c.i18n[0]?.title ?? c.slug,
          prompt: c.i18n[0]?.promptMdx ?? '',
          starterCode: c.i18n[0]?.starterCode ?? '',
        })),
      );
  }

  async getChallenge(slug: string, locale: string) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { slug },
      include: {
        i18n: { where: { locale } },
        tests: { where: { isHidden: false }, orderBy: { sortOrder: 'asc' } },
      },
    });
    if (!challenge) throw new NotFoundException('Challenge not found');
    return challenge;
  }

  private runCase(code: string, inputJson: string, timeoutMs: number) {
    const input = JSON.parse(inputJson) as unknown[];
    const sandbox: Record<string, unknown> = { module: { exports: {} }, exports: {} };
    const context = createContext(sandbox);
    const wrapped = `${code}\n;module.exports = typeof sum === 'function' ? sum : (typeof solution === 'function' ? solution : null);`;
    runInContext(wrapped, context, { timeout: timeoutMs });
    const fn = (sandbox.module as { exports: unknown }).exports;
    if (typeof fn !== 'function') {
      throw new Error('Export a function named sum or solution');
    }
    return (fn as (...args: unknown[]) => unknown)(...input);
  }

  async submit(userId: string, slug: string, code: string) {
    if (!code.trim()) throw new BadRequestException('code is required');
    const challenge = await this.prisma.challenge.findUnique({
      where: { slug },
      include: { tests: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!challenge) throw new NotFoundException('Challenge not found');

    const results: Array<{ ok: boolean; expected?: string; actual?: string; error?: string }> =
      [];
    let passedAll = true;

    for (const test of challenge.tests) {
      try {
        const actual = this.runCase(code, test.inputJson, challenge.timeLimitMs);
        const expected = JSON.parse(test.outputJson);
        const ok = JSON.stringify(actual) === JSON.stringify(expected);
        if (!ok) passedAll = false;
        results.push({
          ok,
          expected: JSON.stringify(expected),
          actual: JSON.stringify(actual),
        });
      } catch (e) {
        passedAll = false;
        results.push({
          ok: false,
          error: e instanceof Error ? e.message : 'Runtime error',
        });
      }
    }

    const score = passedAll ? challenge.points : 0;
    const tokensEarned = passedAll ? pointsToTokens(score) : 0;

    const submission = await this.prisma.submission.create({
      data: {
        userId,
        challengeId: challenge.id,
        code,
        passed: passedAll,
        score,
        tokensEarned,
        resultJson: JSON.stringify(results),
      },
    });

    if (tokensEarned > 0) {
      // Avoid double-paying for same challenge
      const prior = await this.prisma.submission.count({
        where: {
          userId,
          challengeId: challenge.id,
          passed: true,
          id: { not: submission.id },
        },
      });
      if (prior === 0) {
        await this.wallet.credit(
          userId,
          tokensEarned,
          `challenge:${slug}`,
          'submission',
          submission.id,
        );
      }
    }

    return {
      submissionId: submission.id,
      passed: passedAll,
      score,
      tokensEarned,
      results,
    };
  }
}
