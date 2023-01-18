import { ApiProperty } from '@nestjs/swagger';
import { File, Status } from '@taskforce/shared-types';
import { IsEnum } from 'class-validator';
import { TaskApiError } from '../task.constant';

export default class UpdateTaskDto {
  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done',
  })
  @IsEnum(Status, { message: TaskApiError.StatusIsInvalid })
  public status?: Status;

  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done',
  })
  public taskPicture?: File;
}
