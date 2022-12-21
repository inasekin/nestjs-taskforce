import { UserMain } from '@taskforce/shared-types';

export interface UserContractor extends UserMain {
  specialty?: string[];
  rating?: number;
  ranking?: number;
  completedTasks?: number;
  failedTasks?: number;
}
