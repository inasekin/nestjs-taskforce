import { ApiProperty } from '@nestjs/swagger';
import { Review } from '@taskforce/shared-types';

export default class CreateReviewDto implements Review {
  @ApiProperty({
    description: 'Review creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  public authorId: string;

  @ApiProperty({
    description: 'Parent task id',
    example: '4353642828136379763',
  })
  public taskId: string;

  @ApiProperty({
    description: 'Review creation date (ISO format)',
    example: '2022-11-06',
  })
  public creationDate: Date;

  @ApiProperty({
    description: 'Review text, string length min 10 max 300 characters',
    example: 'Some text…',
  })
  public text: string;
}
