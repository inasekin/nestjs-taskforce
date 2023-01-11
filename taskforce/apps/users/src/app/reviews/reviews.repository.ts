import { CRUDRepository } from '@taskforce/core';
import { Review } from '@taskforce/shared-types';
import ReviewsEntity from './reviews.entity';
import { ReviewsModel } from './reviews.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ResponseEntity from './reviews.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ReviewsRepository
  implements CRUDRepository<ReviewsEntity, string, Review>
{
  constructor(
    @InjectModel(ReviewsModel.name)
    private readonly reviewsModel: Model<ReviewsModel>
  ) {}

  public async create(item: ReviewsEntity): Promise<Review> {
    const newReview = new this.reviewsModel(item);
    return newReview.save();
  }

  public async index(): Promise<Review[]> {
    return Object.values(this.reviewsModel);
  }

  public async destroy(id: string): Promise<void> {
    this.reviewsModel.deleteOne({ id });
  }

  public async findById(id: string): Promise<Review | null> {
    return this.reviewsModel.findOne({ id }).exec();
  }

  public async update(id: string, item: ResponseEntity): Promise<Review> {
    return this.reviewsModel
      .findByIdAndUpdate(id, item.toObject(), { new: true })
      .exec();
  }
}
