import { Module } from '@nestjs/common';
import { WordfenceService } from './wordfence.service';

@Module({
  providers: [WordfenceService],
  exports: [WordfenceService],
})
export class SecurityModule {}
