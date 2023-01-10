import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@taskforce/core';
import CreateTaskDto from './dto/create-task.dto';
import UpdateTaskDto from './dto/update-task.dto';
import TaskRdo from './rdo/task.rdo';
import { TaskService } from './task.service';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.CREATED,
    description: 'The new task was successfully created.',
  })
  async create(@Body() dto: CreateTaskDto) {
    const newTask = await this.taskService.create(dto);
    return fillObject(TaskRdo, newTask);
  }

  @Get('/:id')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The task is found.',
  })
  async show(@Param('id') id: string) {
    const existTask = await this.taskService.getById(id);
    return fillObject(TaskRdo, existTask);
  }

  @Get('/')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The new task was successfully created.',
  })
  async getTasks() {
    const tasks = await this.taskService.get();
    return fillObject(TaskRdo, tasks);
  }

  @Patch('/:id')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The task data has been successfully updated.',
  })
  async updateTaskData(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    const updatedTask = await this.taskService.update(id, dto);
    return fillObject(TaskRdo, updatedTask);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The new task was successfully created.',
  })
  async destroy(@Param('id') id: string) {
    await this.taskService.delete(id);
  }
}
