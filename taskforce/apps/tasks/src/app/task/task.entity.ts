import {
  City,
  Entity,
  File,
  Task,
  Status,
  TaskTag,
} from '@taskforce/shared-types';

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
  public taskPicture: File;
  public contractorId: string;
  public applicantsCount: number;
  public applicantsIds?: string[];
  public commentsCount: number;
  public isReviewed: boolean;
  public isSent: boolean;

  constructor(task: Task) {
    this.fillEntity(task);
  }

  public toObject(): TaskEntity {
    return {
      ...this,
      tags: this.tags.map(({ id }) => ({ id })),
    };
  }

  public fillEntity(entity: Task): void {
    this.title = entity.title;
    this.description = entity.description;
    this.customerId = entity.customerId;
    this.categoryId = entity.categoryId;
    this.status = entity.status;
    this.city = entity.city;
    this.address = entity.address;
    this.dueDate = entity.dueDate;
    this.publishAt = new Date();
    this.budget = entity?.budget;
    this.tags = entity.tags;
    this.taskPicture = { ...entity.taskPicture };
    this.contractorId = entity.contractorId;
    this.applicantsCount = entity.applicantsCount;
    this.applicantsIds = entity.applicantsIds;
    this.commentsCount = entity.commentsCount;
    this.isReviewed = entity.isReviewed;
    this.isSent = entity.isSent;
  }
}
