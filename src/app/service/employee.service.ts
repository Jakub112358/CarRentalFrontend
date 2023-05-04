import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CrudService} from "./CrudService";
import {Employee} from "../model/Employee";
import {Constraints} from "./Constraints";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CrudService<Employee> {

  constructor(http: HttpClient) {
    super(Constraints.EMPLOYEE_URL, http)
  }

  findByBranchOfficeId(id: number): Observable<Employee[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("branchOfficeId", id)
    return this.http.get<Employee[]>(Constraints.EMPLOYEE_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<Employee[]>())
      )
  }
}
