import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { MyAccountPolicyService } from '../auth/my-account-policy.service';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(
    private readonly wallet: WalletService,
    private readonly auth: AuthService,
    private readonly myAccount: MyAccountPolicyService,
  ) {}

  private userId(authorization?: string) {
    const id = this.auth.userIdFromAuthHeader(authorization);
    if (!id) throw new UnauthorizedException();
    return id;
  }

  @Get()
  getWallet(@Headers('authorization') authorization?: string) {
    return this.wallet.getWallet(this.userId(authorization));
  }

  @Get('ledger')
  ledger(@Headers('authorization') authorization?: string) {
    return this.wallet.getLedger(this.userId(authorization));
  }

  @Post('redeem')
  async redeem(
    @Headers('authorization') authorization?: string,
    @Body() body?: { tokens?: number; target?: 'subscription' | 'course'; targetId?: string },
  ) {
    if (!body?.tokens || body.tokens <= 0) {
      throw new BadRequestException('tokens must be > 0');
    }
    if (!body.target || !body.targetId) {
      throw new BadRequestException('target and targetId are required');
    }
    const userId = this.userId(authorization);
    await this.myAccount.assertCanPurchase(userId);
    return this.wallet.redeem(userId, body.tokens, body.target, body.targetId);
  }
}
