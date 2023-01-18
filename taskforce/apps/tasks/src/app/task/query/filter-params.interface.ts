import { TaskQuery } from './task.query';

export interface FilterParams extends TaskQuery {
  isMy?: boolean;
  customerId?: string;
  contractorId?: string;
}
