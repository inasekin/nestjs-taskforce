import { Review } from '@taskforce/shared-types';

export default class ResponseEntity implements Review {
  public id: string;
  public text: string;
  public contractorId: string;
  public customerId: string;
  public taskId: string;
  public rating: number;

  constructor(response: Review) {
    this.fillEntity(response);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(response: Review) {
    this.id = response?.id;
    this.text = response?.text;
    this.contractorId = response?.contractorId;
    this.customerId = response?.customerId;
    this.taskId = response?.taskId;
    this.rating = response?.rating;
  }
}
