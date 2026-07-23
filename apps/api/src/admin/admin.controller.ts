import {
  Controller,
  ForbiddenException,
  Get,
  Headers,
  Param,
  Patch,
  Query,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly admin: AdminService,
    private readonly auth: AuthService,
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

  @Get('dashboard')
  async dashboard(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.dashboard();
  }

  @Get('users')
  async users(
    @Headers('authorization') authorization?: string,
    @Query('q') q?: string,
  ) {
    await this.requireStaff(authorization);
    return this.admin.listUsers(q);
  }

  @Patch('users/:id/role')
  async setRole(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { role?: string },
  ) {
    const me = await this.requireStaff(authorization);
    if (me.role !== 'super_admin') throw new ForbiddenException('super_admin only');
    return this.admin.setUserRole(id, body?.role ?? 'user');
  }

  @Get('catalog/tracks')
  async tracks(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.listTracks();
  }

  @Get('catalog/courses')
  async courses(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.listCourses();
  }

  @Get('seo')
  async seo(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.listSeo();
  }

  @Get('orders')
  async orders(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.listOrders();
  }

  @Get('challenges')
  async challenges(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.listChallenges();
  }

  @Get('audit')
  async audit(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.admin.listAudit();
  }
}
