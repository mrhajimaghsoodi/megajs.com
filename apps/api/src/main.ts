import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      process.env.WEB_ORIGIN,
      process.env.ADMIN_ORIGIN,
    ].filter(Boolean),
    credentials: true,
  });
  app.setGlobalPrefix('api');
  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`MEGA JS API listening on http://localhost:${port}/api`);
}
bootstrap();
