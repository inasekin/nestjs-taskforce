import { ApiProperty } from '@nestjs/swagger';
import { InputExample } from '@taskforce/shared-types';
import { Transform } from 'class-transformer';
import { IsInt, IsMongoId, Length, Max, Min } from 'class-validator';
import {
  Evaluation,
  ResponseApiDescription,
  ResponseApiError,
  ResponseTextLength,
} from '../response.constant';

export default class CreateResponseDto {
  @ApiProperty({
    description: ResponseApiDescription.ResponseText,
    example: InputExample.Text,
  })
  @Length(ResponseTextLength.Min, ResponseTextLength.Max, {
    message: ResponseApiError.ResponseTextNotValid,
  })
  public responseText: string;

  @ApiProperty({
    description: ResponseApiDescription.ExecutorId,
    example: InputExample.MongoId,
  })
  @IsMongoId({
    message: ResponseApiError.ExecutorIdNotValid,
  })
  public contractorId: string;

  @ApiProperty({
    description: ResponseApiDescription.ClientId,
    example: InputExample.MongoId,
  })
  @IsMongoId({
    message: ResponseApiError.ClientIdNotValid,
  })
  public customerId: string;

  @ApiProperty({
    description: ResponseApiDescription.TaskId,
    example: InputExample.PostgreId,
  })
  @Transform(({ value }) => +value)
  public taskId: string;

  @ApiProperty({
    description: ResponseApiDescription.Evaluation,
    example: InputExample.Number,
  })
  @IsInt()
  @Min(Evaluation.Min)
  @Max(Evaluation.Max)
  public evaluation: number;
}
