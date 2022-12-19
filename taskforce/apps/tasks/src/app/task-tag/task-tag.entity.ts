import { TaskTag } from '@taskforce/shared-types';

export class TaskTagEntity implements TaskTag {
  public id: string;
  public title: string;

  constructor(tag: TaskTag) {
    this.fillEntity(tag);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(tag: TaskTag) {
    this.id = tag?.id;
    this.title = tag?.title;
  }
}
