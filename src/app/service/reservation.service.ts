import { Injectable } from '@angular/core';
import {CrudService} from "./crud-service";
import {Reservation} from "../model/reservation";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constraints} from "./constraints";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends CrudService<Reservation>{

  constructor(http: HttpClient) {
    super(Constraints.RESERVATION_URL, http)
  }

  findByClientId(clientId: number):Observable<Reservation[]> {
    let queryParam = new HttpParams();
    queryParam = queryParam.append('clientId', clientId);
    return this.http.get<Reservation[]>(Constraints.RESERVATION_URL,{params: queryParam})
      .pipe(
        catchError(this.handleError<Reservation[]>())
      )
  }
}
