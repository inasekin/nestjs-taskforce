import { City, Routes, Status, UserRole } from '@taskforce/shared-types';
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { ensureDir } from 'fs-extra';
import { diskStorage } from 'multer';
import * as dayjs from 'dayjs';
import { extname } from 'path';

export const IMAGE_REGULAR_EXP = /[\w/-]+.(jpg|png)/;

const MAX_FILE_SIZE = 512000;

export const SALT_ROUNDS = 10;

export const MAX_LENGTH_USERNAME = 50;
export const MIN_LENGTH_USERNAME = 3;

export const MIN_LENGTH_PASSWORD = 6;
export const MAX_LENGTH_PASSWORD = 12;

export const MAX_LENGTH_USER_INFO = 300;

export const MAX_SPECIALITY_LENGTH = 5;

export const MIN_USER_AGE = 18;

export const UserApiError = {
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

export const multerOptions = {
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      cb(null, true);
    } else {
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST
        ),
        false
      );
    }
  },
  storage: diskStorage({
    destination: async (req: any, file: Express.Multer.File, cb: any) => {
      const rootDir = process.env.MULTER_DEST;

      const { user, url, id } = req;

      const categoryDir = Object.values(Routes).filter((route) =>
        url.includes(route)
      );
      if (!categoryDir) {
        throw new NotFoundException();
      }

      const userId = user._id;
      const routeId = id ? `-${id}` : '';

      const timestamp = `-${dayjs().unix()}`;
      const uploadDir = `${rootDir}/${categoryDir}/${userId}${routeId}${timestamp}`;
      await ensureDir(uploadDir);
      cb(null, uploadDir);
    },
    filename: (req: any, file: any, cb: any) => {
      cb(null, `${file.originalname}`);
    },
  }),
};

export enum ResponseGroup {
  Avatar = 'avatar',
  Logged = 'logged',
}
