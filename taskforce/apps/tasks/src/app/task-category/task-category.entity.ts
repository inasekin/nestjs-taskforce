import { Entity, TaskCategory } from '@taskforce/shared-types';

export class TaskCategoryEntity
  implements Entity<TaskCategoryEntity>, TaskCategory
{
  public id: string;
  public title: string;

  constructor(category: TaskCategory) {
    this.fillEntity(category);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(entity: TaskCategory) {
    this.id = entity.id;
    this.title = entity.title;
  }
}
