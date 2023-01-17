import { ApiProperty } from '@nestjs/swagger';
import {
  AuthUserError,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD,
  UserApiDescription,
} from '../auth.constant';
import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
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
    description: UserApiDescription.Password,
    example: '123456',
  })
  @Length(MIN_LENGTH_PASSWORD, MAX_LENGTH_PASSWORD, {
    message: AuthUserError.PasswordIsWrong,
  })
  public password: string;
}
