import { ApiProperty } from '@nestjs/swagger';
import { City } from '@taskforce/shared-types';

export default class CreateTaskDto {
  @ApiProperty({
    description: 'Task title, string length min 20 max 50 characters',
    example: 'Some text…',
  })
  public title: string;

  @ApiProperty({
    description: 'Task description, string length min 100 max 1024 characters',
    example: 'Some text…',
  })
  public description: string;

  @ApiProperty({
    description: 'Task creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public customerId: string;

  @ApiProperty({
    description: 'Task task-category id',
    example: '4353642828136379763',
  })
  public categoryId: string;

  @ApiProperty({
    description:
      'Task execution address, string length min 10 max 255 characters',
    example: 'Some text…',
  })
  city: City;

  @ApiProperty({
    description:
      'Task execution address, string length min 10 max 255 characters',
    example: 'Some text…',
  })
  address?: string;

  @ApiProperty({
    description: 'Task due date (ISO format)',
    example: '2022-11-06',
  })
  dueDate?: string;

  @ApiProperty({
    description: "Task estimation client's proposal, zero or positive number",
    example: '1500',
  })
  public budget?: number;

  @ApiProperty({
    description: "Array of task's tag ids",
    example: ['4353642828136379763', '4353642828136379763'],
  })
  tags?: string[];

  @ApiProperty({
    description: 'Path to task image in png or jpg format max 1mb',
    example: 'task-image.png',
  })
  imagePath?: string;
}
