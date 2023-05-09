export interface ReservationUpdateDto {
  reservationDate?: Date;
  dateFrom?: Date;
  dateTo?: Date;
  clientId?: number;
  carId?: number;
  pickUpOfficeId?: number;
  returnOfficeId?: number;
  price?: number;
  status?: string;
  carPickUpId?: number;
  carReturnId?: number;
}
