import { ApiProperty } from '@nestjs/swagger';
import { City } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { IsArray, IsDate, IsEnum, IsPositive, MinDate } from 'class-validator';

export default class CreateTaskDto {
  @ApiProperty({
    description: 'Task title, string length min 20 max 50 characters',
    example: 'Some text…',
  })
  public title: string;

  @ApiProperty({
    description: 'Task description, string length min 100 max 1024 characters',
    example: 'Some text…',
  })
  public description: string;

  @ApiProperty({
    description: 'Task creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public customerId: string;

  @ApiProperty({
    description: 'Task task-category id',
    example: '4353642828136379763',
  })
  @Transform(({ value }) => +value)
  public categoryId: string;

  @ApiProperty({
    description: 'Task execution City',
    example: 'Some text…',
  })
  @IsEnum(City)
  @Transform(({ value }) => value as City)
  city: City;

  @ApiProperty({
    description:
      'Task execution address, string length min 10 max 255 characters',
    example: 'Some text…',
  })
  address?: string;

  @ApiProperty({
    description: 'Task due date (ISO format)',
    example: '2022-11-06',
  })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @MinDate(new Date())
  dueDate?: Date;

  @ApiProperty({
    description: "Task estimation client's proposal, zero or positive number",
    example: '1500',
  })
  @Transform(({ value }) => +value)
  @IsPositive()
  public budget?: number;

  @ApiProperty({
    description: "Array of task's tag ids",
    example: ['4353642828136379763', '4353642828136379763'],
  })
  @IsArray()
  tags?: string[];
}
