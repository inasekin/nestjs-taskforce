import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { City, File, User, UserRole } from '@taskforce/shared-types';
import { Document } from 'mongoose';

const USERS_COLLECTION_NAME = 'users';
@Schema({
  collection: USERS_COLLECTION_NAME,
})
export class UserModel extends Document implements User {
  @Prop({
    required: true,
  })
  public userName: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
    type: String,
    enum: City,
  })
  public city: City;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop()
  public refreshTokenHash?: string;

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
  })
  public role: UserRole;

  @Prop({
    _id: false,
    type: File,
  })
  public avatar?: {
    url: string;
    name: string;
  };

  @Prop()
  public userInfo?: string;

  @Prop()
  public publishedTasksCounter?: number;

  @Prop()
  public tasksWithNewStatus?: number;

  @Prop()
  public specialty?: string[];

  @Prop()
  public rating?: number;

  @Prop()
  public ranking?: number;

  @Prop()
  public completedTasks?: number;

  @Prop()
  public failedTasks?: number;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
