import {Injectable} from '@angular/core';
import {CrudService} from "./crud-service";
import {Reservation} from "../model/reservation";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {ReservationClientResponse} from "../model/rest/response/reservation-client-response";
import {ApiConstraints} from "../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends CrudService<Reservation> {

  constructor(http: HttpClient) {
    super(ApiConstraints.RESERVATION_URL, http)
  }

  findByClientId(clientId: number): Observable<ReservationClientResponse[]> {
    let queryParam = new HttpParams();
    queryParam = queryParam.append('clientId', clientId);
    return this.http.get<ReservationClientResponse[]>(ApiConstraints.RESERVATION_URL, {params: queryParam})
      .pipe(
        catchError(this.handleError<ReservationClientResponse[]>())
      )
  }
}
