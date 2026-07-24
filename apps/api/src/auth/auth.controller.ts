import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { WordfenceService } from '../plugins/wordfence.service';
import { AuthService } from './auth.service';
import { MyAccountPolicyService } from './my-account-policy.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly wordfence: WordfenceService,
    private readonly myAccount: MyAccountPolicyService,
  ) {}

  private clientIp(req: Request, ip?: string) {
    const xf = req.headers['x-forwarded-for'];
    if (typeof xf === 'string' && xf.length) return xf.split(',')[0].trim();
    return ip || req.ip || undefined;
  }

  @Get('captcha')
  async captcha() {
    const settings = await this.myAccount.getSettings();
    if (!settings.captcha.enabled) {
      return { enabled: false };
    }
    return { enabled: true, ...this.myAccount.createCaptcha() };
  }

  @Get('my-account-policy')
  async policy() {
    const settings = await this.myAccount.getSettings();
    return {
      captcha: settings.captcha,
      emailVerification: settings.emailVerification,
    };
  }

  @Post('otp/request')
  async requestOtp(
    @Body()
    body: { phone?: string; captchaId?: string; captchaAnswer?: string },
    @Req() req: Request,
    @Ip() ip: string,
  ) {
    if (!body.phone) throw new BadRequestException('phone is required');
    await this.myAccount.assertCaptchaIfEnabled(body.captchaId, body.captchaAnswer);
    const clientIp = this.clientIp(req, ip);
    await this.wordfence.assertOtpAllowed(body.phone.replace(/\s+/g, ''), clientIp);
    return this.auth.requestOtp(body.phone);
  }

  @Post('otp/verify')
  async verifyOtp(
    @Body()
    body: {
      phone?: string;
      code?: string;
      captchaId?: string;
      captchaAnswer?: string;
    },
    @Req() req: Request,
    @Ip() ip: string,
  ) {
    if (!body.phone || !body.code) {
      throw new BadRequestException('phone and code are required');
    }
    await this.myAccount.assertCaptchaIfEnabled(body.captchaId, body.captchaAnswer);
    const phone = body.phone.replace(/\s+/g, '');
    const clientIp = this.clientIp(req, ip);
    await this.wordfence.assertIpAllowed(clientIp);
    try {
      const result = await this.auth.verifyOtp(body.phone, body.code);
      await this.wordfence.recordLoginSuccess(phone);
      return result;
    } catch (e) {
      await this.wordfence.recordLoginFail(phone, clientIp);
      throw e;
    }
  }

  @Post('link/phone')
  linkPhone(
    @Headers('authorization') authorization: string | undefined,
    @Body() body: { phone?: string; code?: string },
  ) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    if (!body.phone || !body.code) {
      throw new BadRequestException('phone and code are required');
    }
    return this.auth.linkPhone(userId, body.phone, body.code);
  }

  @Post('email/request')
  async requestEmail(
    @Headers('authorization') authorization: string | undefined,
    @Body() body: { email?: string },
  ) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    if (!body.email) throw new BadRequestException('email is required');
    return this.myAccount.requestEmailCode(userId, body.email);
  }

  @Post('email/verify')
  async verifyEmail(
    @Headers('authorization') authorization: string | undefined,
    @Body() body: { code?: string },
  ) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    if (!body.code) throw new BadRequestException('code is required');
    return this.myAccount.verifyEmailCode(userId, body.code);
  }

  @Post('email/request-public')
  requestEmailPublic(@Body() body: { email?: string }) {
    if (!body.email) throw new BadRequestException('email is required');
    return this.myAccount.requestEmailCodePublic(body.email);
  }

  @Post('email/verify-public')
  verifyEmailPublic(@Body() body: { email?: string; code?: string }) {
    if (!body.email || !body.code) {
      throw new BadRequestException('email and code are required');
    }
    return this.myAccount.verifyEmailCodePublic(body.email, body.code);
  }

  @Get('me')
  me(@Headers('authorization') authorization: string | undefined) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    return this.auth.getMe(userId);
  }
}
