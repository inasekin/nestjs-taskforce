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
import { fillObject } from '@taskforce/core';
import CreateTaskCategoryDto from './dto/create-task-category.dto';
import UpdateTaskCategoryDto from './dto/update-task-category.dto';
import { TaskCategoryRdo } from './rdo/task-category.rdo';
import { TaskCategoryService } from './task-category.service';

@Controller('categories')
export class TaskCategoryController {
  constructor(private categoryService: TaskCategoryService) {}

  @Post('/')
  async create(@Body() dto: CreateTaskCategoryDto) {
    const newCategory = await this.categoryService.create(dto);
    return fillObject(TaskCategoryRdo, newCategory);
  }

  @Get('/')
  async index() {
    const categories = await this.categoryService.get();
    return fillObject(TaskCategoryRdo, categories);
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    const existCategory = await this.categoryService.getById(id);
    return fillObject(TaskCategoryRdo, existCategory);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTaskCategoryDto) {
    const updatedCategory = await this.categoryService.update(id, dto);
    return fillObject(TaskCategoryRdo, updatedCategory);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    await this.categoryService.delete(id);
  }
}
