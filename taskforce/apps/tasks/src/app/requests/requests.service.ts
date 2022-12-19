import { Injectable } from '@nestjs/common';
import CreateRequestDto from './dto/create-request.dto';
import RequestsMemoryRepository from './requests-memory.repository';
import RequestsEntity from './requests.enity';

@Injectable()
export class RequestsService {
  constructor(private readonly requestRepository: RequestsMemoryRepository) {}

  async create(dto: CreateRequestDto) {
    const requestEntity = new RequestsEntity(dto);

    return this.requestRepository.create(requestEntity);
  }

  async index() {
    return this.requestRepository.index();
  }

  async getRequestById(requestId: string) {
    return this.requestRepository.findById(requestId);
  }

  async delete(requestId: string) {
    await this.requestRepository.destroy(requestId);
  }
}
