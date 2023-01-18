export interface Request {
  id?: string;
  requestText: string;
  costProposal?: number;
  contractorId: string;
  taskId: string;
  publishedAt?: Date;
}
