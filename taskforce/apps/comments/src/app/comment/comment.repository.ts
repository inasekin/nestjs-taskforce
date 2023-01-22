import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@taskforce/core';
import { Comment } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import CommentEntity from './comment.entity';
import { CommentQuery } from './query/comment.query';

@Injectable()
export default class CommentRepository
  implements CRUDRepository<CommentEntity, string, Comment>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: CommentEntity): Promise<Comment> {
    const entityData = item.toObject();
    return this.prisma.comment.create({
      data: {
        ...entityData,
      },
    });
  }

  public find({
    taskId,
    limit,
    sortDirection,
    page,
  }: CommentQuery): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        taskId: taskId,
      },
      take: limit,
      orderBy: [
        {
          createdAt: sortDirection,
        },
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async findById(id: string): Promise<Comment | null> {
    return this.prisma.comment.findFirst({
      where: {
        id,
      },
    });
  }

  public async update(id: string, item: CommentEntity): Promise<Comment> {
    return this.prisma.comment.update({
      where: {
        id,
      },
      data: { ...item.toObject(), id },
    });
  }

  public async destroy(id: string): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        id,
      },
    });
  }

  public async destroyByTaskId(taskId: string): Promise<void> {
    await this.prisma.comment.deleteMany({
      where: {
        taskId,
      },
    });
  }
}
