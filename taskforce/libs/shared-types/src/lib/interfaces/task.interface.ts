import { City } from '../enums/city.enum';
import { Status } from '../enums/status.enum';
import { TaskTag } from './task-tag.inerface';

export interface Task {
  id?: string;
  title: string;
  description: string;
  customerId: string;
  categoryId: string;
  status: Status;
  dueDate?: Date;
  publishAt?: Date;
  city: City;
  address?: string;
  budget?: number;
  tags?: TaskTag[];
  imagePath?: string;
  contractorId?: string;
  requestIds?: string[];
  commentIds?: string[];
  reviewId?: string;
}
