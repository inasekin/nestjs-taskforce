import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'User login as email',
    example: 'admin@admin.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;
}
