/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import * as process from 'process';

const DEFAULT_PORT = 3337;

async function bootstrap() {
  const requestsApp = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The «Requests» service')
    .setDescription('Requests service API')
    .setVersion('1.0')
    .build();

  const globalPrefix = 'api';
  requestsApp.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(requestsApp, config);
  SwaggerModule.setup('spec', requestsApp, document);

  requestsApp.useGlobalPipes(
    new ValidationPipe({
      skipUndefinedProperties: true,
    })
  );

  const port = process.env.PORT || DEFAULT_PORT;
  await requestsApp.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
