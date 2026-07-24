import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {
  constructor(
    private readonly practice: PracticeService,
    private readonly auth: AuthService,
  ) {}

  @Get('challenges')
  list(@Query('locale') locale = 'fa') {
    return this.practice.listChallenges(locale);
  }

  @Get('challenges/:slug')
  one(@Param('slug') slug: string, @Query('locale') locale = 'fa') {
    return this.practice.getChallenge(slug, locale);
  }

  @Post('challenges/:slug/submit')
  submit(
    @Param('slug') slug: string,
    @Headers('authorization') authorization: string | undefined,
    @Body() body: { code?: string },
  ) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    return this.practice.submit(userId, slug, body.code ?? '');
  }
}
