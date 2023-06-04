import {ReservationStatus} from "./enumeration/reservation-status";
import {Car} from "./car";
import {Office} from "./office";

export interface Reservation {
  id: number;
  reservationDate: Date;
  dateFrom: Date;
  dateTo: Date;
  price: number;
  status: ReservationStatus;
  clientId: number;
  car: Car;
  pickUpOffice: Office;
  returnOffice: Office;
}
