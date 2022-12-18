import CreateReviewDto from './dto/create-review.dto';
import ReviewEntity from './review.entity';
import { fillObject } from '@taskforce/core';
import ReviewRdo from './rdo/review.rdo';
import { ReviewMemoryRepository } from './review-memory.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewMemoryRepository) {}

  public async create(authorId: string, createReviewDto: CreateReviewDto) {
    const review = { ...createReviewDto, authorId: authorId };
    const reviewEntity = new ReviewEntity(review);

    const newReview = this.reviewRepository.create(reviewEntity);

    return fillObject(ReviewRdo, newReview);
  }

  public async getTaskReviews(taskId: string) {
    const existReviews = await this.reviewRepository.findByTask(taskId);
    return existReviews.map((item) => fillObject(ReviewRdo, item));
  }

  public async deleteReview(reviewId: string) {
    await this.reviewRepository.destroy(reviewId);
  }
}
