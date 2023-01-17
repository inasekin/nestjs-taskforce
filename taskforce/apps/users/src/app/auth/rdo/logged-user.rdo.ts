import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserApiDescription } from '../auth.constant';

export class LoggedUserRdo {
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'admin@admin.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Token,
    example: 'dfasfsadfasdfasdf',
  })
  @Expose()
  public accessToken: string;
}
