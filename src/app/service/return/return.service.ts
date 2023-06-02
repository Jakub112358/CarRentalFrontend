import {Injectable} from '@angular/core';
import {CrudService} from "../crud-service";
import {CarReturn} from "../../model/car-return";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {ApiConstraints} from "../../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class ReturnService extends CrudService<CarReturn> {

  constructor(http: HttpClient) {
    super(ApiConstraints.CAR_RETURN_URL, http);
  }

  findAllByOffice_Id(officeId: number): Observable<CarReturn[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('officeId', officeId);
    return this.http.get<CarReturn[]>(ApiConstraints.CAR_RETURN_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<CarReturn[]>())
      )
  }

}
