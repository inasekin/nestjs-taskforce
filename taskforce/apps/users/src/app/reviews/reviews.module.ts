import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import ReviewsMemoryRepository from './reviews-memory.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsModel, ReviewsSchema } from './reviews.model';
import ReviewsRepository from './reviews.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReviewsModel.name, schema: ReviewsSchema },
    ]),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewsRepository],
})
export class ReviewsModule {}
