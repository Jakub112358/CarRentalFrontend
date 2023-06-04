import {RentalActionStatus} from "../../enumeration/rental-action-status";

export class CarReturnUpdateRequest {
  comments: string;
  extraCharge: number;
  returnDate: any;
  plannedReturnDate: any;
  status: RentalActionStatus;
  employeeId: number;
  carId: number;
  officeId: number;


  constructor(comments: string, extraCharge: number, returnDate: any, plannedReturnDate: any, status: RentalActionStatus, employeeId: number, carId: number, officeId: number) {
    this.comments = comments;
    this.extraCharge = extraCharge;
    this.returnDate = returnDate;
    this.plannedReturnDate = plannedReturnDate;
    this.status = status;
    this.employeeId = employeeId;
    this.carId = carId;
    this.officeId = officeId;
  }
}
