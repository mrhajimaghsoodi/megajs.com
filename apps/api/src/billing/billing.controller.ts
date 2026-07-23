import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(
    private readonly billing: BillingService,
    private readonly auth: AuthService,
  ) {}

  private userId(authorization?: string) {
    const id = this.auth.userIdFromAuthHeader(authorization);
    if (!id) throw new UnauthorizedException();
    return id;
  }

  @Get('plans')
  plans() {
    return this.billing.listPlans();
  }

  @Post('checkout/subscription')
  checkoutSub(
    @Headers('authorization') authorization: string | undefined,
    @Body() body: { planCode?: string; tokenSpend?: number },
  ) {
    return this.billing.checkoutSubscription(
      this.userId(authorization),
      body.planCode ?? 'pro-monthly',
      body.tokenSpend ?? 0,
    );
  }

  @Post('checkout/course')
  checkoutCourse(
    @Headers('authorization') authorization: string | undefined,
    @Body() body: { courseSlug?: string; tokenSpend?: number },
  ) {
    return this.billing.checkoutCourse(
      this.userId(authorization),
      body.courseSlug ?? '',
      body.tokenSpend ?? 0,
    );
  }
}
