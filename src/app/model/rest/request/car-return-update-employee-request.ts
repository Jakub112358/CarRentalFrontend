import {RentalActionStatus} from "../../enumeration/rental-action-status";

export class CarReturnUpdateEmployeeRequest{
  comments: string;
  extraCharge: number;
  returnDate: any;
  status: RentalActionStatus;
  employeeId: number;
  mileage: number;


  constructor(comments: string, extraCharge: number, returnDate: any, status: RentalActionStatus, employeeId: number, mileage: number) {
    this.comments = comments;
    this.extraCharge = extraCharge;
    this.returnDate = returnDate;
    this.status = status;
    this.employeeId = employeeId;
    this.mileage = mileage;
  }
}
