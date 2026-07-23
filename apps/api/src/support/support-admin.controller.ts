import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { SupportService } from './support.service';

@Controller('admin/support')
export class SupportAdminController {
  constructor(
    private readonly auth: AuthService,
    private readonly support: SupportService,
  ) {}

  private async requireStaff(authorization?: string) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    const me = await this.auth.getMe(userId);
    if (!['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(me.role)) {
      throw new ForbiddenException('Staff only');
    }
    return me;
  }

  @Get('stats')
  async stats(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.support.stats();
  }

  @Get('tickets')
  async list(
    @Headers('authorization') authorization: string | undefined,
    @Query('status') status?: string,
    @Query('q') q?: string,
    @Query('category') category?: string,
  ) {
    await this.requireStaff(authorization);
    return this.support.listForStaff({ status, q, category });
  }

  @Get('tickets/:id')
  async get(
    @Headers('authorization') authorization: string | undefined,
    @Param('id') id: string,
  ) {
    await this.requireStaff(authorization);
    return this.support.getForStaff(id);
  }

  @Post('tickets/:id/messages')
  async reply(
    @Headers('authorization') authorization: string | undefined,
    @Param('id') id: string,
    @Body() body: { body?: string },
  ) {
    const me = await this.requireStaff(authorization);
    return this.support.replyAsStaff(me.id, id, body?.body);
  }

  @Patch('tickets/:id')
  async update(
    @Headers('authorization') authorization: string | undefined,
    @Param('id') id: string,
    @Body()
    body: {
      status?: string;
      priority?: string;
      assignedToId?: string | null;
      category?: string;
    },
  ) {
    const me = await this.requireStaff(authorization);
    return this.support.updateAsStaff(me.id, id, body);
  }
}
