import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CrudService} from "./CrudService";
import {Car} from "../model/Car";
import {catchError, Observable} from "rxjs";
import {Constraints} from "./Constraints";

@Injectable({
  providedIn: 'root'
})
export class CarService extends CrudService<Car> {


  constructor(http: HttpClient) {
    super(Constraints.CAR_URL, http);
  }

  findByCurrentBranchOfficeId(officeId: number): Observable<Car[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('branchOfficeId',officeId);
    return this.http.get<Car[]>(Constraints.CAR_URL,{params: queryParams})
      .pipe(
        catchError(this.handleError<Car[]>())
      )
  }



}
