import { City, Status } from '@taskforce/shared-types';

export interface Task {
  id: string;
  title: string;
  description: string;
  customerId: string;
  categoryId: string;
  status: Status;
  dueDate?: Date;
  city: City;
  address?: string;
  budget?: number;
  tags?: string[];
  imagePath?: string;
  contractorId?: string;
  responsesCount?: number;
  commentsCount?: number;
  isReviewed?: boolean;
  postDate?: Date;
}
