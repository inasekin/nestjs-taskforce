import { ApiProperty } from '@nestjs/swagger';
import { InputExample } from '@taskforce/shared-types';
import { Expose } from 'class-transformer';
import { CommentApiDescription } from '../comment.constant';

export default class CommentRdo {
  @ApiProperty({
    description: CommentApiDescription.Id,
    example: InputExample.PostgreId,
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: CommentApiDescription.AuthorId,
    example: InputExample.MongoId,
  })
  @Expose()
  public authorId: string;

  @ApiProperty({
    description: CommentApiDescription.TaskId,
    example: InputExample.PostgreId,
  })
  @Expose()
  public taskId: string;

  @ApiProperty({
    description: CommentApiDescription.PublishAt,
    example: InputExample.DateIso,
  })
  @Expose()
  public publishAt: Date;

  @ApiProperty({
    description: CommentApiDescription.Text,
    example: InputExample.Text,
  })
  @Expose()
  public text: string;
}
