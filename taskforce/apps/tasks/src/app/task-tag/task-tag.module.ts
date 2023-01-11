import { Module } from '@nestjs/common';
import { TaskTagController } from './task-tag.controller';
import { TaskTagRepository } from './task-tag.repository';
import { TaskTagService } from './task-tag.service';

@Module({
  imports: [],
  controllers: [TaskTagController],
  providers: [TaskTagService, TaskTagRepository],
  exports: [TaskTagRepository],
})
export class TaskTagModule {}
