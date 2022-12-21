import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import CreateCommentDto from './dto/create-comment.dto';
import CommentRdo from './rdo/comment.rdo';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentsService: CommentService) {}

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.CREATED,
  })
  @Post()
  create(
    @Body() createCommentsDto: CreateCommentDto,
    @Headers('User-id') authorId: string
  ) {
    return this.commentsService.create(authorId, createCommentsDto);
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
  })
  @Get('tasks/:id')
  getTaskComments(@Param('id') taskId: string) {
    return this.commentsService.getTaskComments(taskId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment deleted.',
  })
  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }
}
