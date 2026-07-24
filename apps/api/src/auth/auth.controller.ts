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

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly wordfence: WordfenceService,
  ) {}

  private clientIp(req: Request, ip?: string) {
    const xf = req.headers['x-forwarded-for'];
    if (typeof xf === 'string' && xf.length) return xf.split(',')[0].trim();
    return ip || req.ip || undefined;
  }

  @Post('otp/request')
  async requestOtp(
    @Body() body: { phone?: string },
    @Req() req: Request,
    @Ip() ip: string,
  ) {
    if (!body.phone) throw new BadRequestException('phone is required');
    const clientIp = this.clientIp(req, ip);
    await this.wordfence.assertOtpAllowed(body.phone.replace(/\s+/g, ''), clientIp);
    return this.auth.requestOtp(body.phone);
  }

  @Post('otp/verify')
  async verifyOtp(
    @Body() body: { phone?: string; code?: string },
    @Req() req: Request,
    @Ip() ip: string,
  ) {
    if (!body.phone || !body.code) {
      throw new BadRequestException('phone and code are required');
    }
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

  @Get('me')
  me(@Headers('authorization') authorization: string | undefined) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    return this.auth.getMe(userId);
  }
}
