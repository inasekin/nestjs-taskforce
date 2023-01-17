import { UserRole } from './user-role.enum';
import { City } from './city.enum';

export interface UserMain {
  _id?: string;
  userName: string;
  email: string;
  city: City;
  passwordHash: string;
  dateBirth: Date;
  role: UserRole;
  avatar?: string;
  userInfo?: string;
}
