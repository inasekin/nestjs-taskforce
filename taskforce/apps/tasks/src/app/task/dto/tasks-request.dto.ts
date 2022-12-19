import { ApiProperty } from '@nestjs/swagger';
import { City, Status } from '@taskforce/shared-types';
import { Expose } from 'class-transformer';

export default class TasksRequestDto {
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
    description: 'Task customer id to filter by',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  public customerId?: string;

  @ApiProperty({
    description: 'Task contractor id to filter by',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  public contractorId?: string;

  @ApiProperty({
    description: 'Task category id to filter by',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  public categoryId?: string;

  @ApiProperty({
    description: 'Task city name to filter by',
    example: 'Москва',
  })
  @Expose()
  public city?: City;

  @ApiProperty({
    description: 'Task tag ids to filter by',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  tagId?: string;
}
