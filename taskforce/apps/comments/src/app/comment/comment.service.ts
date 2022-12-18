import CreateCommentDto from './dto/create-comment.dto';
import CommentEntity from './comment.entity';
import { fillObject } from '@taskforce/core';
import CommentRdo from './rdo/comment.rdo';
import { CommentMemoryRepository } from './comment-memory.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentMemoryRepository) {}

  public async create(authorId: string, createCommentDto: CreateCommentDto) {
    const comment = { ...createCommentDto, authorId: authorId };
    const commentEntity = new CommentEntity(comment);

    const newComment = this.commentRepository.create(commentEntity);

    return fillObject(CommentRdo, newComment);
  }

  public async getTaskComments(taskId: string) {
    const existComments = await this.commentRepository.findByTask(taskId);
    return existComments.map((item) => fillObject(CommentRdo, item));
  }

  public async deleteComment(commentId: string) {
    await this.commentRepository.destroy(commentId);
  }
}
