import {Component} from '@angular/core';
import {ReservationService} from "../../../../service/reservation/reservation.service";
import {Car} from "../../../../model/car";
import {Office} from "../../../../model/office";
import {Reservation} from "../../../../model/reservation";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  reservations: Reservation[]

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.loadReservations();
  }

  private loadReservations() {
    this.reservationService.findAll().subscribe(data => {
      this.reservations = data;
    })
  }

  carToString(car: Car) {
    return car.make + ' ' + car.model;
  }

  officeToString(office: Office) {
    return office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber;
  }

}
