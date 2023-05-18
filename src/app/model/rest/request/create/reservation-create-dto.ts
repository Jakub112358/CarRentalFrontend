import {CreateDto} from "./create-dto";

export class ReservationCreateDto implements CreateDto{
  reservationDate: Date;
  dateFrom: any;
  dateTo: any;
  clientId: number;
  carId: number;
  pickUpOfficeId: number;
  returnOfficeId: number;
  price: number;


  constructor(reservationDate: Date, dateFrom: Date, DateTo: Date, clientId: number, carId: number, pickUpOfficeId: number, returnOfficeId: number, price: number) {
    this.reservationDate = reservationDate;
    this.dateFrom = dateFrom;
    this.dateTo = DateTo;
    this.clientId = clientId;
    this.carId = carId;
    this.pickUpOfficeId = pickUpOfficeId;
    this.returnOfficeId = returnOfficeId;
    this.price = price;
  }

}
