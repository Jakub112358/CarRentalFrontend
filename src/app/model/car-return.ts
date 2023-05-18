import {RentalActionStatus} from "./enumeration/rental-action-status";

export interface CarReturn {
id: number;
comments: string;
extraCharge: number;
returnDate: Date;
plannedReturnDate: Date;
status: RentalActionStatus;
employeeId: number;
reservationId: number;
carId: number;
officeId: number;
}
