import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@taskforce/core';
import { Request } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import RequestEntity from './request.enity';

@Injectable()
export default class RequestRepository
  implements CRUDRepository<RequestEntity, string, Request>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: RequestEntity): Promise<Request> {
    const entityData = item.toObject();
    return this.prisma.request.create({
      data: {
        ...entityData,
      },
    });
  }

  public async find(ids: string[] = []): Promise<Request[]> {
    return this.prisma.request.findMany({
      where: {
        id: {
          in: ids.length > 0 ? ids : undefined,
        },
      },
    });
  }

  public async findByTaskId(taskId: string): Promise<Request[]> {
    return this.prisma.request.findMany({
      where: {
        taskId: taskId,
      },
    });
  }

  public async update(id: string, item: RequestEntity): Promise<Request> {
    return this.prisma.request.update({
      where: {
        id,
      },
      data: { ...item.toObject(), id },
    });
  }

  public async destroy(id: string): Promise<void> {
    await this.prisma.request.delete({
      where: {
        id,
      },
    });
  }

  findById(id: string): Promise<Request | null> {
    return this.prisma.request.findFirst({
      where: {
        id,
      },
    });
  }
}
