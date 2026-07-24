import { Module } from '@nestjs/common';
import { SecurityModule } from '../plugins/security.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MyAccountPolicyService } from './my-account-policy.service';

@Module({
  imports: [SecurityModule],
  controllers: [AuthController],
  providers: [AuthService, MyAccountPolicyService],
  exports: [AuthService, MyAccountPolicyService],
})
export class AuthModule {}
