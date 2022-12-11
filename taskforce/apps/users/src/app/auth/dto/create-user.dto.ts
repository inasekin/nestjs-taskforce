import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';

export default class CreateUserDto {
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
    description: 'User password',
    example: '123456',
  })
  public password: string;

  @ApiProperty({
    description: 'User birth date',
    example: 'Format 1981-03-12',
  })
  public dateBirth: Date;

  @ApiProperty({
    description: 'User roles',
    example: 'Customer or contractor',
  })
  public role: UserRole;
}
