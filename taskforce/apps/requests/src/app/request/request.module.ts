import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import RequestRepository from './request.repository';
import { RequestService } from './request.service';

@Module({
  controllers: [RequestController],
  providers: [RequestService, RequestRepository],
})
export class RequestModule {}
