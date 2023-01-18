import { UserMain } from './user-main.interface';

export interface UserCustomer extends UserMain {
  publishedTasksCounter?: number;
  tasksWithNewStatus?: number;
}
