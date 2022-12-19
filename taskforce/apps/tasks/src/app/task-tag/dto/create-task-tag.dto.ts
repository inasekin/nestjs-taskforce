import { ApiProperty } from '@nestjs/swagger';

export default class CreateTaskTagDto {
  @ApiProperty({
    description: 'Task tag title',
    example: 'Программирование',
  })
  public title: string;
}
