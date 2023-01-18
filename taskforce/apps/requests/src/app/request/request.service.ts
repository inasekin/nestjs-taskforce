import { Injectable } from '@nestjs/common';
import CreateRequestDto from './dto/create-request.dto';
import RequestEntity from './request.enity';
import RequestRepository from './request.repository';

@Injectable()
export class RequestService {
  constructor(private readonly requestRepository: RequestRepository) {}

  async create(dto: CreateRequestDto) {
    const requestEntity = new RequestEntity(dto);

    return this.requestRepository.create(requestEntity);
  }

  async getRequestsByTaskId(taskId: string) {
    return this.requestRepository.findByTaskId(taskId);
  }
}
