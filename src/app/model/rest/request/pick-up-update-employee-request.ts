import {RentalActionStatus} from "../../enumeration/rental-action-status";

export class PickUpUpdateEmployeeRequest {
  comments: string;
  pickUpDate: any;
  status: RentalActionStatus;
  employeeId: number;


  constructor(comments: string, pickUpDate: any, status: RentalActionStatus, employeeId: number) {
    this.comments = comments;
    this.pickUpDate = pickUpDate;
    this.status = status;
    this.employeeId = employeeId;
  }
}
