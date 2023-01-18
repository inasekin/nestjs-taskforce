import { ApiProperty } from '@nestjs/swagger';
import { City, File } from '@taskforce/shared-types';
import {
  ArrayMaxSize,
  IsArray,
  IsDate,
  IsEnum,
  Length,
  MaxLength,
  Validate,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { AgeValidator } from '../../validators/age.validator';
import {
  UserApiError,
  MAX_LENGTH_USER_INFO,
  MAX_LENGTH_USERNAME,
  MAX_SPECIALITY_LENGTH,
  MIN_LENGTH_USERNAME,
  UserApiDescription,
} from '../user.constant';

export default class UpdateUserDto {
  @ApiProperty({
    required: false,
    description: UserApiDescription.Name,
    example: 'Иван Иванов',
  })
  @Length(MIN_LENGTH_USERNAME, MAX_LENGTH_USERNAME, {
    message: UserApiError.NameNotValid,
  })
  public userName?: string;

  @ApiProperty({
    required: false,
    description: UserApiDescription.City,
    example: City.Moscow,
  })
  @IsEnum(City, {
    message: UserApiError.CityIsWrong,
  })
  public city?: City;

  @ApiProperty({
    description: UserApiDescription.Info,
    example: 'Some text…',
  })
  @MaxLength(MAX_LENGTH_USER_INFO, {
    message: UserApiError.InfoNotValid,
  })
  public userInfo?: string;

  @ApiProperty({
    required: false,
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @IsDate({
    message: UserApiError.DateBirthNotValid,
  })
  @Validate(AgeValidator, {
    message: UserApiError.AgeNotValid,
  })
  @Transform(({ value }) => new Date(value))
  public dateBirth?: Date;

  @ApiProperty({
    required: false,
    description: UserApiDescription.Avatar,
    example: '{ url: images/user.png, name: user.png }',
  })
  public avatar?: File;

  @ApiProperty({
    required: false,
    description: UserApiDescription.Specialty,
    example: ['plumber', 'locksmith', 'mechanic'],
  })
  @IsArray()
  @Transform(({ value }) => new Set(value.map((item) => item.toLowerCase())))
  @ArrayMaxSize(MAX_SPECIALITY_LENGTH, {
    message: UserApiError.SpecialtyNotValid,
  })
  public specialty?: string[];
}
