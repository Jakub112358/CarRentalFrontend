import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BasicListElement} from "../../../../../model/template-elements/basic-list-element";
import {ReservationClientResponse} from "../../../../../model/rest/response/reservation-client-response";
import {Car} from "../../../../../model/car";
import {Office} from "../../../../../model/office";
import {ReservationStatus} from "../../../../../model/enumeration/reservation-status";
import {ReservationService} from "../../../../../service/reservation.service";

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent {
  reservationElements: BasicListElement[];
  deleteButtonVisible: boolean;
  deletePopUpVisible: boolean;
  @Input() reservation: ReservationClientResponse;
  @Output() cancelReservationEvent = new EventEmitter<number>()


  constructor(private reservationService: ReservationService) {
  }

  ngOnChanges() {
    this.refreshView();

  }

  private getReservationElements() {
    this.reservationElements = [
      new BasicListElement('Reservation id', this.reservation.id),
      new BasicListElement('Date from', this.reservation.dateFrom),
      new BasicListElement('Date to', this.reservation.dateTo),
      new BasicListElement('Price', this.reservation.price),
      new BasicListElement('Status', this.reservation.status),
      new BasicListElement('Car', this.carToString(this.reservation.car)),
      new BasicListElement('Pick-up office', this.officeToString(this.reservation.pickUpOffice)),
      new BasicListElement('CarReturn office', this.officeToString(this.reservation.returnOffice)),
    ];
  }

  private carToString(car: Car) {
    return car.make + ' ' + car.model;
  }

  private officeToString(office: Office) {
    return office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber;
  }

  private isStatusPlanned() {
    return this.reservation.status === ReservationStatus.Planned;
  }

  displayDeletePopUp() {
    this.deletePopUpVisible = true;
  }


  cancelReservation() {
    let updateDto = this.getCancelledStatusDto();
    this.reservationService.update(this.reservation.id, updateDto).subscribe(data => {
      this.cancelReservationEvent.emit(data.id);
      this.deletePopUpVisible = false;
      this.refreshView();
    })
  }

  private getCancelledStatusDto() {
    return {status: ReservationStatus.Cancelled}
  }

  private refreshView() {
    this.getReservationElements();
    this.deleteButtonVisible = this.isStatusPlanned();
    this.deletePopUpVisible = false;
  }
}
