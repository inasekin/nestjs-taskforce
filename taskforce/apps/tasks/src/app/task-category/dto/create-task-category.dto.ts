import { ApiProperty } from '@nestjs/swagger';

export default class CreateTaskCategoryDto {
  @ApiProperty({
    description: 'Task category title',
    example: 'Уборка',
  })
  public title: string;
}
