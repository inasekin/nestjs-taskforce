import { City, TaskTag, Status } from '@taskforce/shared-types';

export interface Task {
  id: string;
  title: string;
  description: string;
  customerId: string;
  category: string;
  status: Status;
  dueDate?: Date;
  city: City;
  address?: string;
  budget?: number;
  tags?: TaskTag[];
  imagePath?: string;
  contractorId?: string;
  responsesCount?: number;
  commentsCount?: number;
  isReviewed?: boolean;
}
