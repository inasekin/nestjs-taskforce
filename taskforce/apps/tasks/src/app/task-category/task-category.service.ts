import { Injectable } from '@nestjs/common';
import CreateTaskCategoryDto from './dto/create-task-category.dto';
import { TaskCategoryMemoryRepository } from './task-category-memory.repository';
import { TaskCategoryEntity } from './task-category.entity';

@Injectable()
export class TaskCategoryService {
  constructor(
    private readonly taskCategoryRepository: TaskCategoryMemoryRepository
  ) {}
  async create(dto: CreateTaskCategoryDto) {
    const { title } = dto;

    const existCategory = await this.taskCategoryRepository.findByTitle(title);

    if (existCategory) {
      return existCategory;
    }

    const categoryEntity = new TaskCategoryEntity(dto);
    return this.taskCategoryRepository.create(categoryEntity);
  }

  async getCategories() {
    return this.taskCategoryRepository.index();
  }

  async getCategoryById(id: string) {
    return this.taskCategoryRepository.findById(id);
  }
}
