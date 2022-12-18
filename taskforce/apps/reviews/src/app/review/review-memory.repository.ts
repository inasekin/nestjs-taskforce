import { CRUDRepository } from '@taskforce/core';
import { Review } from '@taskforce/shared-types';
import ReviewEntity from './review.entity';
import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewMemoryRepository
  implements CRUDRepository<ReviewEntity, string, Review>
{
  private repository: { [key: string]: Review } = {};

  public async create(item: ReviewEntity): Promise<Review> {
    const entry = {
      ...item.toObject(),
      _id: crypto.randomUUID(),
      creationDate: new Date(),
    };
    this.repository[entry._id] = entry;
    console.log({ ...entry });
    return { ...entry };
  }

  public async findById(id: string): Promise<Review> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async findByTask(taskId: string): Promise<Review[]> {
    const existReview = Object.values(this.repository).filter(
      (reviewItem) => reviewItem.taskId === taskId
    );

    if (!existReview) {
      return null;
    }

    return [...existReview];
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: ReviewEntity): Promise<Review> {
    this.repository[id] = { ...item.toObject(), _id: id };
    return this.findById(id);
  }
}
