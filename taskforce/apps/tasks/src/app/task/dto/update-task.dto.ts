import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@taskforce/shared-types';

export default class UpdateTaskDto {
  @ApiProperty({
    description: 'Valid task id',
    example: '4353642828136379763',
  })
  public id: string;

  @ApiProperty({
    description: 'Any of possible task status',
    example: 'Done',
  })
  public status: Status;
}
