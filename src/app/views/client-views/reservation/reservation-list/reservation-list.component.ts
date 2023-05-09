import {Component} from '@angular/core';
import {ReservationService} from "../../../../service/reservation.service";
import {ReservationClientResponse} from "../../../../model/rest/response/reservation-client-response";
import {Car} from "../../../../model/car";
import {Office} from "../../../../model/office";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  reservations: ReservationClientResponse[]


  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.loadReservations();
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
}
