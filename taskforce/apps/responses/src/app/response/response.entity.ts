import { Response } from '@taskforce/shared-types';

export default class ResponseEntity implements Response {
  public id: string;
  public responseText: string;
  public contractorId: string;
  public customerId: string;
  public taskId: string;
  public evaluation: number;

  constructor(response: Response) {
    this.fillEntity(response);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(response: Response) {
    this.id = response?.id;
    this.responseText = response?.responseText;
    this.contractorId = response?.contractorId;
    this.customerId = response?.customerId;
    this.taskId = response?.taskId;
    this.evaluation = response?.evaluation;
  }
}
