import { ApiProperty } from '@nestjs/swagger';

export default class UpdateUserAvatarDto {
  @ApiProperty({
    description: 'User email',
    example: 'admin@admin.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User avatar in png',
    example: '/images/user.png',
  })
  public avatar: string;
}
