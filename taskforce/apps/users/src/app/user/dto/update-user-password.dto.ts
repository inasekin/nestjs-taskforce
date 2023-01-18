import { ApiProperty } from '@nestjs/swagger';
import { UserApiDescription } from '../user.constant';

export default class UpdateUserPasswordDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local'
  })
  public email: string;

  @ApiProperty({
    description: UserApiDescription.CurrentPassword,
    example: '123456'
  })
  public currentPassword: string;

  @ApiProperty({
    description: UserApiDescription.NewPassword,
    example: '234567'
  })
  public newPassword: string;
}
