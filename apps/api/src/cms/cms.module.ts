import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { CommerceAdminController } from './commerce-admin.controller';
import { CommerceAdminService } from './commerce-admin.service';
import { WpParityController } from './wp-parity.controller';
import { WpParityService } from './wp-parity.service';

@Module({
  imports: [AuthModule],
  controllers: [CmsController, CommerceAdminController, WpParityController],
  providers: [CmsService, CommerceAdminService, WpParityService],
  exports: [CmsService, CommerceAdminService, WpParityService],
})
export class CmsModule {}
