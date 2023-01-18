/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import * as process from 'process';

async function bootstrap() {
  const responsesApp = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The «Responses» service')
    .setDescription('Responses service API')
    .setVersion('1.0')
    .build();

  const globalPrefix = 'api';
  responsesApp.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(responsesApp, config);
  SwaggerModule.setup('spec', responsesApp, document);

  responsesApp.useGlobalPipes(new ValidationPipe({
    skipUndefinedProperties: true
  }));

  const port = process.env.PORT || 3336;
  await responsesApp.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
