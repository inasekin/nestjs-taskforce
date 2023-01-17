import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, Length, Validate } from 'class-validator';
import { AgeValidator } from '../../validators/age.validator';
import {
  AuthUserError,
  MAX_LENGTH_PASSWORD,
  MAX_LENGTH_USERNAME,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_USERNAME,
  UserApiDescription,
} from '../user.constant';

export default class CreateUserDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'admin@admin.ru',
    required: true,
  })
  @IsEmail({}, { message: AuthUserError.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Name,
    example: 'Иван Иванов',
    required: true,
  })
  @Length(MIN_LENGTH_USERNAME, MAX_LENGTH_USERNAME, {
    message: AuthUserError.NameNotValid,
  })
  public userName: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: 'Москва',
    required: true,
  })
  @IsEnum(City, {
    message: AuthUserError.CityIsWrong,
  })
  @Transform(({ value }) => value as City)
  public city: City;

  @ApiProperty({
    description: UserApiDescription.Password,
    example: '123456',
    required: true,
  })
  @Length(MIN_LENGTH_PASSWORD, MAX_LENGTH_PASSWORD, {
    message: AuthUserError.PasswordNotValid,
  })
  public password: string;

  @ApiProperty({
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
    required: true,
  })
  @IsDate({
    message: AuthUserError.DateBirthNotValid,
  })
  @Validate(AgeValidator, {
    message: AuthUserError.AgeNotValid,
  })
  @Transform(({ value }) => new Date(value))
  public dateBirth: Date;

  @ApiProperty({
    description: UserApiDescription.Role,
    example: UserRole.Customer,
    required: true,
  })
  @IsEnum(UserRole, {
    message: AuthUserError.RoleIsWrong,
  })
  @Transform(({ value }) => value as UserRole)
  public role: UserRole;
}
