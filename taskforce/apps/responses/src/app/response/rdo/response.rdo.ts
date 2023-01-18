import { ApiProperty } from '@nestjs/swagger';
import { InputExample } from '@taskforce/shared-types';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ResponseApiDescription } from '../response.constant';

export default class ResponseRdo {
  @ApiProperty({
    description: ResponseApiDescription.Id,
    example: InputExample.PostgreId,
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: ResponseApiDescription.ResponseText,
    example: InputExample.Text,
  })
  @Expose()
  public responseText: string;

  @ApiProperty({
    description: ResponseApiDescription.ExecutorId,
    example: InputExample.MongoId,
  })
  @Expose()
  public contractorId: string;

  @ApiProperty({
    description: ResponseApiDescription.ClientId,
    example: InputExample.MongoId,
  })
  @Expose()
  public customerId: string;

  @ApiProperty({
    description: ResponseApiDescription.TaskId,
    example: InputExample.PostgreId,
  })
  @Expose()
  public taskId: string;

  @ApiProperty({
    description: ResponseApiDescription.Evaluation,
    example: '4',
  })
  @Expose()
  public evaluation: number;

  @ApiProperty({
    description: ResponseApiDescription.EvaluationsSum,
    example: InputExample.Number,
  })
  @IsOptional()
  @Expose()
  public evaluationsSum: number;
}
