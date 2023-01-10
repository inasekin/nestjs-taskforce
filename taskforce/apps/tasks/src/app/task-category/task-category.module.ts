import { Module } from '@nestjs/common';
import { TaskCategoryController } from './task-category.controller';
import { TaskCategoryRepository } from './task-category.repository';
import { TaskCategoryService } from './task-category.service';


@Module({
  imports: [],
  controllers: [TaskCategoryController],
  providers: [TaskCategoryService, TaskCategoryRepository],
  exports: [TaskCategoryRepository],
})
export class TaskCategoryModule {}
