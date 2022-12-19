import { ApiProperty } from '@nestjs/swagger';

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
    description: 'Task customer id',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  public customerId: string;

  @ApiProperty({
    description: 'Task task category id',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  public categoryId: string;

  @ApiProperty({
    description: 'Task due date (ISO format)',
    example: '2022-11-06',
  })
  dueDate?: Date;

  @ApiProperty({
    description:
      'Task execution address, string length min 10 max 255 characters',
    example: 'Some text…',
  })
  address?: string;

  @ApiProperty({
    description: "Task estimation client's proposal, zero or positive number",
    example: '1500',
  })
  public budget?: number;

  @ApiProperty({
    description: "Array of task's tag ids",
    example: ['d04eb35d', '4e2b'],
  })
  tags?: string[];

  @ApiProperty({
    description: 'Path to task image in png or jpg format max 1mb',
    example: 'task-image.png',
  })
  imagePath?: string;
}
