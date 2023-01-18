import { Comment } from '@taskforce/shared-types';

export default class CommentEntity implements Comment {
  public id: string;
  public authorId: string;
  public taskId: string;
  public publishAt: Date;
  public text: string;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(comment: Comment) {
    this.id = comment?.id;
    this.authorId = comment.authorId;
    this.taskId = comment.taskId;
    this.publishAt = new Date();
    this.text = comment.text;
  }
}
