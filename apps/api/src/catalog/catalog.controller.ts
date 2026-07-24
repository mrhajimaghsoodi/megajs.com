import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalog: CatalogService) {}

  @Get('tracks')
  listTracks(@Query('locale') locale = 'fa') {
    return this.catalog.listTracks(locale);
  }

  @Get('tracks/:slug')
  track(@Param('slug') slug: string, @Query('locale') locale = 'fa') {
    return this.catalog.getTrack(slug, locale);
  }

  @Get('courses/:slug')
  course(@Param('slug') slug: string, @Query('locale') locale = 'fa') {
    return this.catalog.getCourse(slug, locale);
  }

  @Get('challenges')
  challenges(@Query('locale') locale = 'fa') {
    return this.catalog.listChallenges(locale);
  }

  @Get('live')
  live(@Query('locale') locale = 'fa') {
    return this.catalog.listLive(locale);
  }
}
