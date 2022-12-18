import { Review } from '@taskforce/shared-types';

export default class ReviewEntity implements Review {
  public _id?: string;
  public authorId: string;
  public taskId: string;
  public creationDate?: Date;
  public text: string;

  constructor(review: Review) {
    this.fillEntity(review);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(review: Review) {
    this._id = review._id;
    this.authorId = review.authorId;
    this.taskId = review.taskId;
    this.creationDate = new Date();
    this.text = review?.text;
  }
}
