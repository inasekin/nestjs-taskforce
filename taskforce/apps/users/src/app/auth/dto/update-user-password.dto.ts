import { ApiProperty } from '@nestjs/swagger';

export default class UpdateUserPasswordDto {
  @ApiProperty({
    description: 'User login as email',
    example: 'admin@admin.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'Current user password',
    example: '123456',
  })
  public currentPassword: string;

  @ApiProperty({
    description: 'New user password',
    example: '234567',
  })
  public newPassword: string;
}
