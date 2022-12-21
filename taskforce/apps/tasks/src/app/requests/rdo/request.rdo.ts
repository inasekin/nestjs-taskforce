import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class RequestRdo {
  @ApiProperty({
    description: 'The request id',
    example: '32155234523535',
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
    description: 'Request contractor id',
    example: '42b729e4-e002-4c05-9b58-f4fd6813683c',
  })
  @Expose()
  public contractorId: string;

  @ApiProperty({
    description: 'Requested task id',
    example: '123123412342525',
  })
  @Expose()
  public taskId: string;

  @ApiProperty({
    description: 'Request creation date (ISO format)',
    example: '2022-12-10',
  })
  @Expose()
  public creationDate: Date;
}
