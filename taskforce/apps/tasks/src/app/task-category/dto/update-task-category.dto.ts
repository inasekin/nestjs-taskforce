import { ApiProperty } from '@nestjs/swagger';

export default class UpdateTaskCategoryDto {
  @ApiProperty({
    description: 'The uniq task category title',
    example: 'Ремонт'
  })
  public title: string;
}
