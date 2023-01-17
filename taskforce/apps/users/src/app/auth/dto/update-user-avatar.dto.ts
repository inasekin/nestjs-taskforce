import { ApiProperty } from '@nestjs/swagger';
import {
  AuthUserError,
  IMAGE_REGULAR_EXP,
  UserApiDescription,
} from '../auth.constant';
import { IsEmail, Matches } from 'class-validator';

export default class UpdateUserAvatarDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'admin@admin.ru',
  })
  @IsEmail(
    {},
    {
      message: AuthUserError.EmailNotValid,
    }
  )
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Avatar,
    example: '/images/user.png',
  })
  @Matches(IMAGE_REGULAR_EXP, {
    message: AuthUserError.AvatarFileTypeWrong,
  })
  public avatar: string;
}
