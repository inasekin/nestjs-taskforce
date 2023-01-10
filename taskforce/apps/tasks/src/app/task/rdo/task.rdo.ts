import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {TaskCategory, TaskTag} from "@taskforce/shared-types";

export default class TaskRdo {
  @ApiProperty({
    description: 'The uniq task id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Task title, string length min 20 max 50 characters',
    example: 'Some text…',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Task description, string length min 100 max 1024 characters',
    example: 'Some text…',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Task creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose()
  public customerId: string;

  @ApiProperty({
    description: 'Task task-category entity',
    example: {id: 1, title: 'Перевозка'}
  })
  @Expose()
  public taskCategory: TaskCategory;

  @ApiProperty({
    description: 'Task creation date (ISO format)',
    example: '2022-11-01'
  })
  @Expose()
  public publishAt: Date;

  @ApiProperty({
    description: 'Task due date (ISO format)',
    example: '2022-11-06',
  })
  @Expose()
  dueDate?: Date;

  @ApiProperty({
    description:
      'Task execution address, string length min 10 max 255 characters',
    example: 'Some text…',
  })
  @Expose()
  address?: string;

  @ApiProperty({
    description: "Task estimation client's proposal, zero or positive number",
    example: '1500',
  })
  @Expose()
  public budget?: number;

  @ApiProperty({
    description: 'Array of task\'s tag entities',
    example: [{id: 1, title: 'циклевка'}, {id: 2, title: 'ванная'}]
  })
  @Expose()
  tags?: TaskTag[];

  @ApiProperty({
    description: 'Path to task image in png or jpg format max 1mb',
    example: 'task-image.png',
  })
  @Expose()
  imagePath?: string;

  @ApiProperty({
    description: 'Executor\'s requests ids',
    example: ['4353642828136379763', '4353642828136379763']
  })
  @Expose()
  public requestIds?: string[];

  @ApiProperty({
    description: 'Task comments ids',
    example: ['4353642828136379763', '4353642828136379763']
  })
  @Expose()
  public commentIds?: string[];
}
