import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { existsSync, mkdirSync } from 'fs';
import { AppModule } from './app.module';
import { uploadsRoot } from './cms/upload.util';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const staticOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    process.env.WEB_ORIGIN,
    process.env.ADMIN_ORIGIN,
    // Soft-launch subdomain while WordPress still owns apex
    process.env.WEB_ORIGIN_ALT,
    ...(process.env.CORS_ORIGINS?.split(',').map((s) => s.trim()) ?? []),
  ].filter((x): x is string => Boolean(x));
  const relaxCors =
    process.env.CORS_RELAXED === '1' || process.env.CORS_RELAXED === 'true';
  app.enableCors({
    origin: relaxCors
      ? true
      : (origin, cb) => {
          if (!origin || staticOrigins.includes(origin)) {
            cb(null, true);
            return;
          }
          // Preview tunnels / Vercel previews
          if (
            /\.trycloudflare\.com$/.test(origin) ||
            /\.vercel\.app$/.test(origin)
          ) {
            cb(null, true);
            return;
          }
          cb(null, false);
        },
    credentials: true,
  });

  const uploadDir = uploadsRoot();
  if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
  // Served outside global prefix handling via express static at /api/uploads
  app.useStaticAssets(uploadDir, { prefix: '/api/uploads' });

  app.setGlobalPrefix('api');
  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`MEGA JS API listening on http://localhost:${port}/api`);
}
bootstrap();
