import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  health() {
    return {
      status: 'ok',
      service: 'megajs-api',
      timestamp: new Date().toISOString(),
    };
  }
}
