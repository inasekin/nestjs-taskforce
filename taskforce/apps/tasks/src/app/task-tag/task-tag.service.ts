import { Injectable } from '@nestjs/common';
import CreateTagDto from '../task-category/dto/create-task-category.dto';
import { TaskTagMemoryRepository } from './task-tag-memory.repository';
import { TaskTagEntity } from './task-tag.entity';

@Injectable()
export class TaskTagService {
  constructor(private readonly taskTagRepository: TaskTagMemoryRepository) {}
  async create(dto: CreateTagDto) {
    const { title } = dto;

    const existTag = await this.taskTagRepository.findByTitle(title);

    if (existTag) {
      return existTag;
    }

    const categoryEntity = new TaskTagEntity(dto);
    return this.taskTagRepository.create(categoryEntity);
  }

  async getTags() {
    return this.taskTagRepository.index();
  }

  async getTagById(id: string) {
    return this.taskTagRepository.findById(id);
  }
}
