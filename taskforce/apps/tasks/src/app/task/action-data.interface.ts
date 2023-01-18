import { UserRole } from '@taskforce/shared-types';
import { TaskAction } from './task.constant';

export interface ActionData {
  userId?: string,
  userRole?: UserRole,
  action?: TaskAction,
}
