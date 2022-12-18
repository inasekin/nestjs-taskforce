import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { ReviewMemoryRepository } from './review-memory.repository';

@Module({
  controllers: [ReviewController],
  providers: [ReviewMemoryRepository, ReviewService],
  imports: [ReviewModule],
})
export class ReviewModule {}
