import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConstraints} from "../../config/apiConstraints";
import {catchError, Observable, of} from "rxjs";
import {Company} from "../../model/company";
import {CompanyUpdateRequest} from "../../model/rest/request/company-update-request";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  public findCompany(): Observable<Company> {
    return this.http.get<Company>(ApiConstraints.COMPANY_URL)
      .pipe(
        catchError(this.handleError<Company>())
      )
  }

  public update(updateRequest: CompanyUpdateRequest): Observable<Company> {
    return this.http.patch<Company>(ApiConstraints.COMPANY_URL, updateRequest)
      .pipe(
        catchError(this.handleError<Company>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

}
