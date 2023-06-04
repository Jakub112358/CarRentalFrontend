import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CrudService} from "../crud-service";
import {Car} from "../../model/car";
import {catchError, Observable} from "rxjs";
import {CreateFormElement} from "../../model/template-elements/create-form-element";
import {ApiConstraints} from "../../config/apiConstraints";
import {CarSearch} from "../../model/car-search";

@Injectable({
  providedIn: 'root'
})
export class CarService extends CrudService<Car> {


  constructor(http: HttpClient) {
    super(ApiConstraints.CAR_URL, http);
  }

  findByCurrentBranchOfficeId(officeId: number): Observable<Car[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('officeId', officeId);
    return this.http.get<Car[]>(ApiConstraints.CAR_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<Car[]>())
      )
  }


  findByAvailableInDatesAndCriteria(elements: CreateFormElement[]) {
    let queryParams = new HttpParams();
    let dateFromValue: Date = elements.find(e => e.name == 'dateFrom')?.model
    let dateToValue: Date = elements.find(e => e.name == 'dateTo')?.model
    let pickUpOfficeId = elements.find(e => e.name == 'pickUpOfficeId')?.model
    let returnOfficeId = elements.find(e => e.name == 'returnOfficeId')?.model

    queryParams = queryParams
      .append('dateFrom', this.dateFromString(dateFromValue))
      .append('dateTo', this.dateFromString(dateToValue))
      .append('pickUpOfficeId', pickUpOfficeId)
      .append('returnOfficeId', returnOfficeId);

    return this.http.post<CarSearch[]>(ApiConstraints.CAR_SEARCH_URL, {}, {params: queryParams})
      .pipe(
        catchError(this.handleError<CarSearch[]>())
      )
  }

  private dateFromString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
}
