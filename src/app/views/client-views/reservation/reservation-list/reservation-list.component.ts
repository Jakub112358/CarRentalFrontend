import {Component} from '@angular/core';
import {ReservationService} from "../../../../service/reservation.service";
import {ReservationClientResponse} from "../../../../model/rest/response/reservation-client-response";
import {Car} from "../../../../model/car";
import {Office} from "../../../../model/office";
import {ReservationStatus} from "../../../../model/enumeration/reservation-status";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  reservations: ReservationClientResponse[]
  showDetails: boolean;
  selectedReservation: ReservationClientResponse;


  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.loadReservations();
    this.showDetails = false;
  }

  private loadReservations() {
    let clientId = this.getClientId();
    this.reservationService.findByClientId(clientId).subscribe(data => {
      this.reservations = data;
    })
  }

//TODO should provide clientId from logged client
  private getClientId() {
    return 1;
  }

  carToString(car: Car) {
    return car.make + ' ' + car.model;
  }

  officeToString(office: Office) {
    return office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber;
  }

  loadDetailsComponent(reservation: ReservationClientResponse) {
    this.showDetails = true;
    this.selectedReservation = reservation;
  }

  scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  setStatusCancelled(id: number) {
    this.reservations
      .filter(r => r.id === id)
      .forEach(r => r.status = ReservationStatus.Cancelled);
  }

}
