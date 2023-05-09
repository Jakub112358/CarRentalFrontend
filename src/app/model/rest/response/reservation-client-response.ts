import {ReservationStatus} from "../../enumeration/reservation-status";
import {Car} from "../../car";
import {Office} from "../../office";
import {IncomeResponse} from "./income-response";

export interface ReservationClientResponse {
  id: number;
  dateFrom: Date;
  dateTo: Date;
  price: number;
  status: ReservationStatus;
  clientId: number;
  car: Car;
  pickUpOffice: Office;
  returnOffice: Office;
  incomes: IncomeResponse[];

}
