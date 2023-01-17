import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';
import { Expose, Transform } from 'class-transformer';
import { UserApiDescription } from '../user.constant';

export class UserRdo {
  @ApiProperty({
    description: UserApiDescription.Id,
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: UserApiDescription.Email,
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: UserApiDescription.Name,
    example: 'Иван Иванов',
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: UserApiDescription.City,
    example: 'Москва',
  })
  @Expose()
  public city: City;

  @ApiProperty({
    description: UserApiDescription.DateBirth,
    example: '1981-03-12',
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: UserApiDescription.Role,
    example: 'Customer or contractor',
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: UserApiDescription.Avatar,
    example: '/images/user.png',
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: UserApiDescription.Info,
    example: 'Text about user',
  })
  @Expose()
  public userInfo: string;

  @ApiProperty({
    description: UserApiDescription.TasksPublished,
    example: '10',
  })
  @Expose()
  public publishedTasksCounter?: number;

  @ApiProperty({
    description: UserApiDescription.TasksNew,
    example: '10',
  })
  @Expose()
  tasksWithNewStatus?: number;

  @ApiProperty({
    description: UserApiDescription.Specialty,
    example: ['plumber', 'locksmith', 'mechanic'],
  })
  @Expose()
  public specialty?: string[];

  @ApiProperty({
    description: UserApiDescription.Rating,
    example: '10',
  })
  @Expose()
  public rating?: number;

  @ApiProperty({
    description: UserApiDescription.Rank,
    example: '10',
  })
  @Expose()
  public ranking?: number;

  @ApiProperty({
    description: UserApiDescription.TaskDone,
    example: '10',
  })
  @Expose()
  public completedTasks?: number;

  @ApiProperty({
    description: UserApiDescription.TaskFailed,
    example: '10',
  })
  @Expose()
  public failedTasks?: number;
}
