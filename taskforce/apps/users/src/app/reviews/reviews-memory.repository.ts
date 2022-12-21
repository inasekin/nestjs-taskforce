import { CRUDRepository } from '@taskforce/core';
import { Review } from '@taskforce/shared-types';
import ReviewsEntity from './reviews.entity';
import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ReviewsMemoryRepository
  implements CRUDRepository<ReviewsEntity, string, Review>
{
  private repository: { [key: string]: Review } = {};

  public async create(item: ReviewsEntity): Promise<Review> {
    const entry = {
      ...item.toObject(),
      _id: crypto.randomUUID(),
      creationDate: new Date(),
    };
    this.repository[entry._id] = entry;
    return { ...entry };
  }

  public async index(): Promise<Review[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<Review | null> {
    const entry = this.repository[id];
    if (!entry) {
      return null;
    }
    return { ...entry };
  }

  public async update(id: string, item: ReviewsEntity): Promise<Review> {
    this.repository[id] = { ...item.toObject(), id: id } as Review;

    return this.findById(id);
  }
}
