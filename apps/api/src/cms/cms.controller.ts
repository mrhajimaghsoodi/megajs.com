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
  Query,
  UploadedFile,
  UnauthorizedException,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { AuthService } from '../auth/auth.service';
import { CmsService } from './cms.service';
import { TunnelService } from './tunnel.service';
import { MAX_UPLOAD_BYTES, MAX_VIDEO_UPLOAD_BYTES } from './upload.util';

@Controller('admin/cms')
export class CmsController {
  constructor(
    private readonly cms: CmsService,
    private readonly tunnel: TunnelService,
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

  private requireEditor(me: { role: string }) {
    if (!['super_admin', 'editor'].includes(me.role)) {
      throw new ForbiddenException('Editor or super_admin required');
    }
  }

  // Articles
  @Get('articles')
  async articles(
    @Headers('authorization') authorization?: string,
    @Query('q') q?: string,
    @Query('status') status?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.listArticles(q, status);
  }

  @Get('articles/:id')
  async article(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.getArticle(id);
  }

  @Post('articles')
  async createArticle(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.createArticle(me.id, body ?? {});
  }

  @Patch('articles/:id')
  async updateArticle(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.updateArticle(id, me.id, body ?? {});
  }

  @Delete('articles/:id')
  async deleteArticle(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.deleteArticle(id, me.id);
  }

  // Pages
  @Get('pages')
  async pages(
    @Headers('authorization') authorization?: string,
    @Query('q') q?: string,
    @Query('status') status?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.listPages(q, status);
  }

  @Get('pages/:id')
  async page(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.getPage(id);
  }

  @Post('pages')
  async createPage(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.createPage(me.id, body ?? {});
  }

  @Patch('pages/:id')
  async updatePage(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.updatePage(id, me.id, body ?? {});
  }

  @Delete('pages/:id')
  async deletePage(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.deletePage(id, me.id);
  }

  // Terms
  @Get('terms')
  async terms(
    @Headers('authorization') authorization?: string,
    @Query('taxonomy') taxonomy?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.listTerms(taxonomy);
  }

  @Post('terms')
  async createTerm(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.createTerm(me.id, body ?? {});
  }

  @Patch('terms/:id')
  async updateTerm(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.updateTerm(id, me.id, body ?? {});
  }

  @Delete('terms/:id')
  async deleteTerm(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.deleteTerm(id, me.id);
  }

  // Media
  @Get('media')
  async media(
    @Headers('authorization') authorization?: string,
    @Query('q') q?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.listMedia(q);
  }

  @Post('media')
  async createMedia(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.createMedia(me.id, body ?? {});
  }

  @Post('media/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: MAX_UPLOAD_BYTES },
    }),
  )
  async uploadMedia(
    @Headers('authorization') authorization: string | undefined,
    @UploadedFile() file: Express.Multer.File,
    @Body() body?: { alt?: string; title?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.uploadMediaFile(me.id, file, {
      alt: body?.alt,
      title: body?.title,
    });
  }

  @Patch('media/:id')
  async updateMedia(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.updateMedia(id, me.id, body ?? {});
  }

  @Delete('media/:id')
  async deleteMedia(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.deleteMedia(id, me.id);
  }

  // Comments
  @Get('comments')
  async comments(
    @Headers('authorization') authorization?: string,
    @Query('status') status?: string,
    @Query('articleId') articleId?: string,
  ) {
    await this.requireStaff(authorization);
    return this.cms.listComments(status, articleId);
  }

  @Patch('comments/:id/status')
  async commentStatus(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { status?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    if (!body?.status) throw new BadRequestException('status required');
    return this.cms.setCommentStatus(id, body.status, me.id);
  }

  @Delete('comments/:id')
  async deleteComment(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.deleteComment(id, me.id);
  }

  // Menus
  @Get('menus')
  async menus(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.cms.listMenus();
  }

  @Put('menus')
  async upsertMenu(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.upsertMenu(me.id, body ?? {});
  }

  // Redirects
  @Get('redirects')
  async redirects(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.cms.listRedirects();
  }

  @Post('redirects')
  async createRedirect(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.createRedirect(me.id, body ?? {});
  }

  @Delete('redirects/:id')
  async deleteRedirect(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.deleteRedirect(id, me.id);
  }

  // SEO
  @Put('seo')
  async upsertSeo(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.upsertSeo(me.id, body ?? {});
  }

  // Learning Tunnel episodes
  @Get('tunnel-episodes')
  async tunnelEpisodes(
    @Headers('authorization') authorization?: string,
    @Query('q') q?: string,
    @Query('status') status?: string,
  ) {
    await this.requireStaff(authorization);
    return this.tunnel.listEpisodes(q, status);
  }

  @Get('tunnel-episodes/:id')
  async tunnelEpisode(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.tunnel.getEpisode(id);
  }

  @Post('tunnel-episodes')
  async createTunnelEpisode(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.tunnel.createEpisode(me.id, body ?? {});
  }

  @Patch('tunnel-episodes/:id')
  async updateTunnelEpisode(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.tunnel.updateEpisode(id, me.id, body ?? {});
  }

  @Delete('tunnel-episodes/:id')
  async deleteTunnelEpisode(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.tunnel.deleteEpisode(id, me.id);
  }

  @Post('media/upload-video')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: MAX_VIDEO_UPLOAD_BYTES },
    }),
  )
  async uploadVideo(
    @Headers('authorization') authorization: string | undefined,
    @UploadedFile() file: Express.Multer.File,
    @Body() body?: { alt?: string; title?: string },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireEditor(me);
    return this.cms.uploadVideoFile(me.id, file, {
      alt: body?.alt,
      title: body?.title,
    });
  }

  // Settings
  @Get('settings')
  async settings(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.cms.getSettings();
  }

  @Put('settings')
  async setSettings(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    if (me.role !== 'super_admin') throw new ForbiddenException('super_admin only');
    return this.cms.setSettings(me.id, body ?? {});
  }
}
