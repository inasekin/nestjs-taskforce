import { UserRole } from '../enums/user-role.enum';
import { City } from '../enums/city.enum';
import { File } from './file.interface';

export interface UserMain {
  _id?: string;
  userName: string;
  email: string;
  city: City;
  passwordHash: string;
  dateBirth: Date;
  role: UserRole;
  avatar?: File;
  userInfo?: string;
}
