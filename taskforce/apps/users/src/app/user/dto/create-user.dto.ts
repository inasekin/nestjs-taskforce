import { ApiProperty } from '@nestjs/swagger';
import { City, InputExample, UserRole } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, Length, Validate } from 'class-validator';
import { AgeValidator } from '../../validators/age.validator';
import {
  UserApiDescription,
  UserApiError,
  MIN_LENGTH_USERNAME,
  MAX_LENGTH_USERNAME,
  MIN_LENGTH_PASSWORD,
  MAX_LENGTH_PASSWORD,
} from '../user.constant';

export default class CreateUserDto {
  @ApiProperty({
    description: UserApiDescription.Email,
    example: InputExample.Email,
    required: true,
  })
  @IsEmail({}, { message: UserApiError.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Name,
    example: InputExample.Name,
    required: true,
  })
  @Length(MIN_LENGTH_USERNAME, MAX_LENGTH_USERNAME, {
    message: UserApiError.NameNotValid,
  })
  public userName: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: InputExample.City,
    required: true,
  })
  @IsEnum(City, {
    message: UserApiError.CityIsWrong,
  })
  @Transform(({ value }) => value as City)
  public city: City;

  @ApiProperty({
    description: UserApiDescription.Password,
    example: InputExample.Password,
    required: true,
  })
  @Length(MIN_LENGTH_PASSWORD, MAX_LENGTH_PASSWORD, {
    message: UserApiError.PasswordNotValid,
  })
  public password: string;

  @ApiProperty({
    description: UserApiDescription.DateBirth,
    example: InputExample.Date,
    required: true,
  })
  @IsDate({
    message: UserApiError.DateBirthNotValid,
  })
  @Validate(AgeValidator, {
    message: UserApiError.AgeNotValid,
  })
  @Transform(({ value }) => new Date(value))
  public dateBirth: Date;

  @ApiProperty({
    description: UserApiDescription.Role,
    example: InputExample.Role,
    required: true,
  })
  @IsEnum(UserRole, {
    message: UserApiError.RoleIsWrong,
  })
  @Transform(({ value }) => value as UserRole)
  public role: UserRole;
}
