import {
  Controller,
  Get,
  Headers,
  Patch,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';

@Controller('me')
export class UsersController {
  constructor(
    private readonly users: UsersService,
    private readonly auth: AuthService,
  ) {}

  private userId(authorization?: string) {
    const id = this.auth.userIdFromAuthHeader(authorization);
    if (!id) throw new UnauthorizedException();
    return id;
  }

  @Get('dashboard')
  dashboard(@Headers('authorization') authorization?: string) {
    return this.users.dashboard(this.userId(authorization));
  }

  @Get('progress')
  progress(@Headers('authorization') authorization?: string) {
    return this.users.progress(this.userId(authorization));
  }

  @Get('orders')
  orders(@Headers('authorization') authorization?: string) {
    return this.users.orders(this.userId(authorization));
  }

  @Get('enrollments')
  enrollments(
    @Headers('authorization') authorization?: string,
  ) {
    return this.users.enrollments(this.userId(authorization));
  }

  @Get('submissions')
  submissions(@Headers('authorization') authorization?: string) {
    return this.users.submissions(this.userId(authorization));
  }

  @Patch('settings')
  settings(
    @Headers('authorization') authorization?: string,
    @Body() body?: { locale?: string; theme?: string; displayName?: string },
  ) {
    return this.users.updateSettings(this.userId(authorization), body ?? {});
  }
}
