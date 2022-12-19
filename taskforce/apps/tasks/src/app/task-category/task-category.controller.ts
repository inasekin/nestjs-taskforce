import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import CreateTaskCategoryDto from './dto/create-task-category.dto';
import { TaskCategoryRdo } from './rdo/task-category.rdo';
import { TaskCategoryService } from './task-category.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('task categories')
@Controller('categories')
export class TaskCategoryController {
  constructor(private taskCategoryService: TaskCategoryService) {}

  @Get('/find/:id')
  async show(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    const existCategory = await this.taskCategoryService.getCategoryById(
      String(categoryId)
    );
    return fillObject(TaskCategoryRdo, existCategory);
  }

  @Get('/')
  async index() {
    const categories = await this.taskCategoryService.getCategories();
    return fillObject(TaskCategoryRdo, categories);
  }

  @Post('/create/')
  async create(@Body() dto: CreateTaskCategoryDto) {
    const newCategory = await this.taskCategoryService.create(dto);
    return fillObject(TaskCategoryRdo, newCategory);
  }
}
