export interface UserRequest {
  id?: string;
  text: string;
  costProposal?: number;
  contractorId: string;
  taskId: string;
  creationDate: Date;
}
