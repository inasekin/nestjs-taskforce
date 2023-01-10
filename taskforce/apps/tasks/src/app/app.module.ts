import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TaskCategoryModule } from './task-category/task-category.module';
import { TaskTagModule } from './task-tag/task-tag.module';
import { RequestsModule } from './requests/requests.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    TaskModule,
    TaskCategoryModule,
    TaskTagModule,
    RequestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
