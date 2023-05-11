import {Injectable} from '@angular/core';
import {CrudService} from "./crud-service";
import {CarReturn} from "../model/car-return";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constraints} from "./constraints";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReturnService extends CrudService<CarReturn> {

  constructor(http: HttpClient) {
    super(Constraints.CAR_RETURN_URL, http);
  }

  findAllByOffice_Id(officeId: number): Observable<CarReturn[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('officeId', officeId);
    return this.http.get<CarReturn[]>(Constraints.CAR_RETURN_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<CarReturn[]>())
      )
  }

}
