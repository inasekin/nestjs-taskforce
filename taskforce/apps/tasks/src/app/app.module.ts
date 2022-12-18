import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskCategoryModule } from './task-category/task-category.module';
import { TaskTagModule } from './task-tag/task-tag.module';

@Module({
  imports: [TaskModule, TaskCategoryModule, TaskTagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
