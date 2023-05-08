import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CrudService} from "./CrudService";
import {Car} from "../model/Car";
import {catchError, Observable} from "rxjs";
import {Constraints} from "./Constraints";
import {CreateFormElement} from "../model/templateElements/CreateFormElement";
import {CarRentDto} from "../model/dto/CarRentDto";

@Injectable({
  providedIn: 'root'
})
export class CarService extends CrudService<Car> {


  constructor(http: HttpClient) {
    super(Constraints.CAR_URL, http);
  }

  findByCurrentBranchOfficeId(officeId: number): Observable<CarRentDto[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('branchOfficeId', officeId);
    return this.http.get<CarRentDto[]>(Constraints.CAR_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<CarRentDto[]>())
      )
  }


  findByAvailableInDatesAndCriteria(elements: CreateFormElement[]) {
    let queryParams = new HttpParams();
    let dateFromValue: Date = elements.find(e => e.name == 'dateFrom')?.model
    let dateToValue: Date = elements.find(e => e.name == 'dateTo')?.model
    let pickUpOfficeId = elements.find(e => e.name == 'pickUpOfficeId')?.model

    queryParams = queryParams
      .append('dateFrom', this.dateFromString(dateFromValue))
      .append('dateTo', this.dateFromString(dateToValue))
      .append('pickUpOfficeId', pickUpOfficeId);

    return this.http.post<Car[]>(Constraints.CAR_SEARCH_URL, {}, {params: queryParams})
      .pipe(
        catchError(this.handleError<Car[]>())
      )
  }

  private dateFromString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
}
