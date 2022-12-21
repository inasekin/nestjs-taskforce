import { Expose } from 'class-transformer';

export default class TaskTagRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;
}
