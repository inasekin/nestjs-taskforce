import { Comment } from '@taskforce/shared-types';

export default class CommentEntity implements Comment {
  public _id?: string;
  public authorId: string;
  public taskId: string;
  public creationDate?: Date;
  public text: string;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(comment: Comment) {
    this._id = comment._id;
    this.authorId = comment.authorId;
    this.taskId = comment.taskId;
    this.creationDate = new Date();
    this.text = comment?.text;
  }
}
