import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
