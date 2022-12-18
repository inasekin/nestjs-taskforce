export interface Review {
  _id?: string;
  authorId: string;
  text: string;
  taskId: string;
  creationDate?: Date;
}
