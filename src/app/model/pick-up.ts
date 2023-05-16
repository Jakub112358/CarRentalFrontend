import {RentalActionStatus} from "./enumeration/rental-action-status";

export interface PickUp {
  id:number
  comments: string;
  pickUpDate: Date;
  plannedPickUpDate: Date;
  status: RentalActionStatus;
  employeeId: number;
  reservationId: number;
  carId: number;
  officeId: number;
}
