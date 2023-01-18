import { ApiProperty } from '@nestjs/swagger';
import { City, Status } from '@taskforce/shared-types';
import { Expose } from 'class-transformer';

export default class QueryTasksDto {
  @ApiProperty({
    description: 'Descending sort task by creation date',
    example: 'true',
  })
  public sortNewestTasks?: boolean;

  @ApiProperty({
    description: "Descending sort task by count of executor's responses",
    example: 'true',
  })
  public sortMostRequestedTasks?: boolean;

  @ApiProperty({
    description: 'Descending sort task by count of comments',
    example: 'true',
  })
  public sortMostCommentedTasks?: boolean;

  @ApiProperty({
    description: 'Task status to filter by',
    example: 'Done',
  })
  public status?: Status;

  @ApiProperty({
    description: 'Task creator id to filter by',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public customerId?: string;

  @ApiProperty({
    description: 'Task executor id to filter by',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public contractorId?: string;

  @ApiProperty({
    description: 'Task category id to filter by',
    example: '4353642828136379763',
  })
  public taskCategory?: string;

  @ApiProperty({
    description: 'Task city name to filter by',
    example: 'Москва',
  })
  @Expose()
  public city?: City;

  @ApiProperty({
    description: 'Task tag id to filter by',
    example: '4353642828136379763',
  })
  taskTag?: string;
}
