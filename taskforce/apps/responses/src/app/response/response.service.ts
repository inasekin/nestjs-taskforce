import { HttpStatus, Injectable } from '@nestjs/common';
import CreateResponseDto from './dto/create-response.dto';
import ResponseRepository from './response.repository';
import ResponseEntity from './response.entity';

@Injectable()
export class ResponseService {
  constructor(private readonly responseRepository: ResponseRepository) {}

  async create(dto: CreateResponseDto) {
    const { taskId, contractorId } = dto;
    const existResponse = await this.responseRepository.findByTaskId(taskId);
    if (existResponse) {
      return HttpStatus.CONFLICT;
    }

    const responseEntity = new ResponseEntity(dto);
    const newResponse = await this.responseRepository.create(responseEntity);
    const evaluationsSum =
      await this.responseRepository.getExecutorsEvaluationsSum(contractorId);

    return { ...newResponse, evaluationsSum: evaluationsSum };
  }

  async get() {
    return this.responseRepository.find();
  }

  async getByContractorId(contractorId: string) {
    return this.responseRepository.findByContractorsId(contractorId);
  }

  async delete(responseId: string) {
    await this.responseRepository.destroy(responseId);
  }
}
