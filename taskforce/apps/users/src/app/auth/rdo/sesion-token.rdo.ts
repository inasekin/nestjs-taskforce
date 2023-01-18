import { Expose, Transform } from 'class-transformer';

export class SessionTokenRdo {
  @Transform(({obj}) => obj._id.toString())
  @Expose({name: '_id'})
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public tokenHash: string;

  @Expose()
  public expires: string;
}
