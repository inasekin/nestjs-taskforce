import { City, Status, UserRole } from '@taskforce/shared-types';

export const IMAGE_REGULAR_EXP = /[\w/-]+.(jpg|png)/;

export const SALT_ROUNDS = 10;

export const MAX_LENGTH_USERNAME = 50;
export const MIN_LENGTH_USERNAME = 3;

export const MIN_LENGTH_PASSWORD = 6;
export const MAX_LENGTH_PASSWORD = 12;

export const MAX_LENGTH_USER_INFO = 300;

export const MAX_SPECIALITY_LENGTH = 5;

export const MIN_USER_AGE = 18;

export const AuthUserError = {
  AgeNotValid: `User should be alder than ${MIN_USER_AGE}`,
  CityIsWrong: `User city name field must contain any of these values: ${Object.values(
    City
  ).join(', ')}`,
  DateBirthNotValid: 'The user date birth is not valid',
  EmailNotValid: 'The email is not valid',
  Exists: 'User with this email already exists',
  InfoNotValid: `User info should not be more than ${MAX_LENGTH_USER_INFO} chars length`,
  NameNotValid: `User name, min ${MIN_LENGTH_USERNAME}, max ${MAX_LENGTH_USERNAME} chars length`,
  SpecialtyNotValid: `Maximum count of contractor's occupation is ${MAX_SPECIALITY_LENGTH}`,
  NotFound: 'User not found',
  PasswordNotValid: `Password min length is  ${MIN_LENGTH_PASSWORD}, max is ${MAX_LENGTH_PASSWORD}`,
  PasswordIsWrong: 'User password is wrong',
  RoleIsWrong: `User role field must contains any of these values: ${Object.values(
    UserRole
  ).join(', ')}`,
  AvatarFileTypeWrong: 'Avatar image must be jpg or png',
} as const;

export const UserApiDescription = {
  Avatar: 'User avatar path',
  City: `User city name, any of these values: ${Object.values(City).join(
    ', '
  )}\``,
  CurrentPassword: `User's current password`,
  DateBirth: 'User birth date, ISO8601 string',
  Email: 'User unique email address',
  Id: 'The uniq user id',
  Info: `Optional user info, max ${MAX_LENGTH_USER_INFO} chars length`,
  Name: `User name and surname, min ${MIN_LENGTH_USERNAME}, max ${MAX_LENGTH_USERNAME} chars`,
  NewPassword: `New password, min ${MIN_LENGTH_PASSWORD}, max ${MAX_LENGTH_PASSWORD} chars length`,
  Specialty: `List of executor's occupations, max count is ${MAX_SPECIALITY_LENGTH}`,
  Password: `User password, min ${MIN_LENGTH_PASSWORD}, max ${MAX_LENGTH_PASSWORD} chars length`,
  Rank: 'Executor rank',
  Rating: 'Executor rating',
  Role: `Any of user's role values: ${Object.values(UserRole).join(', ')}`,
  TaskDone: 'Count of tasks that contractor has done',
  TaskFailed: 'Count of tasks that contractor has failed',
  TasksNew: `Count of client's tasks with status "${Status.New}"`,
  TasksPublished: 'Count of all tasks that client has created',
  Token: 'Access token',
} as const;
