import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@taskforce/core';
import CreateTaskDto from './dto/create-task.dto';
// import TasksRequestDto from './dto/tasks-request.dto';
import UpdateTaskDto from './dto/update-task.dto';
import TaskRdo from './rdo/task.rdo';
import { TaskService } from './task.service';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create/')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.CREATED,
    description: 'The new task was successfully created.',
  })
  async create(@Body() dto: CreateTaskDto) {
    console.log(dto);
    const newTask = await this.taskService.create(dto);
    return fillObject(TaskRdo, newTask);
  }

  @Put('/update/:id')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The task data has been successfully updated.',
  })
  async updateTaskData(@Param('id') id: string, dto: UpdateTaskDto) {
    const updatedTask = await this.taskService.update(dto);
    return fillObject(TaskRdo, updatedTask);
  }

  @Get('/find/:id')
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'The task is found.',
  })
  async show(@Param('id') id: string) {
    const existTask = await this.taskService.getTaskById(id);
    return fillObject(TaskRdo, existTask);
  }

  // @Get('/')
  // @ApiResponse({
  //   type: TaskRdo,
  //   status: HttpStatus.OK,
  //   description: 'The new task was successfully created.',
  // })
  // async getTasks(@Body() dto: TasksRequestDto) {
  //   // WIP
  //   const tasks = await this.taskService.getTasks(dto);
  //   return fillObject(TaskRdo, tasks);
  // }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The new task was successfully deleted.',
  })
  async destroy(@Param('id') id: string) {
    await this.taskService.delete(id);
  }
}
