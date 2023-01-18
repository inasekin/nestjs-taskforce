import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TokenSession } from '@taskforce/shared-types';
import { Document } from 'mongoose';

@Schema({
  collection: 'token-session',
})
export class TokenSessionModel extends Document implements TokenSession {
  @Prop({
    required: true,
  })
  public userId: string;

  @Prop({
    required: true,
  })
  public tokenHash: string;

  @Prop({
    required: true,
  })
  public expires: Date;
}

export const TokenSessionSchema =
  SchemaFactory.createForClass(TokenSessionModel);
