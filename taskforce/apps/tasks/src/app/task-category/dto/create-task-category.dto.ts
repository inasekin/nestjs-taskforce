import { ApiProperty } from '@nestjs/swagger';

export default class CreateTaskCategoryDto {
  @ApiProperty({
    description: 'The uniq task category title',
    example: 'Уборка'
  })
  public title: string;
}
