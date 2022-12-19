import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class ReviewRdo {
  @ApiProperty({
    description: 'The uniq review id ',
    example: '12312314132412341',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The review text, string length min 50 max 500 characters',
    example: 'Some text…',
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'Task contractor id',
    example: '73316262-20ea-4b22-8134-c5ed263c0219',
  })
  @Expose()
  public contractorId: string;

  @ApiProperty({
    description: 'Review creator id',
    example: '73316262-20ea-4b22-8134-c5ed263c0219',
  })
  @Expose()
  public customerId: string;

  @ApiProperty({
    description: 'The uniq task id',
    example: '73316262-20ea-4b22-8134-c5ed263c0219',
  })
  @Expose()
  public taskId: string;

  @ApiProperty({
    description: 'Rating of the task execution, number from 1 to 5',
    example: '4',
  })
  @Expose()
  public rating: number;
}
