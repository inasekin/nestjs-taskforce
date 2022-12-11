import { UserMain } from '@taskforce/shared-types';

export interface UserCustomer extends UserMain {
  publishedTasksCounter?: number;
  tasksWithNewStatus?: number;
}
