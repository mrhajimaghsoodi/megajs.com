import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { SupportService } from './support.service';

@Controller('support')
export class SupportController {
  constructor(
    private readonly auth: AuthService,
    private readonly support: SupportService,
  ) {}

  private userId(authorization?: string) {
    const id = this.auth.userIdFromAuthHeader(authorization);
    if (!id) throw new UnauthorizedException();
    return id;
  }

  @Get('tickets')
  list(@Headers('authorization') authorization?: string) {
    return this.support.listForUser(this.userId(authorization));
  }

  @Post('tickets')
  create(
    @Headers('authorization') authorization: string | undefined,
    @Body()
    body: { subject?: string; category?: string; priority?: string; body?: string },
  ) {
    return this.support.createTicket(this.userId(authorization), body);
  }

  @Get('tickets/:id')
  get(
    @Headers('authorization') authorization: string | undefined,
    @Param('id') id: string,
  ) {
    return this.support.getForUser(this.userId(authorization), id);
  }

  @Post('tickets/:id/messages')
  reply(
    @Headers('authorization') authorization: string | undefined,
    @Param('id') id: string,
    @Body() body: { body?: string },
  ) {
    return this.support.replyAsUser(this.userId(authorization), id, body?.body);
  }

  @Patch('tickets/:id/close')
  close(
    @Headers('authorization') authorization: string | undefined,
    @Param('id') id: string,
  ) {
    return this.support.closeAsUser(this.userId(authorization), id);
  }
}
