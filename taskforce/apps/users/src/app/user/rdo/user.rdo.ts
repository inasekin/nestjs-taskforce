import { ApiProperty } from '@nestjs/swagger';
import { City, InputExample, File, UserRole } from '@taskforce/shared-types';
import { Expose, Transform } from 'class-transformer';
import { ResponseGroup, UserApiDescription } from '../user.constant';

export class UserRdo {
  @ApiProperty({
    description: UserApiDescription.Id,
    example: InputExample.MongoId,
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: UserApiDescription.Email,
    example: InputExample.Email,
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Name,
    example: InputExample.Name,
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: InputExample.City,
  })
  @Expose()
  public city: City;

  @ApiProperty({
    description: UserApiDescription.DateBirth,
    example: InputExample.Date,
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: UserApiDescription.Role,
    example: InputExample.Role,
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: UserApiDescription.Image,
    example: InputExample.PictureFile,
  })
  @Expose({
    groups: [ResponseGroup.Avatar, UserRole.Customer, UserRole.Contractor],
  })
  public avatar: File;

  @ApiProperty({
    description: UserApiDescription.Info,
    example: InputExample.Text,
  })
  @Expose()
  public userInfo: string;

  @ApiProperty({
    description: UserApiDescription.TasksPublished,
    example: InputExample.Number,
  })
  @Expose({ groups: [UserRole.Customer] })
  public publishedTasksCounter?: number;

  @ApiProperty({
    description: UserApiDescription.TasksNew,
    example: InputExample.Number,
  })
  @Expose({ groups: [UserRole.Customer] })
  tasksWithNewStatus?: number;

  @ApiProperty({
    description: UserApiDescription.Occupation,
    example: InputExample.Occupations,
  })
  @Expose({ groups: [UserRole.Contractor] })
  public specialty?: string[];

  @ApiProperty({
    description: UserApiDescription.Rating,
    example: InputExample.Rating,
  })
  @Expose({ groups: [UserRole.Contractor] })
  public rating?: number;

  @ApiProperty({
    description: UserApiDescription.Rank,
    example: InputExample.Number,
  })
  @Expose({ groups: [UserRole.Contractor] })
  public ranking?: number;

  @ApiProperty({
    description: UserApiDescription.TaskDone,
    example: InputExample.Number,
  })
  @Expose({ groups: [UserRole.Contractor] })
  public completedTasks?: number;

  @ApiProperty({
    description: UserApiDescription.TaskFailed,
    example: InputExample.Number,
  })
  @Expose({ groups: [UserRole.Contractor] })
  public failedTasks?: number;
}
