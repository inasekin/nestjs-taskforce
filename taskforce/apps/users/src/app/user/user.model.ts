import { City } from '@taskforce/shared-types';
import { Document } from 'mongoose';
import { User, UserRole } from '@taskforce/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
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

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    type: String,
  })
  public role: UserRole;

  @Prop()
  public avatar?: string;

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
