import { Component } from '@angular/core';
import {Reservation} from "../../../../model/reservation";
import {ReservationService} from "../../../../service/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  reservations: Reservation[]


  constructor(private reservationService: ReservationService) {
  }
  ngOnInit(){
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
}
