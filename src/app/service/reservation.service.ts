import { Injectable } from '@angular/core';
import {CrudService} from "./CrudService";
import {Reservation} from "../model/Reservation";
import {HttpClient} from "@angular/common/http";
import {Constraints} from "./Constraints";

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends CrudService<Reservation>{

  constructor(http: HttpClient) {
    super(Constraints.RESERVATION_URL, http)
  }
}
