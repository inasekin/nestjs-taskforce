export interface Comment {
  id?: string;
  authorId: string;
  taskId: string;
  publishAt?: Date;
  text: string;
}
