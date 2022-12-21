import { City, Task, Status } from '@taskforce/shared-types';

export class TaskEntity {
  public id: string;
  public title: string;
  public description: string;
  public customerId: string;
  public categoryId: string;
  public dueDate: Date;
  public city: City;
  public status: Status;
  public budget: number;
  public address: string;
  public tags: string[];
  public imagePath: string;
  public contractorId: string;
  public responsesCount: number;
  public commentsCount: number;
  public isReviewed: boolean;
  public postDate: Date;

  constructor(task: Task) {
    this.fillEntity(task);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(task: Task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.customerId = task.customerId;
    this.categoryId = task.categoryId;
    this.dueDate = task.dueDate;
    this.city = task.city;
    this.status = task.status;
    this.budget = task?.budget;
    this.address = task?.address;
    this.tags = task?.tags;
    this.imagePath = task?.imagePath;
    this.contractorId = task?.contractorId;
    this.responsesCount = task?.responsesCount;
    this.commentsCount = task?.commentsCount;
    this.isReviewed = task?.isReviewed;
    this.postDate = task?.postDate;
  }
}
