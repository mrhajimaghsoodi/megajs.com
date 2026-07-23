import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('otp/request')
  requestOtp(@Body() body: { phone?: string }) {
    if (!body.phone) throw new BadRequestException('phone is required');
    return this.auth.requestOtp(body.phone);
  }

  @Post('otp/verify')
  verifyOtp(@Body() body: { phone?: string; code?: string }) {
    if (!body.phone || !body.code) {
      throw new BadRequestException('phone and code are required');
    }
    return this.auth.verifyOtp(body.phone, body.code);
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
