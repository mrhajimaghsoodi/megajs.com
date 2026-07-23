import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AdminLiveController, LiveController } from './live.controller';
import { LiveService } from './live.service';

@Module({
  imports: [AuthModule],
  controllers: [LiveController, AdminLiveController],
  providers: [LiveService],
  exports: [LiveService],
})
export class LiveModule {}
