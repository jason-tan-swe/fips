import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  console.log("Running on ", process.env.PORT ?? 8000)
  await app.listen(process.env.PORT ?? 8000, '0.0.0.0');
}
bootstrap();
