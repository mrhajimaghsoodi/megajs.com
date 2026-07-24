import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { CommerceAdminController } from './commerce-admin.controller';
import { CommerceAdminService } from './commerce-admin.service';

@Module({
  imports: [AuthModule],
  controllers: [CmsController, CommerceAdminController],
  providers: [CmsService, CommerceAdminService],
  exports: [CmsService, CommerceAdminService],
})
export class CmsModule {}
