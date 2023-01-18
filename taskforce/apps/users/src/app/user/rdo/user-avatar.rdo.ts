import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { UserApiDescription } from '../user.constant';

export class UserAvatarRdo {
  @ApiProperty({
    description: UserApiDescription.Image,
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;
}
