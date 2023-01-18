import { City, File, User, UserRole } from '@taskforce/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity implements User {
  public _id: string;
  public email: string;
  public userName: string;
  public city: City;
  public passwordHash: string;
  public dateBirth: Date;
  public role: UserRole;
  public avatar?: File;
  public userInfo?: string;
  public publishedTasksCounter?: number;
  public tasksWithNewStatus?: number;
  public specialty?: string[];
  public rating?: number;
  public ranking?: number;
  public completedTasks?: number;
  public failedTasks?: number;

  constructor(user: User) {
    this.fillEntity(user);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(user: User) {
    this._id = user._id;
    this.email = user.email;
    this.userName = user.userName;
    this.city = user.city;
    this.passwordHash = user.passwordHash;
    this.dateBirth = user.dateBirth;
    this.role = user.role;
    this.avatar = user.avatar;
    this.userInfo = user.userInfo;

    if (user.role === UserRole.Customer) {
      this.publishedTasksCounter = user?.publishedTasksCounter;
      this.tasksWithNewStatus = user?.tasksWithNewStatus;
    } else {
      this.specialty = user?.specialty;
      this.rating = user?.rating;
      this.ranking = user?.ranking;
      this.completedTasks = user?.completedTasks;
      this.failedTasks = user?.failedTasks;
    }
  }
}
