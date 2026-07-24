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
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { WpParityService } from './wp-parity.service';

@Controller('admin/wp')
export class WpParityController {
  constructor(
    private readonly wp: WpParityService,
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

  private requireEditor(me: { role: string }) {
    if (!['super_admin', 'editor'].includes(me.role)) {
      throw new ForbiddenException('Editor required');
    }
  }

  @Get('updates')
  async updates(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.updatesStatus();
  }

  @Get('site-health')
  async siteHealth(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.siteHealth();
  }

  @Get('system-status')
  async systemStatus(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.systemStatus();
  }

  @Get('export')
  async export(@Headers('authorization') authorization?: string) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.wp.exportSite();
  }

  @Post('import')
  async import(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.wp.importSite(body ?? {});
  }

  @Get('woocommerce/home')
  async wooHome(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.wooHome();
  }

  @Get('settings')
  async settings(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.allWpSettings();
  }

  @Put('settings/:group')
  async saveSettings(
    @Param('group') group: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    const allowed = [
      'general',
      'writing',
      'reading',
      'discussion',
      'media',
      'permalinks',
      'privacy',
      'woocommerce',
      'emails',
      'accounts',
    ];
    if (!allowed.includes(group)) throw new BadRequestException('Invalid settings group');
    const all = await this.wp.allWpSettings();
    const current = (all as any)[group] ?? {};
    return this.wp.saveSettingGroup(group, { ...current, ...(body ?? {}) });
  }

  @Get('attributes')
  async attributes(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.listAttributes();
  }

  @Post('attributes')
  async createAttribute(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.wp.createAttribute(body ?? {});
  }

  @Patch('attributes/:id')
  async updateAttribute(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.wp.updateAttribute(id, body ?? {});
  }

  @Delete('attributes/:id')
  async deleteAttribute(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.wp.deleteAttribute(id);
  }

  @Post('attributes/:id/terms')
  async createTerm(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.wp.createAttributeTerm(id, body ?? {});
  }

  @Delete('attribute-terms/:id')
  async deleteTerm(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.wp.deleteAttributeTerm(id);
  }

  @Get('widgets')
  async widgets(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wp.listWidgets();
  }

  @Put('widgets')
  async upsertWidgets(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.wp.upsertWidgetArea(body ?? {});
  }

  @Post('users')
  async createUser(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.wp.createUser(body ?? {});
  }

  @Get('profile')
  async profile(@Headers('authorization') authorization?: string) {
    const me = await this.requireStaff(authorization);
    return this.wp.getProfile(me.id);
  }
}
