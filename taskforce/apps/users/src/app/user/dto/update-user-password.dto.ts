import { ApiProperty } from '@nestjs/swagger';
import { UserApiDescription } from '../user.constant';

// TODO: валидация?

export default class UpdateUserPasswordDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'admin@admin.ru',
  })
  public email: string;

  @ApiProperty({
    description: UserApiDescription.CurrentPassword,
    example: '123456',
  })
  public currentPassword: string;

  @ApiProperty({
    description: UserApiDescription.NewPassword,
    example: '234567',
  })
  public newPassword: string;
}
