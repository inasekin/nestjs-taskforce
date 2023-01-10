
import { City, Entity, Task, Status, TaskTag } from '@taskforce/shared-types';

export class TaskEntity implements Entity<TaskEntity>, Task {
  public id: string;
  public title: string;
  public description: string;
  public customerId: string;
  public categoryId: string;
  public status: Status;
  public city: City;
  public address: string;
  public dueDate: Date;
  public publishAt: Date;
  public budget: number;
  public tags: TaskTag[];
  public imagePath: string;
  public contractorId: string;
  public requestIds: string[];
  public commentIds: string[];
  public reviewId: string;

  constructor(task:Task) {
    this.fillEntity(task);
  }

  public toObject(): TaskEntity {
    return {
      ...this,
      tags: this.tags.map(({id}) => ({ id })),
    };
  }

  public fillEntity(entity: Task): void {
    this.title = entity.title;
    this.description = entity.description;
    this.customerId = entity.customerId;
    this.categoryId = entity.categoryId;
    this.status = entity.status;
    this.city = entity.city;
    this.address = entity?.address;
    this.dueDate = entity.dueDate;
    this.publishAt = entity?.publishAt;
    this.budget = entity?.budget;
    this.tags = [...entity.tags];
    this.imagePath = entity?.imagePath;
    this.contractorId = entity?.contractorId;
    this.requestIds = entity?.requestIds?? [];
    this.commentIds = entity?.commentIds?? [];
    this.reviewId = entity?.reviewId;
  }
}
