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
import { CommerceAdminService } from './commerce-admin.service';

@Controller('admin/commerce')
export class CommerceAdminController {
  constructor(
    private readonly commerce: CommerceAdminService,
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

  private requireOps(me: { role: string }) {
    if (!['super_admin', 'support', 'editor'].includes(me.role)) {
      throw new ForbiddenException('Insufficient role');
    }
  }

  private requireEditor(me: { role: string }) {
    if (!['super_admin', 'editor'].includes(me.role)) {
      throw new ForbiddenException('Editor or super_admin required');
    }
  }

  // Orders
  @Get('orders')
  async orders(
    @Headers('authorization') authorization?: string,
    @Query('status') status?: string,
    @Query('q') q?: string,
  ) {
    await this.requireStaff(authorization);
    return this.commerce.listOrders(status, q);
  }

  @Get('orders/:id')
  async order(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.commerce.getOrder(id);
  }

  @Patch('orders/:id/status')
  async orderStatus(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { status?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    if (!body?.status) throw new BadRequestException('status required');
    return this.commerce.updateOrderStatus(id, body.status, me.id);
  }

  @Post('orders/:id/refund')
  async refund(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { amountCents?: number; note?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.refundOrder(id, me.id, body ?? {});
  }

  @Post('orders/:id/notes')
  async orderNote(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { body?: string; isCustomerVisible?: boolean },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.addOrderNote(id, me.id, body ?? {});
  }

  // Coupons
  @Get('coupons')
  async coupons(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.commerce.listCoupons();
  }

  @Post('coupons')
  async createCoupon(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.createCoupon(me.id, body ?? {});
  }

  @Patch('coupons/:id')
  async updateCoupon(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.updateCoupon(id, me.id, body ?? {});
  }

  @Delete('coupons/:id')
  async deleteCoupon(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.deleteCoupon(id, me.id);
  }

  // Plans
  @Get('plans')
  async plans(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.commerce.listPlans();
  }

  @Post('plans')
  async createPlan(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.createPlan(me.id, body ?? {});
  }

  @Patch('plans/:id')
  async updatePlan(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireOps(me);
    return this.commerce.updatePlan(id, me.id, body ?? {});
  }

  // Catalog / products
  @Post('tracks')
  async createTrack(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.createTrack(me.id, body ?? {});
  }

  @Patch('tracks/:id')
  async updateTrack(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.updateTrack(id, me.id, body ?? {});
  }

  @Get('courses/:id')
  async getCourse(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.commerce.getCourse(id);
  }

  @Post('courses')
  async createCourse(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.createCourse(me.id, body ?? {});
  }

  @Patch('courses/:id')
  async updateCourse(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.updateCourse(id, me.id, body ?? {});
  }

  @Post('courses/:courseId/modules')
  async createModule(
    @Param('courseId') courseId: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.createModule(me.id, courseId, body ?? {});
  }

  @Post('modules/:moduleId/lessons')
  async createLesson(
    @Param('moduleId') moduleId: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.createLesson(me.id, moduleId, body ?? {});
  }

  @Patch('lessons/:id')
  async updateLesson(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.commerce.updateLesson(id, me.id, body ?? {});
  }

  // Reports
  @Get('reports')
  async reports(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.commerce.reports();
  }
}
