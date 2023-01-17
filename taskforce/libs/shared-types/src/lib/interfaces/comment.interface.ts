export interface Comment {
  _id?: string;
  authorId: string;
  text: string;
  taskId: string;
  creationDate?: Date;
}
