import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import * as dayjs from 'dayjs';
import { MIN_USER_AGE } from '../auth/auth.constant';

@ValidatorConstraint({ name: 'Invalid Age', async: false })
export class AgeValidator implements ValidatorConstraintInterface {
  validate(dateBirth: string) {
    const now = dayjs();
    return now.diff(dateBirth, 'year') >= MIN_USER_AGE;
  }
}
