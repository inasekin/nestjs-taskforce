import { UserMain } from './user-main.interface';

export interface UserContractor extends UserMain {
  specialty?: string[];
  rating?: number;
  ranking?: number;
  completedTasks?: number;
  failedTasks?: number;
}
