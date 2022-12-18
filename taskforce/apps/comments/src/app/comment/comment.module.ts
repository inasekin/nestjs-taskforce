import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentMemoryRepository } from './comment-memory.repository';

@Module({
  controllers: [CommentController],
  providers: [CommentMemoryRepository, CommentService],
  imports: [CommentModule],
})
export class CommentModule {}
