import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CmsModule } from '../cms/cms.module';
import {
  PluginsAdminController,
  PublicContentController,
} from './plugins.controller';
import { RankMathService } from './rankmath.service';
import { SecurityModule } from './security.module';
import { SitemapService } from './sitemap.service';
import { SmushService } from './smush.service';
import { WpRocketService } from './wprocket.service';

@Module({
  imports: [AuthModule, SecurityModule, CmsModule],
  controllers: [PluginsAdminController, PublicContentController],
  providers: [RankMathService, WpRocketService, SmushService, SitemapService],
  exports: [
    RankMathService,
    WpRocketService,
    SmushService,
    SitemapService,
    SecurityModule,
  ],
})
export class PluginsModule {}
