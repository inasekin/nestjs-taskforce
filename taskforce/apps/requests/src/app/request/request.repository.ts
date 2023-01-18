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

  public async find(): Promise<Request[]> {
    return [];
  }

  public async findByTaskId(taskId: string): Promise<Request[]> {
    return this.prisma.request.findMany({
      where: {
        taskId: taskId,
      },
    });
  }

  public async update(): Promise<Request> {
    return Promise.resolve(undefined);
  }

  public async destroy(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<Request | null> {
    return Promise.resolve(undefined);
  }
}
