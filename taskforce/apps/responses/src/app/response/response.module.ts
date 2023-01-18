import { Module } from '@nestjs/common';
import { ResponseController } from './response.controller';
import ResponseRepository from './response.repository';
import { ResponseService } from './response.service';

@Module({
  controllers: [ResponseController],
  providers: [ResponseService, ResponseRepository],
})
export class ResponseModule {}
