import { NestFactory } from '@nestjs/core';
import * as rookout from 'rookout';
import { AppModule } from './app.module';

rookout.start({ token: process.env.ROOKOUT_TOKEN })

// change C

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}

// this is a change

// this is also a change

bootstrap();
