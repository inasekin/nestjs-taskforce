import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'You need to set a unique email address',
    example: 'admin@admin.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'admin@admin.ru',
  })
  @Expose()
  public accessToken: string;
}
