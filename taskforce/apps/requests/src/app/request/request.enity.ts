import { Request } from '@taskforce/shared-types';

export default class RequestEntity implements Request {
  public id: string;
  public requestText: string;
  public costProposal: number;
  public contractorId: string;
  public taskId: string;
  public publishedAt: Date;

  constructor(request: Request) {
    this.fillEntity(request);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(request: Request) {
    this.id = request.id;
    this.requestText = request.requestText;
    this.costProposal = request.costProposal;
    this.contractorId = request.contractorId;
    this.taskId = request.taskId;
    this.publishedAt = request.publishedAt;
  }
}
