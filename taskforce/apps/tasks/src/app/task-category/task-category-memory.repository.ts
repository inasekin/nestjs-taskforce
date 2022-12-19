import { CRUDRepository } from '@taskforce/core';
import { TaskCategory } from '@taskforce/shared-types';
import { TaskCategoryEntity } from './task-category.entity';
import * as crypto from 'crypto';

export class TaskCategoryMemoryRepository
  implements CRUDRepository<TaskCategoryEntity, string, TaskCategory>
{
  private repository: { [key: string]: TaskCategory } = {};

  public async create(item: TaskCategoryEntity): Promise<TaskCategory> {
    const entry = {
      ...item.toObject(),
      _id: crypto.randomUUID(),
      creationDate: new Date(),
    };
    this.repository[entry._id] = entry;
    return { ...entry };
  }

  public async index(): Promise<TaskCategory[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<TaskCategory | null> {
    const entry = this.repository[id];
    if (!entry) {
      return null;
    }
    return { ...entry };
  }

  public async update(
    id: string,
    item: TaskCategoryEntity
  ): Promise<TaskCategory> {
    this.repository[id] = { ...item.toObject(), id: id } as TaskCategory;

    return this.findById(id);
  }

  public async findByTitle(
    categoryTitle: string
  ): Promise<TaskCategory | null> {
    const entry = Object.values(this.repository).find(
      (element) => element.title === categoryTitle
    );
    if (!entry) {
      return null;
    }
    return { ...entry };
  }
}
