import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import ReviewsMemoryRepository from './reviews-memory.repository';

@Module({
  imports: [ReviewsModule],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewsMemoryRepository],
})
export class ReviewsModule {}
