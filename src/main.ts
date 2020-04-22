import { NestFactory } from '@nestjs/core';
import * as rookout from 'rookout';
import { AppModule } from './app.module';

rookout.start()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
