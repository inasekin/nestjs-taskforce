import { ApiProperty } from '@nestjs/swagger';

export default class CreateReviewDto {
  @ApiProperty({
    description: 'The review text, string length min 50 max 500 characters',
    example: 'Some text…',
  })
  public text: string;

  @ApiProperty({
    description: 'Task contractor id',
    example: '73316262-20ea-4b22-8134-c5ed263c0219',
  })
  public contractorId: string;

  @ApiProperty({
    description: 'Response customer id',
    example: '73316262-20ea-4b22-8134-c5ed263c0219',
  })
  public customerId: string;

  @ApiProperty({
    description: 'The uniq task id',
    example: '73316262-20ea-4b22-8134-c5ed263c0219',
  })
  public taskId: string;

  @ApiProperty({
    description: 'Rating of the task execution, number from 1 to 5',
    example: '4',
  })
  public rating: number;
}
