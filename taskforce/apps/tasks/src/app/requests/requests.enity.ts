import { UserRequest } from '@taskforce/shared-types';

export default class RequestsEntity implements UserRequest {
  public id: string;
  public text: string;
  public costProposal?: number;
  public contractorId: string;
  public taskId: string;
  public creationDate: Date;

  constructor(request: UserRequest) {
    this.fillEntity(request);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(request: UserRequest) {
    this.id = request?.id;
    this.text = request?.text;
    this.costProposal = request?.costProposal;
    this.contractorId = request?.contractorId;
    this.taskId = request?.taskId;
    this.creationDate = request?.creationDate;
  }
}
