import { UserRole } from '../enums/user-role.enum';

export interface Subscriber {
  id?: string;
  email: string;
  name: string;
  role: UserRole;
  userId: string;
}
