import {Component} from '@angular/core';
import {ReservationService} from "../../../../service/reservation/reservation.service";
import {Car} from "../../../../model/car";
import {Office} from "../../../../model/office";
import {ReservationStatus} from "../../../../model/enumeration/reservation-status";
import {JwtTokenService} from "../../../../auth/jwt-token.service";
import {Reservation} from "../../../../model/reservation";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  reservations: Reservation[]
  showDetails: boolean;
  selectedReservation: Reservation;


  constructor(private reservationService: ReservationService,
              private tokenService: JwtTokenService) {
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

  private getClientId() {
    return this.tokenService.getUserId();
  }

  carToString(car: Car) {
    return car?.make + ' ' + car?.model;
  }

  officeToString(office: Office) {
    return office?.address.town + ', ' + office?.address.street + ' ' + office?.address.houseNumber;
  }

  loadDetailsComponent(reservation: Reservation) {
    this.scrollUp();
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
