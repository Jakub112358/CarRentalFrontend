import { Injectable } from '@angular/core';
import {CrudService} from "./crud-service";
import {Reservation} from "../model/reservation";
import {HttpClient} from "@angular/common/http";
import {Constraints} from "./constraints";

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends CrudService<Reservation>{

  constructor(http: HttpClient) {
    super(Constraints.RESERVATION_URL, http)
  }
}
