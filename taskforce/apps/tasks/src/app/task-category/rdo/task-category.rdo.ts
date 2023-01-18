import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TaskCategoryRdo {
  @ApiProperty({
    description: 'The uniq task category id',
    example: '4353642828136379763',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The uniq task category title',
    example: 'Уборка'
  })
  @Expose()
  public title: string;
}
