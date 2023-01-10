import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class TaskTagRdo {
  @ApiProperty({
    description: 'The uniq task tag id',
    example: '4353642828136379763',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The uniq task tag title',
    example: 'Ремонт'
  })
  @Expose()
  public title: string;
}
