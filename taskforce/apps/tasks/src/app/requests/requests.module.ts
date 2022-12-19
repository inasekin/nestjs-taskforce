import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import RequestsMemoryRepository from './requests-memory.repository';

@Module({
  controllers: [RequestsController],
  providers: [RequestsMemoryRepository, RequestsService],
  imports: [RequestsModule],
})
export class RequestsModule {}
