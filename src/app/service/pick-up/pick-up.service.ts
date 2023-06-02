import {Injectable} from '@angular/core';
import {CrudService} from "../crud-service";
import {PickUp} from "../../model/pick-up";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {ApiConstraints} from "../../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class PickUpService extends CrudService<PickUp> {

  constructor(http: HttpClient) {
    super(ApiConstraints.PICK_UP_URL, http);
  }

  findAllByOffice_Id(officeId: number): Observable<PickUp[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('officeId', officeId);
    return this.http.get<PickUp[]>(ApiConstraints.PICK_UP_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<PickUp[]>())
      )
  }

}
