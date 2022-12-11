import { ApiProperty } from '@nestjs/swagger';
import { City } from '@taskforce/shared-types';

export default class UpdateUserDto {
  @ApiProperty({
    description: 'You need to set a unique email address',
    example: 'admin@admin.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Иван',
  })
  public userName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Иванов',
  })
  public lastName: string;

  @ApiProperty({
    description: 'User city',
    example: 'Москва',
  })
  public city: City;

  @ApiProperty({
    description: 'User information',
    example: 'Text about user',
  })
  public userInfo: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',
  })
  public dateBirth: Date;

  @ApiProperty({
    description: 'User role',
    example: ['locksmith'],
  })
  public specialty: string[];
}
