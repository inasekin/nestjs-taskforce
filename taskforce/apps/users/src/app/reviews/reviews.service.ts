import CreateReviewDto from './dto/create-review.dto';
import ReviewsMemoryRepository from './reviews-memory.repository';
import ReviewsEntity from './reviews.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsMemoryRepository) {}

  async create(dto: CreateReviewDto) {
    const reviewEntity = new ReviewsEntity(dto);
    return this.reviewsRepository.create(reviewEntity);
  }

  async index() {
    return this.reviewsRepository.index();
  }

  async getCommentById(reviewId: string) {
    return this.reviewsRepository.findById(reviewId);
  }

  async delete(reviewId: string) {
    await this.reviewsRepository.destroy(reviewId);
  }
}
