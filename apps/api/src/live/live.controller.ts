import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LiveService } from './live.service';

@Controller('live')
export class LiveController {
  constructor(
    private readonly live: LiveService,
    private readonly auth: AuthService,
  ) {}

  private userId(authorization?: string) {
    const id = this.auth.userIdFromAuthHeader(authorization);
    if (!id) throw new UnauthorizedException();
    return id;
  }

  @Get()
  list(@Query('locale') locale = 'fa') {
    return this.live.listPublic(locale);
  }

  @Get('registrations/mine')
  myRegistrations(
    @Headers('authorization') authorization?: string,
    @Query('locale') locale = 'fa',
  ) {
    return this.live.myRegistrations(this.userId(authorization), locale);
  }

  @Get('event/:slug')
  one(@Param('slug') slug: string, @Query('locale') locale = 'fa') {
    return this.live.getBySlug(slug, locale);
  }

  @Post('event/:slug/register')
  register(
    @Param('slug') slug: string,
    @Headers('authorization') authorization?: string,
  ) {
    return this.live.register(this.userId(authorization), slug);
  }
}

@Controller('admin/live')
export class AdminLiveController {
  constructor(
    private readonly live: LiveService,
    private readonly auth: AuthService,
  ) {}

  private async requireStaff(authorization?: string) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    const me = await this.auth.getMe(userId);
    if (!['super_admin', 'editor', 'instructor'].includes(me.role)) {
      throw new ForbiddenException('Staff only');
    }
    return me;
  }

  @Get()
  async list(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.live.adminList();
  }

  @Post()
  async create(
    @Headers('authorization') authorization?: string,
    @Body()
    body?: {
      slug?: string;
      startsAt?: string;
      destinations?: string[];
      fa?: { title: string; summary: string };
      en?: { title: string; summary: string };
      externalUrls?: Record<string, string>;
    },
  ) {
    await this.requireStaff(authorization);
    return this.live.adminCreate(body ?? {});
  }

  @Patch(':id/status')
  async status(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { status?: string; playbackUrl?: string; recordingUrl?: string },
  ) {
    await this.requireStaff(authorization);
    return this.live.adminUpdateStatus(id, body ?? {});
  }
}
