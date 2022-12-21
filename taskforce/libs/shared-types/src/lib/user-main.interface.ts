import { UserRole, City } from '@taskforce/shared-types';

export interface UserMain {
  _id?: string;
  userName: string;
  lastName: string;
  email: string;
  city: City;
  passwordHash: string;
  dateBirth: Date;
  role: UserRole;
  avatar?: string;
  userInfo?: string;
}
