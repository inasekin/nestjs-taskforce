import { Module } from '@nestjs/common';
import { TaskTagMemoryRepository } from './task-tag-memory.repository';
import { TaskTagController } from './task-tag.controller';
import { TaskTagService } from './task-tag.service';

@Module({
  imports: [TaskTagModule],
  controllers: [TaskTagController],
  providers: [TaskTagService, TaskTagMemoryRepository],
})
export class TaskTagModule {}
