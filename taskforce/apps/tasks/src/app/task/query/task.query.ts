import { City, SortOrder, SortType, Status } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { IsEnum, IsIn, IsOptional } from 'class-validator';
import {
  DEFAULT_PAGINATION_COUNT,
  DEFAULT_SORT_ORDER,
  DEFAULT_SORT_TYPE,
  DEFAULT_TASK_COUNT_LIMIT,
} from '../task.constant';

export class TaskQuery {
  @Transform(({ value }) => +value)
  @IsOptional()
  public categoryId?: string;

  @Transform(({ value }) => value as Status)
  @IsEnum(Status)
  @IsOptional()
  public status?: Status;

  @Transform(({ value }) => value as City)
  @IsEnum(City)
  @IsOptional()
  public city?: City;

  @IsOptional()
  public tag?: string;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortOrder?: SortOrder = DEFAULT_SORT_ORDER;

  @IsOptional()
  public sortType?: SortType = DEFAULT_SORT_TYPE;

  @IsOptional()
  @Transform(({ value }) => +value)
  public limit?: number = DEFAULT_TASK_COUNT_LIMIT;

  @IsOptional()
  @Transform(({ value }) => +value)
  public page?: number = DEFAULT_PAGINATION_COUNT;
}
