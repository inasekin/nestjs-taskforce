import { Status } from "./status.enum";

export interface Task {
  id?: string;
  title: string;
  description: string;
  category: string;
  cost?: number;
  dueDate?: Date;
  img?: string;
  address?: string;
  tags?: string[];
  creationDate?: Date;
  status?: Status;
}
