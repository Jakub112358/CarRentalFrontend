import {RentalActionStatus} from "../../enumeration/rental-action-status";

export class PickUpUpdateRequest {
  comments: string;
  pickUpDate: any;
  plannedPickUpDate: any;
  status: RentalActionStatus;
  employeeId: number;
  carId: number;
  officeId: number;


  constructor(comments: string, pickUpDate: any, plannedPickUpDate: any, status: RentalActionStatus, employeeId: number, carId: number, officeId: number) {
    this.comments = comments;
    this.pickUpDate = pickUpDate;
    this.plannedPickUpDate = plannedPickUpDate;
    this.status = status;
    this.employeeId = employeeId;
    this.carId = carId;
    this.officeId = officeId;
  }
}
