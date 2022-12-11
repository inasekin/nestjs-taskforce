import { User, City, UserRole } from '@taskforce/shared-types';

export class UserEntity implements User {
  public _id: string;
  public avatar: string;
  public city: City;
  public completedTasks: number;
  public dateBirth: Date;
  public email: string;
  public failedTasks: number;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public publishedTasksCounter: number;
  public ranking: number;
  public rating: number;
  public role: UserRole;
  public specialty: string[];
  public tasksWithNewStatus: number;
  public userInfo: string;

  constructor(userData: User) {
    this.fillEntity(userData);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(userData: User) {
    this._id = userData._id;
    this.avatar = userData.avatar;
    this.city = userData.city;
    this.completedTasks = userData.completedTasks;
    this.dateBirth = userData.dateBirth;
    this.email = userData.email;
    this.failedTasks = userData.failedTasks;
    this.firstname = userData.firstname;
    this.lastname = userData.lastname;
    this.passwordHash = userData.passwordHash;
    this.publishedTasksCounter = userData.publishedTasksCounter;
    this.ranking = userData.ranking;
    this.rating = userData.rating;
    this.role = userData.role;
    this.specialty = userData.specialty;
    this.tasksWithNewStatus = userData.tasksWithNewStatus;
    this.userInfo = userData.userInfo;
  }
}
