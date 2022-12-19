import { CRUDRepository } from '@taskforce/core';
import { Task } from '@taskforce/shared-types';
import TasksRequestDto from './dto/tasks-request.dto';
import { TaskEntity } from './task.entity';
import * as crypto from 'crypto';

export class TaskMemoryRepository
  implements CRUDRepository<TaskEntity, string, Task>
{
  private repository: { [key: string]: Task } = {};

  public async create(item: TaskEntity): Promise<Task> {
    const entry = {
      ...item.toObject(),
      id: crypto.randomUUID(),
    };
    this.repository[entry.id] = entry;
    // console.log({ ...entry });
    return { ...entry };
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async find(dto: TasksRequestDto): Promise<Task[]> {
    // WIP
    console.log(dto);
    return Object.values(this.repository);
  }

  public async findById(id: string): Promise<Task | null> {
    const entry = this.repository[id];
    if (!entry) {
      return null;
    }
    return { ...entry };
  }

  public async update(id: string, item: TaskEntity): Promise<Task> {
    this.repository[id] = { ...item.toObject(), id: id } as Task;

    return this.findById(id);
  }
}
