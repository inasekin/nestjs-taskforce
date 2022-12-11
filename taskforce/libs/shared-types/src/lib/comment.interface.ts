export interface Comment {
  id?: string;
  authorId: string;
  text: string;
  taskId: string;
  creationDate?: Date;
}
