import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

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
    description: 'Task task-category id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose()
  public categoryId: string;

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
    description: "Array of task's tag ids",
    example: ['d04eb35d', '4e2b'],
  })
  @Expose()
  tags?: string[];

  @ApiProperty({
    description: 'Path to task image in png or jpg format max 1mb',
    example: 'task-image.png',
  })
  @Expose()
  imagePath?: string;

  @ApiProperty({
    description: "Executor's responses count",
    example: '5',
  })
  @Expose()
  public responsesCount;

  @ApiProperty({
    description: 'Task comments count',
    example: '4',
  })
  @Expose()
  public commentsCount;

  @ApiProperty({
    description: 'Task creation date (ISO format)',
    example: '2022-11-01',
  })
  @Expose()
  public postDate;
}
