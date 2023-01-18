import { ApiProperty } from '@nestjs/swagger';
import { UserApiError, UserApiDescription } from '../user.constant';
import { IsEmail } from 'class-validator';

export default class UpdateUserAvatarDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'admin@admin.ru',
  })
  @IsEmail(
    {},
    {
      message: UserApiError.EmailNotValid,
    }
  )
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Avatar,
    example: '/images/user.png',
  })
  public avatar: string;
}
