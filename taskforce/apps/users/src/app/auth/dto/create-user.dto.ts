import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';
import { IsEmail, IsEnum, IsISO8601, Length } from 'class-validator';
import {
  AuthUserError,
  MAX_LENGTH_PASSWORD,
  MAX_LENGTH_USERNAME,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_USERNAME,
  UserApiDescription,
} from '../auth.constant';

export default class CreateUserDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'admin@admin.ru',
  })
  @IsEmail({}, { message: AuthUserError.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Name,
    example: 'Иван Иванов',
  })
  @Length(MIN_LENGTH_USERNAME, MAX_LENGTH_USERNAME, {
    message: AuthUserError.NameNotValid,
  })
  public userName: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: 'Москва',
  })
  @IsEnum(City, {
    message: AuthUserError.CityIsWrong,
  })
  public city: City;

  @ApiProperty({
    description: UserApiDescription.Password,
    example: '123456',
  })
  @Length(MIN_LENGTH_PASSWORD, MAX_LENGTH_PASSWORD, {
    message: AuthUserError.PasswordNotValid,
  })
  public password: string;

  @ApiProperty({
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @IsISO8601({
    message: AuthUserError.DateBirthNotValid,
  })
  public dateBirth: Date;

  @ApiProperty({
    description: UserApiDescription.Role,
    example: 'Customer or contractor',
  })
  @IsEnum(UserRole, {
    message: AuthUserError.RoleIsWrong,
  })
  public role: UserRole;
}
