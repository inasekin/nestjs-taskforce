import { Expose } from 'class-transformer';

export class TaskCategoryRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;
}
