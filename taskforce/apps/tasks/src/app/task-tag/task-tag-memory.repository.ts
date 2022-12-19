import { CRUDRepository } from '@taskforce/core';
import { TaskTag } from '@taskforce/shared-types';
import { TaskTagEntity } from './task-tag.entity';
import * as crypto from 'crypto';

export class TaskTagMemoryRepository
  implements CRUDRepository<TaskTagEntity, string, TaskTag>
{
  private repository: { [key: string]: TaskTag } = {};

  public async create(item: TaskTagEntity): Promise<TaskTag> {
    const entry = {
      ...item.toObject(),
      id: crypto.randomUUID(),
    };
    this.repository[entry.id] = entry;
    // console.log({ ...entry });
    return { ...entry };
  }

  public async index(): Promise<TaskTag[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<TaskTag | null> {
    const entry = this.repository[id];
    if (!entry) {
      return null;
    }
    return { ...entry };
  }

  public async update(id: string, item: TaskTagEntity): Promise<TaskTag> {
    this.repository[id] = { ...item.toObject(), id: id } as TaskTag;

    return this.findById(id);
  }

  public async findByTitle(tagTitle: string): Promise<TaskTag | null> {
    const entry = Object.values(this.repository).find(
      (element) => element.title === tagTitle
    );
    if (!entry) {
      return null;
    }
    return { ...entry };
  }
}
