import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class RequestRdo {
  @ApiProperty({
    description: 'The comment id',
    example: '4353642828136379763',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The request text, string length min 10 max 300 characters',
    example: 'Some text…',
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: "Task estimation executor's proposal, zero or positive number",
    example: '1500',
  })
  @Expose()
  public costProposal?: number;

  @ApiProperty({
    description: 'Request creator id',
    example: 'd04eb35d-c36f-4e2b-b828-136379c7c6e3',
  })
  @Expose()
  public contractorId: string;

  @ApiProperty({
    description: 'Requested task id',
    example: '4353642828136379763',
  })
  @Expose()
  public taskId: string;

  @ApiProperty({
    description: 'Request creation date (ISO format)',
    example: '2022-11-06',
  })
  @Expose()
  public dateCreated: Date;
}
