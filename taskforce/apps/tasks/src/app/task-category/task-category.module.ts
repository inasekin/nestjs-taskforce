import { Module } from '@nestjs/common';
import { TaskCategoryController } from './task-category.controller';
import { TaskCategoryService } from './task-category.service';
import { TaskCategoryMemoryRepository } from './task-category-memory.repository';

@Module({
  imports: [TaskCategoryModule],
  controllers: [TaskCategoryController],
  providers: [TaskCategoryService, TaskCategoryMemoryRepository],
})
export class TaskCategoryModule {}
