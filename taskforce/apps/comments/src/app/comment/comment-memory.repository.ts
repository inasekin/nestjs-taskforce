import { CRUDRepository } from '@taskforce/core';
import { Comment } from '@taskforce/shared-types';
import CommentEntity from './comment.entity';
import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentMemoryRepository
  implements CRUDRepository<CommentEntity, string, Comment>
{
  private repository: { [key: string]: Comment } = {};

  public async create(item: CommentEntity): Promise<Comment> {
    const entry = {
      ...item.toObject(),
      _id: crypto.randomUUID(),
      creationDate: new Date(),
    };
    this.repository[entry._id] = entry;
    console.log({ ...entry });
    return { ...entry };
  }

  public async findById(id: string): Promise<Comment> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async findByTask(taskId: string): Promise<Comment[]> {
    const existComment = Object.values(this.repository).filter(
      (commentItem) => commentItem.taskId === taskId
    );

    if (!existComment) {
      return null;
    }

    return [...existComment];
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: CommentEntity): Promise<Comment> {
    this.repository[id] = { ...item.toObject(), _id: id };
    return this.findById(id);
  }
}
