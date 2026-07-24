import {
  BadRequestException,
  Body,
  Controller,
  Delete,
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

  private requireSuper(me: { role: string }) {
    if (me.role !== 'super_admin') throw new ForbiddenException('super_admin only');
  }

  private requireOps(me: { role: string }) {
    if (!['super_admin', 'support', 'editor'].includes(me.role)) {
      throw new ForbiddenException('Insufficient role');
    }
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
    @Query('role') role?: string,
    @Query('status') status?: string,
  ) {
    await this.requireStaff(authorization);
    return this.admin.listUsers(q, role, status);
  }

  @Get('users/:id')
  async userDetail(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.admin.getUserDetail(id);
  }

  @Patch('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body()
    body?: {
      displayName?: string | null;
      email?: string | null;
      phone?: string | null;
      phoneVerified?: boolean;
      avatarUrl?: string | null;
      locale?: string;
      theme?: string;
    },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.admin.updateUser(id, me.id, body ?? {});
  }

  @Patch('users/:id/role')
  async setRole(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { role?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.admin.setUserRole(id, body?.role ?? 'user', me.id);
  }

  @Patch('users/:id/status')
  async setStatus(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { status?: string; reason?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.admin.setUserStatus(id, body?.status ?? 'active', me.id, body?.reason);
  }

  @Post('users/:id/wallet/adjust')
  async walletAdjust(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { amount?: number; reason?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.admin.adjustWallet(id, Number(body?.amount), body?.reason ?? '', me.id);
  }

  @Post('users/:id/enrollments')
  async grantEnrollment(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { courseId?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    if (!body?.courseId) throw new BadRequestException('courseId required');
    return this.admin.grantEnrollment(id, body.courseId, me.id);
  }

  @Delete('users/:id/enrollments/:courseId')
  async revokeEnrollment(
    @Param('id') id: string,
    @Param('courseId') courseId: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.admin.revokeEnrollment(id, courseId, me.id);
  }

  @Post('users/:id/subscriptions')
  async grantSubscription(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { planId?: string; days?: number },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    if (!body?.planId) throw new BadRequestException('planId required');
    return this.admin.grantSubscription(id, body.planId, me.id, body.days);
  }

  @Post('users/:id/subscriptions/:subscriptionId/cancel')
  async cancelSubscription(
    @Param('id') id: string,
    @Param('subscriptionId') subscriptionId: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.admin.cancelSubscription(id, subscriptionId, me.id);
  }

  @Post('users/:id/sessions/revoke-all')
  async revokeAllSessions(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.admin.revokeAllSessions(id, me.id);
  }

  @Delete('users/:id/sessions/:sessionId')
  async revokeSession(
    @Param('id') id: string,
    @Param('sessionId') sessionId: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.admin.revokeSession(id, sessionId, me.id);
  }

  @Post('users/:id/notes')
  async addNote(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { body?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.admin.addStaffNote(id, body?.body ?? '', me.id);
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
