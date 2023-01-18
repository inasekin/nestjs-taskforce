import { City } from './city.enum';
import { UserRole } from './user-role.enum';

export const InputExample = {
  Text: 'Some text...',
  Name: 'Keks Academiev',
  Email: 'user@user.local',
  City: City.Moscow,
  Date: '1981-03-12',
  DateIso: '',
  Role: UserRole.Customer,
  Rating: '5',
  Number: '10',
  Occupations: `['plumber', 'locksmith',  'mechanic']`,
  Avatar: `{ url: /images/user.png, name: user.png, }`,
  MongoId: '63aac1a8d0fe043efd78f0b3',
  PostgreId: '043536428286379763',
  Password: '123456',
  PasswordUpdate: '234567',
} as const;
