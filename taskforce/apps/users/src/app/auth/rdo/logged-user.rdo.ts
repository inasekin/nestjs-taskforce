import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { UserApiDescription } from '../../user/user.constant';

export class LoggedUserRdo {
  @ApiProperty({
    description: UserApiDescription.Id,
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Token,
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3'
  })
  @Expose()
  public accessToken: string;
}
