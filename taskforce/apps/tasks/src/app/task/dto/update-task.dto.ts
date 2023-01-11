import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@taskforce/shared-types';

export default class UpdateTaskDto {
  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done',
  })
  public status: Status;
}
