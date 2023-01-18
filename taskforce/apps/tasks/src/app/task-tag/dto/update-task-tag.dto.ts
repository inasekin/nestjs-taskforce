import { ApiProperty } from '@nestjs/swagger';

export default class UpdateTaskTagDto {
  @ApiProperty({
    description: 'The uniq task tag title',
    example: 'Переводы'
  })
  public title: string;
}
