import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@taskforce/core';
import { Response } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import ResponseEntity from './response.entity';

@Injectable()
export default class ResponseRepository
  implements CRUDRepository<ResponseEntity, string, Response>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ResponseEntity): Promise<Response> {
    const entityData = item.toObject();
    return this.prisma.response.create({
      data: {
        ...entityData,
      },
    });
  }

  public async find(): Promise<Response[]> {
    return [];
  }

  public async findByContractorsId(contractorId: string): Promise<Response[]> {
    return this.prisma.response.findMany({
      where: {
        contractorId: contractorId,
      },
    });
  }

  public async findByTaskId(taskId: string): Promise<Response | null> {
    return this.prisma.response.findFirst({
      where: {
        taskId: taskId,
      },
    });
  }

  public async update(id: string, item: ResponseEntity): Promise<Response> {
    return Promise.resolve(undefined);
  }

  public async destroy(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async findById(id: string): Promise<Response | null> {
    return Promise.resolve(undefined);
  }

  public async getExecutorsEvaluationsSum(
    contractorId: string
  ): Promise<number> {
    const evaluationsSum = await this.prisma.response.aggregate({
      _sum: {
        evaluation: true,
      },
      where: {
        contractorId: contractorId,
      },
    });
    return evaluationsSum._sum.evaluation;
  }
}
