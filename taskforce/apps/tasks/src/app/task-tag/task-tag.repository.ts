import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@taskforce/core';
import { TaskTag } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { TaskTagEntity } from './task-tag.entity';

@Injectable()
export class TaskTagRepository
  implements CRUDRepository<TaskTagEntity, string, TaskTag>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: TaskTagEntity): Promise<TaskTag> {
    return this.prisma.tag.create({
      data: { ...item.toObject() },
    });
  }

  public async find(ids: string[] = []): Promise<TaskTag[]> {
    return this.prisma.tag.findMany({
      where: {
        id: {
          in: ids.length > 0 ? ids : undefined,
        },
      },
    });
  }

  public async findById(id: string): Promise<TaskTag | null> {
    return this.prisma.tag.findFirst({
      where: {
        id,
      },
    });
  }

  public async update(id: string, item: TaskTagEntity): Promise<TaskTag> {
    return this.prisma.tag.update({
      where: {
        id,
      },
      data: { ...item.toObject(), id },
    });
  }

  public async destroy(id: string): Promise<void> {
    await this.prisma.tag.delete({
      where: {
        id,
      },
    });
  }
}
