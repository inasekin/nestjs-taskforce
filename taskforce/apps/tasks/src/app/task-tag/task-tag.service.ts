import { Injectable } from '@nestjs/common';
import { TaskTag } from '@taskforce/shared-types';
import CreateTaskTagDto from './dto/create-task-tag.dto';
import UpdateTaskTagDto from './dto/update-task-tag.dto';
import { TaskTagEntity } from './task-tag.entity';
import { TaskTagRepository } from './task-tag.repository';

@Injectable()
export class TaskTagService {

  constructor(
    private readonly tagRepository: TaskTagRepository
  ) {}

  async create(dto: CreateTaskTagDto): Promise<TaskTag> {
    const tagEntity = new TaskTagEntity(dto);
    return this.tagRepository.create(tagEntity);
  }

  async get() {
    return this.tagRepository.find();
  }

  async getById(id: string) {
    return this.tagRepository.findById(id);
  }

  async update(id: string, dto: UpdateTaskTagDto): Promise<TaskTag> {
    return this.tagRepository.update(id, new TaskTagEntity(dto));
  }

  async delete(id: string): Promise<void> {
    await this.tagRepository.destroy(id);
  }
}
