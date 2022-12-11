import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@taskforce/shared-types';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Иван',
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Иванов',
  })
  @Expose()
  public lastName: string;

  @ApiProperty({
    description: 'User city name',
    example: 'Москва',
  })
  @Expose()
  public city: City;

  @ApiProperty({
    description: 'User date birth (ISO format)',
    example: '1981-03-12',
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: 'User role',
    example: 'Customer or contractor',
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: 'User avatar',
    example: '/images/user.png',
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User information',
    example: 'Text about user',
  })
  @Expose()
  public userInfo: string;

  @ApiProperty({
    description: 'Count of all tasks that client has created',
    example: '10',
  })
  @Expose()
  public publishedTasksCounter?: number;

  @ApiProperty({
    description: 'Count of clients tasks with status "New"',
    example: '10',
  })
  @Expose()
  tasksWithNewStatus?: number;

  @ApiProperty({
    description: 'List of executors occupations',
    example: ['plumber', 'locksmith', 'mechanic'],
  })
  @Expose()
  public specialty?: string[];

  @ApiProperty({
    description: 'Executor rating',
    example: '10',
  })
  @Expose()
  public rating?: number;

  @ApiProperty({
    description: 'Executor ranking',
    example: '10',
  })
  @Expose()
  public ranking?: number;

  @ApiProperty({
    description: 'Count of tasks that executor has done',
    example: '10',
  })
  @Expose()
  public completedTasks?: number;

  @ApiProperty({
    description: 'Count of tasks that executor has failed',
    example: '10',
  })
  @Expose()
  public failedTasks?: number;
}
