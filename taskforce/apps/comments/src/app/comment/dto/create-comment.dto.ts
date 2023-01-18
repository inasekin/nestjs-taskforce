import { ApiProperty } from '@nestjs/swagger';
import { Comment, InputExample } from '@taskforce/shared-types';
import { Length } from 'class-validator';
import {
  CommentApiDescription,
  CommentApiError,
  TextLength,
} from '../comment.constant';

export default class CreateCommentDto implements Comment {
  @ApiProperty({
    description: CommentApiDescription.Id,
    example: InputExample.PostgreId,
  })
  public id: string;

  @ApiProperty({
    description: CommentApiDescription.AuthorId,
    example: InputExample.MongoId,
  })
  public authorId: string;

  @ApiProperty({
    description: CommentApiDescription.TaskId,
    example: InputExample.PostgreId,
  })
  public taskId: string;

  @ApiProperty({
    description: CommentApiDescription.PublishAt,
    example: InputExample.DateIso,
  })
  public publishAt: Date;

  @ApiProperty({
    description: CommentApiDescription.Text,
    example: InputExample.Text,
    required: true,
  })
  @Length(TextLength.Min, TextLength.Max, {
    message: CommentApiError.TextNotValid,
  })
  public text: string;
}
