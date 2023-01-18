import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { UserApiError, UserApiDescription } from '../user.constant';

export default class UpdateUserAvatarDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local'
  })
  @IsEmail(
    {},
    {
      message: UserApiError.EmailNotValid
    })
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Image,
    example: '/images/user.png'
  })
  public avatar: string;
}
