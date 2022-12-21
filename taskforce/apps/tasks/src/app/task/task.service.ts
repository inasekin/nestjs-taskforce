import { Injectable } from '@nestjs/common';
import { Task, Status } from '@taskforce/shared-types';
import CreateTaskDto from './dto/create-task.dto';
import TasksRequestDto from './dto/tasks-request.dto';
import UpdateTaskDto from './dto/update-task.dto';
import { TaskMemoryRepository } from './task-memory.repository';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskMemoryRepository) {}

  async create(dto: CreateTaskDto) {
    const task = {
      ...dto,
      status: Status.New,
    } as Task;
    const taskEntity = new TaskEntity(task);

    return this.taskRepository.create(taskEntity);
  }

  async update(dto: UpdateTaskDto) {
    const { id, status } = dto;
    const task = await this.taskRepository.findById(id);
    const taskEntity = new TaskEntity({ ...task, status });
    return this.taskRepository.update(id, taskEntity);
  }

  async getTasks(dto: TasksRequestDto) {
    /*
    Метод будет принимать dto с фильтрами и на основе его параметров конструировать запрос к модели.
    */
    return dto;
  }

  async getTaskById(taskId: string) {
    return this.taskRepository.findById(taskId);
  }

  async delete(taskId: string) {
    await this.taskRepository.destroy(taskId);
  }
}
