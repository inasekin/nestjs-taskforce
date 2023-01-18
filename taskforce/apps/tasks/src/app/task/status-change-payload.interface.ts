import { UserRole } from '@taskforce/shared-types';

export interface StatusChangePayload {
  userRole?: UserRole;
  customerId?: string;
  contractorId?: string;
}
