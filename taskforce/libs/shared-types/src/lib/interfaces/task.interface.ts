import { City } from '../enums/city.enum';
import { Status } from '../enums/status.enum';
import { TaskTag } from './task-tag.interface';
import { File } from './file.interface';

export interface Task {
  id?: string;
  title: string;
  description: string;
  customerId: string;
  categoryId: string;
  status: Status;
  city: City;
  address?: string;
  dueDate?: Date;
  publishAt?: Date;
  budget?: number;
  tags?: TaskTag[];
  taskPicture?: File;
  contractorId?: string;
  applicantsCount?: number;
  applicantsIds?: string[];
  commentsCount?: number;
  isReviewed?: boolean;
  isSent?: boolean;
}
